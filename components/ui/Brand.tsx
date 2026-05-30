import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * Translyx DNA brand mark — twin helix strands in a cyan→emerald gradient,
 * echoing the clinical / genomics identity and the hero centerpiece.
 * Pure vector: crisp at any size, theme-agnostic.
 */
export function BrandMark({
  className,
  glow = false,
  id = "translyx-mark",
}: {
  className?: string;
  glow?: boolean;
  id?: string;
}) {
  const strandA = `${id}-a`;
  const strandB = `${id}-b`;
  // Rung positions — paired x offsets from centre where the strands sit at that y
  const rungs = [
    { y: 8, x: 8.2 },
    { y: 13, x: 6 },
    { y: 27, x: 6 },
    { y: 32, x: 8.2 },
  ];

  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      className={cn("shrink-0", className)}
      aria-hidden="true"
      role="img"
    >
      <defs>
        <linearGradient id={strandA} x1="8" y1="3" x2="32" y2="37" gradientUnits="userSpaceOnUse">
          <stop stopColor="#67E8F9" />
          <stop offset="0.55" stopColor="#22D3EE" />
          <stop offset="1" stopColor="#34D399" />
        </linearGradient>
        <linearGradient id={strandB} x1="32" y1="3" x2="8" y2="37" gradientUnits="userSpaceOnUse">
          <stop stopColor="#A78BFA" />
          <stop offset="0.5" stopColor="#38BDF8" />
          <stop offset="1" stopColor="#2DD4BF" />
        </linearGradient>
        {glow && (
          <filter id={`${id}-glow`} x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="1.1" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        )}
      </defs>
      <g filter={glow ? `url(#${id}-glow)` : undefined} strokeLinecap="round">
        {/* connecting rungs */}
        {rungs.map((r) => (
          <line
            key={r.y}
            x1={20 - r.x}
            y1={r.y}
            x2={20 + r.x}
            y2={r.y}
            stroke="#7DD3FC"
            strokeOpacity={0.45}
            strokeWidth={1.6}
          />
        ))}
        {/* twin helix strands — wide double-cross so the helix reads clearly */}
        <path
          d="M9 3 C 33 11, 33 14, 20 20 C 7 26, 7 29, 31 37"
          stroke={`url(#${strandA})`}
          strokeWidth={3.4}
        />
        <path
          d="M31 3 C 7 11, 7 14, 20 20 C 33 26, 33 29, 9 37"
          stroke={`url(#${strandB})`}
          strokeWidth={3.4}
        />
      </g>
    </svg>
  );
}

interface BrandLogoProps {
  href?: string | null;
  tone?: "light" | "dark";
  className?: string;
  markClassName?: string;
  showWordmark?: boolean;
  onClick?: () => void;
}

/**
 * Full Translyx lockup: DNA mark + wordmark.
 * tone="dark"  → for dark navy surfaces (white wordmark)
 * tone="light" → for light surfaces (navy wordmark)
 */
export function BrandLogo({
  href = "/",
  tone = "dark",
  className,
  markClassName,
  showWordmark = true,
  onClick,
}: BrandLogoProps) {
  const inner = (
    <span className={cn("inline-flex items-center gap-2.5 group", className)}>
      <BrandMark
        glow={tone === "dark"}
        className={cn("h-8 w-8 transition-transform duration-300 group-hover:scale-105", markClassName)}
      />
      {showWordmark && (
        <span className="flex flex-col leading-none">
          <span
            className={cn(
              "font-body text-[1.35rem] font-extrabold tracking-[-0.02em]",
              tone === "dark" ? "text-white" : "text-[#0F1C3F]"
            )}
          >
            Translyx
          </span>
          <span
            className={cn(
              "mt-[3px] text-[8.5px] font-semibold uppercase tracking-[0.24em]",
              tone === "dark" ? "text-cyan-300/70" : "text-[#0891B2]"
            )}
          >
            Translating Innovation into Impact
          </span>
        </span>
      )}
    </span>
  );

  if (href && !onClick) {
    return (
      <Link href={href} aria-label="Translyx — home" className="inline-flex">
        {inner}
      </Link>
    );
  }
  return (
    <button type="button" onClick={onClick} aria-label="Translyx — home" className="inline-flex">
      {inner}
    </button>
  );
}
