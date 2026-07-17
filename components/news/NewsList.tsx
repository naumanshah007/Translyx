"use client";

import { Suspense, useCallback, useMemo, useState, useEffect, useRef, useLayoutEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Newspaper, RefreshCw } from "lucide-react";
import type { NewsItem, NewsRegion } from "@/config/news";
import { newsRegions, newsTopics } from "@/config/news";
import { NewsSpotlight } from "@/components/news/NewsSpotlight";
import { NewsWall } from "@/components/news/NewsWall";
import { ChipButton } from "@/components/ui/Chip";
import { cn, timeAgo } from "@/lib/utils";

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
  const [indicator, setIndicator] = useState<{ left: number; width: number } | null>(null);
  const tabRefs = useRef(new Map<string, HTMLButtonElement>());

  const lastRefreshed = useMemo(() => {
    if (items.length === 0) return null;
    const latest = items.reduce((max, item) => (Date.parse(item.generatedAt) > Date.parse(max) ? item.generatedAt : max), items[0].generatedAt);
    return timeAgo(latest);
  }, [items]);

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

  const regionTabs: { value: NewsRegion | "all"; label: string; count: number }[] = [
    { value: "all", label: "All", count: items.length },
    ...newsRegions.map((r) => ({ value: r.value, label: r.label, count: items.filter((i) => i.region === r.value).length })),
  ];

  useLayoutEffect(() => {
    const el = tabRefs.current.get(region);
    if (el) setIndicator({ left: el.offsetLeft, width: el.offsetWidth });
  }, [region, tabRefs]);

  return (
    <div>
      {/* URL ↔ filter sync, isolated so its client-only render doesn't pull the
          feed out of the server-rendered HTML. */}
      <Suspense fallback={null}>
        <UrlFilterSync onParams={handleParams} />
      </Suspense>

      {/* Region tabs — segmented control with a sliding active indicator */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="relative flex flex-wrap gap-2" role="tablist" aria-label="Filter by region">
          {indicator && (
            <span
              className="absolute inset-y-0 z-0 rounded-full bg-[#0F1C3F] shadow-[0_4px_16px_-6px_rgba(15,28,63,0.5)] transition-all duration-300 ease-out"
              style={{ left: indicator.left, width: indicator.width }}
              aria-hidden="true"
            />
          )}
          {regionTabs.map((t) => (
            <button
              key={t.value}
              ref={(el) => {
                if (el) tabRefs.current.set(t.value, el);
              }}
              type="button"
              role="tab"
              aria-selected={region === t.value}
              onClick={() => onRegion(t.value)}
              className={cn(
                "relative z-10 rounded-full px-4 py-2 text-sm font-semibold transition-colors",
                region === t.value ? "text-white" : "border border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
              )}
            >
              {t.label}
              <span className={cn("ml-1.5 text-xs", region === t.value ? "text-white/70" : "text-slate-600")}>
                {t.count}
              </span>
            </button>
          ))}
        </div>
        {lastRefreshed && (
          <span className="flex items-center gap-1.5 text-xs font-medium text-slate-600">
            <RefreshCw className="h-3 w-3" />
            Feed refreshed {lastRefreshed}
          </span>
        )}
      </div>

      {/* Topic chips */}
      <div className="mt-4 flex flex-wrap gap-2">
        <ChipButton active={topic === "all"} onClick={() => onTopic("all")}>
          All topics
        </ChipButton>
        {newsTopics.map((t) => (
          <ChipButton key={t.value} active={topic === t.value} onClick={() => onTopic(t.value)}>
            {t.label}
          </ChipButton>
        ))}
      </div>

      {/* Results — keyed so filter changes crossfade in rather than snapping */}
      {filtered.length > 0 ? (
        <div key={`${region}-${topic}`} className="will-fade reveal">
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
                <span className="text-xs text-slate-600">{wallItems.length} stories</span>
              </div>
              <NewsWall items={wallItems} />
            </div>
          )}
        </div>
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
