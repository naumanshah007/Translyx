import type { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { CTA } from "@/components/sections/CTA";
import { Hero } from "@/components/sections/Hero";
import {
  Brain,
  Zap,
  ShieldAlert,
  ShieldCheck,
  Lock,
  Database,
  Cloud,
  Scale,
  Globe,
  Shield,
  FileCheck,
  FileText,
  BrainCircuit,
  ArrowRight,
  GitBranch,
  Layers3,
  Microscope,
  Users,
  FlaskConical,
  Building2,
} from "lucide-react";
import { PatternOverlay, SectionDivider } from "@/components/ui/DecorativeElements";
import Link from "next/link";
import { siteConfig } from "@/config/site";

const pageDescription =
  "Translyx AI Solutions — Privexa protects clinical AI data flows field by field. Privexa Trace governs reviewer-gated evidence workflows. Together they form the complete governed AI operating model for healthcare.";

export const metadata: Metadata = {
  title: "AI Solutions — Governed Clinical AI | Translyx",
  description: pageDescription,
  keywords: [
    "Translyx AI Solutions",
    "clinical AI governance",
    "Privexa AI protection",
    "Privexa Trace",
    "AI data protection healthcare",
    "audit-traceable clinical AI workflows",
    "synthetic control arm software",
    "healthcare AI NZ",
  ],
  alternates: { canonical: "/ai-solutions" },
  openGraph: {
    title: "AI Solutions — Governed Clinical AI | Translyx",
    description: pageDescription,
    url: `${siteConfig.url}/ai-solutions`,
    siteName: siteConfig.name,
    images: [{ url: siteConfig.seo.ogImage, width: 1200, height: 630, alt: "Translyx AI Solutions" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Solutions — Governed Clinical AI | Translyx",
    description: pageDescription,
    images: [siteConfig.seo.ogImage],
  },
};

const sectionAnchors = [
  { id: "case-for-ai", label: "The case for AI", icon: Zap },
  { id: "privacy-challenge", label: "Privacy challenge", icon: ShieldAlert },
  { id: "privexa", label: "Privexa", icon: ShieldCheck },
  { id: "privexa-trace", label: "Privexa Trace", icon: GitBranch },
  { id: "compliance", label: "Compliance", icon: Scale },
];

const audienceSegments = [
  { label: "Clinical Sponsors", icon: FlaskConical, description: "Biotech and pharma teams running evidence reviews" },
  { label: "CROs", icon: Building2, description: "Contract research organisations managing trial workflows" },
  { label: "Academic Groups", icon: Brain, description: "Research teams needing governed synthetic control work" },
  { label: "Diagnostic Vendors", icon: Microscope, description: "Companies integrating AI into diagnostic pipelines" },
];

const featureCards = [
  {
    id: "field-protection",
    title: "Field-level protection",
    body: "Every sensitive field in every clinical document, message, or record is identified and replaced before transmission. Detection covers standard clinical identifiers and can be trained on entity types specific to your organisation's data.",
    outcome: "Sensitive data never reaches AI systems.",
    icon: Lock,
    accentColor: "navy" as const,
  },
  {
    id: "local-vault",
    title: "Local vault — nothing leaves",
    body: "Token mappings are stored within your infrastructure. Privexa does not transmit or store patient data externally. The privacy guarantee is architectural, not just contractual.",
    outcome: "Zero external data exposure by design.",
    icon: Database,
    accentColor: "cyan" as const,
  },
  {
    id: "cloud-shield",
    title: "Cloud pipeline protection",
    body: "For organisations moving clinical data to cloud platforms — AWS, Azure, GCP, or data warehouses — Cloud Shield enforces the same field-level boundary for data pipelines. Sensitive fields never reach cloud storage in their original form.",
    outcome: "Same protection boundary across cloud and on-premise.",
    icon: Cloud,
    accentColor: "slate" as const,
  },
];

const complianceItems = [
  { label: "NZ Privacy Act 2020", detail: "Health information privacy principles", icon: Scale },
  { label: "HIPAA alignment", detail: "For organisations with international partners", icon: Globe },
  { label: "GDPR readiness", detail: "For research and cross-border data workflows", icon: Shield },
  { label: "Immutable audit trails", detail: "Tamper-evident records for compliance reporting", icon: FileCheck },
];

const traceSignals = [
  {
    title: "Reviewer sign-off before SCA generation",
    body: "Trace keeps a hard review gate in the workflow so statistical generation does not outrun governance.",
    icon: FileCheck,
  },
  {
    title: "Manual and synthetic comparison in one workspace",
    body: "Specialist-entered manual treatment and manual control benchmark arms are assessed alongside synthetic workflow outputs.",
    icon: Microscope,
  },
  {
    title: "Traceability, lineage, and submission packaging",
    body: "Workflow context, visible limitations, and submission-oriented output remain part of the product story — not an afterthought.",
    icon: Layers3,
  },
];

const faqItems = [
  {
    q: "What is the difference between Privexa and Privexa Trace?",
    a: "Privexa is the data-protection layer — it ensures sensitive clinical data never reaches AI systems in identifiable form. Privexa Trace is the evidence workflow product — it governs reviewer-gated synthetic control arm workflows with lineage and submission packaging. They solve different problems in the same AI governance stack.",
  },
  {
    q: "Does Privexa Trace imply regulatory approval?",
    a: "No. Privexa Trace is designed to support submission-oriented packaging and reviewed governance workflows. It does not claim or imply regulatory endorsement from FDA, EMA, Medsafe, or any other body. Translyx is transparent about this on every product page.",
  },
  {
    q: "Who is Privexa Trace designed for?",
    a: "Biotech, pharma, CRO, and clinical-trial office teams who need governed synthetic control arm workflows, visible review gates, manual benchmark comparison, and traceable output that can be defended in a submission context.",
  },
];

export default function AISolutionsPage() {
  const aiSolutionsSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Translyx AI Solutions",
    url: `${siteConfig.url}/ai-solutions`,
    description: pageDescription,
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
        { "@type": "ListItem", position: 2, name: "AI Solutions", item: `${siteConfig.url}/ai-solutions` },
      ],
    },
    isPartOf: { "@type": "WebSite", name: siteConfig.name, url: siteConfig.url },
    about: [
      {
        "@type": "SoftwareApplication",
        name: "Privexa",
        applicationCategory: "SecurityApplication",
        description: "Field-level AI data protection for healthcare workflows.",
        provider: { "@type": "Organization", name: siteConfig.companyName },
      },
      {
        "@type": "SoftwareApplication",
        name: "Privexa Trace",
        applicationCategory: "BusinessApplication",
        description: "Reviewer-gated synthetic control arm workflow platform.",
        provider: { "@type": "Organization", name: siteConfig.companyName },
      },
    ],
    mainEntity: {
      "@type": "FAQPage",
      mainEntity: faqItems.map(({ q, a }) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: a },
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aiSolutionsSchema) }}
      />

      <Hero
        badge={{ text: "Translyx AI Solutions", icon: <Brain className="w-3.5 h-3.5" /> }}
        headline="AI solutions, governed end-to-end"
        description="Privexa is the protection primitive for clinical AI workflows. Privexa Trace is the governed evidence platform built on top of it. Together they form a complete, reviewed AI operating model."
        primaryCTA={{ label: "See Privexa Trace", href: "/products/privexa-trace" }}
        secondaryCTA={{ label: "Talk to Translyx", href: "/contact" }}
        className="py-16 sm:py-20 md:py-28 lg:py-36"
      />

      <div id="ai-solutions-content" className="overflow-x-hidden">
        {/* In-page nav */}
        <div className="sticky top-16 z-20 py-3 bg-white/95 backdrop-blur-md border-b border-slate-200/60 dark:bg-slate-950/95">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 overflow-x-hidden">
            <nav className="flex flex-wrap justify-center gap-2 sm:gap-2.5 max-w-3xl mx-auto" aria-label="Page sections">
              {sectionAnchors.map(({ id, label, icon: NavIcon }) => (
                <Link
                  key={id}
                  href={`#${id}`}
                  className="inline-flex items-center gap-1.5 min-h-[38px] px-3 sm:px-4 py-2 rounded-lg border border-slate-200/80 bg-[#F7F5F1] hover:bg-white hover:border-[#0F1C3F]/20 hover:text-[#0F1C3F] transition-all duration-150 text-xs font-semibold text-slate-600"
                >
                  <NavIcon className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>{label}</span>
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Who this is for */}
        <section className="py-12 sm:py-14 bg-[#F7F5F1] border-b border-slate-200/60">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-content mx-auto">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400 mb-6 text-center">Who this is for</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                {audienceSegments.map(({ label, icon: Icon, description }) => (
                  <div key={label} className="rounded-xl bg-white border border-slate-200/80 p-4 text-center shadow-[0_1px_8px_-2px_rgba(15,28,63,0.08)]">
                    <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[#0F1C3F]/6">
                      <Icon className="h-5 w-5 text-[#0F1C3F]" />
                    </div>
                    <p className="text-sm font-semibold text-[#0F1C3F]">{label}</p>
                    <p className="mt-1 text-xs text-slate-500 leading-snug">{description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Case for AI */}
        <section id="case-for-ai" className="scroll-mt-20 py-12 sm:py-14 md:py-16 bg-white">
          <PatternOverlay pattern="topo" opacity={0.03} className="text-slate-500/20" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-content mx-auto">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 flex h-11 w-11 items-center justify-center rounded-xl bg-[#0F1C3F]/8">
                  <Zap className="w-5 h-5 text-[#0F1C3F]" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0F1C3F]">The case for clinical AI</h2>
              </div>
              <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-6">
                <Card className="p-5 sm:p-6 lg:p-8">
                  <CardContent className="pt-0 space-y-4 text-base leading-relaxed text-slate-700">
                    <p>
                      From diagnostic imaging analysis to administrative automation and clinical decision support, AI is delivering measurable improvements in patient outcomes and operational efficiency. New Zealand healthcare organisations are at a pivotal moment — early adopters are gaining significant advantages, while those waiting face increasing pressure from staff, leadership, and patients who expect modern tools.
                    </p>
                    <p>
                      Translyx helps organisations identify, evaluate, and implement AI solutions that are clinically validated, fit for purpose, and safe to deploy in New Zealand&apos;s healthcare environment. That responsibility extends beyond privacy alone.
                    </p>
                    <p>
                      For healthcare and research teams, responsible AI also requires a governed workflow around evidence assembly, review gates, and traceable outputs. That is where Privexa and Privexa Trace come in.
                    </p>
                  </CardContent>
                </Card>
                <div className="grid grid-rows-2 gap-4">
                  <Card className="p-4 sm:p-5">
                    <CardHeader className="p-0">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#0891B2] mb-1">Privexa</p>
                      <CardTitle className="text-lg text-[#0F1C3F]">Protected AI privacy layer</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0 pt-3">
                      <p className="text-sm text-slate-600 leading-relaxed">Protects patient and clinical data before it reaches AI systems or cloud workflows.</p>
                    </CardContent>
                  </Card>
                  <Card className="p-4 sm:p-5 border-[#0F1C3F]/15">
                    <CardHeader className="p-0">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#0F1C3F] mb-1">Privexa Trace</p>
                      <CardTitle className="text-lg text-[#0F1C3F]">Reviewer-gated evidence workflow</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0 pt-3">
                      <p className="text-sm text-slate-600 leading-relaxed">Structures synthetic control and evidence operations with manual benchmark comparison, review gates, and package-ready outputs.</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        <SectionDivider variant="gradient" className="py-2" />

        {/* Privacy challenge */}
        <section id="privacy-challenge" className="scroll-mt-20 py-12 sm:py-14 md:py-16 bg-[#F7F5F1]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-content mx-auto">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 flex h-11 w-11 items-center justify-center rounded-xl bg-amber-500/10">
                  <ShieldAlert className="w-5 h-5 text-amber-700" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0F1C3F]">The data privacy challenge</h2>
              </div>
              <Card className="p-5 sm:p-6 lg:p-8">
                <CardContent className="pt-0 space-y-4 text-base leading-relaxed text-slate-700">
                  <p>
                    Most AI platforms require data to leave your environment. Patient names, NHI numbers, dates of birth, clinical notes, and diagnostic details are routinely transmitted to external systems when staff use AI tools — often without explicit awareness of the privacy implications.
                  </p>
                  <p>
                    Under the New Zealand Privacy Act 2020, health information is among the most sensitive categories of personal data. Organisations have a legal and ethical obligation to ensure that AI adoption does not create exposure that existing governance frameworks were not designed to handle.
                  </p>
                  <p className="font-medium text-[#0F1C3F]">
                    The question is not whether to adopt AI. The question is how to adopt it without creating privacy risk that undermines patient trust and organisational compliance.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <SectionDivider variant="geometric" className="py-2" />

        {/* Privexa */}
        <section id="privexa" className="scroll-mt-20 py-12 sm:py-14 md:py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-content mx-auto">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 flex h-11 w-11 items-center justify-center rounded-xl bg-[#22D3EE]/12">
                  <ShieldCheck className="w-5 h-5 text-[#0891B2]" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0F1C3F]">Privexa — AI data protection for healthcare</h2>
              </div>

              <Card className="p-5 sm:p-6 lg:p-8 mb-6">
                <CardContent className="pt-0 space-y-4 text-base leading-relaxed text-slate-700">
                  <p>
                    Translyx has partnered with Privexa, a New Zealand enterprise AI privacy platform, to provide healthcare organisations with the protection layer that makes responsible AI adoption possible.
                  </p>
                  <p>
                    Before any data reaches an AI system, Privexa detects and replaces sensitive fields — patient names, NHI numbers, dates of birth, clinical identifiers, and custom entity types — with safe placeholders. AI systems work with the placeholders. Original patient data never leaves your environment. When AI responses return, Privexa restores original context seamlessly.
                  </p>
                </CardContent>
              </Card>

              {/* Flow diagram */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mb-8 py-5 px-4 rounded-xl bg-[#F7F5F1] border border-slate-200/80">
                {[
                  { icon: FileText, label: "Clinical data", color: "bg-[#0F1C3F]/8 text-[#0F1C3F]" },
                  { arrow: true },
                  { icon: Lock, label: "Privexa", color: "bg-[#22D3EE]/12 text-[#0891B2]" },
                  { arrow: true },
                  { icon: BrainCircuit, label: "AI system", color: "bg-amber-500/10 text-amber-700" },
                ].map((item, i) =>
                  "arrow" in item ? (
                    <ArrowRight key={i} className="w-4 h-4 text-slate-300 rotate-90 sm:rotate-0 shrink-0" />
                  ) : (
                    <div key={i} className="flex items-center gap-2">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${item.color}`}>
                        {"icon" in item && <item.icon className="w-5 h-5" />}
                      </div>
                      <span className="font-semibold text-sm text-slate-700">{item.label}</span>
                    </div>
                  )
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {featureCards.map(({ id, title, body, outcome, icon: Icon }) => (
                  <Card key={id} className="p-4 sm:p-5 flex flex-col h-full">
                    <CardHeader className="flex-shrink-0 p-0 mb-3">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-xl bg-[#0F1C3F]/6 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-[#0F1C3F]" />
                        </div>
                        <CardTitle className="text-base text-[#0F1C3F] leading-snug">{title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-1 p-0">
                      <p className="text-sm text-slate-600 leading-relaxed mb-3">{body}</p>
                      <p className="text-xs font-semibold text-[#0891B2] border-t border-slate-100 pt-3">{outcome}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <SectionDivider variant="gradient" className="py-2" />

        {/* Privexa Trace */}
        <section id="privexa-trace" className="scroll-mt-20 py-12 sm:py-14 md:py-16 bg-[#F7F5F1]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-content mx-auto">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 flex h-11 w-11 items-center justify-center rounded-xl bg-[#0F1C3F]/8">
                  <GitBranch className="w-5 h-5 text-[#0F1C3F]" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0F1C3F]">Privexa Trace — governed evidence workflows for synthetic control work</h2>
              </div>

              <Card className="p-5 sm:p-6 lg:p-8 mb-6">
                <CardContent className="pt-0 space-y-4 text-base leading-relaxed text-slate-700">
                  <p>
                    Responsible healthcare AI is not only about protecting sensitive data. It is also about how evidence workflows are structured, reviewed, compared, and packaged.
                  </p>
                  <p>
                    Privexa Trace addresses a different part of the operating model: reviewer-gated synthetic control arm workflows for biotech, pharma, CRO, and clinical-trial-office stakeholders who need traceable handoffs and credible governance. Reviewer sign-off is required before SCA generation, limitations stay visible, and outputs are organised for submission-oriented packaging.
                  </p>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                {traceSignals.map(({ title, body, icon: Icon }) => (
                  <Card key={title} className="p-4 sm:p-5 flex flex-col h-full">
                    <CardHeader className="flex-shrink-0 p-0 mb-3">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-xl bg-[#0F1C3F]/6 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-[#0F1C3F]" />
                        </div>
                        <CardTitle className="text-base text-[#0F1C3F] leading-snug">{title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-1 p-0">
                      <p className="text-sm text-slate-600 leading-relaxed">{body}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="p-5 sm:p-6 lg:p-8">
                <CardContent className="pt-0">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                    <div className="max-w-2xl">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400 mb-3">Worked example</p>
                      <h3 className="text-xl font-bold text-[#0F1C3F] mb-3">One question, three paths, one traceable package</h3>
                      <p className="text-base text-slate-700 leading-relaxed">
                        A team defines the clinical question → a specialist builds manual treatment and control arms → Trace structures comparable evidence → reviewer signs off before SCA generation → the final package carries lineage, rationale, and visible limitations forward.
                      </p>
                    </div>
                    <Button asChild variant="primary" size="lg" className="shrink-0">
                      <Link href="/products/privexa-trace" className="flex items-center gap-2">
                        Explore Privexa Trace
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <SectionDivider variant="gradient" className="py-2" />

        {/* Compliance */}
        <section id="compliance" className="scroll-mt-20 py-12 sm:py-14 md:py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-content mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0F1C3F] mb-6">Designed for regulated healthcare</h2>
              <Card className="p-5 sm:p-6 lg:p-8">
                <CardContent className="pt-0">
                  <p className="text-base font-semibold text-[#0F1C3F] mb-5">Privexa is built with New Zealand&apos;s regulatory environment in mind:</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {complianceItems.map(({ label, detail, icon: ComplianceIcon }) => (
                      <div key={label} className="flex items-start gap-3 p-4 rounded-xl bg-[#F7F5F1] border border-slate-200/80">
                        <div className="w-9 h-9 rounded-lg bg-[#0F1C3F]/6 flex items-center justify-center flex-shrink-0">
                          <ComplianceIcon className="w-4 h-4 text-[#0F1C3F]" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-[#0F1C3F]">{label}</p>
                          <p className="text-xs text-slate-500 mt-0.5">{detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 sm:py-14 bg-[#F7F5F1] border-t border-slate-200/60">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-content mx-auto">
              <h2 className="text-xl font-semibold text-[#0F1C3F] mb-6">Common questions</h2>
              <div className="space-y-4">
                {faqItems.map(({ q, a }) => (
                  <Card key={q} className="p-5 sm:p-6" hover={false}>
                    <CardContent className="pt-0">
                      <p className="text-sm font-bold text-[#0F1C3F] mb-2">{q}</p>
                      <p className="text-sm text-slate-600 leading-relaxed">{a}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      <CTA
        title="Interested in protected AI workflows and governed evidence operations?"
        description="Translyx presents Privexa for AI data protection and Privexa Trace for reviewed synthetic control workflows. We can help your team evaluate where each product fits."
        primaryCTA={{ label: "Request walkthrough", href: "/contact" }}
        secondaryCTA={{ label: "Explore Privexa Trace", href: "/products/privexa-trace" }}
      />
    </>
  );
}
