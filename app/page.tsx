import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Handshake,
  MapPin,
  Microscope,
  ShieldCheck,
  Sparkles,
  UserCheck,
} from "lucide-react";

import { HeroSection } from "@/components/sections/HeroSection";
import { ProductWorlds } from "@/components/sections/ProductWorlds";
import { PipelineObservatory } from "@/components/sections/PipelineObservatory";
import { OceaniaMap } from "@/components/sections/OceaniaMap";
import { CTA } from "@/components/sections/CTA";
import { siteConfig } from "@/config/site";

const homeDescription =
  "Translyx Limited brings advanced diagnostics, partner digital pathology AI solutions, and governed clinical workflow capabilities to New Zealand and Oceania — helping clinicians, laboratories, healthcare providers, research teams, pharma, and CROs evaluate and adopt innovation with privacy, governance, and clinical confidence.";

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

const proofPoints = [
  {
    icon: Handshake,
    label: "Partner solutions",
    value: "Specialist technologies, locally represented",
  },
  {
    icon: Microscope,
    label: "Clinical context",
    value: "Pathology, diagnostics and clinical workflows",
  },
  {
    icon: ShieldCheck,
    label: "Governed by design",
    value: "Human review, protection and full lineage",
  },
  {
    icon: MapPin,
    label: "Regional accountability",
    value: "Auckland-based, serving New Zealand and Oceania",
  },
];

const audiences = ["Hospitals & laboratories", "Pathology groups", "Research teams", "Pharma & CROs"];

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
        name: "Algoscope",
        applicationCategory: "MedicalApplication",
        description: "AI-powered surgery-to-pathology workflow automation and traceability — a partner product Translyx is bringing to New Zealand.",
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageSchema) }} />

      <HeroSection
        badge={{ icon: Sparkles, text: "Clinical technology · Auckland, New Zealand" }}
        headline="From diagnostic innovation to trusted"
        highlight="clinical impact."
        description="Partner digital pathology AI, surgery-to-pathology automation, and governed clinical AI capabilities—brought into local context with evidence, human judgement, and accountability built in."
        ctas={[
          { label: "Explore the platform", href: "/products", variant: "primary" },
          { label: "Contact us", href: "/contact", variant: "glass" },
        ]}
        trustChips={[
          { icon: Handshake, label: "Partner diagnostic solutions" },
          { icon: ShieldCheck, label: "Governed AI workflows" },
          { icon: UserCheck, label: "Human review" },
        ]}
        visual={false}
      />

      <section className="relative z-20 border-b border-slate-200/70 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-[1240px] divide-y divide-slate-200/70 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
            {proofPoints.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-start gap-3 px-2 py-6 sm:px-5 sm:py-8 lg:px-6">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F2F7FB] text-[#0E7490] ring-1 ring-slate-200/70">
                  <Icon className="h-[18px] w-[18px]" />
                </span>
                <span>
                  <span className="block text-[9px] font-semibold uppercase tracking-[0.17em] text-slate-600">{label}</span>
                  <span className="mt-1 block text-xs font-semibold leading-snug text-[#0F1C3F]">{value}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProductWorlds />
      <PipelineObservatory />

      <section className="overflow-hidden bg-[#F4F7FB] py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:gap-16">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#0E7490]">Oceania, connected</p>
              <h2 className="mt-3 font-display text-[2.2rem] font-semibold leading-[1.08] text-[#0F1C3F] sm:text-[3rem]">
                Global innovation, translated for local clinical reality.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-slate-600">
                Translyx operates from Auckland as the accountable bridge between global clinical technology and the organisations evaluating it across New Zealand and Oceania.
              </p>
              <div className="mt-7 flex flex-wrap gap-2">
                {audiences.map((audience) => (
                  <span key={audience} className="rounded-full border border-slate-200 bg-white px-3.5 py-2 text-xs font-semibold text-slate-600 shadow-sm">
                    {audience}
                  </span>
                ))}
              </div>
              <Link href="/company" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#0F1C3F] hover:text-[#0E7490]">
                Meet Translyx
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="relative">
              <div className="absolute -inset-10 rounded-full bg-cyan-300/10 blur-3xl" />
              <div className="relative">
                <OceaniaMap />
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA
        title="Bring your clinical technology priorities into focus."
        description="Talk with an Auckland-based team about diagnostic product evaluation, digital pathology AI, workflow automation, or governed clinical AI capabilities."
        primaryCTA={{ label: "Contact us", href: "/contact" }}
        secondaryCTA={{ label: "Explore partner products", href: "/products" }}
        footnote="A clinical technology conversation—not a generic sales call."
      />
    </>
  );
}
