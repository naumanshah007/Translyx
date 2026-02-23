import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Prose } from "@/components/ui/Prose";
import { CTA } from "@/components/sections/CTA";
import { siteConfig } from "@/config/site";
import { Brain } from "lucide-react";
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

export default function AISolutionsPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24">
      <div className="max-w-6xl mx-auto relative">
        <PatternOverlay pattern="topo" opacity={0.04} className="text-primary-500/30" />

        {/* Page Header */}
        <div className="text-center mb-16 sm:mb-20 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 sm:w-20 md:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-primary-500 to-cyan-500 rounded-full mb-4 sm:mb-6" />
          <div className="inline-flex items-center gap-2 px-2 py-0.5 sm:px-3 sm:py-1 bg-primary-100 dark:bg-primary-900/30 rounded-full mb-3 sm:mb-4 mt-6 sm:mt-8">
            <Brain className="w-3 h-3 sm:w-4 sm:h-4 text-primary-600 dark:text-primary-400" />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-gray-50">AI Solutions for Healthcare</h1>
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Translyx works at the intersection of clinical innovation and responsible technology adoption. As AI becomes embedded in diagnostic, research, and administrative workflows, the question of how patient data is protected has never been more important.
          </p>

          {/* In-page navigation */}
          <nav className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-8" aria-label="Page sections">
            {sectionAnchors.map(({ id, label }) => (
              <Link
                key={id}
                href={`#${id}`}
                className="inline-flex items-center min-h-[44px] px-4 py-2 rounded-full text-sm font-semibold bg-primary-50 dark:bg-primary-900/30 border border-primary-200/70 dark:border-primary-700/50 text-primary-700 dark:text-primary-300 hover:bg-primary-100 dark:hover:bg-primary-900/50 hover:border-primary-400/70 dark:hover:border-primary-600/60 hover:text-primary-800 dark:hover:text-primary-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50 focus-visible:ring-offset-2 active:scale-[0.98] transition-all duration-200"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Section 1: Healthcare AI is moving fast */}
        <section id="healthcare-ai" className="scroll-mt-24 sm:scroll-mt-28 mb-20 sm:mb-24 md:mb-28">
          <Card cornerAccent variant="gradient-border" className="p-4 sm:p-6 lg:p-8 md:p-10 lg:p-12">
            <CardHeader className="pb-6">
              <CardTitle className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-50">Healthcare AI is moving fast</CardTitle>
            </CardHeader>
            <CardContent>
              <Prose>
                <p>
                  Clinical AI tools are accelerating diagnoses, improving research outcomes, and streamlining hospital operations. But most AI platforms require data to leave your environment — creating compliance exposure that many healthcare organizations are only beginning to understand.
                </p>
              </Prose>
            </CardContent>
          </Card>
        </section>

        {/* Section 2: The data privacy gap */}
        <section id="data-privacy-gap" className="scroll-mt-24 sm:scroll-mt-28 mb-20 sm:mb-24 md:mb-28">
          <Card variant="gradient-border" className="p-4 sm:p-6 lg:p-8 md:p-10 lg:p-12">
            <CardHeader className="pb-6">
              <CardTitle className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-50">The data privacy gap</CardTitle>
            </CardHeader>
            <CardContent>
              <Prose>
                <p>
                  Under the NZ Privacy Act 2020 and international health data frameworks, organizations have an obligation to protect patient information at every step — including when it is processed by AI systems. Sending raw patient data to external LLMs or cloud analytics platforms creates risk that standard AI vendor agreements do not fully address.
                </p>
              </Prose>
            </CardContent>
          </Card>
        </section>

        {/* Section 3: Privexa */}
        <section id="privexa" className="scroll-mt-24 sm:scroll-mt-28 mb-20 sm:mb-24 md:mb-28">
          <Card variant="gradient-border" className="p-4 sm:p-6 lg:p-8 md:p-10 lg:p-12">
            <CardHeader className="pb-6">
              <CardTitle className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-50">Privexa: AI privacy for healthcare organizations</CardTitle>
            </CardHeader>
            <CardContent>
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
        </section>
      </div>

      <CTA
        title="Interested in how Privexa can support your organization's AI adoption?"
        primaryCTA={{ label: "Request a conversation", href: "/contact" }}
        secondaryCTA={{ label: "Learn more about Privexa", href: "https://privexa.co", external: true }}
      />
    </div>
  );
}
