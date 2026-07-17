"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import type { NewsItem } from "@/config/news";
import { newsRegionLabel, newsTopicLabel } from "@/config/news";
import { cn, timeAgo } from "@/lib/utils";

const ROTATE_MS = 7000;

const regionChip: Record<string, string> = {
  "new-zealand": "border-cyan-400/40 bg-cyan-400/10 text-cyan-300",
  australia: "border-violet-400/40 bg-violet-400/10 text-violet-300",
  global: "border-slate-400/30 bg-slate-400/10 text-slate-300",
};

function formatDate(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-NZ", { day: "numeric", month: "short", year: "numeric" });
}

/**
 * Auto-playing spotlight for the newest stories: a large featured panel that
 * advances every 7s with a progress bar, plus an "Up next" queue. Pauses on
 * hover/focus and respects prefers-reduced-motion.
 */
export function NewsSpotlight({ items }: { items: NewsItem[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  // Reset when the filtered set changes
  useEffect(() => {
    setIndex(0);
  }, [items]);

  useEffect(() => {
    if (paused || items.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % items.length), ROTATE_MS);
    return () => clearInterval(t);
  }, [paused, items.length]);

  if (items.length === 0) return null;
  const active = items[Math.min(index, items.length - 1)];

  return (
    <section
      aria-label="Top stories"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0B1530] shadow-[0_32px_80px_-40px_rgba(15,28,63,0.7)]"
    >
      {/* Ambient backdrop */}
      <div className="pointer-events-none absolute inset-0 aurora opacity-40" />
      <div className="pointer-events-none absolute inset-0 pattern-grid text-white/[0.04]" />

      <div className="relative grid lg:grid-cols-[1.55fr_1fr]">
        {/* Featured story */}
        <div className="flex flex-col p-6 sm:p-9">
          <div key={active.id} className="flex flex-1 flex-col animate-[revealUp_0.5s_cubic-bezier(0.22,1,0.36,1)]">
            <div className="flex flex-wrap items-center gap-2.5">
              <span
                className={cn(
                  "rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide",
                  regionChip[active.region] ?? regionChip.global
                )}
              >
                {newsRegionLabel(active.region)}
              </span>
              <span className="text-xs text-slate-400">
                {formatDate(active.publishedAt)} · {timeAgo(active.publishedAt)}
              </span>
            </div>

            <h3 className="mt-4 font-display text-2xl font-semibold leading-snug text-white sm:text-[28px]">
              {active.title}
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-[15px]">{active.summary}</p>

            <div className="mt-5 rounded-xl border border-white/10 bg-white/[0.04] p-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-300">
                Why it matters for Translyx
              </p>
              <p className="mt-1.5 text-xs leading-relaxed text-slate-300 sm:text-[13px]">
                {active.relevanceToTranslyx}
              </p>
            </div>

            <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-6">
              <a
                href={active.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-200 transition-colors hover:bg-cyan-400/20 hover:text-white"
              >
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-400/20 text-[9px] font-bold text-cyan-100">
                  {active.source.charAt(0).toUpperCase()}
                </span>
                Read at {active.source}
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <div className="flex flex-wrap gap-1.5">
                {active.topics.slice(0, 3).map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[10px] font-medium text-slate-400"
                  >
                    {newsTopicLabel(t)}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Up next queue */}
        {items.length > 1 && (
          <div className="border-t border-white/10 p-4 sm:p-5 lg:border-l lg:border-t-0">
            <p className="px-2 pb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">
              Up next
            </p>
            <div className="flex flex-col gap-1.5">
              {items.map((item, i) => {
                const isActive = i === index;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setIndex(i)}
                    aria-current={isActive || undefined}
                    className={cn(
                      "relative overflow-hidden rounded-xl border px-3.5 py-3 text-left transition-colors",
                      isActive
                        ? "border-cyan-400/30 bg-white/[0.07]"
                        : "border-transparent hover:border-white/10 hover:bg-white/[0.04]"
                    )}
                  >
                    <div className="flex items-start gap-3">
                      <span
                        className={cn(
                          "mt-0.5 font-display text-sm font-semibold tabular-nums",
                          isActive ? "text-cyan-300" : "text-slate-400"
                        )}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="min-w-0">
                        <span
                          className={cn(
                            "block text-[13px] font-medium leading-snug line-clamp-2",
                            isActive ? "text-white" : "text-slate-300"
                          )}
                        >
                          {item.title}
                        </span>
                        <span className="mt-1 block text-[11px] text-slate-400">
                          {item.source} · {timeAgo(item.publishedAt)}
                        </span>
                      </span>
                    </div>
                    {/* Auto-advance progress */}
                    {isActive && items.length > 1 && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/10">
                        <span
                          key={`${item.id}-progress`}
                          className={cn(
                            "block h-full bg-gradient-to-r from-cyan-400 to-violet-400",
                            "animate-[spotlightProgress_7s_linear_forwards]",
                            paused && "[animation-play-state:paused]"
                          )}
                        />
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
