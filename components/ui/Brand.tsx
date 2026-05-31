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
  /** retained for API compatibility; the real logo reads on both tones */
  tone?: "light" | "dark";
  className?: string;
  /** sizing/extra classes for the logo image itself (default height h-9) */
  markClassName?: string;
  /** false → render the DNA mark only (no wordmark) */
  showWordmark?: boolean;
}

/**
 * Full Translyx lockup using the real logo artwork (DNA mark + "Translyx"
 * two-tone wordmark). Transparent, so it works on the dark glass header,
 * the dark footer, and light pages alike.
 */
export function BrandLogo({
  href = "/",
  className,
  markClassName,
  showWordmark = true,
}: BrandLogoProps) {
  const src = showWordmark ? "/logo-lockup.png" : "/logo-mark.png";
  const intrinsic = showWordmark ? { w: 760, h: 207 } : { w: 239, h: 207 };

  const img = (
    <Image
      src={src}
      alt="Translyx"
      width={intrinsic.w}
      height={intrinsic.h}
      priority
      className={cn("h-9 w-auto select-none", markClassName)}
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
