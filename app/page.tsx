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
  Building2,
  FlaskRound,
  Beaker,
  Lightbulb,
  Scale,
} from "lucide-react";

import { HeroSection } from "@/components/sections/HeroSection";
import { EcosystemDiagram } from "@/components/sections/EcosystemDiagram";
import { CTA } from "@/components/sections/CTA";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProductCard } from "@/components/ui/ProductCard";
import { PipelineCapabilityCard } from "@/components/ui/PipelineCapabilityCard";
import { GovernanceCard } from "@/components/ui/GovernanceCard";
import { NewsCardCompact } from "@/components/news/NewsCard";
import { NewsTicker } from "@/components/news/NewsTicker";
import { Reveal } from "@/components/ui/Reveal";
import { products, audiences } from "@/config/products";
import { pipelineCapabilities } from "@/config/pipelineCapabilities";
import { getNewsItems } from "@/lib/news";
import { siteConfig } from "@/config/site";

const homeDescription =
  "Translyx Limited brings advanced diagnostics, partner digital pathology AI solutions, and governed clinical workflow capabilities to New Zealand and Oceania — helping clinicians, laboratories, healthcare providers, research teams, pharma, and CROs evaluate and adopt innovation with privacy, governance, and clinical confidence.";

const heroDescription =
  "Partner digital pathology AI, workflow automation, and governed clinical AI capabilities — brought to New Zealand and Oceania with clinical rigour built in.";

