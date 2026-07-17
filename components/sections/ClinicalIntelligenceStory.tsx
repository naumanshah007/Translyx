import Image from "next/image";
import { Check, Eye, Fingerprint, ScanSearch, UserCheck } from "lucide-react";

const chapters = [
  {
    number: "01",
    icon: ScanSearch,
    eyebrow: "Clinical signal",
    title: "See the detail hidden inside complex tissue.",
    body: "Digital pathology transforms a slide into a navigable field of evidence. AI-assisted analysis can surface regions of interest while the specialist remains in control.",
  },
  {
    number: "02",
    icon: Fingerprint,
    eyebrow: "Protected context",
    title: "Keep sensitive information inside the trusted boundary.",
    body: "Translyx evaluates privacy-preserving workflows that protect identifying data before it reaches downstream AI and cloud systems.",
  },
  {
    number: "03",
    icon: UserCheck,
    eyebrow: "Human review",
    title: "Place accountable judgement at the centre.",
    body: "Reviewer gates, visible limitations and specialist sign-off turn AI assistance into a clinically governed process rather than an autonomous black box.",
  },
  {
    number: "04",
    icon: Eye,
    eyebrow: "Traceable impact",
    title: "Connect every output to its evidence and decision path.",
    body: "Full lineage preserves how information moved through the workflow—supporting scrutiny, adoption and confidence across New Zealand healthcare.",
  },
];

function DetectionBox({ className }: { className: string }) {
  return (
    <span className={`absolute rounded-md border border-cyan-200/90 shadow-[0_0_24px_rgba(34,211,238,0.7)] ${className}`}>
      <span className="absolute -left-px -top-px h-3 w-3 border-l-2 border-t-2 border-white" />
      <span className="absolute -right-px -top-px h-3 w-3 border-r-2 border-t-2 border-white" />
      <span className="absolute -bottom-px -left-px h-3 w-3 border-b-2 border-l-2 border-white" />
      <span className="absolute -bottom-px -right-px h-3 w-3 border-b-2 border-r-2 border-white" />
    </span>
  );
}

export function ClinicalIntelligenceStory() {
  return (
    <section className="relative overflow-hidden bg-[#07101F] py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 grid-overlay opacity-30" />
      <div className="pointer-events-none absolute inset-y-0 left-0 w-2/3 bg-[radial-gradient(ellipse_at_20%_40%,rgba(34,211,238,0.12),transparent_62%)]" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1240px]">
          <div className="mb-14 max-w-3xl lg:mb-20">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-cyan-300" />
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan-200/80">
                From signal to trusted action
              </p>
            </div>
            <h2 className="font-display text-[2.3rem] font-semibold leading-[1.08] tracking-[-0.025em] text-white sm:text-[3.25rem]">
              Clinical intelligence should be as visible as the evidence behind it.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg">
              One continuous journey connects pathology, protected data, human judgement and accountable clinical adoption.
            </p>
          </div>

          <div className="grid gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:items-start lg:gap-20">
            <div className="lg:sticky lg:top-28">
              <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-white/[0.04] p-3 shadow-[0_40px_100px_-40px_rgba(0,0,0,0.8)] sm:p-5">
                <div className="absolute inset-x-16 -top-16 h-36 rounded-full bg-cyan-300/20 blur-3xl" />
                <div className="relative overflow-hidden rounded-[1.45rem] bg-[#0A1427]">
                  <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 sm:px-5">
                    <span className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-100/70">
                      <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(110,231,183,0.8)]" />
                      Clinical intelligence field
                    </span>
                    <span className="hidden text-[10px] text-slate-400 sm:block">Specialist review active</span>
                  </div>

                  <div className="relative h-[360px] sm:h-[480px]">
                    <Image
                      src="/digital-pathology-slide.webp"
                      alt="Pathology tissue field with AI-assisted regions of interest"
                      fill
                      sizes="(min-width: 1024px) 620px, 92vw"
                      className="scale-110 object-cover saturate-[0.92] contrast-[1.06]"
                    />
                    <span className="absolute inset-0 bg-gradient-to-tr from-[#07101F]/30 via-transparent to-cyan-200/10" />
                    <span className="absolute inset-0 bg-[radial-gradient(circle_at_56%_42%,transparent_0,transparent_18%,rgba(7,16,31,0.2)_58%,rgba(7,16,31,0.62)_100%)]" />
                    <DetectionBox className="left-[47%] top-[24%] h-24 w-24 sm:h-32 sm:w-32" />
                    <DetectionBox className="left-[15%] top-[52%] h-14 w-14 opacity-70 sm:h-20 sm:w-20" />
                    <span className="absolute left-[50%] top-[21%] rounded-full border border-cyan-100/30 bg-[#06121f]/75 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.14em] text-cyan-100 backdrop-blur-md">
                      Region selected
                    </span>

                    <div className="absolute inset-x-4 bottom-4 grid gap-2 sm:inset-x-5 sm:grid-cols-3">
                      {[
                        ["Signal", "Region surfaced"],
                        ["Review", "Human verified"],
                        ["Lineage", "Evidence linked"],
                      ].map(([label, value]) => (
                        <div key={label} className="rounded-xl border border-white/15 bg-[#07101F]/75 px-3 py-2.5 backdrop-blur-xl">
                          <p className="text-[8px] font-semibold uppercase tracking-[0.18em] text-cyan-200/60">{label}</p>
                          <p className="mt-1 flex items-center gap-1.5 text-[10px] font-semibold text-white sm:text-[11px]">
                            <Check className="h-3 w-3 text-emerald-300" />
                            {value}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <p className="mt-4 text-center text-[10px] uppercase tracking-[0.2em] text-slate-400">
                Illustrative workflow · not a diagnostic output
              </p>
            </div>

            <div className="divide-y divide-white/10">
              {chapters.map(({ number, icon: Icon, eyebrow, title, body }) => (
                <article key={number} className="group grid grid-cols-[3.25rem_1fr] gap-4 py-9 first:pt-0 sm:grid-cols-[4.5rem_1fr] sm:gap-6 sm:py-11">
                  <div>
                    <span className="font-display text-2xl font-semibold text-white/20 transition-colors group-hover:text-cyan-300/70">{number}</span>
                    <span className="mt-4 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-cyan-300 transition-all group-hover:border-cyan-300/30 group-hover:bg-cyan-300/10">
                      <Icon className="h-[18px] w-[18px]" />
                    </span>
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-200/70">{eyebrow}</p>
                    <h3 className="mt-2 font-display text-xl font-semibold leading-snug text-white sm:text-2xl">{title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/55 sm:text-base">{body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
