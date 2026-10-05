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
  visual?: React.ReactNode | false;
  layout?: "balanced" | "visual-forward";
  /** Low-weight link rendered under the trust chips, for a tertiary path that doesn't need CTA-level prominence */
  footer?: React.ReactNode;
}

function CTAButton({ cta }: { cta: HeroCTA }) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white";
  const styles: Record<HeroCTA["variant"], string> = {
    primary:
      "bg-[#A50E28] hover:bg-[#860B20] text-white shadow-[0_8px_30px_-6px_rgba(200,16,46,0.55)] hover:shadow-[0_10px_38px_-6px_rgba(100,116,139,0.6)] hover:-translate-y-0.5",
    glass: "light-panel text-[#0B0B0C] hover:bg-black/[0.04]",
    ghost: "text-slate-700 hover:text-black",
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
  layout = "balanced",
  footer,
}: HeroSectionProps) {
  const hasVisual = visual !== false;
  const visualForward = hasVisual && layout === "visual-forward";

  return (
    <section className="relative overflow-hidden bg-white">
      {/* ambient hidden + grid + grain */}
      <div className="pointer-events-none absolute inset-0 hidden opacity-70" />
      <div className="pointer-events-none absolute inset-0 grid-overlay opacity-50" />
      <div className="pointer-events-none absolute inset-0 hidden opacity-[0.06] mix-blend-overlay" />
      <div className="pointer-events-none absolute -top-32 right-[12%] h-[440px] w-[440px] rounded-full bg-[radial-gradient(circle,rgba(200,16,46,0.18),transparent_65%)] blur-3xl animate-glow-pulse" />
      <div className="pointer-events-none absolute bottom-0 left-[6%] h-[380px] w-[380px] rounded-full bg-[radial-gradient(circle,rgba(100,116,139,0.16),transparent_65%)] blur-3xl" />
      {/* top hairline highlight */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={cn(
            "mx-auto grid items-center py-16 sm:py-20",
            hasVisual
              ? visualForward
                ? "max-w-[1280px] gap-10 lg:grid-cols-[minmax(0,1.03fr)_minmax(0,0.97fr)] lg:gap-6 lg:py-16 xl:gap-10"
                : "max-w-[1240px] gap-10 lg:grid-cols-[1.04fr_1fr] lg:items-start lg:gap-10 lg:py-24"
              : "max-w-[900px] lg:py-24"
          )}
        >
          {/* Copy */}
          <div className={cn("text-center", hasVisual && "lg:text-left", visualForward && "lg:max-w-[600px]")}>
            {badge && (
              <div className="mb-7 inline-flex items-center gap-2 rounded-full light-panel px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-700 will-fade reveal">
                {badge.icon && <badge.icon className="h-3.5 w-3.5 text-cyan-700" />}
                {badge.text}
              </div>
            )}

            <h1
              className={cn(
                "font-display text-[2.6rem] font-semibold leading-[1.04] tracking-[-0.02em] text-[#0B0B0C] [hyphens:none] will-fade reveal sm:text-[3.2rem]",
                visualForward ? "lg:text-[3.25rem] xl:text-[3.55rem]" : "lg:text-[3.55rem]"
              )}
              style={{ animationDelay: "0.05s" }}
            >
              {headline}{" "}
              {highlight && <span className="text-gradient-brand">{highlight}</span>}
            </h1>

            <p
              className={cn(
                "mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-600 will-fade reveal sm:text-lg",
                hasVisual && "lg:mx-0 lg:max-w-xl"
              )}
              style={{ animationDelay: "0.12s" }}
            >
              {description}
            </p>

            {ctas && ctas.length > 0 && (
              <div
                className={cn(
                  "mt-9 flex flex-col items-stretch gap-3 will-fade reveal sm:flex-row sm:flex-wrap sm:items-center sm:justify-center",
                  hasVisual && "lg:justify-start"
                )}
                style={{ animationDelay: "0.2s" }}
              >
                {ctas.map((cta) => (
                  <CTAButton key={cta.label} cta={cta} />
                ))}
              </div>
            )}

            {trustChips && trustChips.length > 0 && (
              <div
                className={cn(
                  "mt-9 flex flex-wrap justify-center gap-2 will-fade reveal",
                  hasVisual && "lg:justify-start"
                )}
                style={{ animationDelay: "0.28s" }}
              >
                {trustChips.map((c) => (
                  <TrustChip key={c.label} icon={c.icon} label={c.label} tone="light" />
                ))}
              </div>
            )}

            {footer && (
              <div
                className="mt-6 will-fade reveal"
                style={{ animationDelay: "0.34s" }}
              >
                {footer}
              </div>
            )}
          </div>

          {hasVisual && (
            <div
              className={cn("will-fade reveal", visualForward && "lg:-mr-4 xl:-mr-8")}
              style={{ animationDelay: "0.15s" }}
            >
              {visual ?? <HeroVisual />}
            </div>
          )}
        </div>
      </div>

      {/* bottom fade into next section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-[#0E0F12]/0" />
    </section>
  );
}
