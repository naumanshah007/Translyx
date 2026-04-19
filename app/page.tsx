import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  FileCheck,
  GitBranch,
  Lock,
  Microscope,
  ShieldCheck,
  FlaskConical,
  Activity,
  Globe,
} from "lucide-react";

import { Hero } from "@/components/sections/Hero";
import { CTA } from "@/components/sections/CTA";
import { ProductArchitecture } from "@/components/sections/ProductArchitecture";
import { Provenance } from "@/components/sections/Provenance";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { siteConfig } from "@/config/site";

const homeDescription =
  "Translyx Limited is an Auckland-based clinical technology company bringing advanced diagnostic technologies and governed AI solutions to New Zealand and Oceania. Products include Privexa Trace — reviewer-gated synthetic control arm workflows — and Privexa AI data protection.";

export const metadata: Metadata = {
  title: "Translyx | Clinical Technology & Governed AI — Auckland, New Zealand",
  description: homeDescription,
  keywords: [
    "Translyx",
    "Translyx Limited",
    "Privexa Trace",
    "Privexa",
    "clinical AI governance",
    "reviewer-gated synthetic control arm",
    "synthetic control arm software",
    "AI data protection healthcare",
    "Translyx Auckland",
    "Translyx healthcare AI",
    "diagnostic technology New Zealand",
    "clinical technology NZ",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Translyx | Clinical Technology & Governed AI — Auckland, New Zealand",
    description: homeDescription,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [{ url: siteConfig.seo.ogImage, width: 1200, height: 630, alt: "Translyx" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Translyx | Clinical Technology & Governed AI — Auckland, New Zealand",
    description: homeDescription,
    images: [siteConfig.seo.ogImage],
  },
};

const exampleSteps = [
  "A clinical team defines the research question and workup context.",
  "A trial specialist builds a manual treatment arm and a manual control arm as benchmarks.",
  "Privexa Trace organises comparable evidence, dataset fit, and cohort construction.",
  "Diagnostics review and reviewer sign-off are completed before SCA generation.",
  "The output carries lineage, rationale, visible limitations, and submission-oriented packaging.",
];

const trustSignals = [
  {
    icon: FileCheck,
    title: "Reviewer gate",
    body: "A mandatory human sign-off step is required before any synthetic analysis is generated. Governance stays in the workflow.",
  },
  {
    icon: GitBranch,
    title: "Full lineage",
    body: "Every decision, dataset choice, and workflow stage remains traceable end-to-end.",
  },
  {
    icon: Lock,
    title: "AI data protection",
    body: "Privexa ensures sensitive clinical data never reaches AI systems in its original form.",
  },
  {
    icon: Microscope,
    title: "Manual and synthetic comparison",
    body: "Benchmark arms and synthetic outputs are assessed in one governed environment — not presented as alternatives.",
  },
];

const focusAreas = [
  {
    icon: FlaskConical,
    label: "Diagnostic Technology",
    detail: "AMR, sepsis, POCT, endocrinology, cardiac markers, and precision medicine",
  },
  {
    icon: ShieldCheck,
    label: "Governed Clinical AI",
    detail: "Reviewer-gated evidence workflows and field-level AI data protection",
  },
  {
    icon: Globe,
    label: "Regional Reach",
    detail: "New Zealand national, expanding into Australia and Pacific Island markets",
  },
];

export default function HomePage() {
  const homePageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Translyx — Clinical Technology & Governed AI",
    url: siteConfig.url,
    description: homeDescription,
    isPartOf: { "@type": "WebSite", name: siteConfig.name, url: siteConfig.url },
    about: [
      { "@type": "Organization", name: "Translyx Limited" },
      {
        "@type": "SoftwareApplication",
        name: "Privexa Trace",
        applicationCategory: "BusinessApplication",
        provider: { "@type": "Organization", name: "Translyx Limited" },
      },
      {
        "@type": "SoftwareApplication",
        name: "Privexa",
        applicationCategory: "SecurityApplication",
        provider: { "@type": "Organization", name: "Translyx Limited" },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageSchema) }}
      />

      {/* Hero */}
      <Hero
        badge={{ text: "Translyx Limited · Auckland, New Zealand", icon: <ShieldCheck className="w-3.5 h-3.5" /> }}
        headline="Translating diagnostic innovation into clinical impact"
        description="Translyx Limited brings advanced diagnostic technologies and governed AI solutions to New Zealand and Oceania — working with clinicians, laboratories, and healthcare providers to strengthen diagnostic capability and improve patient outcomes."
        primaryCTA={{ label: "Our products", href: "/products" }}
        secondaryCTA={{ label: "About Translyx", href: "/about" }}
      />

      {/* Company vision */}
      <section className="bg-white py-16 sm:py-20 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-content mx-auto grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-start">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400 mb-5">Our purpose</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0F1C3F] mb-6 leading-snug">
                The global diagnostics market is transforming. New Zealand healthcare needs a specialist bridge.
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-slate-700">
                <p>
                  Rapid advances across antimicrobial resistance, sepsis diagnostics, point-of-care testing, AI, and precision medicine are reshaping clinical decision-making worldwide. The challenge for New Zealand and Oceania is access — ensuring clinicians and laboratories can adopt these technologies in a way that is practical, evidence-grounded, and aligned with local requirements.
                </p>
                <p>
                  Translyx was founded to address that gap. The team combines decades of collective experience across in vitro diagnostics, laboratory medicine, clinical implementation, and healthcare supply. We identify globally validated innovations and introduce them to healthcare providers across hospital, community, and research settings — with the clinical rigour and local partnership that successful adoption requires.
                </p>
                <p>
                  That same discipline extends to clinical AI. As AI enters diagnostic and evidence workflows, Translyx develops and delivers solutions that are governed, reviewable, and honest about their boundaries.
                </p>
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild variant="primary" size="lg">
                  <Link href="/about" className="flex items-center gap-2">
                    About Translyx
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="secondary" size="lg">
                  <Link href="/contact">Contact us</Link>
                </Button>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400 mb-4">Focus areas</p>
              {focusAreas.map(({ icon: Icon, label, detail }) => (
                <div key={label} className="rounded-xl border border-slate-200/80 bg-[#F7F5F1] p-4 flex gap-4 items-start">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#0F1C3F]/6">
                    <Icon className="h-4.5 w-4.5 text-[#0F1C3F]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#0F1C3F]">{label}</p>
                    <p className="mt-0.5 text-xs text-slate-500 leading-snug">{detail}</p>
                  </div>
                </div>
              ))}
              <div className="mt-2">
                <Link
                  href="/products"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0F1C3F] hover:underline underline-offset-2"
                >
                  View full product portfolio
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product architecture diagram */}
      <ProductArchitecture />

      {/* Privexa Trace — flagship product walkthrough */}
      <section className="relative bg-white py-16 sm:py-20 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-content mx-auto grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <Card className="p-5 sm:p-7 lg:p-8">
              <CardHeader className="p-0">
                <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Flagship product · Privexa Trace
                </p>
                <CardTitle className="text-2xl sm:text-3xl text-[#0F1C3F]">
                  Reviewer-gated synthetic control arms — from workup to submission package.
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 pt-6">
                <div className="space-y-3">
                  {exampleSteps.map((item, index) => (
                    <div
                      key={item}
                      className="flex gap-3 rounded-xl border border-slate-100 bg-[#F7F5F1]/70 p-4"
                    >
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#0F1C3F] text-xs font-bold text-white">
                        {index + 1}
                      </div>
                      <p className="text-sm leading-relaxed text-slate-700">{item}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <Button asChild variant="primary" size="lg">
                    <Link href="/products/privexa-trace" className="flex items-center gap-2">
                      Explore Privexa Trace
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="secondary" size="lg">
                    <Link href="/contact">Request walkthrough</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Trust signals */}
            <div className="space-y-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400 mb-5">
                Governance by design
              </p>
              {trustSignals.map(({ icon: Icon, title, body }) => (
                <div key={title} className="flex gap-4 p-4 rounded-xl bg-[#F7F5F1] border border-slate-200/60">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#0F1C3F]/8">
                    <Icon className="h-4.5 w-4.5 text-[#0F1C3F]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#0F1C3F]">{title}</p>
                    <p className="mt-1 text-sm text-slate-600 leading-relaxed">{body}</p>
                  </div>
                </div>
              ))}
              <div className="mt-5 rounded-xl border border-slate-200/60 bg-white p-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-4.5 w-4.5 shrink-0 text-[#0891B2]" />
                  <p className="text-sm text-slate-600">
                    Reviewer gates, visible limitations, and traceable outputs are structural — not disclaimers added after the fact.{" "}
                    <Link href="/ai-solutions" className="text-[#0F1C3F] font-semibold hover:underline underline-offset-2">
                      See AI Solutions →
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Translyx approach strip */}
      <section className="bg-[#F7F5F1] border-y border-slate-200/60 py-14 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-content mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-3">
                <Activity className="h-4 w-4 text-[#0891B2]" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">Clinical technology and AI</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-semibold text-[#0F1C3F]">
                Advanced diagnostics and governed AI — delivered together
              </h2>
              <p className="mt-2 text-base text-slate-600 leading-relaxed">
                Translyx spans the full clinical technology landscape: from diagnostic product introduction and laboratory partnerships to field-level AI data protection and reviewer-gated evidence workflows.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Button asChild variant="primary" size="lg">
                <Link href="/ai-solutions" className="flex items-center gap-2">
                  AI Solutions
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="/products">All products</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Provenance */}
      <Provenance />

      <CTA
        title="Talk to Translyx about your clinical technology priorities"
        description="Whether the focus is diagnostic product evaluation, AI data protection, or reviewer-gated evidence workflows — the Translyx team can help you identify the right fit for your organisation."
        primaryCTA={{ label: "Contact us", href: "/contact" }}
        secondaryCTA={{ label: "See all products", href: "/products" }}
      />
    </>
  );
}
