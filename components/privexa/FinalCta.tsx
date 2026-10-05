import Link from "next/link";
import { ArrowRight } from "lucide-react";

const btn =
  "group inline-flex min-h-[46px] items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#8E0C22]";

/** Closing call-to-action — the one deep-red band on each page. */
export function PxFinalCta({
  title = "Ready to see what AI receives after Privexa?",
  body,
  primary = { label: "Request Demo", href: "/privexa/demo" },
  secondary = { label: "Explore Privexa", href: "/privexa" },
}: {
  title?: string;
  body?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string } | null;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#7A0A1D] via-[#8E0C22] to-[#A50E28] py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="text-balance text-[2rem] font-semibold leading-[1.08] tracking-[-0.03em] text-white sm:text-[3rem]">
          {title}
        </h2>
        {body && <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">{body}</p>}
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href={primary.href} className={`${btn} bg-white text-[#8E0C22] hover:bg-white/90`}>
            {primary.label}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
          </Link>
          {secondary && (
            <Link href={secondary.href} className={`${btn} border border-white/40 text-white hover:bg-white/10`}>
              {secondary.label}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
