import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  MapPin,
  Handshake,
  Eye,
  Sparkles,
  FlaskConical,
  Microscope,
  Globe,
  UserCheck,
  GitBranch,
  Lock,
  ArrowRight,
  ArrowUpRight,
  Building2,
  FlaskRound,
  Beaker,
  Lightbulb,
} from "lucide-react";

import { HeroSection } from "@/components/sections/HeroSection";
import { EcosystemDiagram } from "@/components/sections/EcosystemDiagram";
import { CTA } from "@/components/sections/CTA";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProductCard } from "@/components/ui/ProductCard";
import { GovernanceCard } from "@/components/ui/GovernanceCard";
import { products, audiences, PRIVEXA_APP_URL } from "@/config/products";
import { siteConfig } from "@/config/site";

const homeDescription =
  "Translyx Limited brings advanced diagnostics, authorised Aiforia digital pathology AI, and Privexa-built protected AI workflows to New Zealand and Oceania — helping clinicians, laboratories, and research teams adopt innovation with privacy, governance, and clinical confidence.";

export const metadata: Metadata = {
  title: "Translyx | Diagnostic Innovation & Governed Clinical AI — Auckland, NZ",
  description: homeDescription,
  keywords: [
    "Translyx",
    "Translyx Limited",
    "Aiforia New Zealand",
    "digital pathology AI",
    "governed clinical AI",
    "Privexa",
    "Privexa Trace",
    "clinical AI governance",
    "reviewer-gated workflows",
    "diagnostic technology New Zealand",
    "clinical technology NZ",
    "AI data protection healthcare",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Translyx | Diagnostic Innovation & Governed Clinical AI",
    description: homeDescription,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [{ url: siteConfig.seo.ogImage, width: 1200, height: 630, alt: "Translyx" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Translyx | Diagnostic Innovation & Governed Clinical AI",
    description: homeDescription,
    images: [siteConfig.seo.ogImage],
  },
};

const focusAreas = [
  {
    icon: FlaskConical,
    title: "Diagnostic Technology",
    body: "AMR, sepsis, POCT, endocrinology, cardiac markers, oncology biomarkers, and precision medicine.",
  },
  {
    icon: Microscope,
    title: "Digital Pathology AI",
    body: "Authorised Aiforia partner for clinical, preclinical, and research pathology in New Zealand.",
  },
  {
    icon: ShieldCheck,
    title: "Governed Clinical AI",
    body: "Reviewer-gated evidence workflows, field-level data protection, and privacy-first software.",
  },
  {
    icon: Globe,
    title: "Regional Reach",
    body: "New Zealand national, expanding into Australia and Pacific Island markets.",
  },
];

const governance = [
  {
    icon: UserCheck,
    title: "Reviewer gate",
    body: "A mandatory human sign-off step before AI-assisted output is generated. Governance stays inside the workflow — never bolted on after.",
  },
  {
    icon: GitBranch,
    title: "Full lineage",
    body: "Every dataset choice, decision, and workflow stage remains traceable end-to-end, ready for review and submission.",
  },
  {
    icon: Lock,
    title: "Field-level protection",
    body: "Sensitive clinical data is shielded field by field, so identifiable information never reaches a model in its original form.",
  },
  {
    icon: Eye,
    title: "Visible limitations",
    body: "Boundaries and assumptions are declared and transparent — honest about what the system does and does not do.",
  },
];

const audienceIcons = [Building2, Microscope, Beaker, FlaskRound, Lightbulb];

export default function HomePage() {
  const homePageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Translyx — Diagnostic Innovation & Governed Clinical AI",
    url: siteConfig.url,
    description: homeDescription,
    isPartOf: { "@type": "WebSite", name: siteConfig.name, url: siteConfig.url },
    about: [
      { "@type": "Organization", name: "Translyx Limited" },
      {
        "@type": "SoftwareApplication",
        name: "Aiforia Digital Pathology AI",
        applicationCategory: "MedicalApplication",
        description: "AI-assisted digital pathology — authorised partner solution represented by Translyx in New Zealand.",
      },
      {
        "@type": "SoftwareApplication",
        name: "Privexa Trace",
        applicationCategory: "BusinessApplication",
        provider: { "@type": "Organization", name: "Translyx Limited" },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageSchema) }} />

      {/* 1 — Hero */}
      <HeroSection
        badge={{ icon: ShieldCheck, text: "Translyx Limited · Auckland, New Zealand" }}
        headline="Translating diagnostic innovation and governed clinical AI into"
        highlight="clinical impact."
        description="Translyx Limited brings advanced diagnostics, authorised digital pathology AI, and Privexa-built protected AI workflows to New Zealand and Oceania — helping clinicians, laboratories, healthcare providers, and research teams adopt innovation with privacy, governance, and clinical confidence."
        ctas={[
          { label: "Explore Products", href: "/products", variant: "primary" },
          { label: "Discuss Aiforia", href: "/aiforia", variant: "glass" },
          { label: "Request Walkthrough", href: "/contact", variant: "ghost" },
        ]}
        trustChips={[
          { icon: MapPin, label: "Auckland, New Zealand" },
          { icon: Handshake, label: "Authorised Aiforia business partner" },
          { icon: ShieldCheck, label: "Privexa-built protected AI" },
          { icon: Sparkles, label: "Responsible AI" },
          { icon: Eye, label: "Visible limitations" },
        ]}
      />

      {/* 2 — Purpose */}
      <section className="bg-white py-18 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-[1100px] gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
            <div>
              <SectionHeader
                eyebrow="Our purpose"
                title={
                  <>
                    The global diagnostics market is transforming. New Zealand healthcare needs a{" "}
                    <span className="text-[#0891B2]">specialist bridge.</span>
                  </>
                }
              />
              <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-600">
                <p>
                  Rapid advances across antimicrobial resistance, sepsis diagnostics, point-of-care testing, digital
                  pathology AI, and precision medicine are reshaping clinical decision-making worldwide. The challenge
                  for New Zealand and Oceania is access — adopting these technologies in a way that is practical,
                  evidence-grounded, and aligned with local clinical requirements.
                </p>
                <p>
                  Translyx connects global diagnostic innovation with local clinical adoption. We represent authorised
                  partner solutions such as Aiforia digital pathology AI, position Privexa-built protected software for
                  healthcare, and introduce diagnostic technologies — with the clinical rigour and governance that
                  successful adoption requires.
                </p>
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0F1C3F] px-6 py-3 text-sm font-semibold text-white shadow-[0_4px_16px_rgba(15,28,63,0.3)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#1a2d5a]"
                >
                  Explore products
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-[#0F1C3F] transition-colors hover:bg-slate-50"
                >
                  About Translyx
                </Link>
              </div>
            </div>

            <div>
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">Focus areas</p>
              <div className="grid gap-3 sm:grid-cols-2">
                {focusAreas.map(({ icon: Icon, title, body }) => (
                  <div
                    key={title}
                    className="group rounded-2xl border border-slate-200/80 bg-[#F5F8FC] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/60 hover:shadow-[0_18px_40px_-22px_rgba(8,145,178,0.5)]"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white ring-1 ring-slate-200/70">
                      <Icon className="h-5 w-5 text-[#0891B2]" />
                    </span>
                    <p className="mt-3 text-sm font-semibold text-[#0F1C3F]">{title}</p>
                    <p className="mt-1 text-xs leading-relaxed text-slate-500">{body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 — Ecosystem */}
      <EcosystemDiagram />

      {/* 4 — Product portfolio */}
      <section className="bg-[#F5F8FC] py-18 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[1140px]">
            <SectionHeader
              align="center"
              eyebrow="Product portfolio"
              title={
                <>
                  Authorised partner solutions and Privexa-built protected AI, clinically positioned through{" "}
                  <span className="text-[#0891B2]">Translyx.</span>
                </>
              }
              description="One portfolio spanning digital pathology AI, protected software, and reviewer-gated evidence workflows."
              maxWidth="max-w-3xl"
              className="mb-12"
            />
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link
                href="/products"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0F1C3F] hover:text-[#0891B2]"
              >
                See the full product portfolio
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5 — Governance by design */}
      <section className="relative overflow-hidden bg-deep py-18 sm:py-24">
        <div className="pointer-events-none absolute inset-0 grid-overlay opacity-40" />
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[1100px]">
            <SectionHeader
              tone="dark"
              eyebrow="Governance by design"
              title={
                <>
                  Governed AI workflows — not AI with governance{" "}
                  <span className="text-gradient-brand">bolted on.</span>
                </>
              }
              description="Governance, traceability, visible limitations, and reviewer gates are structural features of the workflow — present by design, not added as disclaimers after the fact."
              maxWidth="max-w-2xl"
              className="mb-12"
            />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {governance.map((g) => (
                <GovernanceCard key={g.title} icon={g.icon} title={g.title} body={g.body} tone="dark" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6 — Privexa software */}
      <section className="bg-white py-18 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[1100px]">
            <div className="overflow-hidden rounded-3xl border border-slate-200/80 bg-gradient-to-br from-[#0F1C3F] to-[#0B1430] p-8 shadow-[0_30px_80px_-40px_rgba(15,28,63,0.6)] sm:p-12">
              <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                <div>
                  <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-300/80">
                    Privexa software
                  </p>
                  <h2 className="font-display text-[1.75rem] font-semibold leading-tight text-white sm:text-[2.1rem]">
                    Privexa builds the protected software layer. Translyx delivers the clinical adoption.
                  </h2>
                  <p className="mt-5 text-base leading-relaxed text-white/65">
                    Translyx works with Privexa Limited to bring protected AI software into healthcare, diagnostics,
                    research, and evidence workflows. Privexa builds the software layer. Translyx focuses on clinical
                    positioning, diagnostic adoption, local partnerships, and healthcare implementation.
                  </p>
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <Link
                      href="/privexa"
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500 px-6 py-3 text-sm font-semibold text-[#06121f] shadow-[0_8px_30px_-6px_rgba(34,211,238,0.5)] transition-all duration-200 hover:-translate-y-0.5"
                    >
                      View products
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    <a
                      href={PRIVEXA_APP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-xl glass-panel px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/[0.14]"
                    >
                      Visit Privexa
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {products
                    .filter((p) => p.origin === "privexa")
                    .map((p) => {
                      const Icon = p.icon;
                      return (
                        <div key={p.id} className="glass-panel rounded-xl p-4">
                          <Icon className="h-5 w-5 text-cyan-300" />
                          <p className="mt-2.5 text-sm font-semibold text-white">{p.name.replace("Privexa ", "")}</p>
                          <p className="mt-0.5 text-xs text-slate-400">{p.oneLiner}</p>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7 — Who Translyx works with */}
      <section className="bg-[#F5F8FC] py-18 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[1140px]">
            <SectionHeader
              align="center"
              eyebrow="Who Translyx works with"
              title="Built for the organisations shaping clinical care in Oceania"
              maxWidth="max-w-2xl"
              className="mb-12"
            />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {audiences.map((a, i) => {
                const Icon = audienceIcons[i];
                return (
                  <div
                    key={a.title}
                    className="group rounded-2xl border border-slate-200/80 bg-white p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/60 hover:shadow-[0_20px_44px_-26px_rgba(8,145,178,0.55)]"
                  >
                    <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-[#F5F8FC] ring-1 ring-slate-200/70 transition-transform duration-300 group-hover:scale-105">
                      <Icon className="h-[22px] w-[22px] text-[#0891B2]" />
                    </span>
                    <p className="mt-4 text-sm font-semibold text-[#0F1C3F]">{a.title}</p>
                    <p className="mt-1.5 text-xs leading-relaxed text-slate-500">{a.detail}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 8 — Final CTA */}
      <CTA
        title="Talk to Translyx about your clinical technology priorities."
        description="Whether the focus is diagnostic product evaluation, digital pathology AI, AI data protection, or reviewer-gated evidence workflows — the Translyx team can help identify the right fit for your organisation."
        primaryCTA={{ label: "Contact us", href: "/contact" }}
        secondaryCTA={{ label: "See all products", href: "/products" }}
      />
    </>
  );
}
