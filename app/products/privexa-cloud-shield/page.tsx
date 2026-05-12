import type { Metadata } from "next";
import Link from "next/link";
import {
  Cloud,
  ExternalLink,
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
import { SectionDivider } from "@/components/ui/DecorativeElements";
import { siteConfig } from "@/config/site";

const pageDescription =
  "Privexa Cloud Shield provides field-level protection for sensitive data before it is used in cloud platforms, analytics workflows, or AI-enabled systems. Built by Privexa Limited, clinically positioned through Translyx.";

export const metadata: Metadata = {
  title: "Privexa Cloud Shield — Field-Level Cloud Data Protection | Translyx",
  description: pageDescription,
  keywords: [
    "Privexa Cloud Shield",
    "cloud data protection",
    "field-level tokenisation",
    "healthcare cloud security",
    "data pipeline protection",
    "AI data governance",
  ],
  alternates: { canonical: "/products/privexa-cloud-shield" },
  openGraph: {
    title: "Privexa Cloud Shield — Field-Level Cloud Data Protection | Translyx",
    description: pageDescription,
    url: `${siteConfig.url}/products/privexa-cloud-shield`,
    siteName: siteConfig.name,
    images: [{ url: siteConfig.seo.ogImage, width: 1200, height: 630, alt: "Privexa Cloud Shield" }],
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
  "Guaranteed detection of all sensitive data in all formats",
  "Replacement for cloud platform security configurations",
  "Implied compliance certification for any specific framework",
  "Autonomous data classification without human review",
];

export default function CloudShieldPage() {
  return (
    <>
      <Hero
        badge={{ text: "Built by Privexa · Clinically positioned through Translyx", icon: <Cloud className="w-3.5 h-3.5" /> }}
        headline="Field-level protection for cloud, data, and AI workflows"
        description="Privexa Cloud Shield supports field-level protection for sensitive data before it is used in cloud platforms, analytics workflows, or AI-enabled systems. The local mapping vault ensures original values remain recoverable only inside your perimeter."
        primaryCTA={{ label: "Request walkthrough", href: "/contact" }}
        secondaryCTA={{ label: "See all products", href: "/products" }}
        className="py-16 sm:py-20 md:py-28 lg:py-36"
      />

      {/* Audience */}
      <section className="bg-[#F7F5F1] border-b border-slate-200/60 py-10 sm:py-12">
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

      {/* How it works */}
      <section className="bg-white py-16 sm:py-20 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-content mx-auto">
            <div className="max-w-2xl mb-10">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400 mb-3">How it works</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0F1C3F]">
                Sensitive data is tokenised before it leaves your environment
              </h2>
            </div>
            <div className="grid gap-5 sm:grid-cols-3">
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
            </div>
          </div>
        </div>
      </section>

      {/* Included / not included */}
      <section className="bg-[#F7F5F1] py-16 sm:py-20 md:py-24 border-y border-slate-200/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-content mx-auto">
            <div className="max-w-2xl mb-10">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400 mb-3">Honest scoping</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0F1C3F]">What Cloud Shield includes — and what it does not</h2>
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
              <Card className="p-5 sm:p-6 bg-[#F7F5F1] border-slate-200/60" hover={false}>
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

      {/* Privexa relationship */}
      <section className="bg-white py-12 sm:py-14">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-content mx-auto">
            <Card className="p-5 sm:p-7 border-[#22D3EE]/20" hover={false}>
              <CardContent className="pt-0">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#0891B2] mb-1">Built by Privexa Limited</p>
                    <p className="text-sm text-slate-600">
                      Privexa Cloud Shield is developed by Privexa Limited and clinically positioned through Translyx for healthcare, diagnostics, and enterprise data workflows.
                    </p>
                  </div>
                  <a
                    href="https://www.privexa.co"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-[#F7F5F1] px-4 py-2.5 text-sm font-semibold text-slate-600 hover:bg-white transition-colors"
                  >
                    Visit Privexa <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <CTA
        title="See how Cloud Shield protects sensitive data in cloud workflows"
        description="Request a walkthrough to understand how Privexa Cloud Shield fits your organisation's cloud data protection and governance requirements."
        primaryCTA={{ label: "Request walkthrough", href: "/contact" }}
        secondaryCTA={{ label: "See all products", href: "/products" }}
      />
    </>
  );
}
