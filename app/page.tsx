import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  FileCheck,
  GitBranch,
  Lock,
  Microscope,
  Shield,
  ShieldCheck,
  Users,
  Workflow,
} from "lucide-react";

import { Hero } from "@/components/sections/Hero";
import { CTA } from "@/components/sections/CTA";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { SectionDivider } from "@/components/ui/DecorativeElements";
import { siteConfig } from "@/config/site";

const homeDescription =
  "Translyx Limited presents Privexa Trace reviewer-gated synthetic control arm workflows, Privexa protected AI privacy solutions, and clinical technology products for healthcare organizations.";

export const metadata: Metadata = {
  title: "Translyx | Privexa Trace, AI Solutions, and Clinical Technology",
  description: homeDescription,
  keywords: [
    "Translyx",
    "Translyx Limited",
    "Privexa Trace",
    "Translyx Privexa Trace",
    "Translyx AI Solutions",
    "Translyx healthcare AI",
    "Privexa Trace synthetic control",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Translyx | Privexa Trace, AI Solutions, and Clinical Technology",
    description: homeDescription,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.seo.ogImage,
        width: 1200,
        height: 630,
        alt: "Translyx",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Translyx | Privexa Trace, AI Solutions, and Clinical Technology",
    description: homeDescription,
    images: [siteConfig.seo.ogImage],
  },
};

const productCards = [
  {
    title: "Privexa Trace",
    body: "Reviewer-gated synthetic control arm workflows for biotech, pharma, CRO, and clinical-trial-office stakeholders.",
    href: "/products/privexa-trace",
    cta: "Explore Trace",
    icon: GitBranch,
    eyebrow: "Flagship product",
  },
  {
    title: "Privexa",
    body: "Protected AI privacy workflows that keep clinical data in the right boundary before AI systems are used.",
    href: "/ai-solutions",
    cta: "See AI solutions",
    icon: Lock,
    eyebrow: "Protected AI layer",
  },
  {
    title: "Diagnostic Product Pipeline",
    body: "Translyx also advances broader diagnostic and clinical technology categories across healthcare and research settings.",
    href: "/product-pipeline",
    cta: "View pipeline",
    icon: Microscope,
    eyebrow: "Clinical portfolio",
  },
];

const exampleSteps = [
  "A team defines the clinical question and workup context.",
  "A trial specialist enters a manual treatment arm and manual control arm.",
  "Trace structures comparable evidence, dataset fit, and cohort building.",
  "Diagnostics remain visible and a reviewer signs off before SCA generation.",
  "The resulting package carries lineage, rationale, and visible limitations forward.",
];

