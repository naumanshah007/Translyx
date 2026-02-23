import { Card, CardContent } from "@/components/ui/Card";
import { Prose } from "@/components/ui/Prose";
import { CTA } from "@/components/sections/CTA";
import { Hero } from "@/components/sections/Hero";
import { siteConfig } from "@/config/site";
import { Brain, Zap, ShieldAlert, ShieldCheck } from "lucide-react";
import { PatternOverlay } from "@/components/ui/DecorativeElements";
import Link from "next/link";

export const metadata = {
  title: "AI Solutions for Healthcare",
  description: `How ${siteConfig.companyName} connects clinical AI adoption with data privacy — and why Privexa is the privacy layer healthcare organizations need.`,
  keywords: ["AI healthcare", "healthcare data privacy", "Privexa", "NZ Privacy Act", "clinical AI", "patient data protection", "healthcare technology"],
};

const steps = [
  { id: "healthcare-ai", label: "Healthcare AI", icon: Zap },
  { id: "data-privacy-gap", label: "The gap", icon: ShieldAlert },
  { id: "privexa", label: "Privexa", icon: ShieldCheck },
];

export default function AISolutionsPage() {
  return (
    <>
      <Hero
        headline="AI Solutions for Healthcare"
        description="Translyx works at the intersection of clinical innovation and responsible technology adoption. As AI becomes embedded in diagnostic, research, and administrative workflows, the question of how patient data is protected has never been more important."
        badge={{ text: "AI & Privacy", icon: <Brain className="w-4 h-4" /> }}
        className="py-12 sm:py-14 md:py-16 lg:py-20"
      />

      {/* Content block — parallel grid on desktop, stacked on mobile */}
      <section className="relative py-6 sm:py-8 bg-white dark:bg-slate-950">
        <PatternOverlay pattern="topo" opacity={0.03} className="text-primary-500/20" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Nav pills — icon + label, no numbers */}
            <nav className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-5 sm:mb-6" aria-label="Page sections">
              {steps.map(({ id, label, icon: Icon }) => (
                <Link
                  key={id}
                  href={`#${id}`}
                  className="group inline-flex items-center gap-2.5 min-h-[44px] pl-3 pr-4 py-2.5 rounded-xl border border-primary-200/80 dark:border-primary-700/60 bg-white dark:bg-slate-900/80 shadow-sm hover:shadow-md hover:border-primary-400/80 dark:hover:border-primary-500/60 hover:bg-primary-50/50 dark:hover:bg-primary-950/30 transition-all duration-200"
                >
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500/20 to-cyan-500/20 text-primary-600 dark:text-primary-400 group-hover:from-primary-500/30 group-hover:to-cyan-500/30 transition-colors">
                    <Icon className="w-4 h-4" />
                  </span>
                  <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">{label}</span>
                </Link>
              ))}
            </nav>

            {/* Row 1: Sections 1 and 2 — parallel on desktop */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5">
              {/* Section 1 */}
              <div id="healthcare-ai" className="scroll-mt-24 sm:scroll-mt-28">
                <div className="flex items-start gap-3 sm:gap-4 mb-3">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary-500/15 flex items-center justify-center">
                    <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-50">Healthcare AI is moving fast</h2>
                  </div>
                </div>
                <Card cornerAccent variant="gradient-border" className="p-4 sm:p-5 lg:p-6">
                  <CardContent className="pt-0">
                    <Prose>
                      <p>
                        Clinical AI tools are accelerating diagnoses, improving research outcomes, and streamlining hospital operations. But most AI platforms require data to leave your environment — creating compliance exposure that many healthcare organizations are only beginning to understand.
                      </p>
                    </Prose>
                  </CardContent>
                </Card>
              </div>

              {/* Section 2 */}
              <div id="data-privacy-gap" className="scroll-mt-24 sm:scroll-mt-28">
                <div className="flex items-start gap-3 sm:gap-4 mb-3">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-amber-500/15 flex items-center justify-center">
                    <ShieldAlert className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600 dark:text-amber-400" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-50">The data privacy gap</h2>
                  </div>
                </div>
                <Card variant="gradient-border" className="p-4 sm:p-5 lg:p-6 border-amber-200/30 dark:border-amber-800/30">
                  <CardContent className="pt-0">
                    <Prose>
                      <p>
                        Under the NZ Privacy Act 2020 and international health data frameworks, organizations have an obligation to protect patient information at every step — including when it is processed by AI systems. Sending raw patient data to external LLMs or cloud analytics platforms creates risk that standard AI vendor agreements do not fully address.
                      </p>
                    </Prose>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Row 2: Section 3 — full width */}
            <div id="privexa" className="scroll-mt-24 sm:scroll-mt-28 mt-4 sm:mt-5">
              <div className="flex items-start gap-3 sm:gap-4 mb-3">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-cyan-500/15 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-600 dark:text-cyan-400" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-50">Privexa: AI privacy for healthcare</h2>
                </div>
              </div>
              <Card cornerAccent variant="gradient-border" className="p-4 sm:p-5 lg:p-6">
                <CardContent className="pt-0">
                  <Prose className="space-y-4">
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
        </div>
      </section>

      <CTA
        title="Interested in how Privexa can support your organization's AI adoption?"
        description="Contact us at info@privexa.co"
        primaryCTA={{ label: "Request a conversation", href: "/contact" }}
        secondaryCTA={{ label: "Learn more about Privexa", href: "https://privexa.co", external: true }}
      />
    </>
  );
}
