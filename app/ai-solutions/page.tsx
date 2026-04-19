import type { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Prose } from "@/components/ui/Prose";
import { CTA } from "@/components/sections/CTA";
import { Hero } from "@/components/sections/Hero";
import { Brain, Zap, ShieldAlert, ShieldCheck, Lock, Database, Cloud, Scale, Globe, Shield, FileCheck, FileText, BrainCircuit, ArrowRight, GitBranch, Layers3, Microscope } from "lucide-react";
import { PatternOverlay, GradientAccent, SectionDivider } from "@/components/ui/DecorativeElements";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "AI Solutions | Privexa and Privexa Trace",
  description:
    "Explore Translyx AI Solutions, including Privexa for protected healthcare AI privacy workflows and Privexa Trace for reviewer-gated synthetic control and clinical evidence workflows.",
  keywords: [
    "Translyx AI Solutions",
    "Translyx healthcare AI",
    "Privexa",
    "Privexa Trace",
    "protected AI healthcare",
    "synthetic control arm",
    "clinical evidence workflow",
  ],
  alternates: {
    canonical: "/ai-solutions",
  },
  openGraph: {
    title: "AI Solutions | Privexa and Privexa Trace | Translyx",
    description:
      "Explore Translyx AI Solutions, including Privexa for protected healthcare AI privacy workflows and Privexa Trace for reviewer-gated synthetic control and clinical evidence workflows.",
    url: `${siteConfig.url}/ai-solutions`,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.seo.ogImage,
        width: 1200,
        height: 630,
        alt: "Translyx AI Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Solutions | Privexa and Privexa Trace | Translyx",
    description:
      "Explore Translyx AI Solutions, including Privexa for protected healthcare AI privacy workflows and Privexa Trace for reviewer-gated synthetic control and clinical evidence workflows.",
    images: [siteConfig.seo.ogImage],
  },
};

