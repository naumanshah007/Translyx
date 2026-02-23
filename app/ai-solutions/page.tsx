import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Prose } from "@/components/ui/Prose";
import { CTA } from "@/components/sections/CTA";
import { Hero } from "@/components/sections/Hero";
import { SectionDivider } from "@/components/ui/DecorativeElements";
import { siteConfig } from "@/config/site";
import { Brain, Zap, ShieldAlert, ShieldCheck } from "lucide-react";
import { PatternOverlay } from "@/components/ui/DecorativeElements";
import Link from "next/link";

export const metadata = {
  title: "AI Solutions for Healthcare",
  description: `How ${siteConfig.companyName} connects clinical AI adoption with data privacy — and why Privexa is the privacy layer healthcare organizations need.`,
  keywords: ["AI healthcare", "healthcare data privacy", "Privexa", "NZ Privacy Act", "clinical AI", "patient data protection", "healthcare technology"],
};

const sectionAnchors = [
  { id: "healthcare-ai", label: "Healthcare AI" },
  { id: "data-privacy-gap", label: "Data Privacy" },
  { id: "privexa", label: "Privexa" },
];

const steps = [
  { id: "healthcare-ai", step: "01", label: "Healthcare AI" },
  { id: "data-privacy-gap", step: "02", label: "The gap" },
  { id: "privexa", step: "03", label: "Privexa" },
];

