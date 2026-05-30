import type { Metadata } from "next";
import Link from "next/link";
import {
  Microscope,
  ScanSearch,
  Building2,
  FlaskConical,
  Layers,
  GaugeCircle,
  ShieldCheck,
  ArrowRight,
  Handshake,
} from "lucide-react";

import { Hero } from "@/components/sections/Hero";
import { CTA } from "@/components/sections/CTA";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { siteConfig } from "@/config/site";

const pageDescription =
  "Digital pathology AI adoption in New Zealand — Translyx represents Aiforia as an authorised partner, supporting pathology groups, laboratories, and research teams across clinical, preclinical, and research workflows.";

export const metadata: Metadata = {
  title: "Digital Pathology AI — Adoption for Pathology Groups & Labs",
  description: pageDescription,
  keywords: [
    "digital pathology New Zealand",
    "digital pathology AI",
    "Aiforia partner NZ",
    "pathology image analysis",
    "AI-assisted pathology",
    "pathology groups laboratories",
  ],
  alternates: { canonical: "/digital-pathology" },
  openGraph: {
    title: "Digital Pathology AI — Adoption for Pathology Groups & Labs | Translyx",
    description: pageDescription,
    url: `${siteConfig.url}/digital-pathology`,
    siteName: siteConfig.name,
    images: [{ url: siteConfig.seo.ogImage, width: 1200, height: 630, alt: "Digital Pathology AI — Translyx" }],
  },
};

const enables = [
  {
    icon: ScanSearch,
    title: "Quantitative image analysis",
    body: "AI-assisted analysis helps quantify and locate features across whole-slide images, supporting consistent, reviewable assessment.",
  },
  {
    icon: Layers,
    title: "Scale across cohorts",
    body: "Analyse large slide cohorts with reproducible methodology — useful for high-volume reporting and research studies.",
  },
  {
    icon: GaugeCircle,
    title: "Workflow efficiency",
    body: "Support specialists with structured, repeatable outputs that fit into existing reporting and research processes.",
  },
];

const audiences = [
  {
    icon: Building2,
    title: "Pathology groups",
    body: "AI-assisted reporting support for clinical pathology teams, with the pathologist firmly in the decision.",
  },
  {
    icon: Microscope,
    title: "Laboratories",
    body: "Digital pathology adoption support for laboratories modernising image analysis and reporting workflows.",
  },
  {
    icon: FlaskConical,
    title: "Research & preclinical",
    body: "Reproducible quantitative analysis for translational research, biomarker exploration, and preclinical programmes.",
  },
];

export default function DigitalPathologyPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Digital Pathology AI — Translyx",
    url: `${siteConfig.url}/digital-pathology`,
    description: pageDescription,
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
        { "@type": "ListItem", position: 2, name: "Digital Pathology", item: `${siteConfig.url}/digital-pathology` },
      ],
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <Hero
        badge={{ text: "Digital Pathology AI", icon: <Microscope className="h-3.5 w-3.5 text-cyan-300" /> }}
        headline="Bring AI-assisted digital pathology to your"
        highlight="clinical and research workflows."
        description="Translyx represents Aiforia as an authorised partner in New Zealand — helping pathology groups, laboratories, and research teams adopt AI-assisted digital pathology with governance, human oversight, and clinical confidence."
        primaryCTA={{ label: "Discuss Aiforia", href: "/aiforia" }}
        secondaryCTA={{ label: "Request a walkthrough", href: "/contact" }}
      />

      {/* What it enables */}
      <section className="bg-white py-18 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[1100px]">
            <SectionHeader
              align="center"
              eyebrow="What digital pathology AI enables"
              title="From glass slides to governed, quantitative insight"
              description="Digital pathology moves the slide into software. AI-assisted analysis adds consistent, reviewable measurement — supporting specialists rather than replacing clinical judgement."
              maxWidth="max-w-2xl"
              className="mb-12"
            />
            <div className="grid gap-5 lg:grid-cols-3">
              {enables.map(({ icon: Icon, title, body }) => (
                <div
                  key={title}
                  className="group rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_2px_16px_-6px_rgba(15,28,63,0.1)] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/60 hover:shadow-[0_24px_60px_-30px_rgba(8,145,178,0.5)]"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F5F8FC] ring-1 ring-slate-200/70">
                    <Icon className="h-[22px] w-[22px] text-[#0891B2]" />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold text-[#0F1C3F]">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="bg-[#F5F8FC] py-18 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[1100px]">
            <SectionHeader
              eyebrow="Who it's for"
              title="Adoption support across the pathology ecosystem"
              className="mb-12"
            />
            <div className="grid gap-5 lg:grid-cols-3">
              {audiences.map(({ icon: Icon, title, body }) => (
                <div key={title} className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_2px_16px_-6px_rgba(15,28,63,0.1)]">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F5F8FC] ring-1 ring-slate-200/70">
                    <Icon className="h-[22px] w-[22px] text-[#0891B2]" />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold text-[#0F1C3F]">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Aiforia partner callout */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[1000px] overflow-hidden rounded-3xl bg-gradient-to-br from-[#0F1C3F] to-[#0B1430] p-8 sm:p-12">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-xl">
                <p className="mb-3 inline-flex items-center gap-2 rounded-full glass-panel px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-200/80">
                  <Handshake className="h-3.5 w-3.5" /> Authorised partner solution
                </p>
                <h2 className="font-display text-[1.6rem] font-semibold leading-tight text-white sm:text-[2rem]">
                  Powered by Aiforia — represented by Translyx in New Zealand
                </h2>
                <p className="mt-4 text-base leading-relaxed text-white/65">
                  Aiforia is an authorised partner solution, not a Translyx-owned product. As the local business partner,
                  Translyx supports evaluation, onboarding, and responsible adoption — with visible limitations and no
                  implied regulatory endorsement.
                </p>
              </div>
              <div className="flex shrink-0 flex-col gap-3">
                <Link
                  href="/aiforia"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500 px-6 py-3 text-sm font-semibold text-[#06121f] shadow-[0_8px_30px_-6px_rgba(34,211,238,0.5)] transition-all duration-200 hover:-translate-y-0.5"
                >
                  Learn about Aiforia
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/ai-solutions"
                  className="inline-flex items-center justify-center gap-2 rounded-xl glass-panel px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/[0.14]"
                >
                  <ShieldCheck className="h-4 w-4 text-cyan-300" />
                  Governed AI solutions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA
        title="Modernise pathology with governed digital pathology AI."
        description="Talk to Translyx about adopting AI-assisted digital pathology across your clinical, preclinical, and research workflows."
        primaryCTA={{ label: "Contact us", href: "/contact" }}
        secondaryCTA={{ label: "See all products", href: "/products" }}
      />
    </>
  );
}
