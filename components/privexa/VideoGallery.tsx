"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import { videos } from "@/config/privexa";
import { cn } from "@/lib/utils";

/**
 * Privacy-enhanced YouTube embeds. Only a poster image loads until the visitor
 * presses play — no third-party iframe, cookies or player JS before interaction.
 */
function LiteYouTube({ id, title, featured }: { id: string; title: string; featured?: boolean }) {
  const [active, setActive] = useState(false);

  return (
    <figure className="group">
      <div className="relative aspect-video overflow-hidden rounded-2xl border border-black/10 bg-[#F6F6F7]">
        {active ? (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => setActive(true)}
            className="absolute inset-0 h-full w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#A50E28]"
            aria-label={`Play video: ${title}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
              alt=""
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover opacity-80 transition-opacity duration-300 group-hover:opacity-100"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            <span
              className={cn(
                "absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-[#A50E28] shadow-xl transition-transform duration-300 group-hover:scale-105",
                featured ? "h-16 w-16" : "h-12 w-12"
              )}
            >
              <Play className={cn("translate-x-[1px] fill-current", featured ? "h-6 w-6" : "h-4 w-4")} aria-hidden />
            </span>
          </button>
        )}
      </div>
      <figcaption className={cn("mt-3 font-medium text-slate-800", featured ? "text-base" : "text-sm")}>{title}</figcaption>
    </figure>
  );
}

export function VideoGallery({ limit }: { limit?: number }) {
  const list = limit ? videos.slice(0, limit) : videos;
  const [featured, ...rest] = list;
  if (!featured) return null;
  return (
    <div className="grid gap-6 lg:grid-cols-[1.6fr_1fr]">
      <LiteYouTube id={featured.id} title={featured.title} featured />
      {rest.length > 0 && (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
          {rest.map((v) => (
            <LiteYouTube key={v.id} id={v.id} title={v.title} />
          ))}
        </div>
      )}
    </div>
  );
}
