import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { TrustChip } from "@/components/ui/TrustChip";
import { HeroVisual } from "@/components/sections/HeroVisual";

interface HeroCTA {
  label: string;
  href: string;
  variant: "primary" | "glass" | "ghost";
  external?: boolean;
}

interface HeroSectionProps {
  badge?: { icon?: LucideIcon; text: string };
  headline: React.ReactNode;
  highlight?: string;
  description: string;
  ctas?: HeroCTA[];
  trustChips?: { icon: LucideIcon; label: string }[];
  visual?: React.ReactNode;
}

function CTAButton({ cta }: { cta: HeroCTA }) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1430]";
  const styles: Record<HeroCTA["variant"], string> = {
    primary:
      "bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500 text-[#06121f] shadow-[0_8px_30px_-6px_rgba(34,211,238,0.55)] hover:shadow-[0_10px_38px_-6px_rgba(124,58,237,0.6)] hover:-translate-y-0.5",
    glass: "glass-panel text-white hover:bg-white/[0.14]",
    ghost: "text-slate-300 hover:text-white",
  };
  const content = (
    <>
      {cta.label}
      <ArrowRight className="h-4 w-4" />
    </>
  );
  if (cta.external) {
    return (
      <a href={cta.href} target="_blank" rel="noopener noreferrer" className={cn(base, styles[cta.variant])}>
        {content}
      </a>
    );
  }
  return (
    <Link href={cta.href} className={cn(base, styles[cta.variant])}>
      {content}
    </Link>
  );
}

export function HeroSection({
  badge,
  headline,
  highlight,
  description,
  ctas,
  trustChips,
  visual,
}: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-midnight">
      {/* ambient aurora + grid + grain */}
      <div className="pointer-events-none absolute inset-0 aurora opacity-70" />
      <div className="pointer-events-none absolute inset-0 grid-overlay opacity-50" />
      <div className="pointer-events-none absolute inset-0 grain-overlay opacity-[0.06] mix-blend-overlay" />
      <div className="pointer-events-none absolute -top-32 right-[12%] h-[440px] w-[440px] rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.18),transparent_65%)] blur-3xl animate-glow-pulse" />
      <div className="pointer-events-none absolute bottom-0 left-[6%] h-[380px] w-[380px] rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.16),transparent_65%)] blur-3xl" />
      {/* top hairline highlight */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-[1240px] items-center gap-10 py-16 sm:py-20 lg:grid-cols-[1.04fr_1fr] lg:gap-10 lg:py-24">
          {/* Copy */}
          <div className="text-center lg:text-left">
            {badge && (
              <div className="mb-7 inline-flex items-center gap-2 rounded-full glass-panel px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-200 will-fade reveal">
                {badge.icon && <badge.icon className="h-3.5 w-3.5 text-cyan-300" />}
                {badge.text}
              </div>
            )}

            <h1
              className="font-display text-[2.6rem] font-semibold leading-[1.04] tracking-[-0.02em] text-white [hyphens:none] will-fade reveal sm:text-[3.2rem] lg:text-[3.55rem]"
              style={{ animationDelay: "0.05s" }}
            >
              {headline}{" "}
              {highlight && <span className="text-gradient-brand">{highlight}</span>}
            </h1>

            <p
              className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/65 will-fade reveal sm:text-lg lg:mx-0"
              style={{ animationDelay: "0.12s" }}
            >
              {description}
            </p>

            {ctas && ctas.length > 0 && (
              <div
                className="mt-9 flex flex-col items-stretch gap-3 will-fade reveal sm:flex-row sm:flex-wrap sm:items-center sm:justify-center lg:justify-start"
                style={{ animationDelay: "0.2s" }}
              >
                {ctas.map((cta) => (
                  <CTAButton key={cta.label} cta={cta} />
                ))}
              </div>
            )}

            {trustChips && trustChips.length > 0 && (
              <div
                className="mt-9 flex flex-wrap justify-center gap-2 will-fade reveal lg:justify-start"
                style={{ animationDelay: "0.28s" }}
              >
                {trustChips.map((c) => (
                  <TrustChip key={c.label} icon={c.icon} label={c.label} tone="dark" />
                ))}
              </div>
            )}
          </div>

          {/* Visual */}
          <div className="will-fade reveal" style={{ animationDelay: "0.15s" }}>
            {visual ?? <HeroVisual />}
          </div>
        </div>
      </div>

      {/* bottom fade into next section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-[#070D1F]/0" />
    </section>
  );
}
