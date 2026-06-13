"use client";

import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import type { NewsItem } from "@/config/news";
import { newsRegionLabel, newsTopicLabel } from "@/config/news";
import { cn, timeAgo } from "@/lib/utils";

/**
 * A live newswire: a single clean column of compact headline rows that
 * advances ONE headline at a time with a smooth, eased step (not a constant
 * crawl). Every few seconds the list glides down by exactly one row — a fresh
 * headline slides in at the top, the oldest drops off the bottom — then holds
 * still long enough to read. Reads like a Reuters/Bloomberg live wire rather
 * than a moving wall of cards.
 *
 * - Holds still between steps so every headline is readable and clickable.
 * - Pauses entirely on hover/touch.
 * - prefers-reduced-motion (or too few items) → a static scrollable list.
 */

const STEP_MS = 3800; // dwell between steps
const TRANSITION_MS = 720; // glide duration
const VISIBLE_DESKTOP = 5;
const VISIBLE_MOBILE = 4;

const regionAccent: Record<string, { dot: string; text: string }> = {
  "new-zealand": { dot: "bg-cyan-400", text: "text-cyan-600" },
  australia: { dot: "bg-violet-400", text: "text-violet-600" },
  global: { dot: "bg-slate-300", text: "text-slate-500" },
};

function Row({ item }: { item: NewsItem }) {
  const accent = regionAccent[item.region] ?? regionAccent.global;
  return (
    <a
      href={item.sourceUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-[92px] items-center gap-4 border-b border-slate-100 px-4 transition-colors hover:bg-slate-50/80 sm:h-[84px] sm:px-5"
    >
      {/* Region dot + time */}
      <div className="flex w-[78px] shrink-0 flex-col gap-1.5">
        <span className="flex items-center gap-1.5">
          <span className={cn("h-1.5 w-1.5 shrink-0 rounded-full", accent.dot)} />
          <span className={cn("text-[11px] font-semibold uppercase tracking-wide", accent.text)}>
            {newsRegionLabel(item.region)}
          </span>
        </span>
        <span className="pl-3 text-[11px] text-slate-400">{timeAgo(item.publishedAt)}</span>
      </div>

      {/* Headline */}
      <p className="min-w-0 flex-1 font-display text-[15px] font-semibold leading-snug text-[#0F1C3F] line-clamp-2 transition-colors group-hover:text-[#0891B2]">
        {item.title}
      </p>

      {/* Source + topic (desktop) */}
      <div className="hidden shrink-0 items-center gap-3 sm:flex">
        {item.topics[0] && (
          <span className="rounded-md border border-slate-200/80 bg-white px-2 py-0.5 text-[10px] font-medium text-slate-500">
            {newsTopicLabel(item.topics[0])}
          </span>
        )}
        <span className="inline-flex w-[150px] items-center justify-end gap-1 text-right text-xs font-semibold text-slate-500 transition-colors group-hover:text-[#0F1C3F]">
          <span className="truncate">{item.source}</span>
          <ArrowUpRight className="h-3.5 w-3.5 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>

      {/* Mobile arrow */}
      <ArrowUpRight className="h-4 w-4 shrink-0 text-slate-300 sm:hidden" />
    </a>
  );
}

export function NewsWall({ items }: { items: NewsItem[] }) {
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);
  const [visible, setVisible] = useState(VISIBLE_DESKTOP);
  const [mounted, setMounted] = useState(false);
  const [rowH, setRowH] = useState(0);

  // offset counts DOWN from n→0 so the track glides downward (new headline
  // slides in at the top). At offset 0 we reset to n: those two positions are
  // pixel-identical because the list is rendered twice, so the loop is seamless.
  const [offset, setOffset] = useState(items.length);
  const [withTransition, setWithTransition] = useState(true);
  const offsetRef = useRef(items.length);
  const firstRowRef = useRef<HTMLDivElement | null>(null);

  const n = items.length;
  useEffect(() => {
    offsetRef.current = offset;
  }, [offset]);

  useEffect(() => {
    setMounted(true);
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const wide = window.matchMedia("(min-width: 640px)");
    const sync = () => {
      setReduced(motion.matches);
      setVisible(wide.matches ? VISIBLE_DESKTOP : VISIBLE_MOBILE);
    };
    sync();
    motion.addEventListener("change", sync);
    wide.addEventListener("change", sync);
    return () => {
      motion.removeEventListener("change", sync);
      wide.removeEventListener("change", sync);
    };
  }, []);

  // Measure a row's height so the transform steps land exactly on row bounds.
  useLayoutEffect(() => {
    const measure = () => {
      const el = firstRowRef.current?.firstElementChild as HTMLElement | null;
      if (el) setRowH(el.offsetHeight);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [mounted, visible]);

  useEffect(() => {
    setOffset(n);
  }, [n]);

  const canAnimate = mounted && !reduced && rowH > 0 && n > visible;

  // Step the wire down by one row every STEP_MS. When it reaches the seam,
  // snap (no transition) to the identical position on the second copy, then
  // continue — so the loop never visibly jumps or stalls.
  useEffect(() => {
    if (paused || !canAnimate) return;
    const t = setInterval(() => {
      const cur = offsetRef.current;
      if (cur <= 0) {
        setWithTransition(false);
        setOffset(n);
        requestAnimationFrame(() =>
          requestAnimationFrame(() => {
            setWithTransition(true);
            setOffset(n - 1);
          })
        );
      } else {
        setWithTransition(true);
        setOffset(cur - 1);
      }
    }, STEP_MS);
    return () => clearInterval(t);
  }, [paused, canAnimate, n]);

  const doubled = useMemo(() => [...items, ...items], [items]);

  if (n === 0) return null;

  // Static fallback (reduced motion, too few items, or pre-measure): a plain
  // scrollable list — fully readable, no motion.
  if (!canAnimate) {
    return (
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
        <div ref={firstRowRef} className="max-h-[460px] overflow-y-auto">
          {items.map((item) => (
            <Row key={item.id} item={item} />
          ))}
        </div>
      </div>
    );
  }

  const windowH = visible * rowH;
  const translateY = -offset * rowH;

  return (
    <div
      className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_2px_24px_-12px_rgba(15,28,63,0.12)]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={() => setPaused((p) => !p)}
    >
      {/* Live status bar */}
      <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50/60 px-4 py-2 sm:px-5">
        <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
          <span className="relative flex h-1.5 w-1.5">
            <span
              className={cn(
                "absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-70",
                !paused && "animate-ping"
              )}
            />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cyan-500" />
          </span>
          {paused ? "Paused" : "Live wire"}
        </span>
        <span className="text-[10px] uppercase tracking-wide text-slate-400">Updated continuously</span>
      </div>

      {/* The wire window */}
      <div className="relative" style={{ height: windowH }}>
        {/* Accent line where fresh headlines arrive */}
        <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />
        {/* Bottom fade for the row leaving the wire */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-10 bg-gradient-to-t from-white to-transparent" />

        <div className="overflow-hidden" style={{ height: windowH }}>
          <div
            ref={firstRowRef}
            style={{
              transform: `translateY(${translateY}px)`,
              transition: withTransition ? `transform ${TRANSITION_MS}ms cubic-bezier(0.5, 0, 0.2, 1)` : "none",
            }}
          >
            {doubled.map((item, i) => (
              <Row key={`${item.id}-${i}`} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