export const metadata: Metadata = {
  title: "Translyx | Diagnostic Innovation & Governed Clinical AI — Auckland, NZ",
  description: homeDescription,
  keywords: [
    "Translyx",
    "Translyx Limited",
    "Aiforia New Zealand",
    "Algoscope New Zealand",
    "digital pathology AI",
    "governed clinical AI",
    "clinical AI governance",
    "reviewer-gated workflows",
    "diagnostic technology New Zealand",
    "clinical technology NZ",
    "surgery-to-pathology workflow automation",
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
    body: "Reviewer-gated evidence workflows, field-level data protection, and privacy-first design.",
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
  {
    icon: Sparkles,
    title: "Human oversight",
    body: "AI supports clinicians and specialists — it never replaces them. Every clinical decision stays with an accountable human.",
  },
  {
    icon: Scale,
    title: "Clinical accountability",
    body: "An accountable New Zealand entity behind every adoption — with no implied regulatory endorsement, ever.",
  },
];

const audienceIcons = [Building2, Microscope, Beaker, FlaskRound, Lightbulb, Globe];

export default async function HomePage() {
  const allNews = await getNewsItems();
  const newsItems = allNews.slice(0, 3);

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
        name: "Algoscope",
        applicationCategory: "MedicalApplication",
        description: "AI-powered surgery-to-pathology workflow automation and traceability — a partner product Translyx is bringing to New Zealand.",
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
        description={heroDescription}
        ctas={[
          { label: "Explore Products", href: "/products", variant: "primary" },
          { label: "Request Walkthrough", href: "/contact", variant: "glass" },
        ]}
        trustChips={[
          { icon: MapPin, label: "Auckland, New Zealand" },
          { icon: Handshake, label: "Partner diagnostic solutions" },
          { icon: ShieldCheck, label: "Governed AI workflows" },
          { icon: Eye, label: "Visible limitations" },
          { icon: UserCheck, label: "Human review" },
        ]}
        footer={
          <Link
            href="/pipeline"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-400 transition-colors hover:text-cyan-300"
          >
            View the Translyx pipeline
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        }
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
                  Translyx connects global diagnostic innovation with local clinical adoption. We bring partner
                  products such as Aiforia digital pathology AI and Algoscope workflow automation to New Zealand,
                  develop governed clinical AI workflow capabilities in our pipeline, and introduce diagnostic
                  technologies — with the clinical rigour and governance that successful adoption requires.
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
                  href="/company"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-[#0F1C3F] transition-colors hover:bg-slate-50"
                >
                  About Translyx
                </Link>
              </div>
            </div>

            <div>
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">Focus areas</p>
              <Reveal className="grid gap-3 sm:grid-cols-2">
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
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 3 — Partner products */}
      <section className="bg-[#F5F8FC] py-18 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[1140px]">
            <SectionHeader
              align="center"
              eyebrow="Partner products"
              title={
                <>
                  Partner diagnostic and pathology solutions, brought to New Zealand by{" "}
                  <span className="text-[#0891B2]">Translyx.</span>
                </>
              }
              description="Aiforia digital pathology AI and Algoscope surgery-to-pathology workflow automation — clinically positioned and locally supported in New Zealand and Oceania."
              maxWidth="max-w-3xl"
              className="mb-12"
            />
            <Reveal className="mx-auto grid max-w-3xl gap-5 sm:grid-cols-2">
              {products.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </Reveal>
            <div className="mt-10 text-center">
              <Link
                href="/products"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0F1C3F] hover:text-[#0891B2]"
              >
                See all partner products
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4 — Pipeline capabilities */}
      <section className="bg-white py-18 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[1140px]">
            <SectionHeader
              align="center"
              eyebrow="Translyx pipeline"
              title={
                <>
                  Clinical AI capabilities and diagnostic innovation,{" "}
                  <span className="text-[#0891B2]">under evaluation.</span>
                </>
              }
              description="Governed workflow capabilities being evaluated and developed under the Translyx platform — not publicly launched products — alongside a diagnostic innovation pipeline."
              maxWidth="max-w-3xl"
              className="mb-12"
            />
            <Reveal className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {pipelineCapabilities.map((capability) => (
                <PipelineCapabilityCard key={capability.slug} capability={capability} />
              ))}
              {/* Diagnostic innovation card */}
              <Link
                href="/pipeline#diagnostic-innovation"
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-dashed border-slate-300/80 bg-white/80 p-6 shadow-[0_2px_12px_-6px_rgba(15,28,63,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-solid hover:border-teal-300 hover:shadow-[0_24px_60px_-30px_rgba(45,212,191,0.28)]"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 ring-1 ring-inset ring-slate-200/70 transition-transform duration-300 group-hover:scale-105">
                  <FlaskConical className="h-5 w-5 text-teal-500" />
                </span>
                <p className="mt-5 text-[10.5px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                  Diagnostic innovation
                </p>
                <h3 className="mt-1.5 font-display text-lg font-semibold text-[#0F1C3F]">Diagnostic Innovation Pipeline</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                  AMR, sepsis, POCT, oncology, endocrine, cardiac, and precision medicine opportunities.
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-600">
                  Learn more
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 5 — Ecosystem */}
      <EcosystemDiagram />

      {/* 6 — Governance by design */}
      <section className="bg-white py-18 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[1100px]">
            <SectionHeader
              eyebrow="Governance by design"
              title={
                <>
                  Governed AI workflows — not AI with governance{" "}
                  <span className="text-[#0891B2]">bolted on.</span>
                </>
              }
              description="Governance, traceability, visible limitations, and reviewer gates are structural features of the workflow — present by design, not added as disclaimers after the fact."
              maxWidth="max-w-2xl"
              className="mb-12"
            />
            <Reveal className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {governance.map((g) => (
                <GovernanceCard key={g.title} icon={g.icon} title={g.title} body={g.body} tone="solid" />
              ))}
            </Reveal>
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
            <Reveal className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {audiences.map((a, i) => {
                const Icon = audienceIcons[i] ?? Building2;
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
            </Reveal>
          </div>
        </div>
      </section>

      {/* 8 — News preview */}
      <section className="bg-white py-18 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[1140px]">
            <SectionHeader
              align="center"
              eyebrow="News intelligence"
              title="Diagnostics, pathology, and clinical AI — what's moving the market"
              description="Curated market intelligence across New Zealand, Australia, and global healthcare."
              maxWidth="max-w-2xl"
              className="mb-12"
            />
            <Reveal className="mb-8">
              <NewsTicker items={allNews} className="rounded-2xl border-x border-white/10 shadow-[0_18px_44px_-26px_rgba(15,28,63,0.55)]" />
            </Reveal>
            <Reveal className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {newsItems.map((item) => (
                <NewsCardCompact key={item.id} item={item} />
              ))}
            </Reveal>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4 text-sm font-semibold">
              <Link href="/news" className="inline-flex items-center gap-1.5 text-[#0F1C3F] hover:text-[#0891B2]">
                All news
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/news?region=new-zealand" className="text-slate-500 hover:text-[#0891B2]">New Zealand</Link>
              <Link href="/news?region=australia" className="text-slate-500 hover:text-[#0891B2]">Australia</Link>
              <Link href="/news?region=global" className="text-slate-500 hover:text-[#0891B2]">Global</Link>
            </div>
            <p className="mt-4 text-center text-xs font-medium text-slate-400">Feed refreshed twice daily</p>
          </div>
        </div>
      </section>

      {/* 9 — Final CTA */}
      <CTA
        title="Talk to Translyx about your clinical technology priorities."
        description="Whether the focus is diagnostic product evaluation, digital pathology AI, workflow automation, or governed clinical AI capabilities — the Translyx team can help identify the right fit for your organisation."
        primaryCTA={{ label: "Contact us", href: "/contact" }}
        secondaryCTA={{ label: "See partner products", href: "/products" }}
        footnote="We typically respond within two business days."
      />
    </>
  );
}
