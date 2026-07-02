import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CTAProps {
  title: string;
  description?: string;
  primaryCTA?: { label: string; href: string; external?: boolean };
  secondaryCTA?: { label: string; href: string; external?: boolean };
  /** Small trust/expectation line rendered under the buttons, e.g. response-time promise */
  footnote?: string;
  className?: string;
}

function Action({
  cta,
  variant,
}: {
  cta: { label: string; href: string; external?: boolean };
  variant: "primary" | "glass";
}) {
  const base =
    "inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-200 sm:w-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1430]";
  const styles =
    variant === "primary"
      ? "bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500 text-[#06121f] shadow-[0_8px_30px_-6px_rgba(34,211,238,0.5)] hover:-translate-y-0.5 hover:shadow-[0_10px_38px_-6px_rgba(124,58,237,0.55)]"
      : "glass-panel text-white hover:bg-white/[0.14]";
  const content = (
    <>
      {cta.label}
      <ArrowRight className="h-4 w-4" />
    </>
  );
  if (cta.external) {
    return (
      <a href={cta.href} target="_blank" rel="noopener noreferrer" className={cn(base, styles)}>
        {content}
      </a>
    );
  }
  return (
    <Link href={cta.href} className={cn(base, styles)}>
      {content}
    </Link>
  );
}

export function CTA({ title, description, primaryCTA, secondaryCTA, footnote, className }: CTAProps) {
  return (
    <section className={cn("relative overflow-hidden bg-midnight py-20 sm:py-24", className)}>
      <div className="pointer-events-none absolute inset-0 grid-overlay opacity-40" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(34,211,238,0.12),transparent_60%)]" />
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-[2rem] font-semibold leading-tight tracking-tight text-white sm:text-[2.6rem]">
            {title}
          </h2>
          {description && (
            <p
              className={cn(
                "mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/65 sm:text-lg",
                primaryCTA || secondaryCTA ? "mb-9" : "mb-0"
              )}
            >
              {description}
            </p>
          )}
          {(primaryCTA || secondaryCTA) && (
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              {primaryCTA && <Action cta={primaryCTA} variant="primary" />}
              {secondaryCTA && <Action cta={secondaryCTA} variant="glass" />}
            </div>
          )}

          {footnote && <p className="mt-6 text-xs text-slate-400">{footnote}</p>}
        </div>
      </div>
    </section>
  );
}

export const CTASection = CTA;
