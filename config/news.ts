/**
 * News intelligence — types and topic taxonomy.
 *
 * News items power /news. They are populated from config/news.seed.json (static,
 * always available) and, once the Gemini backend is enabled, refreshed daily into
 * Vercel Blob storage. See lib/news.ts for the read/merge logic.
 */

export type NewsRegion = "new-zealand" | "australia" | "global";

export const newsRegions: { value: NewsRegion; label: string }[] = [
  { value: "new-zealand", label: "New Zealand" },
  { value: "australia", label: "Australia" },
  { value: "global", label: "Global" },
];

/** Topic taxonomy — used for filter chips and validation of generated items. */
export const newsTopics = [
  { value: "digital-pathology", label: "Digital Pathology" },
  { value: "diagnostics", label: "Diagnostics" },
  { value: "ai-governance", label: "AI Governance" },
  { value: "pathology", label: "Pathology" },
  { value: "oncology", label: "Oncology" },
  { value: "amr-sepsis", label: "AMR & Sepsis" },
  { value: "point-of-care", label: "Point-of-Care" },
  { value: "regulation", label: "Regulation" },
  { value: "funding-policy", label: "Funding & Policy" },
  { value: "company", label: "Company" },
] as const;

export type NewsTopic = (typeof newsTopics)[number]["value"];

export const newsTopicValues: string[] = newsTopics.map((t) => t.value);

export function newsTopicLabel(value: string): string {
  return newsTopics.find((t) => t.value === value)?.label ?? value;
}

export function newsRegionLabel(value: string): string {
  return newsRegions.find((r) => r.value === value)?.label ?? value;
}

export type NewsConfidence = "high" | "medium" | "low";

export interface NewsItem {
  id: string;
  title: string;
  source: string;
  sourceUrl: string;
  /** ISO date string */
  publishedAt: string;
  region: NewsRegion;
  topics: string[];
  summary: string;
  relevanceToTranslyx: string;
  confidence: NewsConfidence;
  /** ISO timestamp of when this item was generated/curated */
  generatedAt: string;
}
