import type { Metadata } from "next";
import {
  FileText,
  CheckCircle2,
  XCircle,
  ShieldCheck,
  Mic,
  Building2,
  Users,
  Stethoscope,
  ClipboardList,
} from "lucide-react";

import { Hero } from "@/components/sections/Hero";
import { CTA } from "@/components/sections/CTA";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { StageRail } from "@/components/ui/StageRail";
import { siteConfig } from "@/config/site";

const pageDescription =
  "Scribe is a Translyx pipeline capability in development — structured clinical documentation workflows such as notes, summaries, letters, and reports with sensitive data protection and human review central. Not a publicly launched product.";

export const metadata: Metadata = {
  title: "Scribe — Pipeline Capability",
  description: pageDescription,
  keywords: [
    "clinical documentation AI",
    "privacy-protected notes",
    "healthcare documentation",
    "AI clinical notes",
    "PHI protection documentation",
    "SOAP notes AI",
    "Translyx pipeline",
  ],
  alternates: { canonical: "/pipeline/scribe" },
  openGraph: {
    title: "Scribe — Pipeline Capability | Translyx",
    description: pageDescription,
    url: `${siteConfig.url}/pipeline/scribe`,
    siteName: siteConfig.name,
    images: [{ url: siteConfig.seo.ogImage, width: 1200, height: 630, alt: "Scribe — Translyx pipeline capability" }],
  },
};

const capabilities = [
  {
    title: "Session recording with PHI protection",
    body: "Record clinical consultations and transcribe on completion. Sensitive health information is de-identified before any AI processing takes place.",
    icon: Mic,
  },
  {
    title: "Structured note generation",
    body: "Supports generation of structured documentation such as SOAP notes, referrals, discharge summaries, and clinical letters — with clinician review before finalisation.",
    icon: ClipboardList,
  },
  {
    title: "Local identity restoration",
    body: "After AI processing, original patient identifiers are restored locally and returned as a clinician-ready draft. PHI remains inside your boundary throughout.",
    icon: ShieldCheck,
  },
];

const audiences = [
  { icon: Stethoscope, label: "Clinicians", description: "Reduce documentation burden while maintaining clinical accuracy" },
  { icon: Building2, label: "Healthcare organisations", description: "Support documentation workflows with privacy controls" },
  { icon: Users, label: "Clinical teams", description: "Structured notes, referrals, and letters with human review" },
  { icon: ShieldCheck, label: "Compliance teams", description: "Documentation workflows that respect data governance obligations" },
];

const included = [
  "Clinical consultation recording and transcription",
  "PHI de-identification before AI processing",
  "Structured note generation (SOAP notes, referrals, discharge summaries)",
  "Local identity restoration after AI processing",
  "Clinician review controls before finalisation",
  "Audit trail of documentation workflows",
];

const notIncluded = [
  "A publicly launched or customer-available product",
  "Autonomous clinical documentation without human review",
  "Replacement for professional clinical judgement",
  "Guaranteed accuracy of all transcription or note content",
  "Implied regulatory certification or compliance guarantee",
  "Diagnostic or treatment recommendations",
];

export default function ScribePage() {
  return (
    <>
      <Hero
        badge={{ text: "Translyx pipeline capability · In development", icon: <FileText className="w-3.5 h-3.5" /> }}
        headline="Privacy-protected documentation for clinical and enterprise workflows"
        description="Scribe is a Translyx pipeline capability in development. The concept: structured documentation workflows such as notes, summaries, letters, and reports with sensitive data protection and human review central. It supports documentation — it does not replace professional judgement — and it is not a publicly launched product."
        primaryCTA={{ label: "Discuss this capability", href: "/contact" }}
        secondaryCTA={{ label: "View pipeline", href: "/pipeline" }}
        className="py-16 sm:py-20 md:py-28 lg:py-36"
      />

      {/* Stage rail */}
      <section className="bg-[#F5F8FC] border-b border-slate-200/60 py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-sm">
            <StageRail stage="development" accent="teal" />
          </div>
        </div>
      </section>

      {/* Audience */}
      <section className="bg-[#F5F8FC] border-b border-slate-200/60 py-10 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-content mx-auto">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400 mb-5 text-center">Who this is for</p>
            <Reveal className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {audiences.map(({ icon: Icon, label, description }) => (
                <div key={label} className="rounded-xl bg-white border border-slate-200/80 p-4 text-center shadow-[0_1px_8px_-2px_rgba(15,28,63,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-teal-300/60">
                  <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[#22D3EE]/10">
                    <Icon className="h-5 w-5 text-[#0891B2]" />
                  </div>
                  <p className="text-sm font-semibold text-[#0F1C3F]">{label}</p>
                  <p className="mt-1 text-xs text-slate-500 leading-snug">{description}</p>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-white py-16 sm:py-20 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-content mx-auto">
            <SectionHeader
              eyebrow="How it works"
              title="Clinical documentation with PHI protection built in"
              maxWidth="max-w-2xl"
              className="mb-10"
            />
            <Reveal className="grid gap-5 sm:grid-cols-3">
              {capabilities.map(({ title, body, icon: Icon }, i) => (
                <Card key={title} className="p-5 sm:p-6">
                  <CardHeader className="p-0 mb-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0F1C3F] text-xs font-bold text-white">
                        {i + 1}
                      </div>
                      <CardTitle className="text-base text-[#0F1C3F]">{title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="p-0">
                    <p className="text-sm text-slate-600 leading-relaxed">{body}</p>
                  </CardContent>
                </Card>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      {/* Included / not included */}
      <section className="bg-[#F5F8FC] py-16 sm:py-20 md:py-24 border-y border-slate-200/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-content mx-auto">
            <SectionHeader
              eyebrow="Honest scoping"
              title="What Scribe includes — and what it does not"
              maxWidth="max-w-2xl"
              className="mb-10"
            />
            <div className="grid sm:grid-cols-2 gap-6">
              <Card className="p-5 sm:p-6" hover={false}>
                <CardHeader className="p-0 mb-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">Included</p>
                </CardHeader>
                <CardContent className="p-0">
                  <ul className="space-y-2.5">
                    {included.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-slate-700">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <Card className="p-5 sm:p-6 bg-[#F5F8FC] border-slate-200/60" hover={false}>
                <CardHeader className="p-0 mb-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Not included</p>
                </CardHeader>
                <CardContent className="p-0">
                  <ul className="space-y-2.5">
                    {notIncluded.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-slate-500">
                        <XCircle className="h-4 w-4 text-slate-300 shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Pipeline status */}
      <section className="bg-white py-12 sm:py-14">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-content mx-auto">
            <Card className="card-info p-5 sm:p-7" hover={false}>
              <CardContent className="pt-0">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#0891B2] mb-1">Pipeline status</p>
                <p className="text-sm text-slate-600">
                  Scribe is part of the Translyx pipeline and is in development. It is not a publicly launched
                  product and is not currently available to customers. Talk to Translyx to discuss the capability,
                  evaluation pathways, and how it could fit your organisation&apos;s documentation workflows.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <CTA
        title="Discuss privacy-protected documentation with Translyx"
        description="Request a walkthrough to understand how the Scribe capability fits your organisation's documentation needs — with privacy protection and clinician review built in."
        primaryCTA={{ label: "Request walkthrough", href: "/contact" }}
        secondaryCTA={{ label: "View pipeline", href: "/pipeline" }}
      />
    </>
  );
}
