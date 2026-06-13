"use client";

import { Suspense, useCallback, useMemo, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Newspaper } from "lucide-react";
import type { NewsItem, NewsRegion } from "@/config/news";
import { newsRegions, newsTopics } from "@/config/news";
import { NewsSpotlight } from "@/components/news/NewsSpotlight";
import { NewsWall } from "@/components/news/NewsWall";
import { cn } from "@/lib/utils";

const SPOTLIGHT_COUNT = 5;

function isRegion(v: string | null): v is NewsRegion {
  return v === "new-zealand" || v === "australia" || v === "global";
}

/**
 * Reads ?region/?topic and pushes them into NewsList state. Isolated in its own
 * Suspense boundary (rendered by the parent) with a null fallback, so the
 * `useSearchParams()` client-only bailout stays contained here and the rest of
 * the feed still renders server-side — no visible "Loading…" in the HTML.
 */
function UrlFilterSync({
  onParams,
}: {
  onParams: (region: NewsRegion | "all", topic: string | "all") => void;
}) {
  const searchParams = useSearchParams();
  const region = searchParams.get("region");
  const topic = searchParams.get("topic");
  useEffect(() => {
    onParams(isRegion(region) ? region : "all", topic ?? "all");
  }, [region, topic, onParams]);
  return null;
}

export function NewsList({ items }: { items: NewsItem[] }) {
  // Default to the full feed so the server-rendered HTML shows everything. The
  // Suspense-isolated UrlFilterSync below applies any ?region/?topic deep-link
  // (and reacts to in-app nav changes) after hydration.
  const [region, setRegion] = useState<NewsRegion | "all">("all");
  const [topic, setTopic] = useState<string | "all">("all");

  const updateUrl = (next: { region?: NewsRegion | "all"; topic?: string | "all" }) => {
    const params = new URLSearchParams(window.location.search);
    const nextRegion = next.region ?? region;
    const nextTopic = next.topic ?? topic;
    if (nextRegion === "all") params.delete("region");
    else params.set("region", nextRegion);
    if (nextTopic === "all") params.delete("topic");
    else params.set("topic", nextTopic);
    const qs = params.toString();
    window.history.replaceState(null, "", qs ? `${window.location.pathname}?${qs}` : window.location.pathname);
  };

  const onRegion = (r: NewsRegion | "all") => {
    setRegion(r);
    updateUrl({ region: r });
  };
  const onTopic = (t: string | "all") => {
    setTopic(t);
    updateUrl({ topic: t });
  };

  // Stable so UrlFilterSync's effect doesn't re-fire on every render.
  const handleParams = useCallback((r: NewsRegion | "all", t: string | "all") => {
    setRegion(r);
    setTopic(t);
  }, []);

  const filtered = useMemo(() => {
    return items.filter((item) => {
      if (region !== "all" && item.region !== region) return false;
      if (topic !== "all" && !item.topics.includes(topic)) return false;
      return true;
    });
  }, [items, region, topic]);

  // Items arrive newest-first from getNewsItems(); the spotlight plays the
  // top stories and the live wall streams the rest in a continuous loop.
  const spotlightItems = useMemo(() => filtered.slice(0, SPOTLIGHT_COUNT), [filtered]);
  const wallItems = useMemo(() => filtered.slice(SPOTLIGHT_COUNT), [filtered]);

  const regionTabs: { value: NewsRegion | "all"; label: string }[] = [
    { value: "all", label: "All" },
    ...newsRegions.map((r) => ({ value: r.value, label: r.label })),
  ];

  return (
    <div>
      {/* URL ↔ filter sync, isolated so its client-only render doesn't pull the
          feed out of the server-rendered HTML. */}
      <Suspense fallback={null}>
        <UrlFilterSync onParams={handleParams} />
      </Suspense>

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

          {/* Live wall — the rest of the feed, streaming continuously */}
          {wallItems.length > 0 && (
            <div className="mt-14 sm:mt-16">
              <div className="mb-6 flex items-center gap-3">
                <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-[#0F1C3F]">
                  More from the feed
                </h3>
                <span className="h-px flex-1 bg-slate-200" />
                <span className="text-xs text-slate-400">{wallItems.length} stories</span>
              </div>
              <NewsWall items={wallItems} />
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
