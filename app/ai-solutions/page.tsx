import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Prose } from "@/components/ui/Prose";
import { CTA } from "@/components/sections/CTA";
import { Hero } from "@/components/sections/Hero";
import { siteConfig } from "@/config/site";
import { Brain, Zap, ShieldAlert, ShieldCheck, Lock, Database, Cloud } from "lucide-react";
import { PatternOverlay } from "@/components/ui/DecorativeElements";
import Link from "next/link";

export const metadata = {
  title: "AI Solutions — Translyx Limited",
  description: "Translyx supports responsible AI adoption in New Zealand healthcare through partnership with Privexa, an enterprise AI privacy platform.",
  keywords: ["AI healthcare", "healthcare data privacy", "Privexa", "NZ Privacy Act", "clinical AI", "patient data protection", "healthcare technology"],
};

const sectionAnchors = [
  { id: "case-for-ai", label: "The Case for AI" },
  { id: "privacy-challenge", label: "Privacy Challenge" },
  { id: "privexa", label: "Privexa" },
  { id: "compliance", label: "Compliance" },
];

const featureCards = [
  {
    id: "field-protection",
    title: "Field-Level Protection",
    body: "Every sensitive field in every clinical document, message, or record is identified and replaced before transmission. Detection covers standard clinical identifiers and can be trained on entity types specific to your organization's data.",
    icon: Lock,
  },
  {
    id: "local-vault",
    title: "Local Vault — Nothing Leaves",
    body: "Token mappings are stored within your infrastructure. Privexa does not transmit or store patient data externally. The privacy guarantee is architectural, not just contractual.",
    icon: Database,
  },
  {
    id: "cloud-shield",
    title: "Cloud Pipeline Protection (Privexa Cloud Shield)",
    body: "For organizations moving clinical data to cloud platforms — AWS, Azure, GCP, or data warehouses — Cloud Shield enforces the same field-level boundary for data pipelines. Sensitive fields never reach cloud storage in their original form.",
    icon: Cloud,
  },
];

