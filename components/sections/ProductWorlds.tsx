import Link from "next/link";
import { ArrowRight, CheckCircle2, Microscope, ScanLine, Workflow } from "lucide-react";
import { SlideViewerPanel } from "@/components/sections/SlideViewerPanel";
import { SampleJourneyDiagram } from "@/components/sections/SampleJourneyDiagram";

const aiforiaPoints = ["Clinical and research pathology", "AI-assisted image analysis", "Locally represented in New Zealand"];
const algoscopePoints = ["Operating room to laboratory", "Computer vision and traceability", "Workflow context preserved end to end"];

function FeatureList({ items, tone }: { items: string[]; tone: "cyan" | "violet" }) {
  return (
    <ul className="mt-6 space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex items-center gap-2.5 text-sm text-slate-600">
          <CheckCircle2 className={tone === "cyan" ? "h-4 w-4 text-cyan-500" : "h-4 w-4 text-violet-500"} />
          {item}
        </li>
      ))}
    </ul>
  );
}

export function ProductWorlds() {
  return (
    <section className="overflow-hidden bg-[#F4F7FB] py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1240px]">
          <div className="mx-auto mb-14 max-w-3xl text-center sm:mb-20">
            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-gradient-to-r from-transparent to-cyan-500" />
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#0891B2]">Partner product worlds</p>
              <span className="h-px w-8 bg-gradient-to-r from-cyan-500 to-transparent" />
            </div>
            <h2 className="font-display text-[2.2rem] font-semibold leading-[1.08] tracking-[-0.025em] text-[#0F1C3F] sm:text-[3.2rem]">
              Two clinical journeys. One accountable regional partner.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
              Translyx brings specialist technologies into context—showing how they fit the workflow, the evidence and the local adoption pathway.
            </p>
          </div>

          <div className="space-y-6 sm:space-y-8">
            <article className="relative overflow-hidden rounded-[2rem] border border-cyan-200/60 bg-white shadow-[0_30px_90px_-55px_rgba(8,145,178,0.55)]">
              <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-cyan-200/30 blur-3xl" />
              <div className="relative grid lg:grid-cols-[0.78fr_1.22fr] lg:items-stretch">
                <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-600 ring-1 ring-cyan-200/60">
                    <Microscope className="h-5 w-5" />
                  </span>
                  <p className="mt-7 text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-700">Authorised partner solution</p>
                  <h3 className="mt-2 font-display text-3xl font-semibold text-[#0F1C3F] sm:text-4xl">Aiforia</h3>
                  <p className="mt-4 text-base leading-relaxed text-slate-600">
                    AI-assisted digital pathology for clinical, preclinical and research workflows—represented by Translyx in New Zealand.
                  </p>
                  <FeatureList items={aiforiaPoints} tone="cyan" />
                  <Link href="/products/aiforia" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-cyan-700 transition-colors hover:text-[#0F1C3F]">
                    Explore Aiforia
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>

                <div className="relative flex min-h-[440px] items-center bg-[#081326] p-5 sm:p-8 lg:min-h-[580px] lg:p-12">
                  <div className="pointer-events-none absolute inset-0 grid-overlay opacity-30" />
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_35%,rgba(34,211,238,0.18),transparent_45%)]" />
                  <div className="relative mx-auto w-full max-w-[560px] lg:scale-105">
                    <SlideViewerPanel />
                  </div>
                </div>
              </div>
            </article>

            <article className="relative overflow-hidden rounded-[2rem] border border-violet-200/60 bg-white shadow-[0_30px_90px_-55px_rgba(124,58,237,0.45)]">
              <div className="absolute -left-20 -bottom-20 h-72 w-72 rounded-full bg-violet-200/25 blur-3xl" />
              <div className="relative grid lg:grid-cols-[1.22fr_0.78fr] lg:items-stretch">
                <div className="relative order-2 flex min-h-[420px] items-center bg-[#0B1025] p-5 sm:p-8 lg:order-1 lg:min-h-[540px] lg:p-10">
                  <div className="pointer-events-none absolute inset-0 grid-overlay opacity-25" />
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_32%_65%,rgba(139,92,246,0.18),transparent_46%)]" />
                  <div className="relative mx-auto w-full max-w-[760px]">
                    <div className="mb-4 flex items-center justify-between px-1">
                      <span className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-violet-200/70">
                        <ScanLine className="h-3.5 w-3.5" />
                        Specimen trace active
                      </span>
                      <span className="text-[10px] text-slate-500">Six connected stages</span>
                    </div>
                    <SampleJourneyDiagram />
                  </div>
                </div>

                <div className="order-1 flex flex-col justify-center p-7 sm:p-10 lg:order-2 lg:p-14">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-50 text-violet-600 ring-1 ring-violet-200/60">
                    <Workflow className="h-5 w-5" />
                  </span>
                  <p className="mt-7 text-[10px] font-semibold uppercase tracking-[0.2em] text-violet-700">Partner product</p>
                  <h3 className="mt-2 font-display text-3xl font-semibold text-[#0F1C3F] sm:text-4xl">Algoscope</h3>
                  <p className="mt-4 text-base leading-relaxed text-slate-600">
                    AI-powered surgery-to-pathology workflow automation that preserves specimen context, identity and traceability.
                  </p>
                  <FeatureList items={algoscopePoints} tone="violet" />
                  <Link href="/products/algoscope" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-violet-700 transition-colors hover:text-[#0F1C3F]">
                    Explore Algoscope
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
