import seed from "@/config/news.seed.json";
import { newsTopicValues, type NewsItem, type NewsRegion, type NewsConfidence } from "@/config/news";

const REGIONS: NewsRegion[] = ["new-zealand", "australia", "global"];
const CONFIDENCES: NewsConfidence[] = ["high", "medium", "low"];
const MAX_ITEMS = 50;

const seedItems = seed as NewsItem[];

/** Blob storage key for the daily-refreshed news document. */
export const NEWS_BLOB_KEY = "news/latest.json";

/**
 * Reject source URLs that aren't real publisher links. Gemini's Google Search
 * grounding sometimes returns opaque redirect wrappers
 * (vertexaisearch.cloud.google.com/grounding-api-redirect/...) or generic
 * search/aggregator pages instead of the canonical article — those are ugly,
 * expire, and can't be trusted as a citation.
 */
/** Hosts that are search/redirect wrappers, never canonical article sources. */
const BLOCKED_HOSTS = [
  "vertexaisearch.cloud.google.com",
  "news.google.com",
  "duckduckgo.com",
];

export function isAcceptableSourceUrl(url: string): boolean {
  try {
    const u = new URL(url);
    if (u.protocol !== "https:") return false;
    const host = u.host.toLowerCase();
    if (BLOCKED_HOSTS.includes(host)) return false;
    // Google/Vertex grounding redirect wrappers and bare search-result pages.
    if (url.toLowerCase().includes("grounding-api-redirect")) return false;
    if (host.endsWith("google.com") && (u.pathname.startsWith("/search") || u.pathname.startsWith("/url"))) {
      return false;
    }
    return true;
  } catch {
    return false;
  }
}

/**
 * Validate and normalise a single raw item (e.g. from Gemini output).
 * Returns null if the item is missing required fields or fails a check.
 */
export function validateNewsItem(raw: unknown): NewsItem | null {
  if (!raw || typeof raw !== "object") return null;
  const o = raw as Record<string, unknown>;

  const str = (v: unknown) => (typeof v === "string" ? v.trim() : "");
  const title = str(o.title);
  const source = str(o.source);
  const sourceUrl = str(o.sourceUrl);
  const summary = str(o.summary);
  const region = str(o.region) as NewsRegion;
  const publishedAt = str(o.publishedAt);

  if (!title || !source || !summary) return null;
  if (!sourceUrl.startsWith("https://")) return null;
  if (!isAcceptableSourceUrl(sourceUrl)) return null;
  if (!REGIONS.includes(region)) return null;
  if (!publishedAt || Number.isNaN(Date.parse(publishedAt))) return null;

  const topics = Array.isArray(o.topics)
    ? (o.topics as unknown[]).map((t) => str(t)).filter((t) => newsTopicValues.includes(t))
    : [];
  if (topics.length === 0) return null;

  const confidence = (CONFIDENCES as string[]).includes(str(o.confidence))
    ? (str(o.confidence) as NewsConfidence)
    : "low";

  const id = str(o.id) || sourceUrl;
  const relevanceToTranslyx = str(o.relevanceToTranslyx);
  const generatedAt = str(o.generatedAt) && !Number.isNaN(Date.parse(str(o.generatedAt)))
    ? str(o.generatedAt)
    : new Date().toISOString();

  return {
    id,
    title,
    source,
    sourceUrl,
    publishedAt,
    region,
    topics,
    summary,
    relevanceToTranslyx,
    confidence,
    generatedAt,
  };
}

/** Sort newest-first and cap the list. */
function normalise(items: NewsItem[]): NewsItem[] {
  return [...items]
    .sort((a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt))
    .slice(0, MAX_ITEMS);
}

/** Dedupe by sourceUrl, preferring the first occurrence (newer when pre-sorted). */
export function dedupeNews(items: NewsItem[]): NewsItem[] {
  const seen = new Set<string>();
  const out: NewsItem[] = [];
  for (const item of items) {
    const key = item.sourceUrl || item.id;
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(item);
  }
  return out;
}

/** Read just the stored Blob items (no seed merge) — used by the refresh job to dedupe. */
export async function readStoredNews(): Promise<NewsItem[]> {
  // The refresh job needs the absolute latest doc to dedupe correctly.
  return (await readNewsFromBlob({ fresh: true })) ?? [];
}

/**
 * Merge freshly generated items with what's already stored, validate, dedupe,
 * sort, and cap. Returns the document to persist.
 */
export function mergeForStore(fresh: NewsItem[], existing: NewsItem[]): NewsItem[] {
  const merged = dedupeNews(normalise([...fresh, ...existing]));
  return merged;
}

/** Persist the news document to Vercel Blob. Throws if storage is unavailable. */
export async function writeNewsToBlob(items: NewsItem[]): Promise<void> {
  const { put } = await import("@vercel/blob");
  await put(NEWS_BLOB_KEY, JSON.stringify(items, null, 2), {
    access: "public",
    contentType: "application/json",
    addRandomSuffix: false,
    allowOverwrite: true,
  });
}

/**
 * Read the current news items.
 *
 * Order of preference:
 *   1. Vercel Blob document (when BLOB_READ_WRITE_TOKEN is configured and a doc exists)
 *   2. Bundled seed JSON (always available — this is what makes /news render before
 *      the Gemini backend is enabled)
 *
 * Any failure falls back to the seed, so the page never renders empty.
 */
export async function getNewsItems(): Promise<NewsItem[]> {
  const fromBlob = await readNewsFromBlob();
  if (fromBlob && fromBlob.length > 0) {
    return normalise(dedupeNews([...fromBlob, ...seedItems]));
  }
  return normalise(seedItems);
}

/**
 * Attempt to read the news document from Vercel Blob. Returns null on any
 * failure or when storage is not configured. Uses a dynamic import so the
 * project builds even before @vercel/blob is installed.
 *
 * Caching: by default the content fetch participates in ISR (revalidate 60s)
 * so it is safe inside statically-generated pages — an explicit `no-store`
 * fetch would force the page dynamic / be dropped during static regeneration,
 * which silently fell back to the seed. The refresh job passes `fresh: true`
 * to bypass that short cache when it needs the very latest doc to dedupe.
 */
async function readNewsFromBlob(opts?: { fresh?: boolean }): Promise<NewsItem[] | null> {
  if (!process.env.BLOB_READ_WRITE_TOKEN) return null;
  try {
    const { list } = await import("@vercel/blob");
    const { blobs } = await list({ prefix: NEWS_BLOB_KEY, limit: 1 });
    const blob = blobs.find((b) => b.pathname === NEWS_BLOB_KEY) ?? blobs[0];
    if (!blob) return null;
    const res = await fetch(
      blob.url,
      opts?.fresh ? { cache: "no-store" } : { next: { revalidate: 60 } }
    );
    if (!res.ok) return null;
    const data = (await res.json()) as unknown;
    if (!Array.isArray(data)) return null;
    return data.map(validateNewsItem).filter((x): x is NewsItem => x !== null);
  } catch {
    return null;
  }
}
