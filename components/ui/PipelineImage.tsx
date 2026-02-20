"use client";

import { cn } from "@/lib/utils";

interface PipelineImageProps {
  src: string;
  alt?: string;
  className?: string;
}

/**
 * Consistent image styling for pipeline pages:
 * 16:9 aspect ratio, object-fit cover, rounded corners, subtle shadow, lazy-loading.
 */
export function PipelineImage({ src, alt = "", className }: PipelineImageProps) {
  return (
    <div className={cn("aspect-video w-full overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-800 shadow-[0_8px_24px_-8px_rgba(15,23,42,0.25)]", className)}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="h-full w-full object-cover object-center"
      />
    </div>
  );
}
