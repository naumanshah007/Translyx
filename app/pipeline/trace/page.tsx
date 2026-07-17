import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { CTA } from "@/components/sections/CTA";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { StageRail } from "@/components/ui/StageRail";
import {
  FileCheck,
  GitBranch,
  Scale,
  Layers3,
  Workflow,
  ArrowRight,
  ShieldCheck,
  Microscope,
  FlaskConical,
  Building2,
  GraduationCap,
  Users,
  CheckCircle2,
  XCircle,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";

const pageDescription =
  "Trace is a Translyx pipeline capability under evaluation — reviewer-gated synthetic control arm workflows with manual benchmark comparison, lineage, visible limitations, and submission-oriented packaging. Not a publicly launched product.";

export const metadata: Metadata = {
  title: "Trace — Pipeline Capability",
  description: pageDescription,
  keywords: [
    "reviewer-gated synthetic control arm",
    "synthetic control arm workflow",
    "clinical evidence workflow",
    "biotech synthetic control",
    "pharma CRO submission package",
    "audit-traceable clinical AI",
    "Translyx pipeline",
  ],
  alternates: { canonical: "/pipeline/trace" },
  openGraph: {
    title: "Trace — Pipeline Capability | Translyx",
    description: pageDescription,
    url: `${siteConfig.url}/pipeline/trace`,
    siteName: siteConfig.name,
    // No explicit image: use the bespoke card from
    // app/pipeline/trace/opengraph-image.tsx via the file convention.
  },
  twitter: {
    card: "summary_large_image",
    title: "Trace — Pipeline Capability | Translyx",
    description: pageDescription,
  },
};

const workflowSteps = [
  { step: "New Workup", description: "Initiate a structured workup for a specific clinical question." },
  { step: "Define Question", description: "Articulate the research question, target population, and key parameters." },
  { step: "Find Comparables", description: "Identify comparable historical and real-world datasets for cohort construction." },
  { step: "Dataset Fit", description: "Assess dataset suitability, coverage, and alignment with the target question." },
  { step: "Cohort Builder", description: "Build treatment and control cohorts with specialist review at each stage." },
  { step: "Diagnostics & Review", description: "Run diagnostics and complete reviewer sign-off before SCA generation." },
  { step: "SCA Analysis", description: "Generate reviewed synthetic control arm analysis with visible lineage." },
  { step: "Submission Package", description: "Export a submission-oriented package with methods, limitations, and provenance." },
];

const audienceSegments = [
  { icon: FlaskConical, label: "Clinical Sponsors", description: "Biotech and pharma teams running evidence reviews and SCA programmes" },
  { icon: Building2, label: "CROs", description: "Contract research organisations managing reviewer-gated trial workflows" },
  { icon: GraduationCap, label: "Academic Groups", description: "Research teams needing governed synthetic control arm methodology" },
  { icon: Users, label: "Clinical Trial Offices", description: "Teams responsible for evidence packaging and submission preparation" },
];

const trustSignals = [
  {
    title: "Reviewer sign-off before SCA generation",
    body: "Trace preserves a hard governance gate before any synthetic analysis can be generated. Statistics do not outrun human review.",
    icon: FileCheck,
  },
  {
    title: "Traceability and lineage",
    body: "Each stage is structured so teams can follow exactly how evidence, cohort choices, and outputs connect through the workflow.",
    icon: GitBranch,
  },
  {
    title: "Visible limitations",
    body: "Residual assumptions and workflow constraints stay visible rather than being hidden behind a polished output. Honest about current boundaries.",
    icon: Scale,
  },
  {
    title: "Submission-oriented packaging",
    body: "Trace brings methods, reviewed decisions, provenance, and package-ready output into one coherent workflow — not an afterthought.",
    icon: Layers3,
  },
];

const includedNotIncluded = {
  included: [
    "Reviewer sign-off gate before SCA generation",
    "Manual treatment arm entry and comparison",
    "Manual control arm entry and comparison",
    "Synthetic workflow output with lineage",
    "Visible limitations in every output",
    "Submission-oriented packaging",
    "Audit trail across all workflow stages",
    "Traceability of cohort construction decisions",
  ],
  notIncluded: [
    "A publicly launched or customer-available product",
    "Fully automated regulatory submission",
    "Implied FDA, EMA, or Medsafe endorsement",
    "Black-box output without reviewer gate",
    "External patient data storage",
    "Guaranteed regulatory acceptance",
  ],
};

const faqItems = [
  {
    q: "Is Trace a launched product?",
    a: "No. Trace is a Translyx pipeline capability under evaluation. It is not publicly launched and is not currently available to customers. Translyx discusses the capability and evaluation pathways with interested organisations.",
  },
  {
    q: "Does Trace claim regulatory endorsement?",
    a: "No. Trace is designed to support submission-oriented packaging and reviewer-gated governance workflows. It does not claim or imply regulatory endorsement from FDA, EMA, Medsafe, or any other body. All outputs carry visible limitations.",
  },
  {
    q: "What data residency options is Trace designed for?",
    a: "Trace is designed with data residency in mind for New Zealand and regional deployments. Planned integration and export options include SAS/R-compatible outputs and audit log exports. Contact Translyx for specific infrastructure requirements.",
  },
  {
    q: "What is the difference between the manual arms and the synthetic output?",
    a: "The manual treatment arm and manual control arm are specialist-entered benchmark representations. The synthetic workflow output is a reviewer-gated statistical construction. Trace keeps all three visible in one governed environment so they can be compared, not substituted.",
  },
];

export default function TracePage() {
  // Intentionally a WebPage (not SoftwareApplication) — Trace is a pipeline
  // capability under evaluation, not a launched software product.
  const traceSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Trace — Translyx pipeline capability",
    url: `${siteConfig.url}/pipeline/trace`,
    description: pageDescription,
    isPartOf: { "@type": "WebSite", name: siteConfig.name, url: siteConfig.url },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
        { "@type": "ListItem", position: 2, name: "Pipeline", item: `${siteConfig.url}/pipeline` },
        { "@type": "ListItem", position: 3, name: "Trace", item: `${siteConfig.url}/pipeline/trace` },
      ],
    },
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(traceSchema) }}
      />

      <Hero
        badge={{ text: "Translyx pipeline capability · Under evaluation", icon: <Workflow className="w-3.5 h-3.5" /> }}
        headline="Reviewer-gated synthetic control arms, designed for submission"
        description="Trace is a Translyx pipeline capability under evaluation. It structures synthetic control arm workflows with reviewer sign-off, manual benchmark comparison, lineage, and submission-oriented packaging — for biotech, pharma, CRO, and clinical trial teams. It is not a publicly launched product."
        primaryCTA={{ label: "Discuss this capability", href: "/contact" }}
        secondaryCTA={{ label: "View pipeline", href: "/pipeline" }}
      />

      {/* Stage rail */}
      <section className="bg-[#F5F8FC] border-b border-slate-200/60 py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-sm">
            <StageRail stage="evaluation" accent="cyan" />
          </div>
        </div>
      </section>

      {/* Built for — audience segmentation */}
      <section className="bg-[#F5F8FC] border-b border-slate-200/60 py-10 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-content mx-auto">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400 mb-5 text-center">Built for</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {audienceSegments.map(({ icon: Icon, label, description }) => (
                <div key={label} className="rounded-xl bg-white border border-slate-200/80 p-4 text-center shadow-[0_1px_8px_-2px_rgba(15,28,63,0.06)]">
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

      {/* Where Trace fits */}
      <section className="bg-white py-16 sm:py-20 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-content mx-auto grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <Card className="p-5 sm:p-7 lg:p-8" cornerAccent>
              <CardHeader className="p-0">
                <CardTitle className="text-2xl sm:text-3xl text-[#0F1C3F]">
                  Built for teams that require a defensible audit trail
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 pt-5 space-y-4 text-base sm:text-lg leading-relaxed text-slate-700">
                <p>
                  Trace covers the complete synthetic control arm workflow — from workup definition to reviewed output — with mandatory reviewer sign-off at SCA generation, manual benchmark comparison throughout, and submission-oriented packaging at every stage.
                </p>
                <p>
                  Every decision point is visible. Every output carries its lineage. The workflow does not abstract away the steps that reviewers and regulators need to see.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Button asChild variant="primary" size="lg">
                    <Link href="/contact" className="flex items-center gap-2">
                      Request walkthrough
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="secondary" size="lg">
                    <Link href="/pipeline">View pipeline</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Pipeline placement */}
            <div className="space-y-3">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400 mb-4">Where Trace sits</p>
              <div className="rounded-xl border border-slate-200/80 p-4 bg-[#F5F8FC]">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">Translyx Limited</p>
                <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">
                  Clinical technology company focused on diagnostics, digital pathology AI, and healthcare adoption in New Zealand.
                </p>
              </div>
              <div className="rounded-xl border border-[#22D3EE]/25 p-4 bg-white">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#0891B2]">Translyx Pipeline</p>
                <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">
                  Clinical AI workflow capabilities under evaluation and development — not publicly launched products.
                </p>
              </div>
              <div className="rounded-xl border border-[#0F1C3F]/20 p-4 bg-[#0F1C3F]">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">Trace</p>
                <p className="mt-1.5 text-sm text-slate-300 leading-relaxed">
                  Reviewer-gated synthetic control arm workflows with lineage, comparison workspace, and submission packaging.
                </p>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Biotech", "Pharma", "CRO", "Clinical trial office", "Review & governance"].map((item) => (
                  <span key={item} className="inline-flex items-center rounded-full border border-slate-200/80 bg-white px-3 py-1.5 text-[11px] font-semibold text-slate-500 uppercase tracking-[0.12em]">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8-step workflow */}
      <section className="bg-[#F5F8FC] py-16 sm:py-20 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-content mx-auto">
            <div className="max-w-2xl mb-10">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400 mb-3">Workflow</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0F1C3F] mb-3">
                The eight-step Trace workflow
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                Structured to move from workup setup to reviewed evidence output without hiding the decision points that matter.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
              {workflowSteps.map((item, index) => (
                <Card key={item.step} className="p-4 sm:p-5" hover={false}>
                  <CardHeader className="p-0">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0F1C3F] text-[11px] font-bold text-white">
                        {index + 1}
                      </span>
                      {index === 5 && (
                        <span className="text-[10px] font-semibold text-amber-700 bg-amber-50 border border-amber-200 px-1.5 py-0.5 rounded uppercase tracking-wide">
                          Gate
                        </span>
                      )}
                    </div>
                    <CardTitle className="text-base text-[#0F1C3F]">{item.step}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0 pt-2">
                    <p className="text-xs text-slate-500 leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Three comparison paths */}
      <section className="bg-white py-16 sm:py-20 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-content mx-auto">
            <div className="max-w-2xl mb-10">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400 mb-3">Comparison model</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0F1C3F] mb-3">
                Three comparison paths inside one governed workflow
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                Trace is strongest when the comparison model is explicit: specialist-built manual arms remain visible, synthetic output is reviewed rather than assumed, and the final package carries all context forward.
              </p>
            </div>
            <div className="grid gap-5 lg:grid-cols-3">
              {[
                {
                  title: "Manual treatment arm",
                  body: "Specialist-entered benchmark representation of the treated population or reference treatment context. Built and reviewed before any synthetic generation.",
                  icon: Microscope,
                },
                {
                  title: "Manual control arm",
                  body: "Specialist-entered benchmark control context used to assess workflow logic and comparability. Reviewed alongside the treatment arm.",
                  icon: ShieldCheck,
                },
                {
                  title: "Synthetic workflow output",
                  body: "Reviewer-gated synthetic output connected to diagnostics, lineage, and visible limitations. Not presented as a replacement for the manual arms.",
                  icon: GitBranch,
                  dark: true,
                },
              ].map(({ title, body, icon: Icon, dark }) => (
                <Card key={title} className={`p-5 sm:p-6 ${dark ? "bg-[#0F1C3F] border-[#0F1C3F]" : ""}`}>
                  <CardHeader className="p-0">
                    <div className={`w-11 h-11 rounded-xl ${dark ? "bg-white/10" : "bg-[#0F1C3F]/6"} flex items-center justify-center mb-4`}>
                      <Icon className={`w-5 h-5 ${dark ? "text-white" : "text-[#0F1C3F]"}`} />
                    </div>
                    <CardTitle className={`text-lg ${dark ? "text-white" : "text-[#0F1C3F]"}`}>{title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0 pt-3">
                    <p className={`text-sm leading-relaxed ${dark ? "text-slate-300" : "text-slate-600"}`}>{body}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Worked example + Manual/Synthetic comparison */}
      <section className="bg-[#F5F8FC] py-16 sm:py-20 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-content mx-auto grid gap-8 lg:grid-cols-2">
            <Card className="p-5 sm:p-7 lg:p-8">
              <CardHeader className="p-0">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-[#0F1C3F]/6 flex items-center justify-center">
                    <Microscope className="w-5 h-5 text-[#0F1C3F]" />
                  </div>
                  <CardTitle className="text-2xl text-[#0F1C3F]">Manual and synthetic comparison</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-0 space-y-4 text-base leading-relaxed text-slate-700">
                <p>
                  Trace is not a replacement for specialist clinical judgment. Manual treatment and control arms remain central to the workflow — the synthetic output is assessed alongside them in the same governed environment, under the same reviewer accountability.
                </p>
                <p>
                  That structure produces stronger evidence packages: the benchmark remains visible, the synthetic construction is reviewed, and the final output carries both in context.
                </p>
              </CardContent>
            </Card>

            <Card className="p-5 sm:p-7 lg:p-8" cornerAccent>
              <CardHeader className="p-0">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-amber-500/10 flex items-center justify-center">
                    <FlaskConical className="w-5 h-5 text-amber-700" />
                  </div>
                  <CardTitle className="text-2xl text-[#0F1C3F]">Worked example</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-3">
                  {[
                    "A clinical team defines the question and target setting.",
                    "A trial specialist builds a manual treatment arm and a manual control arm.",
                    "Trace organises comparable evidence, dataset fit, and cohort construction.",
                    "Diagnostics and reviewer sign-off are completed before SCA generation.",
                    "The resulting package preserves lineage, limitations, and reviewed context.",
                  ].map((item, index) => (
                    <div key={item} className="flex gap-3 rounded-xl border border-slate-100 bg-[#F5F8FC]/60 p-3.5">
                      <div className="w-6 h-6 rounded-full bg-[#0F1C3F] text-white flex items-center justify-center text-xs font-bold shrink-0">
                        {index + 1}
                      </div>
                      <p className="text-sm text-slate-700 leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust signals */}
      <section className="bg-white py-16 sm:py-20 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-content mx-auto">
            <div className="max-w-2xl mb-10">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400 mb-3">Governance model</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0F1C3F] mb-3">
                Governance built in, not bolted on
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                Reviewer gates, lineage, and visible limitations are not optional modules. They are structural features of how Trace is designed to operate.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {trustSignals.map(({ title, body, icon: Icon }) => (
                <Card key={title} className="p-5 sm:p-6">
                  <CardHeader className="p-0">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#0F1C3F]/6 flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-[#0F1C3F]" />
                      </div>
                      <CardTitle className="text-base sm:text-lg leading-snug text-[#0F1C3F]">{title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="p-0 pt-4">
                    <p className="text-sm text-slate-600 leading-relaxed">{body}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What's included / not included */}
      <section className="bg-[#F5F8FC] py-16 sm:py-20 md:py-24 border-y border-slate-200/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-content mx-auto">
            <div className="max-w-2xl mb-10">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400 mb-3">Honest scoping</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0F1C3F]">What Trace covers — and what it does not</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              <Card className="p-5 sm:p-6" hover={false}>
                <CardHeader className="p-0 mb-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">Included</p>
                </CardHeader>
                <CardContent className="p-0">
                  <ul className="space-y-2.5">
                    {includedNotIncluded.included.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-slate-700">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <Card className="p-5 sm:p-6 bg-[#F5F8FC] border-slate-200/60" hover={false}>
                <CardHeader className="p-0 mb-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Not included</p>
                </CardHeader>
                <CardContent className="p-0">
                  <ul className="space-y-2.5">
                    {includedNotIncluded.notIncluded.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-slate-500">
                        <XCircle className="h-4 w-4 text-slate-300 shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Regulatory posture */}
      <section className="bg-white py-14 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-content mx-auto">
            <Card className="p-5 sm:p-7 lg:p-8 border-[#0F1C3F]/15">
              <CardContent className="pt-0">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="max-w-2xl">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400 mb-3">Regulatory posture</p>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#0F1C3F] mb-3">
                      Designed to support submission packaging — not to claim regulatory approval
                    </h3>
                    <p className="text-base text-slate-700 leading-relaxed mb-4">
                      Trace is a pipeline capability under evaluation. The intent is to help teams organise evidence and provenance with the discipline that formal submission processes generally require. It is not a regulatory pathway, and it does not claim, imply, or guarantee acceptance by any regulator.
                    </p>
                    <div className="grid sm:grid-cols-3 gap-3">
                      {["Structured evidence packaging", "Documented provenance & lineage", "Visible limitations on every output"].map((item) => (
                        <div key={item} className="rounded-lg border border-slate-200/80 bg-[#F5F8FC] px-3 py-2.5 text-xs font-semibold text-slate-600 text-center">
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 shrink-0">
                    <Button asChild variant="primary" size="lg">
                      <Link href="/contact" className="flex items-center gap-2">
                        Request walkthrough
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button asChild variant="secondary" size="lg">
                      <Link href="/pipeline">View pipeline</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#F5F8FC] py-14 sm:py-16 border-t border-slate-200/60">
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

      <CTA
        title="See the Trace capability in detail"
        description="Schedule a walkthrough of the eight-step workflow, reviewer gate model, comparison workspace, and submission-oriented output — with the Translyx team."
        primaryCTA={{ label: "Request walkthrough", href: "/contact" }}
        secondaryCTA={{ label: "View pipeline", href: "/pipeline" }}
      />
    </>
  );
}
