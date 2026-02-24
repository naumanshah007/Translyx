import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Prose } from "@/components/ui/Prose";
import { CTA } from "@/components/sections/CTA";
import { Hero } from "@/components/sections/Hero";
import { Brain, Zap, ShieldAlert, ShieldCheck, Lock, Database, Cloud, Scale, Globe, Shield, FileCheck, FileText, BrainCircuit, ArrowRight } from "lucide-react";
import { PatternOverlay, GradientAccent, SectionDivider } from "@/components/ui/DecorativeElements";
import Link from "next/link";

export const metadata = {
  title: "AI Solutions — Translyx Limited",
  description: "Translyx supports responsible AI adoption in New Zealand healthcare through partnership with Privexa, an enterprise AI privacy platform.",
  keywords: ["AI healthcare", "healthcare data privacy", "Privexa", "NZ Privacy Act", "clinical AI", "patient data protection", "healthcare technology"],
};

const sectionAnchors = [
  { id: "case-for-ai", label: "The Case for AI", icon: Zap },
  { id: "privacy-challenge", label: "Privacy Challenge", icon: ShieldAlert },
  { id: "privexa", label: "Privexa", icon: ShieldCheck },
  { id: "compliance", label: "Compliance", icon: Scale },
];

const complianceItems = [
  { label: "NZ Privacy Act 2020", detail: "Health information privacy principles", icon: Scale },
  { label: "HIPAA alignment", detail: "For organizations with international partners", icon: Globe },
  { label: "GDPR readiness", detail: "For research and cross-border data workflows", icon: Shield },
  { label: "Immutable audit trails", detail: "Tamper-evident records for compliance reporting", icon: FileCheck },
];

const featureCards = [
  {
    id: "field-protection",
    title: "Field-Level Protection",
    body: "Every sensitive field in every clinical document, message, or record is identified and replaced before transmission. Detection covers standard clinical identifiers and can be trained on entity types specific to your organization's data.",
    icon: Lock,
    accentColor: "primary" as const,
  },
  {
    id: "local-vault",
    title: "Local Vault — Nothing Leaves",
    body: "Token mappings are stored within your infrastructure. Privexa does not transmit or store patient data externally. The privacy guarantee is architectural, not just contractual.",
    icon: Database,
    accentColor: "cyan" as const,
  },
  {
    id: "cloud-shield",
    title: "Cloud Pipeline Protection (Privexa Cloud Shield)",
    body: "For organizations moving clinical data to cloud platforms — AWS, Azure, GCP, or data warehouses — Cloud Shield enforces the same field-level boundary for data pipelines. Sensitive fields never reach cloud storage in their original form.",
    icon: Cloud,
    accentColor: "amber" as const,
  },
];

