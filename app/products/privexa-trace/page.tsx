import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { CTA } from "@/components/sections/CTA";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { PatternOverlay, SectionDivider } from "@/components/ui/DecorativeElements";
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
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Privexa Trace | Reviewer-Gated Synthetic Control Workflows",
  description:
    "Privexa Trace is a Translyx product for reviewer-gated synthetic control arm workflows, manual benchmark-arm comparison, lineage, visible limitations, and submission-oriented packaging.",
  keywords: [
    "Privexa Trace",
    "Translyx Privexa Trace",
    "Privexa Trace synthetic control",
    "synthetic control arm",
    "reviewer-gated workflow",
    "clinical evidence workflow",
    "biotech",
    "pharma",
    "CRO",
    "submission package",
  ],
  alternates: {
    canonical: "/products/privexa-trace",
  },
  openGraph: {
    title: "Privexa Trace | Reviewer-Gated Synthetic Control Workflows | Translyx",
    description:
      "Privexa Trace is a Translyx product for reviewer-gated synthetic control arm workflows, manual benchmark-arm comparison, lineage, visible limitations, and submission-oriented packaging.",
    url: `${siteConfig.url}/products/privexa-trace`,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.seo.ogImage,
        width: 1200,
        height: 630,
        alt: "Privexa Trace",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privexa Trace | Reviewer-Gated Synthetic Control Workflows | Translyx",
    description:
      "Privexa Trace is a Translyx product for reviewer-gated synthetic control arm workflows, manual benchmark-arm comparison, lineage, visible limitations, and submission-oriented packaging.",
    images: [siteConfig.seo.ogImage],
  },
};

const workflowSteps = [
  "New Workup",
  "Define Question",
  "Find Comparables",
  "Dataset Fit",
  "Cohort Builder",
  "Diagnostics & Review",
  "SCA Analysis",
  "Submission Package",
];

const trustSignals = [
  {
    title: "Reviewer sign-off before SCA generation",
    body: "Privexa Trace preserves a hard governance gate before synthetic analysis can be generated.",
    icon: FileCheck,
  },
  {
    title: "Traceability and lineage",
    body: "Each stage is structured so teams can follow how evidence, cohort choices, and outputs connect.",
    icon: GitBranch,
  },
  {
    title: "Visible limitations",
    body: "Residual assumptions and workflow constraints stay visible instead of being hidden behind a polished output.",
    icon: Scale,
  },
  {
    title: "Submission-oriented packaging",
    body: "Trace brings methods, reviewed decisions, provenance, and package-ready output into one workflow.",
    icon: Layers3,
  },
];

