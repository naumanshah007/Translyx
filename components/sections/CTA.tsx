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

const base =
  "group inline-flex min-h-[46px] w-full items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold transition-colors sm:w-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#8E0C22]";

function Action({ cta, primary }: { cta: { label: string; href: string; external?: boolean }; primary: boolean }) {
  const cls = cn(base, primary ? "bg-white text-[#8E0C22] hover:bg-white/90" : "border border-white/40 text-white hover:bg-white/10");
  const content = (
    <>
      {cta.label}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
    </>
  );
  return cta.external ? (
    <a href={cta.href} target="_blank" rel="noopener noreferrer" className={cls}>
      {content}
    </a>
  ) : (
    <Link href={cta.href} className={cls}>
      {content}
    </Link>
  );
}

/** Closing call-to-action band — shared crimson treatment across the site. */
export function CTA({ title, description, primaryCTA, secondaryCTA, footnote, className }: CTAProps) {
  return (
    <section className={cn("relative overflow-hidden bg-gradient-to-br from-[#7A0A1D] via-[#8E0C22] to-[#A50E28] py-20 sm:py-28", className)}>
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="text-balance text-[2rem] font-semibold leading-[1.08] tracking-[-0.03em] text-white sm:text-[2.75rem]">{title}</h2>
        {description && <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">{description}</p>}
        {(primaryCTA || secondaryCTA) && (
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            {primaryCTA && <Action cta={primaryCTA} primary />}
            {secondaryCTA && <Action cta={secondaryCTA} primary={false} />}
          </div>
        )}
        {footnote && <p className="mt-6 text-xs text-white/75">{footnote}</p>}
      </div>
    </section>
  );
}
