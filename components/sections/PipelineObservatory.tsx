import Link from "next/link";
import { ArrowRight, FlaskConical } from "lucide-react";
import { pipelineCapabilities, stageLabels } from "@/config/pipelineCapabilities";
import { getProductIcon } from "@/lib/productIcons";

const accents = {
  cyan: { dot: "bg-cyan-300", text: "text-cyan-200", line: "from-cyan-300" },
  violet: { dot: "bg-violet-300", text: "text-violet-200", line: "from-violet-300" },
  teal: { dot: "bg-teal-300", text: "text-teal-200", line: "from-teal-300" },
  emerald: { dot: "bg-emerald-300", text: "text-emerald-200", line: "from-emerald-300" },
  sky: { dot: "bg-sky-300", text: "text-sky-200", line: "from-sky-300" },
};

export function PipelineObservatory() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-14">
            <div className="lg:pt-8">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0F1C3F] text-cyan-300 shadow-[0_15px_40px_-18px_rgba(15,28,63,0.7)]">
                <FlaskConical className="h-5 w-5" />
              </span>
              <p className="mt-7 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#0E7490]">Translyx pipeline</p>
              <h2 className="mt-3 font-display text-[2.2rem] font-semibold leading-[1.08] text-[#0F1C3F] sm:text-[3rem]">
                A clinical AI observatory—not a shelf of finished products.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-slate-600">
                Capabilities are evaluated as governed workflows, with their maturity and limitations visible from the outset.
              </p>
              <div className="mt-7 rounded-2xl border border-amber-200/70 bg-amber-50/70 p-4">
                <p className="text-xs leading-relaxed text-amber-900">
                  Pipeline capabilities are under evaluation or development and are not publicly launched products.
                </p>
              </div>
              <Link href="/pipeline" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#0F1C3F] hover:text-[#0E7490]">
                Enter the full pipeline
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] bg-[#07101F] p-4 shadow-[0_35px_90px_-45px_rgba(7,16,31,0.8)] sm:p-6 lg:p-8">
              <div className="pointer-events-none absolute inset-0 grid-overlay opacity-30" />
              <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-violet-400/10 blur-3xl" />
              <div className="relative mb-6 flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-cyan-200/60">Capability field</p>
                  <p className="mt-1 text-sm font-semibold text-white">Evaluation and development status</p>
                </div>
                <span className="flex items-center gap-2 text-[10px] text-slate-400">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-300" />
                  Observed
                </span>
              </div>

              <div className="relative divide-y divide-white/10">
                {pipelineCapabilities.map((capability, index) => {
                  const Icon = getProductIcon(capability.icon);
                  const accent = accents[capability.accent];
                  const stage = stageLabels[capability.stage];
                  return (
                    <Link
                      key={capability.slug}
                      href={capability.href}
                      className="group grid gap-3 py-5 sm:grid-cols-[2.8rem_1fr_auto] sm:items-center sm:gap-4"
                    >
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05]">
                        <Icon className={`h-5 w-5 ${accent.text}`} />
                      </span>
                      <span>
                        <span className="flex items-center gap-2">
                          <span className={`h-1.5 w-1.5 rounded-full ${accent.dot}`} />
                          <span className="font-display text-lg font-semibold text-white">{capability.title}</span>
                        </span>
                        <span className="mt-1 block text-xs leading-relaxed text-slate-400">{capability.tagline}</span>
                        <span className="mt-3 block h-px overflow-hidden bg-white/10 sm:hidden">
                          <span className={`block h-full bg-gradient-to-r ${accent.line} to-transparent`} style={{ width: `${38 + index * 10}%` }} />
                        </span>
                      </span>
                      <span className="flex items-center justify-between gap-4 sm:justify-end">
                        <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.12em] text-slate-300">
                          {stage.text}
                        </span>
                        <ArrowRight className="h-4 w-4 text-slate-600 transition-all group-hover:translate-x-1 group-hover:text-cyan-300" />
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
