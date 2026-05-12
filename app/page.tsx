import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Cloud,
  ExternalLink,
  FileCheck,
  FileText,
  FlaskConical,
  GitBranch,
  Globe,
  Lock,
  Microscope,
  ShieldCheck,
  Stethoscope,
  Activity,
  Building2,
  Users,
  GraduationCap,
} from "lucide-react";

import { Hero } from "@/components/sections/Hero";
import { CTA } from "@/components/sections/CTA";
import { ProductArchitecture } from "@/components/sections/ProductArchitecture";
import { Provenance } from "@/components/sections/Provenance";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { siteConfig } from "@/config/site";
import { products, statusLabels } from "@/config/products";
import type { Product } from "@/config/products";

const homeDescription =
  "Translyx Limited is an Auckland-based clinical technology company connecting advanced diagnostics, authorised digital pathology AI, and Privexa-built governed AI software for healthcare, laboratories, research teams, and clinical organisations in New Zealand and Oceania.";

export const metadata: Metadata = {
  title: "Translyx | Clinical Technology, Digital Pathology AI & Governed AI — Auckland, New Zealand",
  description: homeDescription,
  keywords: [
    "Translyx",
    "Translyx Limited",
    "Privexa Trace",
    "Privexa",
    "Aiforia New Zealand",
    "Aiforia partner New Zealand",
    "digital pathology AI New Zealand",
    "clinical technology New Zealand",
    "clinical AI governance",
    "reviewer-gated synthetic control arm",
    "AI data protection healthcare",
    "governed clinical AI",
    "privacy-preserving AI healthcare",
    "diagnostic technology New Zealand",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Translyx | Clinical Technology, Digital Pathology AI & Governed AI — Auckland, New Zealand",
    description: homeDescription,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [{ url: siteConfig.seo.ogImage, width: 1200, height: 630, alt: "Translyx" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Translyx | Clinical Technology, Digital Pathology AI & Governed AI — Auckland, New Zealand",
    description: homeDescription,
    images: [siteConfig.seo.ogImage],
  },
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Microscope,
  Lock,
  Cloud,
  FileText,
  GitBranch,
  Stethoscope,
  FlaskConical,
};

const trustChips = [
  "Auckland, New Zealand",
  "Authorised Aiforia business partner",
  "Privexa-built protected AI",
  "Responsible AI · Visible limitations",
];

const trustSignals = [
  {
    icon: FileCheck,
    title: "Reviewer gate",
    body: "Mandatory human sign-off before any synthetic analysis is generated. Governance stays in the workflow.",
  },
  {
    icon: GitBranch,
    title: "Full lineage",
    body: "Every decision, dataset choice, and workflow stage remains traceable end-to-end.",
  },
  {
    icon: Lock,
    title: "Field-level protection",
    body: "Sensitive clinical data can be transformed into protected placeholders before configured AI systems, cloud workflows, or approved processing layers receive it.",
  },
  {
    icon: Microscope,
    title: "Visible limitations",
    body: "Residual assumptions, workflow boundaries, and regulatory context remain visible — not hidden behind a polished output.",
  },
];

const focusAreas = [
  {
    icon: FlaskConical,
    label: "Diagnostic Technology",
    detail: "AMR, sepsis, POCT, endocrinology, cardiac markers, oncology biomarkers, and precision medicine",
  },
  {
    icon: Microscope,
    label: "Digital Pathology AI",
    detail: "Authorised Aiforia partner for clinical, preclinical, and research pathology in New Zealand",
  },
  {
    icon: ShieldCheck,
    label: "Governed Clinical AI",
    detail: "Reviewer-gated evidence workflows, field-level AI data protection, and privacy-first software",
  },
  {
    icon: Globe,
    label: "Regional Reach",
    detail: "New Zealand national, expanding into Australia and Pacific Island markets",
  },
];

const audienceSegments = [
  { icon: Building2, label: "Hospitals & Laboratories", detail: "Diagnostic adoption, digital pathology, and clinical AI integration" },
  { icon: Microscope, label: "Pathology Groups", detail: "AI-assisted scoring, quantitative outputs, and standardised workflows" },
  { icon: GraduationCap, label: "Research Teams", detail: "Governed evidence workflows, synthetic control arms, and model development" },
  { icon: FlaskConical, label: "Pharma & CROs", detail: "Reviewer-gated evidence packaging and submission-oriented workflows" },
  { icon: Users, label: "Health Innovation Teams", detail: "Clinical AI evaluation, privacy-preserving deployment, and governance" },
];

function ProductCard({ product }: { product: Product }) {
  const Icon = iconMap[product.icon] ?? FlaskConical;
  const status = statusLabels[product.status];
  const isPartner = product.type === "partner";
  const isPipeline = product.type === "pipeline";

  return (
    <Card
      className={`flex flex-col p-5 sm:p-6 ${product.featured ? "border-[#0F1C3F]/20 ring-1 ring-[#0F1C3F]/5" : ""}`}
      cornerAccent={product.featured}
    >
      <CardHeader className="p-0">
        <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#0F1C3F]/6">
          <Icon className="h-5 w-5 text-[#0F1C3F]" />
        </div>
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <span className={`text-[10px] font-semibold uppercase tracking-wide px-1.5 py-0.5 rounded border ${
            isPartner
              ? "bg-purple-50 text-purple-600 border-purple-200"
              : isPipeline
                ? "bg-slate-50 text-slate-500 border-slate-200"
                : "bg-cyan-50 text-[#0891B2] border-cyan-200"
          }`}>
            {product.badge}
          </span>
          <span className={`text-[10px] font-semibold uppercase tracking-wide px-1.5 py-0.5 rounded border ${status.className}`}>
            {status.text}
          </span>
        </div>
        <CardTitle className="text-lg text-[#0F1C3F]">{product.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col p-0 pt-2">
        <p className="text-sm leading-relaxed text-slate-600 flex-1">{product.tagline}</p>
        <div className="mt-5">
          <Button asChild variant="secondary" size="lg" className="w-full">
            <Link href={product.href} className="flex items-center justify-center gap-2">
              {isPartner ? "Explore Aiforia" : `Learn more`}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default function HomePage() {
  const homePageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Translyx — Clinical Technology, Digital Pathology AI & Governed AI",
    url: siteConfig.url,
    description: homeDescription,
    isPartOf: { "@type": "WebSite", name: siteConfig.name, url: siteConfig.url },
    about: [
      { "@type": "Organization", name: "Translyx Limited" },
      {
        "@type": "SoftwareApplication",
        name: "Privexa Trace",
        applicationCategory: "BusinessApplication",
        provider: { "@type": "Organization", name: "Privexa Limited" },
      },
      {
        "@type": "SoftwareApplication",
        name: "Privexa",
        applicationCategory: "SecurityApplication",
        provider: { "@type": "Organization", name: "Privexa Limited" },
      },
    ],
  };

  const mainProducts = products.filter((p) => p.type !== "pipeline");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageSchema) }}
      />

      {/* Hero */}
      <Hero
        badge={{ text: "Translyx Limited · Auckland, New Zealand", icon: <ShieldCheck className="w-3.5 h-3.5" /> }}
        headline="Translating diagnostic innovation and governed clinical AI into clinical impact"
        description="Translyx Limited brings advanced diagnostics, authorised digital pathology AI, and Privexa-built protected AI workflows to New Zealand and Oceania — helping clinicians, laboratories, healthcare providers, and research teams adopt innovation with privacy, governance, and clinical discipline."
        primaryCTA={{ label: "Explore products", href: "/products" }}
        secondaryCTA={{ label: "Discuss Aiforia", href: "/products/aiforia" }}
      />

      {/* Trust chips */}
      <section className="bg-white border-b border-slate-200/60 py-5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {trustChips.map((chip) => (
              <span key={chip} className="inline-flex items-center rounded-full border border-slate-200/80 bg-[#F7F5F1] px-4 py-1.5 text-xs font-semibold text-slate-600">
                {chip}
              </span>
            ))}
          </div>
        </div>
      </section>

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
                  Rapid advances across antimicrobial resistance, sepsis diagnostics, point-of-care testing, digital pathology AI, and precision medicine are reshaping clinical decision-making worldwide. The challenge for New Zealand and Oceania is access — ensuring clinicians and laboratories can adopt these technologies in a way that is practical, evidence-grounded, and aligned with local requirements.
                </p>
                <p>
                  Translyx was founded to address that gap. The team combines decades of collective experience across in vitro diagnostics, laboratory medicine, clinical implementation, and healthcare supply. We identify globally validated innovations — including authorised digital pathology AI partner solutions — and introduce them to healthcare providers across hospital, community, and research settings.
                </p>
                <p>
                  Translyx works with Privexa Limited to bring protected AI software into healthcare, diagnostics, research, and evidence workflows. Privexa builds the software layer; Translyx focuses on clinical positioning, diagnostic adoption, local partnerships, and healthcare implementation.
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

      {/* Product ecosystem diagram */}
      <ProductArchitecture />

      {/* Product grid */}
      <section className="bg-white py-16 sm:py-20 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-content mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400 mb-3">Product portfolio</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0F1C3F]">
                One clinical technology company. Multiple governed products. One diagnostic mission.
              </h2>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {mainProducts.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
            <div className="mt-6 text-center">
              <Link
                href="/product-pipeline"
                className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-[#0F1C3F] transition-colors"
              >
                View full diagnostic pipeline
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Governance section */}
      <section className="bg-[#F7F5F1] border-y border-slate-200/60 py-16 sm:py-20 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-content mx-auto">
            <div className="max-w-2xl mb-10">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400 mb-3">Governance by design</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0F1C3F]">
                Governed AI workflows — not AI with governance bolted on
              </h2>
              <p className="mt-3 text-base text-slate-600 leading-relaxed">
                Reviewer gates, visible limitations, and traceable outputs are structural features of how Privexa-built products operate — not disclaimers added after the fact.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {trustSignals.map(({ icon: Icon, title, body }) => (
                <div key={title} className="flex gap-4 p-5 rounded-xl bg-white border border-slate-200/80 shadow-[0_1px_8px_-2px_rgba(15,28,63,0.06)]">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#0F1C3F]/6">
                    <Icon className="h-5 w-5 text-[#0F1C3F]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#0F1C3F]">{title}</p>
                    <p className="mt-1 text-sm text-slate-600 leading-relaxed">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Privexa-built software section */}
      <section className="bg-white py-14 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-content mx-auto">
            <Card className="p-6 sm:p-8 border-[#22D3EE]/20">
              <CardContent className="pt-0">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="max-w-2xl">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0891B2] mb-3">Privexa-built software</p>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#0F1C3F] mb-3">
                      Protected AI software, delivered through a clinical technology lens
                    </h3>
                    <p className="text-base text-slate-700 leading-relaxed">
                      Translyx works with Privexa Limited to bring protected AI software into healthcare, diagnostics, research, and evidence workflows. Privexa builds the software layer — including AI Wrapper, Cloud Shield, Scribe, and Trace. Translyx focuses on clinical positioning, diagnostic adoption, local partnerships, and healthcare implementation.
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 shrink-0">
                    <Button asChild variant="primary" size="lg">
                      <Link href="/products" className="flex items-center gap-2">
                        View products
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                    <a
                      href="https://www.privexa.co"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-600 hover:bg-[#F7F5F1] transition-colors"
                    >
                      Visit Privexa
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Audience section */}
      <section className="bg-[#F7F5F1] border-y border-slate-200/60 py-14 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-content mx-auto">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400 mb-6 text-center">Who Translyx works with</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {audienceSegments.map(({ icon: Icon, label, detail }) => (
                <div key={label} className="rounded-xl bg-white border border-slate-200/80 p-4 text-center shadow-[0_1px_6px_-2px_rgba(15,28,63,0.06)]">
                  <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[#0F1C3F]/6">
                    <Icon className="h-5 w-5 text-[#0F1C3F]" />
                  </div>
                  <p className="text-sm font-semibold text-[#0F1C3F]">{label}</p>
                  <p className="mt-1 text-xs text-slate-500 leading-snug">{detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Provenance */}
      <Provenance />

      <CTA
        title="Talk to Translyx about your clinical technology priorities"
        description="Whether the focus is diagnostic product evaluation, digital pathology AI, AI data protection, or reviewer-gated evidence workflows — the Translyx team can help you identify the right fit for your organisation."
        primaryCTA={{ label: "Contact us", href: "/contact" }}
        secondaryCTA={{ label: "See all products", href: "/products" }}
      />
    </>
  );
}
