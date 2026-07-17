import type { Metadata } from "next";
import {
  Cloud,
  CheckCircle2,
  XCircle,
  ShieldCheck,
  Database,
  Building2,
  FlaskConical,
  Users,
  Lock,
} from "lucide-react";

import { Hero } from "@/components/sections/Hero";
import { CTA } from "@/components/sections/CTA";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { StageRail } from "@/components/ui/StageRail";
import { siteConfig } from "@/config/site";

const pageDescription =
  "Cloud Shield is a Translyx pipeline capability under evaluation — field-level protection for sensitive data before it is used in cloud platforms, analytics workflows, or AI-enabled systems. Not a publicly launched product.";

export const metadata: Metadata = {
  title: "Cloud Shield — Pipeline Capability",
  description: pageDescription,
  keywords: [
    "cloud data protection",
    "field-level tokenisation",
    "healthcare cloud security",
    "data pipeline protection",
    "AI data governance",
    "Translyx pipeline",
  ],
  alternates: { canonical: "/pipeline/cloud-shield" },
  openGraph: {
    title: "Cloud Shield — Pipeline Capability | Translyx",
    description: pageDescription,
    url: `${siteConfig.url}/pipeline/cloud-shield`,
    siteName: siteConfig.name,
    images: [{ url: siteConfig.seo.ogImage, width: 1200, height: 630, alt: "Cloud Shield — Translyx pipeline capability" }],
  },
};

const capabilities = [
  {
    title: "Field-level tokenisation",
    body: "Sensitive fields are identified and replaced with safe tokens before data moves into cloud platforms or analytics pipelines.",
    icon: Lock,
  },
  {
    title: "Local mapping vault",
    body: "The relationship between tokens and original values is maintained in a local vault — reversible only inside your perimeter.",
    icon: Database,
  },
  {
    title: "Platform-aware protection",
    body: "Designed to work across cloud data workflows, analytics environments, and AI-enabled systems where sensitive data may otherwise be exposed.",
    icon: Cloud,
  },
];

const audiences = [
  { icon: Building2, label: "Health systems", description: "Protect patient data flowing into cloud analytics and reporting" },
  { icon: FlaskConical, label: "Research organisations", description: "Share datasets for analysis without exposing identifiable fields" },
  { icon: Users, label: "Enterprise teams", description: "Maintain data governance as workloads move to cloud infrastructure" },
  { icon: ShieldCheck, label: "Compliance teams", description: "Support privacy obligations across multi-cloud environments" },
];

const included = [
  "Field-level sensitive data detection",
  "Token replacement before cloud platform processing",
  "Local mapping vault for controlled restoration",
  "Support for structured and semi-structured data",
  "Audit trail of protection operations",
  "Designed for healthcare, research, and enterprise data workflows",
];

const notIncluded = [
  "A publicly launched or customer-available product",
  "Guaranteed detection of all sensitive data in all formats",
  "Replacement for cloud platform security configurations",
  "Implied compliance certification for any specific framework",
  "Autonomous data classification without human review",
];

export default function CloudShieldPage() {
  return (
    <>
      <Hero
        badge={{ text: "Translyx pipeline capability · Under evaluation", icon: <Cloud className="w-3.5 h-3.5" /> }}
        headline="Field-level protection for cloud, data, and AI workflows"
        description="Cloud Shield is a Translyx pipeline capability under evaluation. The concept: field-level protection for sensitive data before it is used in cloud platforms, analytics workflows, or AI-enabled systems — with a local mapping vault that keeps original values recoverable only inside your perimeter. It is not a publicly launched product."
        primaryCTA={{ label: "Discuss this capability", href: "/contact" }}
        secondaryCTA={{ label: "View pipeline", href: "/pipeline" }}
      />

      {/* Stage rail */}
      <section className="bg-[#F5F8FC] border-b border-slate-200/60 py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-sm">
            <StageRail stage="evaluation" accent="sky" />
          </div>
        </div>
      </section>

      {/* Audience */}
      <section className="bg-[#F5F8FC] border-b border-slate-200/60 py-10 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-content mx-auto">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-600 mb-5 text-center">Who this is for</p>
            <Reveal className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {audiences.map(({ icon: Icon, label, description }) => (
                <div key={label} className="rounded-xl bg-white border border-slate-200/80 p-4 text-center shadow-[0_1px_8px_-2px_rgba(15,28,63,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-sky-300/60">
                  <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[#22D3EE]/10">
                    <Icon className="h-5 w-5 text-[#0E7490]" />
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
              title="Sensitive data is tokenised before it leaves your environment"
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
              title="What Cloud Shield includes — and what it does not"
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
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">Not included</p>
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
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#0E7490] mb-1">Pipeline status</p>
                <p className="text-sm text-slate-600">
                  Cloud Shield is part of the Translyx pipeline and is under evaluation. It is not a publicly launched
                  product and is not currently available to customers. Talk to Translyx to discuss the capability,
                  evaluation pathways, and how it could fit your organisation&apos;s data governance requirements.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <CTA
        title="Discuss governed cloud data protection with Translyx"
        description="Request a walkthrough to understand how the Cloud Shield capability fits your organisation's cloud data protection and governance requirements."
        primaryCTA={{ label: "Request walkthrough", href: "/contact" }}
        secondaryCTA={{ label: "View pipeline", href: "/pipeline" }}
      />
    </>
  );
}
