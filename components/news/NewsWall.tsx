"use client";

import { useEffect, useMemo, useState } from "react";
import type { NewsItem } from "@/config/news";
import { NewsWallCard } from "@/components/news/NewsCard";
import { cn } from "@/lib/utils";

/**
 * A live wall of news cards that stream vertically in a seamless loop (each
 * column's track is rendered twice and translated 50%), giving the "newsroom
 * feed" feel without manual interaction.
 *
 * - Desktop: up to 3 columns, but only ONE scrolls at a time — focus rotates
 *   column→column on a timer so the other columns stay still and readable
 *   (continuous all-at-once motion was too busy).
 * - Mobile/small screens: a single column window flows continuously.
 * - Pauses on hover/touch so any card can be read and clicked.
 * - prefers-reduced-motion (or very few items) → static responsive grid.
 */

const DESKTOP_COLUMNS = 3;
/** How long each column scrolls before focus hands off to the next. */
const ROTATE_MS = 6000;

/** Distribute items round-robin across N columns so each column stays balanced. */
function toColumns(items: NewsItem[], count: number): NewsItem[][] {
  const cols: NewsItem[][] = Array.from({ length: count }, () => []);
  items.forEach((item, i) => cols[i % count].push(item));
  return cols;
}

function Column({
  items,
  direction,
  durationSec,
  paused,
}: {
  items: NewsItem[];
  direction: "up" | "down";
  durationSec: number;
  paused: boolean;
}) {
  // Render the list twice so the -50% / +50% translate loops seamlessly.
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden">
      <div
        className={cn(
          "flex flex-col gap-4",
          direction === "up" ? "animate-[marqueeUp_60s_linear_infinite]" : "animate-[marqueeDown_60s_linear_infinite]"
        )}
        style={{
          animationDuration: `${durationSec}s`,
          animationPlayState: paused ? "paused" : "running",
        }}
      >
        {doubled.map((item, i) => (
          <div key={`${item.id}-${i}`} aria-hidden={i >= items.length || undefined}>
            <NewsWallCard item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export function NewsWall({ items }: { items: NewsItem[] }) {
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);
  const [columnCount, setColumnCount] = useState(1);
  const [mounted, setMounted] = useState(false);
  const [activeColumn, setActiveColumn] = useState(0);

  useEffect(() => {
    setMounted(true);
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const wide = window.matchMedia("(min-width: 1024px)");
    const mid = window.matchMedia("(min-width: 640px)");

    const sync = () => {
      setReduced(motion.matches);
      setColumnCount(wide.matches ? DESKTOP_COLUMNS : mid.matches ? 2 : 1);
    };
    sync();
    motion.addEventListener("change", sync);
    wide.addEventListener("change", sync);
    mid.addEventListener("change", sync);
    return () => {
      motion.removeEventListener("change", sync);
      wide.removeEventListener("change", sync);
      mid.removeEventListener("change", sync);
    };
  }, []);

  // Never spread items so thin that a column holds fewer than two cards.
  const effectiveColumns = Math.max(1, Math.min(columnCount, Math.floor(items.length / 2)));
  const columns = useMemo(() => toColumns(items, effectiveColumns), [items, effectiveColumns]);

  // Rotate which column is scrolling: one moves while the rest stay still.
  // Single-column (mobile) flows continuously, so no rotation is needed there.
  const canAnimate = mounted && !reduced && items.length >= 4;
  useEffect(() => {
    if (paused || !canAnimate || effectiveColumns < 2) return;
    setActiveColumn((c) => (c < effectiveColumns ? c : 0));
    const t = setInterval(() => {
      setActiveColumn((c) => (c + 1) % effectiveColumns);
    }, ROTATE_MS);
    return () => clearInterval(t);
  }, [paused, canAnimate, effectiveColumns]);

  if (items.length === 0) return null;

  // Static fallback: reduced-motion, SSR/first paint, or too few items to loop nicely.
  if (!canAnimate) {
    return (
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <NewsWallCard key={item.id} item={item} />
        ))}
      </div>
    );
  }

  // Window height scales with column count; longer columns travel slower.
  return (
    <div
      className="group relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={() => setPaused((p) => !p)}
    >
      {/* Fade masks top & bottom for the "window into a stream" look */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-16 bg-gradient-to-b from-white to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-16 bg-gradient-to-t from-white to-transparent" />

      <div
        className="grid max-h-[560px] gap-4 overflow-hidden sm:max-h-[620px] lg:max-h-[680px]"
        style={{ gridTemplateColumns: `repeat(${effectiveColumns}, minmax(0, 1fr))` }}
      >
        {columns.map((col, i) => (
          <Column
            key={i}
            items={col}
            // Always top→bottom: cards appear at the top and drift downward.
            direction="down"
            durationSec={42 + i * 3}
            // Only the focused column scrolls (single-column mobile is always
            // "active"); hover freezes everything.
            paused={paused || (effectiveColumns > 1 && i !== activeColumn)}
          />
        ))}
      </div>

      {/* Subtle "live" affordance */}
      <div className="pointer-events-none absolute right-3 top-3 z-20 inline-flex items-center gap-1.5 rounded-full border border-slate-200/80 bg-white/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-slate-500 shadow-sm backdrop-blur">
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-70" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cyan-500" />
        </span>
        {paused ? "Paused" : "Live feed"}
      </div>
    </div>
  );
}
