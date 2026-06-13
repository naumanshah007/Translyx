import type { Metadata } from "next";
import {
  Stethoscope,
  CheckCircle2,
  XCircle,
  ShieldCheck,
  Users,
  ClipboardCheck,
  FileCheck,
  AlertCircle,
  Building2,
} from "lucide-react";

import { Hero } from "@/components/sections/Hero";
import { CTA } from "@/components/sections/CTA";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { SectionDivider } from "@/components/ui/DecorativeElements";
import { siteConfig } from "@/config/site";

const pageDescription =
  "ClinicalTriage is a Translyx pipeline capability in development — structured referral review, pathway grading, role-based workflows, and auditability for authorised clinical users. Not a publicly launched product.";

export const metadata: Metadata = {
  title: "ClinicalTriage — Pipeline Capability | Translyx",
  description: pageDescription,
  keywords: [
    "ClinicalTriage",
    "clinical pathway support",
    "referral grading",
    "clinical workflow",
    "healthcare triage",
    "audited clinical workflow",
    "Translyx pipeline",
  ],
  alternates: { canonical: "/pipeline/clinical-triage" },
  openGraph: {
    title: "ClinicalTriage — Pipeline Capability | Translyx",
    description: pageDescription,
    url: `${siteConfig.url}/pipeline/clinical-triage`,
    siteName: siteConfig.name,
    images: [{ url: siteConfig.seo.ogImage, width: 1200, height: 630, alt: "ClinicalTriage — Translyx pipeline capability" }],
  },
};

const capabilities = [
  {
    title: "Structured referral review",
    body: "Supports systematic review and grading of referral requests against pathway criteria, helping authorised clinical teams prioritise and route referrals consistently.",
    icon: ClipboardCheck,
  },
  {
    title: "Role-based access",
    body: "Supports differentiated access for administrators, clinicians, coordinators, and specialist reviewers — with each role scoped to relevant workflow stages.",
    icon: Users,
  },
  {
    title: "Audited workflows",
    body: "All access and workflow actions are audited. Decisions are traceable and reviewable, supporting governance and accountability requirements.",
    icon: FileCheck,
  },
  {
    title: "Human review at every stage",
    body: "ClinicalTriage supports workflow decisions made by authorised clinical users. It does not make autonomous clinical decisions or provide diagnostic recommendations.",
    icon: ShieldCheck,
  },
];

const audiences = [
  { icon: Stethoscope, label: "Clinical teams", description: "Structured referral review and pathway grading workflows" },
  { icon: Building2, label: "Healthcare organisations", description: "Consistent, auditable referral management across services" },
  { icon: Users, label: "Specialist reviewers", description: "Review and prioritise referrals with role-based access" },
  { icon: ShieldCheck, label: "Clinical governance", description: "Audited, traceable workflows for referral management" },
];

const included = [
  "Structured referral review and pathway grading",
  "Role-based access (admin, clinician, coordinator, specialist reviewer)",
  "Audited access and workflow actions",
  "Human review at every decision point",
  "Designed for authorised clinical users",
  "Support for clinical pathway criteria and referral routing",
];

const notIncluded = [
  "A publicly launched or customer-available product",
  "Autonomous diagnosis or clinical decision-making",
  "Implied institutional endorsement unless confirmed in writing",
  "Replacement for clinical judgement or specialist review",
  "Guaranteed accuracy of referral grading outcomes",
  "Access for unauthorised users",
];

