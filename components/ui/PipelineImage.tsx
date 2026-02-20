"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface PipelineImageProps {
  localSrc: string;
  remoteSrc?: string;
  alt: string;
  className?: string;
  objectFit?: "cover" | "contain";
  objectPosition?: string;
}

const PLACEHOLDER = "/images/pipeline/placeholder.jpg";

/**
 * Resilient pipeline image: tries local → remote → placeholder.
 * Never breaks layout.
 */
export function PipelineImage({
  localSrc,
  remoteSrc,
  alt,
  className,
  objectFit = "cover",
  objectPosition = "center",
}: PipelineImageProps) {
  const [src, setSrc] = useState(localSrc);
  const [triedRemote, setTriedRemote] = useState(false);

  const handleError = () => {
    if (remoteSrc && !triedRemote) {
      setTriedRemote(true);
      setSrc(remoteSrc);
    } else {
      setSrc(PLACEHOLDER);
    }
  };

  return (
    <div
      className={cn(
        "aspect-video w-full overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-800 shadow-[0_8px_24px_-8px_rgba(15,23,42,0.25)]",
        className
      )}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="h-full w-full"
        style={{ objectFit, objectPosition }}
        onError={handleError}
      />
    </div>
  );
}