export default function AISolutionsPage() {
  return (
    <>
      <Hero
        headline="AI Solutions for Healthcare"
        description="Clinical AI is accelerating diagnoses, improving research outcomes, and streamlining hospital operations across New Zealand. Translyx supports healthcare organizations in adopting these technologies responsibly — ensuring that clinical innovation does not come at the cost of patient privacy or regulatory compliance."
        badge={{ text: "AI & Privacy", icon: <Brain className="w-4 h-4" /> }}
        primaryCTA={{ label: "Talk to Us", href: "/contact" }}
        secondaryCTA={{ label: "Learn more about Privexa", href: "https://privexa.co", external: true }}
        enhancedAurora
        decorativeShapes
        className="py-12 sm:py-14 md:py-16 lg:py-20"
      />

      <div id="ai-solutions-content">
        {/* In-page nav — sticky */}
        <div className="sticky top-16 z-20 py-3 sm:py-3 bg-gradient-to-b from-cyan-50/95 via-white/95 to-primary-50/90 dark:from-cyan-950/95 dark:via-slate-950/95 dark:to-primary-950/90 backdrop-blur-md border-b border-primary-200/30 dark:border-primary-800/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex flex-wrap justify-center gap-2 sm:gap-3 max-w-5xl mx-auto" aria-label="Page sections">
              {sectionAnchors.map(({ id, label, icon: NavIcon }) => (
                <Link
                  key={id}
                  href={`#${id}`}
                  className="inline-flex items-center gap-2 min-h-[40px] px-4 py-2 rounded-xl border border-primary-200/80 dark:border-primary-700/60 bg-white/90 dark:bg-slate-900/80 shadow-sm hover:shadow-md hover:scale-[1.02] hover:border-primary-400/80 dark:hover:border-primary-500/60 hover:shadow-primary-200/30 dark:hover:shadow-primary-900/30 transition-all duration-300 text-sm font-semibold text-gray-800 dark:text-gray-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/40 focus-visible:ring-offset-2"
                >
                  <NavIcon className="w-4 h-4" />
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

      {/* Section 1 — The Case for Clinical AI */}
      <section
        id="case-for-ai"
        className="relative scroll-mt-24 sm:scroll-mt-28 py-10 sm:py-12 md:py-14 bg-gradient-to-br from-cyan-50/80 via-white to-primary-50/60 dark:from-cyan-950/20 dark:via-slate-950 dark:to-primary-950/20"
      >
        <PatternOverlay pattern="topo" opacity={0.04} className="text-primary-500/15 dark:text-primary-400/10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="relative pl-4 sm:pl-6 border-l-4 border-primary-400/50 dark:border-primary-500/40 rounded-r-lg animate-fade-in-up motion-reduce:animate-none">
              <div className="flex items-start gap-3 sm:gap-4 mb-3">
                <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-primary-400/30 to-primary-500/20 dark:from-primary-500/25 dark:to-primary-600/15 backdrop-blur-md flex items-center justify-center shadow-[0_8px_24px_rgba(59,130,246,0.2)]">
                  <Zap className="w-6 h-6 sm:w-7 sm:h-7 text-primary-600 dark:text-primary-400" />
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
          </div>
        </div>
      </section>

      <SectionDivider variant="gradient" className="py-2 sm:py-3" />

      {/* Section 2 — The Data Privacy Challenge */}
      <section
        id="privacy-challenge"
        className="relative scroll-mt-24 sm:scroll-mt-28 py-10 sm:py-12 md:py-14 bg-gradient-to-br from-amber-50/70 via-white to-rose-50/50 dark:from-amber-950/15 dark:via-slate-950 dark:to-rose-950/10"
      >
        <PatternOverlay pattern="topo" opacity={0.04} className="text-amber-500/15 dark:text-amber-400/10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="relative pl-4 sm:pl-6 border-l-4 border-amber-400/50 dark:border-amber-500/40 rounded-r-lg animate-fade-in-up motion-reduce:animate-none" style={{ animationDelay: "100ms" }}>
              <div className="flex items-start gap-3 sm:gap-4 mb-3">
                <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-amber-400/30 to-amber-500/20 dark:from-amber-500/25 dark:to-amber-600/15 backdrop-blur-md flex items-center justify-center shadow-[0_8px_24px_rgba(245,158,11,0.2)]">
                  <ShieldAlert className="w-6 h-6 sm:w-7 sm:h-7 text-amber-600 dark:text-amber-400" />
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
          </div>
        </div>
      </section>

      <SectionDivider variant="geometric" className="py-2 sm:py-3" />

      {/* Section 3 — Privexa partnership + feature cards */}
      <section
        id="privexa"
        className="relative scroll-mt-24 sm:scroll-mt-28 py-10 sm:py-12 md:py-14 bg-gradient-to-br from-primary-50/60 via-white to-cyan-50/70 dark:from-primary-950/20 dark:via-slate-950 dark:to-cyan-950/20"
      >
        <PatternOverlay pattern="topo" opacity={0.04} className="text-cyan-500/15 dark:text-cyan-400/10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="relative pl-4 sm:pl-6 border-l-4 border-cyan-400/50 dark:border-cyan-500/40 rounded-r-lg animate-fade-in-up motion-reduce:animate-none" style={{ animationDelay: "200ms" }}>
              <div className="flex items-start gap-3 sm:gap-4 mb-3">
                <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-cyan-400/30 to-cyan-500/20 dark:from-cyan-500/25 dark:to-cyan-600/15 backdrop-blur-md flex items-center justify-center shadow-[0_8px_24px_rgba(34,211,238,0.2)]">
                  <ShieldCheck className="w-6 h-6 sm:w-7 sm:h-7 text-cyan-600 dark:text-cyan-400" />
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-50">Privexa — AI Privacy for Healthcare</h2>
              </div>
              <Card variant="gradient-border" cornerAccent className="p-4 sm:p-6 lg:p-8 mb-5">
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
            </div>

            {/* How It Works mini-diagram */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-6 py-5 px-4 rounded-2xl bg-white/60 dark:bg-slate-900/40 border border-primary-200/50 dark:border-primary-700/50">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary-500/15 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <span className="font-semibold text-gray-800 dark:text-gray-200">Clinical Data</span>
              </div>
              <div className="flex items-center text-primary-500 dark:text-primary-400">
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/15 flex items-center justify-center">
                  <Lock className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                </div>
                <span className="font-semibold text-gray-800 dark:text-gray-200">Privexa</span>
              </div>
              <div className="flex items-center text-primary-500 dark:text-primary-400">
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-amber-500/15 flex items-center justify-center">
                  <BrainCircuit className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                </div>
                <span className="font-semibold text-gray-800 dark:text-gray-200">AI</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {featureCards.map(({ id, title, body, icon: Icon, accentColor }, idx) => {
                const accentClasses = {
                  primary: "from-primary-400/25 to-primary-600/20 dark:from-primary-500/20 dark:to-primary-600/15 border-primary-200/50 dark:border-primary-700/50",
                  cyan: "from-cyan-400/25 to-cyan-600/20 dark:from-cyan-500/20 dark:to-cyan-600/15 border-cyan-200/50 dark:border-cyan-700/50",
                  amber: "from-amber-400/25 to-amber-600/20 dark:from-amber-500/20 dark:to-amber-600/15 border-amber-200/50 dark:border-amber-700/50",
                };
                const iconClasses = {
                  primary: "text-primary-600 dark:text-primary-400 bg-gradient-to-br from-primary-400/25 to-primary-600/20",
                  cyan: "text-cyan-600 dark:text-cyan-400 bg-gradient-to-br from-cyan-400/25 to-cyan-600/20",
                  amber: "text-amber-600 dark:text-amber-400 bg-gradient-to-br from-amber-400/25 to-amber-600/20",
                };
                return (
                  <Card key={id} variant="gradient-border" className={`p-4 sm:p-5 flex flex-col h-full border ${accentClasses[accentColor]} hover:-translate-y-1 hover:shadow-[0_24px_60px_-30px_rgba(15,23,42,0.55)] transition-all duration-300 animate-fade-in-up motion-reduce:animate-none`} style={{ animationDelay: `${idx * 100}ms` }}>
                    <CardHeader className="flex-shrink-0">
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${iconClasses[accentColor]}`}>
                          <Icon className="w-6 h-6" />
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
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <SectionDivider variant="gradient" className="py-2 sm:py-3" />

      {/* Section 4 — Compliance */}
      <section
        id="compliance"
        className="relative scroll-mt-24 sm:scroll-mt-28 py-10 sm:py-12 md:py-14 bg-white dark:bg-slate-950"
      >
        <PatternOverlay pattern="mesh" opacity={0.05} className="text-primary-500/20 dark:text-primary-400/15" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-50 mb-4 animate-fade-in-up motion-reduce:animate-none" style={{ animationDelay: "300ms" }}>Designed for Regulated Healthcare</h2>
            <Card variant="gradient-border" className="p-4 sm:p-6 lg:p-8 border-primary-200/50 dark:border-primary-700/50 relative overflow-hidden animate-fade-in-up motion-reduce:animate-none" style={{ animationDelay: "350ms" }}>
              <GradientAccent position="top" size="lg" />
              <CardContent className="pt-0">
                <p className="text-base sm:text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Privexa is built with New Zealand&apos;s regulatory environment in mind:</p>
                <div className="flex flex-wrap gap-3 sm:gap-4">
                  {complianceItems.map(({ label, detail, icon: ComplianceIcon }) => (
                    <div
                      key={label}
                      className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-primary-50/80 dark:bg-primary-950/30 border border-primary-200/60 dark:border-primary-800/50 shadow-sm hover:shadow-md transition-shadow"
                      title={detail}
                    >
                      <div className="w-9 h-9 rounded-lg bg-primary-500/15 flex items-center justify-center flex-shrink-0">
                        <ComplianceIcon className="w-4 h-4 text-primary-600 dark:text-primary-400" />
                      </div>
                      <span className="font-semibold text-gray-900 dark:text-gray-100 text-sm sm:text-base">{label}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      </div>

      <CTA
        title="Interested in AI-ready privacy for your organization?"
        description="Translyx and Privexa work together to support compliant AI adoption across New Zealand healthcare. Whether you are evaluating your first AI tool or managing an existing deployment, we can help you understand your exposure and implement the right protection."
        primaryCTA={{ label: "Talk to Us", href: "/contact" }}
        secondaryCTA={{ label: "Learn more about Privexa", href: "https://privexa.co", external: true }}
      />
    </>
  );
}
