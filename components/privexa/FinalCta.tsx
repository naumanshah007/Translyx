import { PxCta } from "@/components/privexa/ui";

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
    <section className="relative overflow-hidden border-t border-white/[0.08] bg-[#070B10] py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-px max-w-3xl bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent" />
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="text-balance text-[2rem] font-semibold leading-[1.08] tracking-[-0.03em] text-white sm:text-[3rem]">
          {title}
        </h2>
        {body && <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">{body}</p>}
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <PxCta href={primary.href}>{primary.label}</PxCta>
          {secondary && (
            <PxCta href={secondary.href} variant="secondary">
              {secondary.label}
            </PxCta>
          )}
        </div>
      </div>
    </section>
  );
}