export default function ClinicalTriagePage() {
  return (
    <>
      <Hero
        badge={{ text: "Translyx pipeline capability · In development", icon: <Stethoscope className="w-3.5 h-3.5" /> }}
        headline="Clinical pathway and referral grading support for authorised healthcare teams"
        description="ClinicalTriage is a Translyx pipeline capability in development. The concept: structured referral review, pathway grading, role-based workflows, and auditability for authorised clinical users — human-reviewed workflow decisions, never autonomous diagnosis. It is not a publicly launched product."
        primaryCTA={{ label: "Discuss this capability", href: "/contact" }}
        secondaryCTA={{ label: "View pipeline", href: "/pipeline" }}
        className="py-16 sm:py-20 md:py-28 lg:py-36"
      />

      {/* Audience */}
      <section className="bg-[#F5F8FC] border-b border-slate-200/60 py-10 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-content mx-auto">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400 mb-5 text-center">Who this is for</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {audiences.map(({ icon: Icon, label, description }) => (
                <div key={label} className="rounded-xl bg-white border border-slate-200/80 p-4 text-center shadow-[0_1px_8px_-2px_rgba(15,28,63,0.06)]">
                  <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[#22D3EE]/10">
                    <Icon className="h-5 w-5 text-[#0891B2]" />
                  </div>
                  <p className="text-sm font-semibold text-[#0F1C3F]">{label}</p>
                  <p className="mt-1 text-xs text-slate-500 leading-snug">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SectionDivider variant="gradient" />

      {/* Capabilities */}
      <section className="bg-white py-16 sm:py-20 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-content mx-auto">
            <div className="max-w-2xl mb-10">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400 mb-3">Capabilities</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0F1C3F]">
                Structured, audited workflows for referral management
              </h2>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {capabilities.map(({ title, body, icon: Icon }) => (
                <Card key={title} className="p-5 sm:p-6">
                  <CardHeader className="p-0 mb-3">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#0F1C3F]/6 flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-[#0F1C3F]" />
                      </div>
                      <CardTitle className="text-base text-[#0F1C3F] leading-snug">{title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="p-0">
                    <p className="text-sm text-slate-600 leading-relaxed">{body}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Safety note */}
      <section className="bg-[#F5F8FC] py-12 sm:py-14 border-y border-slate-200/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-content mx-auto">
            <Card className="p-5 sm:p-7 border-amber-200/60" hover={false}>
              <CardContent className="pt-0">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-amber-50 flex items-center justify-center shrink-0">
                    <AlertCircle className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#0F1C3F] mb-2">Clinical safety and governance note</h3>
                    <p className="text-sm text-slate-700 leading-relaxed mb-3">
                      ClinicalTriage supports human-reviewed workflow decisions. It does not provide autonomous diagnosis, automated treatment recommendations, or clinical decision-making without human oversight.
                    </p>
                    <p className="text-sm text-slate-700 leading-relaxed mb-3">
                      ClinicalTriage is designed for authorised clinical users operating within their scope of practice and institutional governance frameworks.
                    </p>
                    <p className="text-sm text-slate-500 font-medium">
                      ClinicalTriage does not imply endorsement by any healthcare organisation, district health board, or government body unless confirmed in writing by the relevant institution.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Included / not included */}
      <section className="bg-white py-16 sm:py-20 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-content mx-auto">
            <div className="max-w-2xl mb-10">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400 mb-3">Honest scoping</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0F1C3F]">What ClinicalTriage covers — and what it does not</h2>
            </div>
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
      <section className="bg-[#F5F8FC] py-12 sm:py-14 border-t border-slate-200/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-content mx-auto">
            <Card className="p-5 sm:p-7 border-[#22D3EE]/20" hover={false}>
              <CardContent className="pt-0">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#0891B2] mb-1">Pipeline status</p>
                <p className="text-sm text-slate-600">
                  ClinicalTriage is part of the Translyx pipeline and is in development. It is not a publicly launched
                  product and is not currently available to customers. Talk to Translyx to discuss the capability,
                  evaluation pathways, and how it could fit your organisation&apos;s referral management workflows.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <CTA
        title="Discuss the ClinicalTriage capability for your clinical team"
        description="Request a walkthrough to see how the ClinicalTriage capability supports structured referral review, pathway grading, and audited clinical workflows."
        primaryCTA={{ label: "Request walkthrough", href: "/contact" }}
        secondaryCTA={{ label: "View pipeline", href: "/pipeline" }}
      />
    </>
  );
}
