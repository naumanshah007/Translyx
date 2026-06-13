import Link from "next/link";
import { ArrowRight, Handshake, ShieldCheck, FlaskConical } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { BrandMark } from "@/components/ui/Brand";
import { SectionHeader } from "@/components/ui/SectionHeader";

interface Branch {
  label: string;
  title: string;
  body: string;
  href: string;
  cta: string;
  icon: LucideIcon;
  color: string;
  soft: string;
}

const branches: Branch[] = [
  {
    label: "Partner Products",
    title: "Aiforia & Algoscope",
    body: "Aiforia digital pathology AI and Algoscope surgery-to-pathology workflow automation — partner products Translyx brings to New Zealand.",
    href: "/products",
    cta: "Explore products",
    icon: Handshake,
    color: "#22D3EE",
    soft: "rgba(34,211,238,0.14)",
  },
  {
    label: "Pipeline Capabilities",
    title: "Governed Clinical AI Workflows",
    body: "AI Wrapper, Cloud Shield, Scribe, Trace, and Clinical Triage — workflow capabilities under evaluation and development, not publicly launched products.",
    href: "/pipeline",
    cta: "View capabilities",
    icon: ShieldCheck,
    color: "#A78BFA",
    soft: "rgba(139,92,246,0.14)",
  },
  {
    label: "Diagnostic Innovation",
    title: "Clinical & Diagnostic Pipeline",
    body: "AMR, sepsis, POCT, oncology, endocrine, cardiac, and precision medicine opportunities for New Zealand and Oceania.",
    href: "/pipeline#diagnostic-innovation",
    cta: "View pipeline",
    icon: FlaskConical,
    color: "#2DD4BF",
    soft: "rgba(45,212,191,0.14)",
  },
];

export function EcosystemDiagram() {
  return (
    <section className="relative overflow-hidden bg-deep py-18 sm:py-24">
      <div className="pointer-events-none absolute inset-0 grid-overlay opacity-40" />
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          align="center"
          tone="dark"
          eyebrow="Product ecosystem"
          title={
            <>
              One company. A governed bridge between global innovation and{" "}
              <span className="text-gradient-brand">local clinical adoption.</span>
            </>
          }
          description="Translyx connects partner digital pathology AI, governed clinical AI workflow capabilities, and a diagnostic innovation pipeline — under one accountable, New Zealand-based partner."
          maxWidth="max-w-3xl"
          className="mb-14"
        />

        {/* Parent node */}
        <div className="mx-auto max-w-md">
          <div className="glass-panel relative flex flex-col items-center rounded-2xl px-6 py-6 text-center ring-1 ring-cyan-400/20">
            <span className="pointer-events-none absolute -top-10 left-1/2 h-20 w-20 -translate-x-1/2 rounded-full bg-cyan-400/15 blur-2xl" />
            <BrandMark glow className="h-9 w-auto" />
            <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-cyan-200/70">
              Clinical technology partner
            </p>
            <h3 className="mt-1 font-display text-2xl font-semibold text-white">Translyx Limited</h3>
            <p className="mt-1 text-xs text-slate-400">Auckland, New Zealand · Oceania</p>
          </div>
        </div>

        {/* connector */}
        <div className="mx-auto h-10 w-px bg-gradient-to-b from-cyan-400/50 to-white/10" />

        {/* Branches */}
        <div className="relative">
          <div className="absolute left-[16.66%] right-[16.66%] top-0 hidden h-px bg-gradient-to-r from-transparent via-cyan-400/25 to-transparent sm:block" />
          <div className="grid gap-5 pt-0 sm:grid-cols-3 sm:pt-8">
            {branches.map((b) => {
              const Icon = b.icon;
              return (
                <div key={b.title} className="relative">
                  <span className="absolute -top-8 left-1/2 hidden h-8 w-px -translate-x-1/2 bg-cyan-400/25 sm:block" />
                  <Link
                    href={b.href}
                    className="group relative flex h-full flex-col overflow-hidden rounded-2xl glass-panel p-6 transition-all duration-300 hover:-translate-y-1 hover:ring-1 hover:ring-cyan-400/30"
                    style={{ ["--c" as string]: b.color }}
                  >
                    <span
                      className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
                      style={{ background: b.soft }}
                    />
                    <span
                      className="flex h-12 w-12 items-center justify-center rounded-xl ring-1 ring-inset ring-white/15"
                      style={{ background: b.soft }}
                    >
                      <Icon className="h-[22px] w-[22px]" style={{ color: b.color }} aria-hidden="true" />
                    </span>
                    <p
                      className="mt-4 text-[10px] font-semibold uppercase tracking-[0.16em]"
                      style={{ color: b.color }}
                    >
                      {b.label}
                    </p>
                    <h4 className="mt-1.5 font-display text-lg font-semibold text-white">{b.title}</h4>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-white/65">{b.body}</p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-white">
                      {b.cta}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-xs leading-relaxed text-slate-500">
          Aiforia and Algoscope are partner products Translyx brings to New Zealand — not Translyx-owned
          products. Pipeline capabilities are under evaluation or development and are not publicly launched products.
        </p>
      </div>
    </section>
  );
}