export default function HomePage() {
  const homePageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Translyx",
    url: siteConfig.url,
    description: homeDescription,
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    about: [
      { "@type": "Organization", name: "Translyx Limited" },
      { "@type": "SoftwareApplication", name: "Privexa Trace" },
      { "@type": "SoftwareApplication", name: "Privexa" },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageSchema) }}
      />
      <Hero
        subheadline="Translyx"
        headline="clinical technology and governed AI workflows, presented with enterprise discipline"
        description="Translyx brings product-led clinical technology to market, including Privexa Trace for reviewer-gated synthetic control workflows and Privexa for protected AI privacy operations."
        badge={{ text: "Translyx Products", icon: <ShieldCheck className="w-4 h-4" /> }}
        primaryCTA={{ label: "Explore Privexa Trace", href: "/products/privexa-trace" }}
        secondaryCTA={{ label: "See AI Solutions", href: "/ai-solutions" }}
      />

      <SectionDivider variant="gradient" />

      <section className="relative bg-white/80 py-16 sm:py-20 md:py-24 dark:bg-slate-950/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl mb-10">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary-700 dark:text-primary-300">
                Product-led homepage
              </p>
              <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-slate-50 sm:text-4xl lg:text-5xl">
                Translyx now presents its product portfolio more directly, with Privexa Trace at the center.
              </h2>
              <p className="text-base leading-relaxed text-slate-700 dark:text-slate-300 sm:text-lg">
                The public story is intentionally structured: Translyx is the company and product sponsor, Privexa protects AI data flows, and Privexa Trace governs synthetic control and evidence workflows with reviewer sign-off, traceability, and submission-oriented packaging.
              </p>
            </div>

            <div className="grid gap-5 lg:grid-cols-3">
              {productCards.map(({ title, body, href, cta, icon: Icon, eyebrow }) => (
                <Card key={title} variant="gradient-border" cornerAccent className="flex h-full flex-col p-5 sm:p-6">
                  <CardHeader className="p-0">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-500/15">
                      <Icon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                    </div>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary-700 dark:text-primary-300">
                      {eyebrow}
                    </p>
                    <CardTitle className="text-2xl">{title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-1 flex-col p-0 pt-4">
                    <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300 sm:text-base">
                      {body}
                    </p>
                    <div className="mt-6">
                      <Button asChild variant="outline" size="lg" className="w-full">
                        <Link href={href} className="flex items-center justify-center gap-2">
                          {cta}
                          <ArrowRight className="h-5 w-5" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-gradient-to-br from-primary-50/60 via-white to-cyan-50/50 py-16 sm:py-20 md:py-24 dark:from-primary-950/20 dark:via-slate-950 dark:to-cyan-950/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <Card variant="gradient-border" cornerAccent className="p-5 sm:p-7 lg:p-8">
              <CardHeader className="p-0">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary-700 dark:text-primary-300">
                  Privexa Trace
                </p>
                <CardTitle className="text-3xl sm:text-4xl">
                  A governed workflow platform, not blind automation
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 p-0 pt-5 text-base leading-relaxed text-slate-700 dark:text-slate-300 sm:text-lg">
                <p>
                  Privexa Trace is presented as a serious Translyx product for teams working through synthetic control feasibility, cohort design, reviewed diagnostics, and submission-oriented evidence packaging.
                </p>
                <p>
                  The product is strongest when framed honestly: reviewer sign-off sits before SCA generation, benchmark arms remain visible, lineage matters, and limitations are carried forward rather than hidden.
                </p>
                <div className="mt-6 flex flex-col gap-4 sm:flex-row">
                  <Button asChild variant="gradient" size="lg">
                    <Link href="/products/privexa-trace" className="flex items-center justify-center gap-2">
                      Explore Privexa Trace
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/products" className="flex items-center justify-center gap-2">
                      See all products
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="grid gap-4 sm:grid-cols-2">
              <Card variant="gradient-border" className="p-5">
                <CardHeader className="p-0">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-500/15">
                      <FileCheck className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                    </div>
                    <CardTitle className="text-lg">Reviewer Gate</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-0 pt-4">
                  <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300 sm:text-base">
                    Reviewed feasibility decisions create a clear human control point before SCA generation.
                  </p>
                </CardContent>
              </Card>
              <Card variant="gradient-border" className="p-5">
                <CardHeader className="p-0">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-500/15">
                      <GitBranch className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
                    </div>
                    <CardTitle className="text-lg">Lineage</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-0 pt-4">
                  <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300 sm:text-base">
                    Workflow history, package context, and evidence structure stay connected through the process.
                  </p>
                </CardContent>
              </Card>
              <Card variant="gradient-border" className="p-5 sm:col-span-2">
                <CardHeader className="p-0">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-500/15">
                      <Microscope className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                    </div>
                    <CardTitle className="text-lg">Manual and synthetic comparison</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-0 pt-4">
                  <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300 sm:text-base">
                    Trial specialists can compare manual treatment and manual control benchmark arms alongside synthetic workflow outputs in a single governed environment.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-white/70 py-16 sm:py-20 md:py-24 dark:bg-slate-950/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <Card variant="gradient-border" className="p-5 sm:p-7 lg:p-8">
              <CardHeader className="p-0">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary-700 dark:text-primary-300">
                  Worked Example
                </p>
                <CardTitle className="text-3xl sm:text-4xl">
                  One clinical question, three comparison paths, one traceable output
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 pt-5">
                <div className="space-y-3">
                  {exampleSteps.map((item, index) => (
                    <div key={item} className="flex gap-3 rounded-2xl border border-slate-200 bg-white/80 p-4 dark:border-slate-700 dark:bg-slate-950/40">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-sm font-semibold text-primary-700 dark:text-primary-300">
                        {index + 1}
                      </div>
                      <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300 sm:text-base">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="space-y-5">
              <Card variant="gradient-border" className="p-5 sm:p-6">
                <CardHeader className="p-0">
                  <CardTitle className="text-2xl">AI-ready healthcare without losing control</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 p-0 pt-4 text-sm leading-relaxed text-slate-700 dark:text-slate-300 sm:text-base">
                <p>
                  Privexa helps organizations protect data before it reaches AI systems. Privexa Trace addresses a different but related problem: governed evidence workflows where review gates and traceable output matter as much as speed.
                </p>
                <p>
                  Visitors looking for Translyx AI Solutions can move from this overview directly into the protected AI layer in <Link href="/ai-solutions" className="font-semibold text-primary-700 underline-offset-4 hover:underline dark:text-primary-300">AI Solutions</Link> or into the dedicated <Link href="/products/privexa-trace" className="font-semibold text-primary-700 underline-offset-4 hover:underline dark:text-primary-300">Privexa Trace product page</Link>.
                </p>
                <Button asChild variant="outline" size="lg">
                  <Link href="/ai-solutions" className="flex items-center justify-center gap-2">
                    See AI Solutions
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card variant="gradient-border" className="p-5 sm:p-6">
                <CardHeader className="p-0">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-500/15">
                      <Shield className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                    </div>
                    <CardTitle className="text-2xl">Trust and limitations stay visible</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 p-0 pt-4 text-sm leading-relaxed text-slate-700 dark:text-slate-300 sm:text-base">
                  <p>
                    Translyx keeps the public framing restrained: no “fully automated” story, no implied regulatory endorsement, and no hidden assumptions dressed up as certainty.
                  </p>
                  <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4 dark:border-slate-700 dark:bg-slate-950/40">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary-600 dark:text-primary-400" />
                      <p className="text-sm text-slate-700 dark:text-slate-300">
                        Reviewer sign-off, visible limitations, traceability, and submission-oriented packaging remain explicit trust signals across the site.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-white/80 py-16 sm:py-20 md:py-24 dark:bg-slate-950/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <Card variant="gradient-border" className="p-5 sm:p-7 lg:p-8">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-500/15">
                    <Users className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">About Translyx</h3>
                    <p className="mt-2 max-w-2xl text-base leading-relaxed text-slate-700 dark:text-slate-300">
                      Translyx combines clinical, diagnostic, and implementation experience with a product-led public story that is more aligned to enterprise healthcare buyers.
                    </p>
                  </div>
                </div>
                <Button asChild variant="gradient" size="lg" className="shrink-0">
                  <Link href="/about" className="flex items-center justify-center gap-2">
                    About Us
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <CTA
        title="Discuss Privexa Trace, Privexa, or the wider Translyx product portfolio"
        description="Translyx can help your team evaluate reviewer-gated synthetic control workflows, protected AI privacy operations, and broader clinical technology adoption with a more disciplined product view."
        primaryCTA={{ label: "Discuss Privexa Trace", href: "/contact" }}
        secondaryCTA={{ label: "See all products", href: "/products" }}
      />
    </>
  );
}
