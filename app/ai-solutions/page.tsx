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
  "Translyx AI Solutions — Privexa-built products protect clinical AI data flows, govern evidence workflows, and support clinical documentation. Built by Privexa Limited, clinically positioned through Translyx.";

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
    id: "llm-gateway",
    title: "Privexa AI Wrapper",
    href: "/products/privexa-ai-wrapper",
    body: "PII is intercepted and replaced with tokens before any message reaches an LLM. Responses are automatically restored with original context. AI workflows operate normally — patient data never leaves your environment.",
    outcome: "Real-time PII detection, token replacement, automatic response restoration.",
    icon: Lock,
    accentColor: "navy" as const,
  },
  {
    id: "cloud-shield",
    title: "Privexa Cloud Shield",
    href: "/products/privexa-cloud-shield",
    body: "Field-level protection for cloud data pipelines. Sensitive fields are tokenised before reaching cloud platforms. The local mapping vault is reversible only inside your perimeter — inaccessible to any external system.",
    outcome: "Sensitive data is tokenised before it reaches cloud platforms.",
    icon: Cloud,
    accentColor: "cyan" as const,
  },
  {
    id: "privexa-scribe",
    title: "Privexa Scribe",
    href: "/products/privexa-scribe",
    body: "Clinical consultation recording with full PHI protection. Record the full session and transcribe on stop, or enable live relay for in-session visibility. Privexa de-identifies PHI, runs the note pipeline, restores identities locally, and returns a clinician-ready draft with review controls.",
    outcome: "SOAP notes, referrals, discharge summaries — PHI stays inside your boundary.",
    icon: FileText,
    accentColor: "slate" as const,
  },
  {
    id: "doc-intelligence",
    title: "Document Intelligence",
    body: "Analyse contracts, clinical records, and reports with AI — without exposing a single name, number, or identifier to any external model. Structured summaries, compliance scans, risk assessments, and entity mapping, all privacy-first.",
    outcome: "Privacy-first document analysis and compliance scanning.",
    icon: Database,
    accentColor: "slate" as const,
  },
  {
    id: "governance",
    title: "Governance & Compliance",
    body: "Compliance monitoring, benchmark testing, data lifecycle controls, and immutable audit trails — built into the platform architecture, not added as optional modules.",
    outcome: "Audit trails, access controls, and data handling designed for compliance alignment.",
    icon: FileCheck,
    accentColor: "navy" as const,
  },
];

const complianceItems = [
  { label: "HIPAA-aligned", detail: "Patient data never reaches external AI systems. PHI stays inside your boundary.", icon: Globe },
  { label: "GDPR-ready", detail: "Personal data minimisation enforced at the API layer. Consent-aware processing.", icon: Shield },
  { label: "NZ Privacy Act 2020", detail: "Designed to meet NZ information privacy principles for AI-assisted workflows.", icon: Scale },
  { label: "SOC 2 oriented", detail: "Audit trails, access controls, and data handling designed for SOC 2 alignment.", icon: FileCheck },
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
    q: "What is the relationship between Privexa and Translyx?",
    a: "Privexa Limited builds the protected AI software products — AI Wrapper, Cloud Shield, Scribe, and Trace. Translyx Limited is a clinical technology company that clinically positions and supports the adoption of Privexa-built products in healthcare, diagnostics, and research workflows in New Zealand and Oceania.",
  },
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
        headline="Privexa-built AI solutions, governed end-to-end"
        description="Privexa-built products — AI Wrapper, Cloud Shield, Scribe, and Trace — form the governed AI operating model for healthcare. Built by Privexa Limited, clinically positioned through Translyx."
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
              <div className="flex items-start justify-between gap-4 mb-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 flex h-11 w-11 items-center justify-center rounded-xl bg-[#22D3EE]/12">
                    <ShieldCheck className="w-5 h-5 text-[#0891B2]" />
                  </div>
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#0F1C3F]">Privexa — Enterprise AI privacy platform</h2>
                    <p className="mt-1 text-sm text-slate-500">Built by <a href="https://www.privexa.co" target="_blank" rel="noopener noreferrer" className="text-[#0891B2] hover:underline">Privexa Limited</a> · Live at <a href="https://app.privexa.co" target="_blank" rel="noopener noreferrer" className="text-[#0891B2] hover:underline">app.privexa.co</a></p>
                  </div>
                </div>
                <a
                  href="https://app.privexa.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 inline-flex items-center gap-1.5 rounded-lg border border-[#0891B2]/30 bg-[#22D3EE]/8 px-4 py-2 text-sm font-semibold text-[#0891B2] hover:bg-[#22D3EE]/14 transition-colors"
                >
                  Access Privexa
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

              <Card className="p-5 sm:p-6 lg:p-8 mb-6">
                <CardContent className="pt-0 space-y-4 text-base leading-relaxed text-slate-700">
                  <p>
                    Privexa is a live enterprise AI privacy platform — available now at <a href="https://app.privexa.co" target="_blank" rel="noopener noreferrer" className="text-[#0891B2] font-semibold hover:underline underline-offset-2">app.privexa.co</a>. It sits between your data and the AI systems your teams depend on, with five integrated protection layers covering LLM workflows, cloud pipelines, clinical documentation, and compliance.
                  </p>
                  <p>
                    Before any data reaches an AI system, Privexa detects and replaces sensitive fields — patient names, NHI numbers, dates of birth, clinical identifiers, and custom entity types — with safe tokens. AI systems operate on the tokens. Original data never leaves your environment. When AI responses return, Privexa restores original context seamlessly and invisibly.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {["HIPAA-aligned", "GDPR-ready", "NZ Privacy Act 2020", "SOC 2 oriented", "Zero cloud exposure"].map((badge) => (
                      <span key={badge} className="inline-flex items-center rounded-full border border-slate-200/80 bg-[#F7F5F1] px-3 py-1 text-xs font-semibold text-slate-600">
                        {badge}
                      </span>
                    ))}
                  </div>
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

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {featureCards.map(({ id, title, body, outcome, icon: Icon, href }) => (
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
                      <div className="border-t border-slate-100 pt-3 flex items-center justify-between">
                        <p className="text-xs font-semibold text-[#0891B2]">{outcome}</p>
                        {href && (
                          <Link href={href} className="text-xs font-semibold text-[#0F1C3F] hover:underline underline-offset-2 shrink-0 ml-2">
                            Learn more →
                          </Link>
                        )}
                      </div>
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
                    Protecting patient data is the starting point. What follows — how evidence is assembled, reviewed, and packaged — determines whether clinical AI is actually governable in a regulatory context.
                  </p>
                  <p>
                    Privexa Trace addresses that second layer: reviewer-gated synthetic control arm workflows for biotech, pharma, CRO, and clinical trial office teams. Reviewer sign-off is required before SCA generation. Limitations are visible in every output. Packages are structured for submission from the outset.
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
        title="Deploy clinical AI with the governance your organisation requires"
        description="Translyx can walk your team through the full Privexa-built product family — AI Wrapper, Cloud Shield, Scribe, and Trace — and identify where each fits your clinical AI roadmap."
        primaryCTA={{ label: "Request walkthrough", href: "/contact" }}
        secondaryCTA={{ label: "See all products", href: "/products" }}
      />
    </>
  );
}