export default function AISolutionsPage() {
  return (
    <>
      <Hero
        headline="AI Solutions for Healthcare"
        description="Clinical AI is accelerating diagnoses, improving research outcomes, and streamlining hospital operations across New Zealand. Translyx supports healthcare organizations in adopting these technologies responsibly — ensuring that clinical innovation does not come at the cost of patient privacy or regulatory compliance."
        badge={{ text: "AI & Privacy", icon: <Brain className="w-4 h-4" /> }}
        className="py-12 sm:py-14 md:py-16 lg:py-20"
      />

      <section className="relative py-16 sm:py-20 md:py-24 bg-white dark:bg-slate-950">
        <PatternOverlay pattern="topo" opacity={0.03} className="text-primary-500/20" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* In-page nav */}
            <nav className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12" aria-label="Page sections">
              {sectionAnchors.map(({ id, label }) => (
                <Link
                  key={id}
                  href={`#${id}`}
                  className="inline-flex items-center min-h-[40px] px-4 py-2 rounded-xl border border-primary-200/80 dark:border-primary-700/60 bg-white dark:bg-slate-900/80 shadow-sm hover:shadow-md hover:border-primary-400/80 dark:hover:border-primary-500/60 transition-all text-sm font-semibold text-gray-800 dark:text-gray-200"
                >
                  {label}
                </Link>
              ))}
            </nav>

            {/* Section 1 — The Case for Clinical AI */}
            <div id="case-for-ai" className="scroll-mt-24 sm:scroll-mt-28 mb-16 sm:mb-20">
              <div className="flex items-start gap-3 sm:gap-4 mb-4">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary-500/15 flex items-center justify-center">
                  <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-50">The Case for Clinical AI</h2>
              </div>
              <Card variant="gradient-border" className="p-4 sm:p-6 lg:p-8">
                <CardContent className="pt-0">
                  <Prose className="space-y-6">
                    <p>
                      From diagnostic imaging analysis to administrative automation and clinical decision support, AI is delivering measurable improvements in patient outcomes and operational efficiency. New Zealand healthcare organizations are at a pivotal moment — early adopters are gaining significant advantages, while those waiting face increasing pressure from staff, leadership, and patients who expect modern tools.
                    </p>
                    <p>
                      Translyx helps organizations identify, evaluate, and implement AI solutions that are clinically validated, fit for purpose, and safe to deploy in New Zealand&apos;s healthcare environment.
                    </p>
                  </Prose>
                </CardContent>
              </Card>
            </div>

            {/* Section 2 — The Data Privacy Challenge */}
            <div id="privacy-challenge" className="scroll-mt-24 sm:scroll-mt-28 mb-16 sm:mb-20">
              <div className="flex items-start gap-3 sm:gap-4 mb-4">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-amber-500/15 flex items-center justify-center">
                  <ShieldAlert className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600 dark:text-amber-400" />
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-50">The Data Privacy Challenge</h2>
              </div>
              <Card variant="gradient-border" className="p-4 sm:p-6 lg:p-8 border-amber-200/30 dark:border-amber-800/30">
                <CardContent className="pt-0">
                  <Prose className="space-y-6">
                    <p>
                      Most AI platforms require data to leave your environment. Patient names, NHI numbers, dates of birth, clinical notes, and diagnostic details are routinely transmitted to external systems when staff use AI tools — often without explicit awareness of the privacy implications.
                    </p>
                    <p>
                      Under the New Zealand Privacy Act 2020, health information is among the most sensitive categories of personal data. Organizations have a legal and ethical obligation to ensure that AI adoption does not create exposure that existing governance frameworks were not designed to handle.
                    </p>
                    <p>
                      The question is not whether to adopt AI. The question is how to adopt it without creating privacy risk that undermines patient trust and organizational compliance.
                    </p>
                  </Prose>
                </CardContent>
              </Card>
            </div>

            {/* Section 3 — Privexa partnership + feature cards */}
            <div id="privexa" className="scroll-mt-24 sm:scroll-mt-28 mb-16 sm:mb-20">
              <div className="flex items-start gap-3 sm:gap-4 mb-4">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-cyan-500/15 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-600 dark:text-cyan-400" />
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-50">Privexa — AI Privacy for Healthcare</h2>
              </div>
              <Card variant="gradient-border" cornerAccent className="p-4 sm:p-6 lg:p-8 mb-8">
                <CardContent className="pt-0">
                  <Prose className="space-y-6">
                    <p>
                      Translyx has partnered with Privexa, a New Zealand enterprise AI privacy platform, to provide healthcare organizations with the privacy layer that makes responsible AI adoption possible.
                    </p>
                    <p>
                      Before any data reaches an AI system, Privexa detects and replaces sensitive fields — patient names, NHI numbers, dates of birth, clinical identifiers, and custom entity types specific to your organization — with safe placeholders. AI systems work with the placeholders. Original patient data never leaves your environment.
                    </p>
                    <p>
                      When AI responses return, Privexa restores the original context seamlessly. Your clinical teams experience the full benefit of AI assistance. Your patients&apos; data stays where it belongs.
                    </p>
                  </Prose>
                </CardContent>
              </Card>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {featureCards.map(({ id, title, body, icon: Icon }) => (
                  <Card key={id} variant="gradient-border" className="p-4 sm:p-5 flex flex-col h-full">
                    <CardHeader className="flex-shrink-0">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-xl bg-primary-500/15 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                        </div>
                        <CardTitle className="text-base sm:text-lg font-bold text-gray-900 dark:text-gray-100">{title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-1 pt-0">
                      <p className="text-sm sm:text-base leading-relaxed text-gray-700 dark:text-gray-300 text-justify hyphens-auto break-words">
                        {body}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Section 4 — Compliance callout */}
            <div id="compliance" className="scroll-mt-24 sm:scroll-mt-28">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-50 mb-6">Designed for Regulated Healthcare</h2>
              <Card variant="gradient-border" className="p-4 sm:p-6 lg:p-8 border-primary-200/50 dark:border-primary-700/50">
                <CardContent className="pt-0">
                  <p className="text-base sm:text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Privexa is built with New Zealand&apos;s regulatory environment in mind:</p>
                  <ul className="space-y-3 text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-primary-500 mt-1">—</span>
                      <span><strong>NZ Privacy Act 2020</strong> — health information privacy principles</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary-500 mt-1">—</span>
                      <span><strong>HIPAA alignment</strong> — for organizations with international partners</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary-500 mt-1">—</span>
                      <span><strong>GDPR readiness</strong> — for research and cross-border data workflows</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary-500 mt-1">—</span>
                      <span><strong>Immutable audit trails</strong> — tamper-evident records of every data handling event for compliance reporting</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <CTA
        title="Interested in AI-ready privacy for your organization?"
        description="Translyx and Privexa work together to support compliant AI adoption across New Zealand healthcare. Whether you are evaluating your first AI tool or managing an existing deployment, we can help you understand your exposure and implement the right protection."
        primaryCTA={{ label: "Talk to Us", href: "/contact" }}
        secondaryCTA={{ label: "Learn more about Privexa", href: "https://privexa.co", external: true }}
      />
    </>
  );
}
