import { ExternalLink, ArrowUpRight } from "lucide-react";
import type { NewsItem } from "@/config/news";
import { newsRegionLabel, newsTopicLabel } from "@/config/news";
import { timeAgo } from "@/lib/utils";

const confidenceStyle: Record<NewsItem["confidence"], string> = {
  high: "bg-emerald-50 text-emerald-700 border-emerald-200",
  medium: "bg-amber-50 text-amber-700 border-amber-200",
  low: "bg-slate-100 text-slate-500 border-slate-200",
};

const regionStyle: Record<string, string> = {
  "new-zealand": "bg-cyan-50 text-cyan-700 border-cyan-200",
  australia: "bg-violet-50 text-violet-700 border-violet-200",
  global: "bg-slate-100 text-slate-600 border-slate-200",
};

function formatDate(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-NZ", { day: "numeric", month: "short", year: "numeric" });
}

export function NewsCard({ item }: { item: NewsItem }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_2px_16px_-6px_rgba(15,28,63,0.10)] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/60 hover:shadow-[0_24px_60px_-30px_rgba(8,145,178,0.4)]">
      <div className="flex flex-wrap items-center gap-2">
        <span className={`rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${regionStyle[item.region] ?? regionStyle.global}`}>
          {newsRegionLabel(item.region)}
        </span>
        <span className="text-xs text-slate-400">{formatDate(item.publishedAt)}</span>
      </div>

      <h3 className="mt-3 font-display text-lg font-semibold leading-snug text-[#0F1C3F]">
        {item.title}
      </h3>

      <p className="mt-2.5 flex-1 text-sm leading-relaxed text-slate-600">{item.summary}</p>

      <div className="mt-4 rounded-xl border border-slate-100 bg-[#F5F8FC] p-3.5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#0891B2]">Why it matters for Translyx</p>
        <p className="mt-1 text-xs leading-relaxed text-slate-600">{item.relevanceToTranslyx}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {item.topics.map((t) => (
          <span key={t} className="rounded-md border border-slate-200/80 bg-white px-2 py-0.5 text-[10px] font-medium text-slate-500">
            {newsTopicLabel(t)}
          </span>
        ))}
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
        <a
          href={item.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0F1C3F] transition-colors hover:text-[#0891B2]"
        >
          {item.source}
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
        <span className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wide ${confidenceStyle[item.confidence]}`}>
          {item.confidence} confidence
        </span>
      </div>
    </article>
  );
}

/** Mid-weight card for the flowing live wall — lighter than NewsCard, richer than compact. */
export function NewsWallCard({ item }: { item: NewsItem }) {
  return (
    <a
      href={item.sourceUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_2px_16px_-8px_rgba(15,28,63,0.12)] transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-300/70 hover:shadow-[0_18px_44px_-26px_rgba(8,145,178,0.45)]"
    >
      <div className="flex flex-wrap items-center gap-2">
        <span className={`rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${regionStyle[item.region] ?? regionStyle.global}`}>
          {newsRegionLabel(item.region)}
        </span>
        <span className="text-[11px] text-slate-400">{timeAgo(item.publishedAt)}</span>
      </div>
      <h3 className="mt-2.5 font-display text-base font-semibold leading-snug text-[#0F1C3F]">
        {item.title}
      </h3>
      <p className="mt-2 text-[13px] leading-relaxed text-slate-600 line-clamp-3">{item.summary}</p>
      <div className="mt-3.5 flex items-center justify-between border-t border-slate-100 pt-3">
        <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#0F1C3F] transition-colors group-hover:text-[#0891B2]">
          {item.source}
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
        <div className="flex gap-1">
          {item.topics.slice(0, 2).map((t) => (
            <span key={t} className="rounded border border-slate-200/80 bg-white px-1.5 py-0.5 text-[9px] font-medium text-slate-400">
              {newsTopicLabel(t)}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}

/** Compact card for the homepage news preview. */
export function NewsCardCompact({ item }: { item: NewsItem }) {
  return (
    <a
      href={item.sourceUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-full flex-col rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_2px_16px_-6px_rgba(15,28,63,0.10)] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/60"
    >
      <div className="flex items-center gap-2">
        <span className={`rounded-full border px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wide ${regionStyle[item.region] ?? regionStyle.global}`}>
          {newsRegionLabel(item.region)}
        </span>
        <span className="text-[11px] text-slate-400">{formatDate(item.publishedAt)}</span>
      </div>
      <h3 className="mt-2.5 flex-1 font-display text-base font-semibold leading-snug text-[#0F1C3F]">{item.title}</h3>
      <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-[#0891B2]">
        {item.source}
        <ExternalLink className="h-3 w-3" />
      </span>
    </a>
  );
}
