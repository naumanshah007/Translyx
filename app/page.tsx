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
} from "lucide-react";

import { Hero } from "@/components/sections/Hero";
import { CTA } from "@/components/sections/CTA";
import { ProductArchitecture } from "@/components/sections/ProductArchitecture";
import { Provenance } from "@/components/sections/Provenance";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { siteConfig } from "@/config/site";

const homeDescription =
  "Translyx Limited is the governed evidence layer for clinical AI — presenting Privexa Trace reviewer-gated synthetic control workflows, Privexa AI data protection, and a broader clinical technology portfolio from Auckland, New Zealand.";

export const metadata: Metadata = {
  title: "Translyx | Governed Clinical AI — Privexa Trace & AI Solutions",
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
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Translyx | Governed Clinical AI — Privexa Trace & AI Solutions",
    description: homeDescription,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [{ url: siteConfig.seo.ogImage, width: 1200, height: 630, alt: "Translyx" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Translyx | Governed Clinical AI — Privexa Trace & AI Solutions",
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
    body: "A human sign-off step is required before any synthetic analysis is generated. Governance stays in the workflow.",
  },
  {
    icon: GitBranch,
    title: "Lineage",
    body: "Every decision, dataset choice, and workflow stage remains traceable end-to-end.",
  },
  {
    icon: Lock,
    title: "AI data protection",
    body: "Privexa ensures sensitive clinical data never reaches AI systems in its original form.",
  },
  {
    icon: Microscope,
    title: "Manual + synthetic comparison",
    body: "Benchmark arms and synthetic outputs are assessed in one governed environment — not presented as alternatives.",
  },
];

export default function HomePage() {
  const homePageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Translyx — Governed Clinical AI",
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
        badge={{ text: "Translyx Limited · Auckland, NZ", icon: <ShieldCheck className="w-3.5 h-3.5" /> }}
        headline="The governed evidence layer for clinical AI"
        description="Privexa protects AI data flows. Privexa Trace structures reviewer-gated evidence workflows. Translyx governs the complete picture — without hype, without hidden assumptions."
        primaryCTA={{ label: "See Privexa Trace", href: "/products/privexa-trace" }}
        secondaryCTA={{ label: "Talk to Translyx", href: "/contact" }}
      />

      {/* Product architecture diagram */}
      <ProductArchitecture />

      {/* Worked Example — strongest credibility section */}
      <section className="relative bg-white py-16 sm:py-20 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-content mx-auto grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <Card className="p-5 sm:p-7 lg:p-8">
              <CardHeader className="p-0">
                <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Worked example · Privexa Trace
                </p>
                <CardTitle className="text-2xl sm:text-3xl text-[#0F1C3F]">
                  One clinical question. Three comparison paths. One traceable output.
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
                How Translyx stays honest
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
                    No &ldquo;fully automated&rdquo; story. No implied regulatory endorsement. No hidden assumptions dressed as certainty.{" "}
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

      {/* AI-ready healthcare strip */}
      <section className="bg-[#F7F5F1] border-y border-slate-200/60 py-14 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-content mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <h2 className="text-xl sm:text-2xl font-semibold text-[#0F1C3F] font-display">
                AI-ready healthcare without losing control
              </h2>
              <p className="mt-2 text-base text-slate-600 leading-relaxed">
                Privexa protects data before it reaches AI. Privexa Trace governs what happens to evidence after.
                Together they form a complete, reviewed AI operating model for clinical teams.
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
        title="Ready to review Privexa Trace with your team?"
        description="Translyx can walk you through reviewer-gated synthetic control workflows, AI data protection, and the broader clinical technology portfolio — without collapsing it into a single product pitch."
        primaryCTA={{ label: "Request walkthrough", href: "/contact" }}
        secondaryCTA={{ label: "See all products", href: "/products" }}
      />
    </>
  );
}
