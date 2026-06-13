import { validateNewsItem } from "@/lib/news";
import { newsTopics } from "@/config/news";
import type { NewsItem } from "@/config/news";

/**
 * Gemini-powered news generation.
 *
 * Uses a plain fetch to the Generative Language API (no SDK dependency).
 * Google Search grounding is enabled so the model returns current,
 * source-linked items. Because grounding and strict responseSchema can
 * conflict, we enforce JSON shape via the prompt and parse leniently.
 */

const MODEL = "gemini-2.5-flash";
const ENDPOINT = (key: string) =>
  `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${key}`;

const topicList = newsTopics.map((t) => t.value).join(", ");

function buildPrompt(): string {
  const today = new Date().toISOString().slice(0, 10);
  return `You are a market-intelligence analyst for Translyx Limited, a New Zealand clinical technology company.
Translyx represents partner products (Aiforia digital pathology AI; Algoscope surgery-to-pathology workflow automation) and develops governed clinical AI workflow capabilities. Its diagnostic pipeline spans AMR, sepsis, point-of-care testing, oncology, endocrine, cardiac biomarkers, and precision medicine.

Today is ${today}. Use web search to find 10-15 RECENT, real, source-linked news items most relevant to Translyx.

Prioritise in this order:
1. New Zealand healthcare / diagnostics / pathology
2. Australia healthcare / diagnostics / pathology
3. Digital pathology AI
4. Diagnostics / laboratory medicine
5. Clinical AI governance and medical-device regulation
6. Partner relevance: Aiforia, Algoscope
7. Pipeline relevance: AMR, sepsis, POCT, oncology/endocrine/cardiac biomarkers, precision medicine

Do NOT include: celebrity health news, generic AI hype, opinion-only posts without a strong source, low-quality SEO spam, or unsupported medical claims.

CRITICAL — source URLs:
- "sourceUrl" MUST be the canonical link to the ORIGINAL publisher's article (e.g. the news outlet, journal, company press release, or official body).
- NEVER return a Google/Vertex grounding redirect URL (anything containing "vertexaisearch", "grounding-api-redirect", "google.com/search", or "news.google.com").
- NEVER guess or fabricate a URL. If you are not confident the exact article URL is real, omit that item entirely.

Return ONLY a JSON array (no markdown, no prose) of objects with EXACTLY these fields:
- "title": string (the article headline)
- "source": string (the publication or organisation name)
- "sourceUrl": string (the full https:// URL to the original article — must be real and reputable)
- "publishedAt": string (ISO date "YYYY-MM-DD")
- "region": one of "new-zealand" | "australia" | "global"
- "topics": array of 1-3 strings from: ${topicList}
- "summary": string (2-3 sentence neutral summary)
- "relevanceToTranslyx": string (1 sentence on why it matters to Translyx)
- "confidence": one of "high" | "medium" | "low" (your confidence in source quality and accuracy)

Output the JSON array and nothing else.`;
}

/** Strip code fences and extract the first JSON array from a model response. */
function extractJsonArray(text: string): unknown[] {
  let t = text.trim();
  // Remove ```json ... ``` fences if present
  t = t.replace(/^```(?:json)?\s*/i, "").replace(/\s*```$/i, "");
  const start = t.indexOf("[");
  const end = t.lastIndexOf("]");
  if (start === -1 || end === -1 || end <= start) return [];
  try {
    const parsed = JSON.parse(t.slice(start, end + 1));
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export interface GeminiNewsResult {
  items: NewsItem[];
  rawCount: number;
}

/**
 * Call Gemini and return validated NewsItems. Throws on transport/API errors;
 * returns an empty list (rawCount preserved) if nothing valid came back.
 */
export async function generateNews(apiKey: string): Promise<GeminiNewsResult> {
  const res = await fetch(ENDPOINT(apiKey), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [{ role: "user", parts: [{ text: buildPrompt() }] }],
      tools: [{ google_search: {} }],
      generationConfig: { temperature: 0.2 },
    }),
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Gemini API error ${res.status}: ${body.slice(0, 500)}`);
  }

  const data = (await res.json()) as {
    candidates?: { content?: { parts?: { text?: string }[] } }[];
  };
  const text = data.candidates?.[0]?.content?.parts?.map((p) => p.text ?? "").join("") ?? "";
  const raw = extractJsonArray(text);
  const now = new Date().toISOString();

  const items = raw
    .map((r) => {
      if (r && typeof r === "object" && !("generatedAt" in r)) {
        (r as Record<string, unknown>).generatedAt = now;
      }
      return validateNewsItem(r);
    })
    .filter((x): x is NewsItem => x !== null);

  return { items, rawCount: raw.length };
}