export default function AISolutionsPage() {
  return (
    <>
      <Hero
        headline="AI Solutions for Healthcare"
        description="Translyx works at the intersection of clinical innovation and responsible technology adoption. As AI becomes embedded in diagnostic, research, and administrative workflows, the question of how patient data is protected has never been more important."
        badge={{ text: "AI & Privacy", icon: <Brain className="w-4 h-4" /> }}
      />

      <SectionDivider variant="gradient" />

      {/* In-page nav + journey strip */}
      <section className="relative py-8 sm:py-10 bg-white/80 dark:bg-slate-950/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <p className="text-center text-sm font-semibold uppercase tracking-widest text-primary-600 dark:text-primary-400 mb-6">The journey</p>
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-0 sm:flex-nowrap">
              {steps.map(({ id, step, label }, i) => (
                <div key={id} className="flex items-center">
                  <Link
                    href={`#${id}`}
                    className="group inline-flex items-center gap-2 sm:gap-3 min-h-[44px] px-4 py-2.5 rounded-xl border border-primary-200/80 dark:border-primary-700/60 bg-white/90 dark:bg-slate-900/80 shadow-sm hover:shadow-[0_8px_30px_rgba(59,130,246,0.15)] hover:border-primary-400/80 dark:hover:border-primary-500/60 transition-all duration-300"
                  >
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500/20 to-cyan-500/20 text-primary-700 dark:text-primary-300 font-bold text-sm group-hover:from-primary-500/35 group-hover:to-cyan-500/35 transition-colors">
                      {step}
                    </span>
                    <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">{label}</span>
                  </Link>
                  {i < steps.length - 1 && (
                    <div className="hidden sm:block w-8 md:w-12 h-px mx-1 md:mx-2 bg-gradient-to-r from-primary-300/60 to-cyan-300/60 flex-shrink-0" aria-hidden />
                  )}
                </div>
              ))}
            </div>
            <nav className="flex flex-wrap justify-center gap-2 mt-6" aria-label="Page sections">
              {sectionAnchors.map(({ id, label }) => (
                <Link
                  key={id}
                  href={`#${id}`}
                  className="inline-flex items-center min-h-[40px] px-3 py-2 rounded-full text-xs font-medium bg-primary-50 dark:bg-primary-900/30 border border-primary-200/70 dark:border-primary-700/50 text-primary-700 dark:text-primary-300 hover:bg-primary-100 dark:hover:bg-primary-900/50 hover:border-primary-400/70 dark:hover:border-primary-600/60 transition-all duration-200"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </section>

      {/* Section 1: Healthcare AI */}
      <section id="healthcare-ai" className="scroll-mt-24 sm:scroll-mt-28 relative py-16 sm:py-20 md:py-24 bg-gradient-to-b from-white to-primary-50/30 dark:from-slate-950 dark:to-primary-950/20">
        <PatternOverlay pattern="topo" opacity={0.03} className="text-primary-500/20" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6 mb-8">
              <div className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-primary-500/20 to-cyan-500/20 border border-primary-200/60 dark:border-primary-700/50 flex items-center justify-center shadow-[0_8px_24px_rgba(59,130,246,0.12)]">
                <Zap className="w-7 h-7 sm:w-8 sm:h-8 text-primary-600 dark:text-primary-400" />
              </div>
              <div>
                <span className="inline-block text-xs font-bold uppercase tracking-wider text-primary-600 dark:text-primary-400 mb-1">Step 01</span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-50">Healthcare AI is moving fast</h2>
              </div>
            </div>
            <Card cornerAccent variant="gradient-border" className="p-4 sm:p-6 lg:p-8 md:p-10 lg:p-12 shadow-[0_20px_50px_-20px_rgba(15,23,42,0.25)]">
              <CardContent className="pt-6">
                <Prose>
                  <p>
                    Clinical AI tools are accelerating diagnoses, improving research outcomes, and streamlining hospital operations. But most AI platforms require data to leave your environment — creating compliance exposure that many healthcare organizations are only beginning to understand.
                  </p>
                </Prose>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 2: Data privacy gap */}
      <section id="data-privacy-gap" className="scroll-mt-24 sm:scroll-mt-28 relative py-16 sm:py-20 md:py-24 bg-primary-50/40 dark:bg-slate-900/60">
        <PatternOverlay pattern="dots" opacity={0.04} className="text-primary-500/25" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6 mb-8">
              <div className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-amber-500/20 to-primary-500/20 border border-amber-200/60 dark:border-amber-700/40 flex items-center justify-center shadow-[0_8px_24px_rgba(245,158,11,0.12)]">
                <ShieldAlert className="w-7 h-7 sm:w-8 sm:h-8 text-amber-600 dark:text-amber-400" />
              </div>
              <div>
                <span className="inline-block text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-1">Step 02</span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-50">The data privacy gap</h2>
              </div>
            </div>
            <Card variant="gradient-border" className="p-4 sm:p-6 lg:p-8 md:p-10 lg:p-12 shadow-[0_20px_50px_-20px_rgba(15,23,42,0.2)] border-amber-200/30 dark:border-amber-800/30">
              <CardContent className="pt-6">
                <Prose>
                  <p>
                    Under the NZ Privacy Act 2020 and international health data frameworks, organizations have an obligation to protect patient information at every step — including when it is processed by AI systems. Sending raw patient data to external LLMs or cloud analytics platforms creates risk that standard AI vendor agreements do not fully address.
                  </p>
                </Prose>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 3: Privexa */}
      <section id="privexa" className="scroll-mt-24 sm:scroll-mt-28 relative py-16 sm:py-20 md:py-24 bg-gradient-to-b from-primary-50/20 to-white dark:from-primary-950/10 dark:to-slate-950">
        <PatternOverlay pattern="topo" opacity={0.03} className="text-primary-500/20" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6 mb-8">
              <div className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-primary-500/20 border border-cyan-200/60 dark:border-cyan-700/50 flex items-center justify-center shadow-[0_8px_24px_rgba(34,211,238,0.15)]">
                <ShieldCheck className="w-7 h-7 sm:w-8 sm:h-8 text-cyan-600 dark:text-cyan-400" />
              </div>
              <div>
                <span className="inline-block text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 mb-1">Step 03</span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-50">Privexa: AI privacy for healthcare organizations</h2>
              </div>
            </div>
            <Card cornerAccent variant="gradient-border" className="p-4 sm:p-6 lg:p-8 md:p-10 lg:p-12 shadow-[0_20px_50px_-20px_rgba(15,23,42,0.25)]">
<CardContent className="pt-6">
              <Prose className="space-y-6">
                  <p>
                    Privexa is an enterprise AI privacy platform designed to ensure that sensitive patient data never reaches external AI systems in its original form.
                  </p>
                  <p>
                    Before any data leaves your environment, Privexa detects and replaces sensitive fields — names, dates of birth, NHI numbers, clinical identifiers — with safe placeholders. AI systems and cloud platforms work with the placeholders. Your patient data stays inside your boundary.
                  </p>
                  <p>
                    For healthcare organizations adopting AI diagnostic tools, research platforms, or cloud data infrastructure, Privexa provides the privacy layer that makes compliant AI adoption possible.
                  </p>
                </Prose>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <CTA
        title="Interested in how Privexa can support your organization's AI adoption?"
        primaryCTA={{ label: "Request a conversation", href: "/contact" }}
        secondaryCTA={{ label: "Learn more about Privexa", href: "https://privexa.co", external: true }}
      />
    </>
  );
}