export default function PrivexaTracePage() {
  const traceSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Privexa Trace",
    alternateName: "Translyx Privexa Trace",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: `${siteConfig.url}/products/privexa-trace`,
    description:
      "Reviewer-gated synthetic control arm workflow platform with manual treatment arm, manual control arm, synthetic workflow comparison, lineage, visible limitations, and submission-oriented packaging.",
    creator: {
      "@type": "Organization",
      name: siteConfig.companyName,
      url: siteConfig.url,
    },
    featureList: [
      "Reviewer sign-off before SCA generation",
      "Manual treatment arm comparison",
      "Manual control arm comparison",
      "Synthetic workflow outputs",
      "Traceability and lineage",
      "Visible limitations",
      "Submission-oriented packaging",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(traceSchema) }}
      />
      <Hero
        subheadline="Privexa Trace"
        headline="reviewer-gated synthetic control workflows for serious evidence teams"
        description="Privexa Trace is a public-facing Translyx product for biotech, pharma, CRO, and clinical-trial-office stakeholders who need governed synthetic control arm workflows, visible review gates, and submission-oriented outputs."
        badge={{ text: "Privexa Trace", icon: <Workflow className="w-4 h-4" /> }}
        primaryCTA={{ label: "Talk to Us", href: "/contact" }}
        secondaryCTA={{ label: "See AI Solutions", href: "/ai-solutions" }}
        decorativeShapes
        className="py-12 sm:py-14 md:py-16 lg:py-20"
      />

      <SectionDivider variant="gradient" />

      <section className="relative py-16 sm:py-20 md:py-24 bg-white/80 dark:bg-slate-950/60">
        <PatternOverlay pattern="topo" opacity={0.04} className="text-primary-500/15 dark:text-primary-400/10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <Card variant="gradient-border" cornerAccent className="p-5 sm:p-7 lg:p-8">
              <CardHeader className="p-0">
                <CardTitle className="text-2xl sm:text-3xl lg:text-4xl">
                  A governed workflow platform, not blind automation
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 pt-5 space-y-4 text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                <p>
                  Translyx positions Privexa Trace as a primary product for teams working through synthetic control feasibility, cohort design, diagnostics review, and submission-oriented packaging.
                </p>
                <p>
                  The product is designed to support reviewed workflow discipline. It does not ask users to trust a black box. Instead, it structures the handoff from question definition to reviewer-gated output with traceability, lineage, and visible limitations intact.
                </p>
                <p>
                  The intended audience includes biotech, pharma, CRO, and clinical-trial-office stakeholders who need evidence workflows that can be reviewed, defended, and packaged coherently.
                </p>
              </CardContent>
            </Card>

            <Card variant="gradient-border" className="p-5 sm:p-7 lg:p-8">
              <CardHeader className="p-0">
                <CardTitle className="text-2xl sm:text-3xl">Where Privexa Trace fits</CardTitle>
              </CardHeader>
              <CardContent className="p-0 pt-5 space-y-4">
                <div className="rounded-2xl border border-slate-200 dark:border-slate-700 p-4 bg-white/80 dark:bg-slate-950/40">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-700 dark:text-primary-300">Translyx</p>
                  <p className="mt-2 text-sm sm:text-base text-gray-700 dark:text-gray-300">
                    Company and platform sponsor focused on clinically credible, enterprise-ready healthcare technology.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200 dark:border-slate-700 p-4 bg-white/80 dark:bg-slate-950/40">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700 dark:text-cyan-300">Privexa</p>
                  <p className="mt-2 text-sm sm:text-base text-gray-700 dark:text-gray-300">
                    Privacy and protected AI layer that helps sensitive healthcare data stay within the right boundary.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200 dark:border-slate-700 p-4 bg-primary-50/70 dark:bg-primary-950/20">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-700 dark:text-primary-300">Privexa Trace</p>
                  <p className="mt-2 text-sm sm:text-base text-gray-700 dark:text-gray-300">
                    Reviewer-gated synthetic control and evidence workflow platform for reviewed feasibility, comparison, lineage, and submission-oriented output.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 pt-2">
                  {["Biotech", "Pharma", "CRO", "Clinical-trial office", "Review and governance"].map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center rounded-full border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-950/40 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-slate-700 dark:text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-br from-primary-50/60 via-white to-cyan-50/60 dark:from-primary-950/20 dark:via-slate-950 dark:to-cyan-950/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl mb-10">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-gray-50 mb-4">
                The eight-step Privexa Trace workflow
              </h2>
              <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                The workflow is structured to move from workup setup to reviewed evidence output without hiding the decision points that matter.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
              {workflowSteps.map((step, index) => (
                <Card key={step} variant="gradient-border" className="p-4 sm:p-5">
                  <CardHeader className="p-0">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-700 dark:text-primary-300">
                      Step {index + 1}
                    </p>
                    <CardTitle className="text-lg sm:text-xl mt-2">{step}</CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SectionDivider variant="geometric" />

      <section className="relative py-16 sm:py-20 md:py-24 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl mb-10">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-gray-50 mb-4">
                Three comparison paths inside one governed workflow
              </h2>
              <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Trace is strongest when the comparison model is explicit: specialist-built manual arms remain visible, synthetic output is reviewed rather than assumed, and the final package carries the context forward.
              </p>
            </div>
            <div className="grid gap-5 lg:grid-cols-3">
              {[
                {
                  title: "Manual treatment arm",
                  body: "Specialist-entered benchmark representation of the treated population or reference treatment context.",
                  icon: Microscope,
                },
                {
                  title: "Manual control arm",
                  body: "Specialist-entered benchmark control context used to assess workflow logic and comparability.",
                  icon: ShieldCheck,
                },
                {
                  title: "Synthetic workflow outputs",
                  body: "Reviewer-gated synthetic outputs that remain connected to diagnostics, lineage, and visible limitations.",
                  icon: GitBranch,
                },
              ].map(({ title, body, icon: Icon }) => (
                <Card key={title} variant="gradient-border" className="p-5 sm:p-6">
                  <CardHeader className="p-0">
                    <div className="w-12 h-12 rounded-2xl bg-primary-500/15 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                    </div>
                    <CardTitle className="text-2xl">{title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0 pt-4">
                    <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                      {body}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-16 sm:py-20 md:py-24 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto grid gap-8 lg:grid-cols-[1fr_1fr]">
            <Card variant="gradient-border" className="p-5 sm:p-7 lg:p-8">
              <CardHeader className="p-0">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-primary-500/15 flex items-center justify-center">
                    <Microscope className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <CardTitle className="text-2xl sm:text-3xl">Manual and synthetic comparison</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-0 pt-5 space-y-4 text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                <p>
                  Privexa Trace supports comparison across specialist-entered manual treatment arms, specialist-entered manual control arms, and synthetic workflow outputs.
                </p>
                <p>
                  That framing matters. The product value is not that manual work disappears. The value is that the manual benchmark and the synthetic workflow can be assessed in one governed environment.
                </p>
                <p>
                  Over time, that comparison structure supports better review, stronger workflow discipline, and clearer evidence packaging without pretending current output should be accepted uncritically.
                </p>
              </CardContent>
            </Card>

            <Card variant="gradient-border" cornerAccent className="p-5 sm:p-7 lg:p-8">
              <CardHeader className="p-0">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/15 flex items-center justify-center">
                    <FlaskConical className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                  </div>
                  <CardTitle className="text-2xl sm:text-3xl">Worked example</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-0 pt-5">
                <div className="space-y-3">
                  {[
                    "A clinical team defines the question and target setting.",
                    "A trial specialist builds a manual treatment arm and a manual control arm.",
                    "Trace organizes comparable evidence, dataset fit, and cohort construction.",
                    "Diagnostics and reviewer sign-off are completed before SCA generation.",
                    "The resulting package preserves lineage, limitations, and reviewed context.",
                  ].map((item, index) => (
                    <div key={item} className="flex gap-3 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-950/40 p-4">
                      <div className="w-8 h-8 rounded-full bg-primary-500/15 text-primary-700 dark:text-primary-300 flex items-center justify-center text-sm font-semibold shrink-0">
                        {index + 1}
                      </div>
                      <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-br from-cyan-50/60 via-white to-primary-50/50 dark:from-cyan-950/20 dark:via-slate-950 dark:to-primary-950/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl mb-10">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-gray-50 mb-4">
                Trust signals built into the product story
              </h2>
              <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                The strongest public story for Privexa Trace is not speed alone. It is structured review, visible limitations, and traceable output.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {trustSignals.map(({ title, body, icon: Icon }) => (
                <Card key={title} variant="gradient-border" className="p-5 sm:p-6">
                  <CardHeader className="p-0">
                    <div className="flex items-start gap-3">
                      <div className="w-11 h-11 rounded-2xl bg-primary-500/15 flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                      </div>
                      <CardTitle className="text-lg sm:text-xl leading-tight">{title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="p-0 pt-4">
                    <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">{body}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-16 sm:py-20 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <Card variant="gradient-border" className="p-5 sm:p-7 lg:p-8">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <div className="max-w-3xl">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-700 dark:text-primary-300 mb-3">
                    Trust Framing
                  </p>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-50 mb-4">
                    Reviewer-gated, auditable, and honest about current boundaries
                  </h2>
                  <p className="text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                    Privexa Trace should be understood as a serious workflow platform for reviewed evidence work. It does not claim blind automation, regulatory endorsement, or scientific maturity beyond the evidence available. Its strength is disciplined structure, visible governance, and coherent packaging.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild variant="gradient" size="lg">
                    <Link href="/contact" className="flex items-center justify-center gap-2">
                      Discuss Privexa Trace
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/ai-solutions" className="flex items-center justify-center gap-2">
                      View AI Solutions
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <CTA
        title="See where Privexa Trace fits in your evidence workflow"
        description="Translyx can walk your team through reviewer-gated synthetic control workflows, benchmark-arm comparison, and submission-oriented packaging without overstating what the product is designed to do."
        primaryCTA={{ label: "Talk to Us", href: "/contact" }}
        secondaryCTA={{ label: "See AI Solutions", href: "/ai-solutions" }}
      />
    </>
  );
}
