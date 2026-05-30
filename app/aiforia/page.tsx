import type { Metadata } from "next";
import {
  Microscope,
  Handshake,
  Stethoscope,
  FlaskConical,
  GraduationCap,
  ShieldCheck,
  Eye,
  UserCheck,
  MapPin,
  CheckCircle2,
} from "lucide-react";

import { Hero } from "@/components/sections/Hero";
import { CTA } from "@/components/sections/CTA";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { siteConfig } from "@/config/site";

const pageDescription =
  "Aiforia digital pathology AI is an authorised partner solution represented by Translyx in New Zealand. Translyx is the local business partner — supporting evaluation, adoption, and clinical, preclinical, and research pathology workflows.";

export const metadata: Metadata = {
  title: "Aiforia Digital Pathology AI — Authorised Partner Solution",
  description: pageDescription,
  keywords: [
    "Aiforia New Zealand",
    "Aiforia digital pathology",
    "digital pathology AI",
    "Translyx Aiforia partner",
    "AI-assisted pathology",
    "image analysis pathology NZ",
  ],
  alternates: { canonical: "/aiforia" },
  openGraph: {
    title: "Aiforia Digital Pathology AI — Authorised Partner Solution | Translyx",
    description: pageDescription,
    url: `${siteConfig.url}/aiforia`,
    siteName: siteConfig.name,
    images: [{ url: siteConfig.seo.ogImage, width: 1200, height: 630, alt: "Aiforia · represented by Translyx" }],
  },
};

const useCases = [
  {
    icon: Stethoscope,
    label: "Clinical",
    title: "Clinical pathology workflows",
    body: "AI-assisted image analysis that supports pathologists in reviewing and quantifying features in digital slides — keeping the pathologist in the decision.",
  },
  {
    icon: FlaskConical,
    label: "Preclinical",
    title: "Preclinical & toxicologic pathology",
    body: "Consistent, quantitative tissue analysis for preclinical research and toxicologic pathology programmes, with reproducible, reviewable outputs.",
  },
  {
    icon: GraduationCap,
    label: "Research",
    title: "Translational & academic research",
    body: "Scalable image analysis for translational research, biomarker exploration, and academic studies across large slide cohorts.",
  },
];

const bridge = [
  {
    icon: Microscope,
    title: "Evaluation",
    body: "We help pathology groups, laboratories, and research teams scope where AI-assisted digital pathology fits their workflows.",
  },
  {
    icon: Handshake,
    title: "Local partnership",
    body: "As the authorised New Zealand business partner, Translyx is the local point of contact for discussion, walkthroughs, and onboarding.",
  },
  {
    icon: UserCheck,
    title: "Adoption support",
    body: "We support practical implementation — fitting digital pathology AI into existing clinical, preclinical, and research processes.",
  },
  {
    icon: ShieldCheck,
    title: "Responsible adoption",
    body: "We frame adoption around human oversight, visible limitations, and clinical confidence — not automation of clinical judgement.",
  },
];

export default function AiforiaPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Aiforia Digital Pathology AI — Authorised Partner Solution",
    url: `${siteConfig.url}/aiforia`,
    description: pageDescription,
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
        { "@type": "ListItem", position: 2, name: "Aiforia", item: `${siteConfig.url}/aiforia` },
      ],
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <Hero
        badge={{ text: "Authorised Partner Solution", icon: <Handshake className="h-3.5 w-3.5 text-cyan-300" /> }}
        headline="Aiforia digital pathology AI, represented by Translyx in"
        highlight="New Zealand."
        description="Aiforia is an authorised partner solution — not a Translyx-owned product. Translyx is the New Zealand business partner: a local bridge helping pathology groups, laboratories, and research teams evaluate and adopt AI-assisted digital pathology."
        primaryCTA={{ label: "Request a walkthrough", href: "/contact" }}
        secondaryCTA={{ label: "Digital pathology", href: "/digital-pathology" }}
      />

      {/* Partnership clarification */}
      <section className="bg-white py-14 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[1000px]">
            <div className="flex flex-col gap-5 rounded-2xl border border-cyan-200/70 bg-[#F5F8FC] p-6 sm:flex-row sm:items-center sm:p-8">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white ring-1 ring-cyan-200">
                <Handshake className="h-6 w-6 text-[#0891B2]" />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#0F1C3F]">
                  Translyx is an authorised business partner for Aiforia in New Zealand.
                </p>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">
                  Aiforia develops the digital pathology AI platform. Translyx represents and supports it locally — coordinating evaluation,
                  adoption, and clinical implementation. Nothing on this page implies Translyx ownership of Aiforia or any regulatory endorsement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="bg-white pb-18 pt-2 sm:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[1100px]">
            <SectionHeader
              eyebrow="Where it fits"
              title="One digital pathology AI platform across clinical, preclinical, and research workflows"
              description="AI-assisted image analysis supports specialists in quantifying and reviewing features in digital slides — at scale, and with reviewable outputs."
              className="mb-12"
            />
            <div className="grid gap-5 lg:grid-cols-3">
              {useCases.map(({ icon: Icon, label, title, body }) => (
                <div
                  key={label}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_2px_16px_-6px_rgba(15,28,63,0.1)] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/60 hover:shadow-[0_24px_60px_-30px_rgba(8,145,178,0.5)]"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F5F8FC] ring-1 ring-slate-200/70">
                    <Icon className="h-[22px] w-[22px] text-[#0891B2]" />
                  </span>
                  <p className="mt-4 text-[10.5px] font-semibold uppercase tracking-[0.16em] text-cyan-700/80">{label}</p>
                  <h3 className="mt-1.5 font-display text-xl font-semibold text-[#0F1C3F]">{title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-600">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How Translyx helps — local bridge */}
      <section className="relative overflow-hidden bg-deep py-18 sm:py-24">
        <div className="pointer-events-none absolute inset-0 grid-overlay opacity-40" />
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[1100px]">
            <SectionHeader
              tone="dark"
              eyebrow="The local bridge"
              title={
                <>
                  How Translyx supports Aiforia adoption in{" "}
                  <span className="text-gradient-brand">New Zealand &amp; Oceania.</span>
                </>
              }
              maxWidth="max-w-2xl"
              className="mb-12"
            />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {bridge.map(({ icon: Icon, title, body }) => (
                <div key={title} className="glass-panel rounded-2xl p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 ring-1 ring-inset ring-white/15">
                    <Icon className="h-5 w-5 text-cyan-300" />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold text-white">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/65">{body}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 rounded-2xl glass-panel p-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-300">
                {[
                  { icon: Eye, label: "Visible limitations" },
                  { icon: UserCheck, label: "Human oversight" },
                  { icon: MapPin, label: "Auckland, New Zealand" },
                ].map(({ icon: Icon, label }) => (
                  <span key={label} className="flex items-center gap-2">
                    <Icon className="h-4 w-4 text-cyan-300" />
                    {label}
                  </span>
                ))}
              </div>
              <span className="flex items-center gap-2 text-xs text-slate-400">
                <CheckCircle2 className="h-4 w-4 text-emerald-300" />
                No implied regulatory endorsement
              </span>
            </div>
          </div>
        </div>
      </section>

      <CTA
        title="Discuss Aiforia digital pathology AI with Translyx."
        description="Talk to the New Zealand business partner about evaluation, walkthroughs, and how AI-assisted digital pathology could fit your clinical, preclinical, or research workflows."
        primaryCTA={{ label: "Contact us", href: "/contact" }}
        secondaryCTA={{ label: "Explore digital pathology", href: "/digital-pathology" }}
      />
    </>
  );
}
