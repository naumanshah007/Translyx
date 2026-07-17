import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * Translyx DNA mark — the real brand mark (blue + green twisted-helix ribbon),
 * exported as a transparent PNG so it sits cleanly on dark or light surfaces.
 * `glow` adds a soft cyan halo for hero/ecosystem motifs.
 */
export function BrandMark({
  className,
  glow = false,
}: {
  className?: string;
  glow?: boolean;
  /** retained for call-site compatibility; no longer used */
  id?: string;
}) {
  return (
    <Image
      src="/logo-mark.png"
      alt=""
      aria-hidden="true"
      width={239}
      height={207}
      className={cn(
        "w-auto select-none",
        glow && "[filter:drop-shadow(0_0_10px_rgba(34,211,238,0.55))]",
        className
      )}
    />
  );
}

interface BrandLogoProps {
  href?: string | null;
  /** Adds a restrained contrast lift when the official artwork sits on navy. */
  tone?: "light" | "dark";
  className?: string;
  /** sizing/extra classes for the official lockup image (default height h-9) */
  markClassName?: string;
  /** false → render the DNA mark only (no wordmark) */
  showWordmark?: boolean;
}

/**
 * Official Translyx lockup: the original blue-and-green DNA mark and wordmark.
 * Sizing and dark-surface contrast are handled here so the approved artwork
 * remains unchanged everywhere it appears.
 */
export function BrandLogo({
  href = "/",
  tone = "light",
  className,
  markClassName,
  showWordmark = true,
}: BrandLogoProps) {
  const src = showWordmark ? "/logo-lockup.png" : "/logo-mark.png";
  const intrinsic = showWordmark ? { width: 760, height: 207 } : { width: 239, height: 207 };

  const img = (
    <Image
      src={src}
      alt={showWordmark ? "Translyx" : ""}
      aria-hidden={showWordmark ? undefined : true}
      width={intrinsic.width}
      height={intrinsic.height}
      priority
      className={cn(
        "h-9 w-auto select-none object-contain",
        tone === "dark" && "brightness-[1.16] saturate-[1.06] [filter:brightness(1.16)_saturate(1.06)_drop-shadow(0_2px_10px_rgba(255,255,255,0.10))]",
        markClassName
      )}
    />
  );

  if (href) {
    return (
      <Link href={href} aria-label="Translyx — home" className={cn("inline-flex items-center", className)}>
        {img}
      </Link>
    );
  }
  return <span className={cn("inline-flex items-center", className)}>{img}</span>;
}
