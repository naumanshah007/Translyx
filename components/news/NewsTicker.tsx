import type { NewsItem } from "@/config/news";
import { cn, timeAgo } from "@/lib/utils";

/**
 * Infinitely scrolling headline marquee — the "breaking news bar".
 * Pure CSS animation (keyframes `newsTicker` in globals.css), so it renders
 * on the server and pauses on hover. The track is rendered twice and the
 * animation translates -50% for a seamless loop.
 */
export function NewsTicker({ items, className }: { items: NewsItem[]; className?: string }) {
  const tickerItems = items.slice(0, 10);
  if (tickerItems.length === 0) return null;

  // ~7s of travel per headline keeps the pace readable at any item count.
  const duration = `${tickerItems.length * 7}s`;

  const track = (ariaHidden: boolean) => (
    <div aria-hidden={ariaHidden || undefined} className="flex shrink-0 items-center">
      {tickerItems.map((item) => (
        <a
          key={`${item.id}${ariaHidden ? "-copy" : ""}`}
          href={item.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={ariaHidden ? -1 : undefined}
          className="group/item mx-7 inline-flex items-center gap-2.5 whitespace-nowrap"
        >
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400/80" />
          <span className="text-sm font-medium text-slate-200 transition-colors group-hover/item:text-white">
            {item.title}
          </span>
          <span className="text-xs text-slate-400">
            {item.source} · {timeAgo(item.publishedAt)}
          </span>
        </a>
      ))}
    </div>
  );

  return (
    <div
      className={cn(
        "relative flex items-stretch overflow-hidden border-y border-white/10 bg-[#0B1530]",
        className
      )}
    >
      {/* Pulsing "Latest" label */}
      <div className="relative z-10 flex shrink-0 items-center gap-2 bg-[#0B1530] py-3 pl-4 pr-5 sm:pl-6">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-60" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
        </span>
        <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-cyan-300">Latest</span>
      </div>
      {/* Fade between label and track */}
      <div className="pointer-events-none absolute bottom-0 left-[88px] top-0 z-10 w-10 bg-gradient-to-r from-[#0B1530] to-transparent sm:left-[104px]" />

      {/* Marquee */}
      <div className="group relative flex-1 overflow-hidden">
        <div
          className="flex w-max items-center animate-[newsTicker_60s_linear_infinite] group-hover:[animation-play-state:paused]"
          style={{ animationDuration: duration }}
        >
          {track(false)}
          {track(true)}
        </div>
      </div>

      {/* Right fade edge */}
      <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-14 bg-gradient-to-l from-[#0B1530] to-transparent" />
    </div>
  );
}