const sectionAnchors = [
  { id: "case-for-ai", label: "The Case for AI", icon: Zap },
  { id: "privacy-challenge", label: "Privacy Challenge", icon: ShieldAlert },
  { id: "privexa", label: "Privexa", icon: ShieldCheck },
  { id: "privexa-trace", label: "Privexa Trace", icon: GitBranch },
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

const traceSignals = [
  {
    title: "Reviewer sign-off before SCA generation",
    body: "Trace keeps a hard review gate in the workflow so statistical generation does not outrun governance.",
    icon: FileCheck,
  },
  {
    title: "Manual and synthetic comparison in one workspace",
    body: "Specialist-entered manual treatment and manual control benchmark arms can be assessed alongside synthetic workflow outputs.",
    icon: Microscope,
  },
  {
    title: "Traceability, lineage, and submission packaging",
    body: "Workflow context, visible limitations, and submission-oriented output remain part of the product story rather than an afterthought.",
    icon: Layers3,
  },
];

export default function AISolutionsPage() {
  const aiSolutionsSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Translyx AI Solutions",
    url: `${siteConfig.url}/ai-solutions`,
    description:
      "Translyx AI Solutions includes Privexa for protected AI privacy workflows and Privexa Trace for reviewer-gated synthetic control and evidence workflows.",
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    about: [
      {
        "@type": "SoftwareApplication",
        name: "Privexa",
        applicationCategory: "SecurityApplication",
      },
      {
        "@type": "SoftwareApplication",
        name: "Privexa Trace",
        applicationCategory: "BusinessApplication",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aiSolutionsSchema) }}
      />
      <Hero
        subheadline="Translyx AI Solutions"
        headline="Protected AI and governed evidence workflows for healthcare"
        description="Translyx presents two complementary product stories for responsible healthcare AI: Privexa for protected data flows and Privexa Trace for reviewer-gated synthetic control and evidence workflows."
        badge={{ text: "AI & Privacy", icon: <Brain className="w-4 h-4" /> }}
        primaryCTA={{ label: "Talk to Us", href: "/contact" }}
        secondaryCTA={{ label: "Explore Privexa Trace", href: "/products/privexa-trace" }}
        enhancedAurora
        decorativeShapes
        className="py-12 sm:py-14 md:py-16 lg:py-20"
      />

      <div id="ai-solutions-content" className="overflow-x-hidden">
        {/* In-page nav — sticky */}
        <div className="sticky top-14 sm:top-16 z-20 py-3 bg-gradient-to-b from-cyan-50/95 via-white/95 to-primary-50/90 dark:from-cyan-950/95 dark:via-slate-950/95 dark:to-primary-950/90 backdrop-blur-md border-b border-primary-200/30 dark:border-primary-800/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 overflow-x-hidden">
            <nav className="flex flex-wrap justify-center gap-2 sm:gap-3 max-w-5xl mx-auto" aria-label="Page sections">
              {sectionAnchors.map(({ id, label, icon: NavIcon }) => (
                <Link
                  key={id}
                  href={`#${id}`}
                  className="inline-flex items-center gap-1.5 sm:gap-2 min-h-[44px] min-w-[44px] px-3 sm:px-4 py-2 rounded-xl border border-primary-200/80 dark:border-primary-700/60 bg-white/90 dark:bg-slate-900/80 shadow-sm hover:shadow-md active:scale-[0.98] sm:hover:scale-[1.02] hover:border-primary-400/80 dark:hover:border-primary-500/60 transition-all duration-300 text-xs sm:text-sm font-semibold text-gray-800 dark:text-gray-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/40 focus-visible:ring-offset-2 touch-manipulation"
                >
                  <NavIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                  <span className="truncate max-w-[140px] sm:max-w-none">{label}</span>
                </Link>
              ))}
            </nav>
          </div>
        </div>

      {/* Section 1 — The Case for Clinical AI */}
      <section
        id="case-for-ai"
        className="relative scroll-mt-20 sm:scroll-mt-24 md:scroll-mt-28 py-8 sm:py-10 md:py-14 bg-gradient-to-br from-cyan-50/80 via-white to-primary-50/60 dark:from-cyan-950/20 dark:via-slate-950 dark:to-primary-950/20"
      >
        <PatternOverlay pattern="topo" opacity={0.04} className="text-primary-500/15 dark:text-primary-400/10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="relative pl-3 sm:pl-6 border-l-2 sm:border-l-4 border-primary-400/50 dark:border-primary-500/40 rounded-r-lg animate-fade-in-up motion-reduce:animate-none min-w-0">
              <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4 mb-3">
                <div className="flex items-center gap-2 sm:gap-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary-400/30 to-primary-500/20 dark:from-primary-500/25 dark:to-primary-600/15 backdrop-blur-md flex items-center justify-center shadow-[0_8px_24px_rgba(59,130,246,0.2)]">
                    <Zap className="w-5 h-5 sm:w-7 sm:h-7 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-50 leading-tight">The Case for Clinical AI</h2>
                </div>
              </div>
              <Card variant="gradient-border" className="p-4 sm:p-6 lg:p-8">
                <CardContent className="pt-0 min-w-0">
                  <Prose className="space-y-4 sm:space-y-6 text-left sm:text-justify">
                    <p>
                      From diagnostic imaging analysis to administrative automation and clinical decision support, AI is delivering measurable improvements in patient outcomes and operational efficiency. New Zealand healthcare organizations are at a pivotal moment — early adopters are gaining significant advantages, while those waiting face increasing pressure from staff, leadership, and patients who expect modern tools.
                    </p>
                    <p>
                      Translyx helps organizations identify, evaluate, and implement AI solutions that are clinically validated, fit for purpose, and safe to deploy in New Zealand&apos;s healthcare environment.
                    </p>
                    <p>
                      That responsibility extends beyond privacy alone. For some healthcare and research teams, responsible AI also requires a governed workflow around evidence assembly, review gates, and traceable outputs.
                    </p>
                  </Prose>
                </CardContent>
              </Card>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <Card variant="gradient-border" className="p-4 sm:p-5">
                  <CardHeader className="p-0">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700 dark:text-cyan-300 mb-2">
                      Privexa
                    </p>
                    <CardTitle className="text-xl sm:text-2xl">Protected AI privacy layer</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0 pt-4">
                    <p className="text-sm sm:text-base leading-relaxed text-gray-700 dark:text-gray-300">
                      Protects patient and clinical data before it reaches AI systems or cloud workflows.
                    </p>
                  </CardContent>
                </Card>
                <Card variant="gradient-border" className="p-4 sm:p-5">
                  <CardHeader className="p-0">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-700 dark:text-primary-300 mb-2">
                      Privexa Trace
                    </p>
                    <CardTitle className="text-xl sm:text-2xl">Reviewer-gated evidence workflow</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0 pt-4">
                    <p className="text-sm sm:text-base leading-relaxed text-gray-700 dark:text-gray-300">
                      Structures synthetic control and evidence operations with manual benchmark comparison, review gates, lineage, and package-ready outputs.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider variant="gradient" className="py-2 sm:py-3" />

      {/* Section 2 — The Data Privacy Challenge */}
      <section
        id="privacy-challenge"
        className="relative scroll-mt-20 sm:scroll-mt-24 md:scroll-mt-28 py-8 sm:py-10 md:py-14 bg-gradient-to-br from-amber-50/70 via-white to-rose-50/50 dark:from-amber-950/15 dark:via-slate-950 dark:to-rose-950/10"
      >
        <PatternOverlay pattern="topo" opacity={0.04} className="text-amber-500/15 dark:text-amber-400/10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="relative pl-3 sm:pl-6 border-l-2 sm:border-l-4 border-amber-400/50 dark:border-amber-500/40 rounded-r-lg animate-fade-in-up motion-reduce:animate-none min-w-0" style={{ animationDelay: "100ms" }}>
              <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4 mb-3">
                <div className="flex items-center gap-2 sm:gap-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-amber-400/30 to-amber-500/20 dark:from-amber-500/25 dark:to-amber-600/15 backdrop-blur-md flex items-center justify-center shadow-[0_8px_24px_rgba(245,158,11,0.2)]">
                    <ShieldAlert className="w-5 h-5 sm:w-7 sm:h-7 text-amber-600 dark:text-amber-400" />
                  </div>
                  <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-50 leading-tight">The Data Privacy Challenge</h2>
                </div>
              </div>
              <Card variant="gradient-border" className="p-4 sm:p-6 lg:p-8 border-amber-200/30 dark:border-amber-800/30">
                <CardContent className="pt-0 min-w-0">
                  <Prose className="space-y-4 sm:space-y-6 text-left sm:text-justify">
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
        className="relative scroll-mt-20 sm:scroll-mt-24 md:scroll-mt-28 py-8 sm:py-10 md:py-14 bg-gradient-to-br from-primary-50/60 via-white to-cyan-50/70 dark:from-primary-950/20 dark:via-slate-950 dark:to-cyan-950/20"
      >
        <PatternOverlay pattern="topo" opacity={0.04} className="text-cyan-500/15 dark:text-cyan-400/10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="relative pl-3 sm:pl-6 border-l-2 sm:border-l-4 border-cyan-400/50 dark:border-cyan-500/40 rounded-r-lg animate-fade-in-up motion-reduce:animate-none min-w-0" style={{ animationDelay: "200ms" }}>
              <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4 mb-3">
                <div className="flex items-center gap-2 sm:gap-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-cyan-400/30 to-cyan-500/20 dark:from-cyan-500/25 dark:to-cyan-600/15 backdrop-blur-md flex items-center justify-center shadow-[0_8px_24px_rgba(34,211,238,0.2)]">
                    <ShieldCheck className="w-5 h-5 sm:w-7 sm:h-7 text-cyan-600 dark:text-cyan-400" />
                  </div>
                  <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-50 leading-tight">Privexa — AI Privacy for Healthcare</h2>
                </div>
              </div>
              <Card variant="gradient-border" cornerAccent className="p-4 sm:p-6 lg:p-8 mb-5">
                <CardContent className="pt-0 min-w-0">
                  <Prose className="space-y-4 sm:space-y-6 text-left sm:text-justify">
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
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 mb-6 py-4 sm:py-5 px-4 rounded-2xl bg-white/60 dark:bg-slate-900/40 border border-primary-200/50 dark:border-primary-700/50">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-primary-500/15 flex items-center justify-center flex-shrink-0">
                  <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <span className="font-semibold text-gray-800 dark:text-gray-200 text-sm sm:text-base">Clinical Data</span>
              </div>
              <div className="flex items-center text-primary-500 dark:text-primary-400 flex-shrink-0 sm:rotate-0 rotate-90">
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-cyan-500/15 flex items-center justify-center flex-shrink-0">
                  <Lock className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-600 dark:text-cyan-400" />
                </div>
                <span className="font-semibold text-gray-800 dark:text-gray-200 text-sm sm:text-base">Privexa</span>
              </div>
              <div className="flex items-center text-primary-500 dark:text-primary-400 flex-shrink-0 sm:rotate-0 rotate-90">
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-amber-500/15 flex items-center justify-center flex-shrink-0">
                  <BrainCircuit className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600 dark:text-amber-400" />
                </div>
                <span className="font-semibold text-gray-800 dark:text-gray-200 text-sm sm:text-base">AI</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
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
                  <Card key={id} variant="gradient-border" className={`p-4 sm:p-5 flex flex-col h-full border min-w-0 ${accentClasses[accentColor]} hover:-translate-y-1 hover:shadow-[0_24px_60px_-30px_rgba(15,23,42,0.55)] transition-all duration-300 animate-fade-in-up motion-reduce:animate-none active:translate-y-0 sm:active:translate-y-0`} style={{ animationDelay: `${idx * 100}ms` }}>
                    <CardHeader className="flex-shrink-0">
                      <div className="flex items-start gap-2 sm:gap-3 mb-2">
                        <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 ${iconClasses[accentColor]}`}>
                          <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                        </div>
                        <CardTitle className="text-base sm:text-lg font-bold text-gray-900 dark:text-gray-100 leading-tight min-w-0">{title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-1 pt-0 min-w-0">
                      <p className="text-sm sm:text-base leading-relaxed text-gray-700 dark:text-gray-300 text-left sm:text-justify hyphens-auto break-words">
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

      <section
        id="privexa-trace"
        className="relative scroll-mt-20 sm:scroll-mt-24 md:scroll-mt-28 py-8 sm:py-10 md:py-14 bg-gradient-to-br from-slate-50 via-white to-cyan-50/40 dark:from-slate-950 dark:via-slate-950 dark:to-cyan-950/10"
      >
        <PatternOverlay pattern="topo" opacity={0.04} className="text-slate-500/15 dark:text-white/10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="relative pl-3 sm:pl-6 border-l-2 sm:border-l-4 border-slate-400/40 dark:border-slate-500/40 rounded-r-lg animate-fade-in-up motion-reduce:animate-none" style={{ animationDelay: "260ms" }}>
              <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4 mb-3">
                <div className="flex items-center gap-2 sm:gap-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-slate-400/20 to-cyan-500/15 dark:from-slate-500/20 dark:to-cyan-500/10 backdrop-blur-md flex items-center justify-center shadow-[0_8px_24px_rgba(15,23,42,0.18)]">
                    <GitBranch className="w-5 h-5 sm:w-7 sm:h-7 text-slate-700 dark:text-slate-200" />
                  </div>
                  <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-50 leading-tight">Privexa Trace — governed evidence workflows for synthetic control work</h2>
                </div>
              </div>
              <Card variant="gradient-border" cornerAccent className="p-4 sm:p-6 lg:p-8">
                <CardContent className="pt-0 min-w-0">
                  <Prose className="space-y-4 sm:space-y-6 text-left sm:text-justify">
                    <p>
                      Responsible healthcare AI is not only about protecting sensitive data. It is also about how evidence workflows are structured, reviewed, compared, and packaged.
                    </p>
                    <p>
                      Privexa protects clinical data before it reaches AI systems. Privexa Trace addresses a different part of the operating model: reviewer-gated synthetic control arm workflows for biotech, pharma, CRO, and clinical-trial-office stakeholders who need traceable handoffs and credible governance.
                    </p>
                    <p>
                      Trace supports comparison across specialist-entered manual treatment arms, specialist-entered manual control arms, and synthetic workflow outputs. Reviewer sign-off is required before SCA generation, limitations stay visible, and outputs are organized for submission-oriented packaging rather than black-box presentation.
                    </p>
                  </Prose>
                </CardContent>
              </Card>
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
              {traceSignals.map(({ title, body, icon: Icon }, idx) => (
                <Card
                  key={title}
                  variant="gradient-border"
                  className="p-4 sm:p-5 flex flex-col h-full animate-fade-in-up motion-reduce:animate-none"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <CardHeader className="flex-shrink-0">
                    <div className="flex items-start gap-3 mb-2">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-slate-900/5 dark:bg-white/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-slate-700 dark:text-slate-200" />
                      </div>
                      <CardTitle className="text-base sm:text-lg font-bold text-gray-900 dark:text-gray-100 leading-tight">
                        {title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1 pt-0">
                    <p className="text-sm sm:text-base leading-relaxed text-gray-700 dark:text-gray-300 text-left sm:text-justify">
                      {body}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card variant="gradient-border" className="p-4 sm:p-6 lg:p-8 mt-6">
              <CardContent className="pt-0">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  <div className="max-w-3xl">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-700 dark:text-primary-300 mb-3">
                      Worked Example
                    </p>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                      One question, three comparison paths, one traceable package
                    </h3>
                    <p className="text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                      A team defines the clinical question, a specialist enters a manual treatment arm and manual control arm, Trace structures comparable evidence and synthetic workflow outputs, the reviewer signs off before SCA generation, and the final package carries lineage, rationale, and visible limitations forward.
                    </p>
                  </div>
                  <Button asChild variant="gradient" size="lg" className="shrink-0">
                    <Link href="/products/privexa-trace" className="flex items-center justify-center gap-2">
                      Explore Privexa Trace
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </Button>
                </div>
                <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-6">
                  {[
                    "Clinical question",
                    "Manual treatment arm",
                    "Manual control arm",
                    "Synthetic workflow outputs",
                    "Reviewer-gated comparison",
                    "Traceable package output",
                  ].map((item) => (
                    <div key={item} className="rounded-xl border border-slate-200/70 dark:border-slate-700/70 bg-white/80 dark:bg-slate-950/40 px-3 py-3 text-sm font-medium text-slate-700 dark:text-slate-300">
                      {item}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <SectionDivider variant="gradient" className="py-2 sm:py-3" />

      {/* Section 4 — Compliance */}
      <section
        id="compliance"
        className="relative scroll-mt-20 sm:scroll-mt-24 md:scroll-mt-28 py-8 sm:py-10 md:py-14 bg-white dark:bg-slate-950"
      >
        <PatternOverlay pattern="mesh" opacity={0.05} className="text-primary-500/20 dark:text-primary-400/15" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-50 mb-4 leading-tight animate-fade-in-up motion-reduce:animate-none" style={{ animationDelay: "300ms" }}>Designed for Regulated Healthcare</h2>
            <Card variant="gradient-border" className="p-4 sm:p-6 lg:p-8 border-primary-200/50 dark:border-primary-700/50 relative overflow-hidden animate-fade-in-up motion-reduce:animate-none" style={{ animationDelay: "350ms" }}>
              <GradientAccent position="top" size="lg" />
              <CardContent className="pt-0">
                <p className="text-base sm:text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Privexa is built with New Zealand&apos;s regulatory environment in mind:</p>
                <div className="flex flex-wrap gap-2 sm:gap-4">
                  {complianceItems.map(({ label, detail, icon: ComplianceIcon }) => (
                    <div
                      key={label}
                      className="inline-flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-3 rounded-lg sm:rounded-xl bg-primary-50/80 dark:bg-primary-950/30 border border-primary-200/60 dark:border-primary-800/50 shadow-sm hover:shadow-md transition-shadow min-w-0"
                      title={detail}
                    >
                      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-primary-500/15 flex items-center justify-center flex-shrink-0">
                        <ComplianceIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary-600 dark:text-primary-400" />
                      </div>
                      <span className="font-semibold text-gray-900 dark:text-gray-100 text-xs sm:text-base break-words">{label}</span>
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
        title="Interested in protected AI workflows and reviewer-gated evidence operations?"
        description="Translyx presents Privexa for protected AI privacy workflows and Privexa Trace for governed synthetic control and evidence workflows. We can help you evaluate where each product fits."
        primaryCTA={{ label: "Talk to Us", href: "/contact" }}
        secondaryCTA={{ label: "Explore Privexa Trace", href: "/products/privexa-trace" }}
      />
    </>
  );
}
