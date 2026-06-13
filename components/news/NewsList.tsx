"use client";

import { useMemo, useState, useEffect } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { Newspaper } from "lucide-react";
import type { NewsItem, NewsRegion } from "@/config/news";
import { newsRegions, newsTopics } from "@/config/news";
import { NewsCard } from "@/components/news/NewsCard";
import { NewsSpotlight } from "@/components/news/NewsSpotlight";
import { cn } from "@/lib/utils";

const SPOTLIGHT_COUNT = 5;

function isRegion(v: string | null): v is NewsRegion {
  return v === "new-zealand" || v === "australia" || v === "global";
}

/** Group an already newest-first list into month buckets, preserving order. */
function groupByMonth(items: NewsItem[]): { label: string; items: NewsItem[] }[] {
  const groups: { label: string; items: NewsItem[] }[] = [];
  for (const item of items) {
    const d = new Date(item.publishedAt);
    const label = Number.isNaN(d.getTime())
      ? "Earlier"
      : d.toLocaleDateString("en-NZ", { month: "long", year: "numeric" });
    const last = groups[groups.length - 1];
    if (last && last.label === label) last.items.push(item);
    else groups.push({ label, items: [item] });
  }
  return groups;
}

export function NewsList({ items }: { items: NewsItem[] }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const regionParam = searchParams.get("region");
  const topicParam = searchParams.get("topic");

  const [region, setRegion] = useState<NewsRegion | "all">(isRegion(regionParam) ? regionParam : "all");
  const [topic, setTopic] = useState<string | "all">(topicParam ?? "all");

  // Keep state in sync if the URL changes (e.g. nav dropdown deep link)
  useEffect(() => {
    setRegion(isRegion(regionParam) ? regionParam : "all");
  }, [regionParam]);
  useEffect(() => {
    setTopic(topicParam ?? "all");
  }, [topicParam]);

  const updateUrl = (next: { region?: NewsRegion | "all"; topic?: string | "all" }) => {
    const params = new URLSearchParams(searchParams.toString());
    const nextRegion = next.region ?? region;
    const nextTopic = next.topic ?? topic;
    if (nextRegion === "all") params.delete("region");
    else params.set("region", nextRegion);
    if (nextTopic === "all") params.delete("topic");
    else params.set("topic", nextTopic);
    const qs = params.toString();
    router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
  };

  const onRegion = (r: NewsRegion | "all") => {
    setRegion(r);
    updateUrl({ region: r });
  };
  const onTopic = (t: string | "all") => {
    setTopic(t);
    updateUrl({ topic: t });
  };

  const filtered = useMemo(() => {
    return items.filter((item) => {
      if (region !== "all" && item.region !== region) return false;
      if (topic !== "all" && !item.topics.includes(topic)) return false;
      return true;
    });
  }, [items, region, topic]);

  // Items arrive newest-first from getNewsItems(); the spotlight plays the
  // top stories and the timeline carries the rest in chronological order.
  const spotlightItems = useMemo(() => filtered.slice(0, SPOTLIGHT_COUNT), [filtered]);
  const timelineGroups = useMemo(() => groupByMonth(filtered.slice(SPOTLIGHT_COUNT)), [filtered]);

  const regionTabs: { value: NewsRegion | "all"; label: string }[] = [
    { value: "all", label: "All" },
    ...newsRegions.map((r) => ({ value: r.value, label: r.label })),
  ];

  return (
    <div>
      {/* Region tabs */}
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter by region">
        {regionTabs.map((t) => (
          <button
            key={t.value}
            type="button"
            role="tab"
            aria-selected={region === t.value}
            onClick={() => onRegion(t.value)}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-semibold transition-colors",
              region === t.value
                ? "bg-[#0F1C3F] text-white shadow-[0_4px_16px_-6px_rgba(15,28,63,0.5)]"
                : "border border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
            )}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Topic chips */}
      <div className="mt-4 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => onTopic("all")}
          className={cn(
            "rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors",
            topic === "all" ? "bg-[#0891B2] text-white" : "border border-slate-200 bg-white text-slate-500 hover:bg-slate-50"
          )}
        >
          All topics
        </button>
        {newsTopics.map((t) => (
          <button
            key={t.value}
            type="button"
            onClick={() => onTopic(t.value)}
            className={cn(
              "rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors",
              topic === t.value ? "bg-[#0891B2] text-white" : "border border-slate-200 bg-white text-slate-500 hover:bg-slate-50"
            )}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Results */}
      {filtered.length > 0 ? (
        <>
          {/* Top stories — auto-playing spotlight */}
          <div className="mt-10">
            <NewsSpotlight items={spotlightItems} />
          </div>

          {/* Timeline — the rest of the feed, newest to oldest */}
          {timelineGroups.length > 0 && (
            <div className="relative mt-14 border-l-2 border-slate-200 pl-6 sm:mt-16 sm:pl-10">
              {timelineGroups.map((group) => (
                <div key={group.label} className="relative pb-12 last:pb-0">
                  <span className="absolute -left-[31px] top-0.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-white bg-[#0891B2] shadow-[0_0_0_3px_rgba(8,145,178,0.15)] sm:-left-[47px]" />
                  <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-[#0F1C3F]">
                    {group.label}
                  </h3>
                  <div className="mt-5 grid gap-5 sm:grid-cols-2">
                    {group.items.map((item) => (
                      <NewsCard key={item.id} item={item} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      ) : (
        <div className="mt-10 flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white py-16 text-center">
          <Newspaper className="h-8 w-8 text-slate-300" />
          <p className="mt-3 text-sm font-semibold text-[#0F1C3F]">No news items match these filters</p>
          <p className="mt-1 text-sm text-slate-500">Try a different region or topic.</p>
        </div>
      )}
    </div>
  );
}
