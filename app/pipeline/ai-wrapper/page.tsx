import type { Metadata } from "next";
import {
  ArrowRight,
  Lock,
  ShieldCheck,
  CheckCircle2,
  XCircle,
  Building2,
  FlaskConical,
  Users,
  Microscope,
} from "lucide-react";

import { Hero } from "@/components/sections/Hero";
import { CTA } from "@/components/sections/CTA";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { StageRail } from "@/components/ui/StageRail";
import { siteConfig } from "@/config/site";

const pageDescription =
  "AI Wrapper is a Translyx pipeline capability under evaluation — a secure LLM gateway concept that helps organisations use AI systems without sending sensitive data in its original form. Not a publicly launched product.";

export const metadata: Metadata = {
  title: "AI Wrapper — Pipeline Capability",
  description: pageDescription,
  keywords: [
    "secure AI gateway",
    "LLM privacy",
    "AI data protection healthcare",
    "privacy-preserving AI",
    "PII protection AI",
    "healthcare AI privacy",
    "Translyx pipeline",
  ],
  alternates: { canonical: "/pipeline/ai-wrapper" },
  openGraph: {
    title: "AI Wrapper — Pipeline Capability | Translyx",
    description: pageDescription,
    url: `${siteConfig.url}/pipeline/ai-wrapper`,
    siteName: siteConfig.name,
    images: [{ url: siteConfig.seo.ogImage, width: 1200, height: 630, alt: "AI Wrapper — Translyx pipeline capability" }],
  },
};

const capabilities = [
  {
    title: "Sensitive field detection",
    body: "Identifies patient names, identifiers, dates of birth, clinical notes, and custom entity types before they reach any external AI system.",
    icon: ShieldCheck,
  },
  {
    title: "Token replacement",
    body: "Replaces sensitive fields with safe placeholder tokens. AI systems operate on tokens — original data stays inside your environment.",
    icon: Lock,
  },
  {
    title: "Response restoration",
    body: "When AI responses return, original context is restored locally and seamlessly. Users see complete, contextual outputs without exposure.",
    icon: ArrowRight,
  },
];

const audiences = [
  { icon: Building2, label: "Hospitals & health systems", description: "Use AI tools without exposing patient data to external systems" },
  { icon: FlaskConical, label: "Research teams", description: "Apply AI to sensitive datasets with field-level protection" },
  { icon: Users, label: "Enterprise teams", description: "Enable AI adoption while maintaining data governance obligations" },
  { icon: Microscope, label: "Diagnostic organisations", description: "Integrate AI workflows with privacy controls from the outset" },
];

const included = [
  "Sensitive field detection and replacement before AI processing",
  "Token-based placeholder mapping",
  "Local response restoration",
  "Support for custom entity types",
  "Audit trail of protected interactions",
  "Designed for healthcare, research, and enterprise workflows",
];

const notIncluded = [
  "A publicly launched or customer-available product",
  "Guaranteed 100% detection of all sensitive data in all contexts",
  "Implied regulatory certification or compliance guarantee",
  "Replacement for organisational data governance policies",
  "Autonomous decision-making or clinical recommendations",
];

export default function AIWrapperPage() {
  return (
    <>
      <Hero
        badge={{ text: "Translyx pipeline capability · Under evaluation", icon: <Lock className="w-3.5 h-3.5" /> }}
        headline="Secure LLM gateway for privacy-preserving AI use"
        description="AI Wrapper is a Translyx pipeline capability under evaluation. The concept: organisations use AI systems without sending sensitive data in its original form — sensitive fields are transformed into protected placeholders before approved AI workflows and reconstructed under controlled conditions. It is not a publicly launched product."
        primaryCTA={{ label: "Discuss this capability", href: "/contact" }}
        secondaryCTA={{ label: "View pipeline", href: "/pipeline" }}
      />

      {/* Stage rail */}
      <section className="bg-[#F5F8FC] border-b border-slate-200/60 py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-sm">
            <StageRail stage="evaluation" accent="violet" />
          </div>
        </div>
      </section>

      {/* Audience */}
      <section className="bg-[#F5F8FC] border-b border-slate-200/60 py-10 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-content mx-auto">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400 mb-5 text-center">Who this is designed for</p>
            <Reveal className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {audiences.map(({ icon: Icon, label, description }) => (
                <div key={label} className="rounded-xl bg-white border border-slate-200/80 p-4 text-center shadow-[0_1px_8px_-2px_rgba(15,28,63,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-violet-300/60">
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
              eyebrow="How the concept works"
              title="Sensitive data is protected before it reaches any AI system"
              maxWidth="max-w-2xl"
              className="mb-10"
            />
            <Reveal className="grid gap-5 sm:grid-cols-3">
              {capabilities.map(({ title, body }, i) => (
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
              title="What this capability covers — and what it does not"
              maxWidth="max-w-2xl"
              className="mb-10"
            />
            <div className="grid sm:grid-cols-2 gap-6">
              <Card className="p-5 sm:p-6" hover={false}>
                <CardHeader className="p-0 mb-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">In scope</p>
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
                  AI Wrapper is part of the Translyx pipeline and is under evaluation. It is not a publicly launched
                  product and is not currently available to customers. Talk to Translyx to discuss the capability,
                  evaluation pathways, and how it could fit your organisation&apos;s governance requirements.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <CTA
        title="Discuss protected AI adoption with Translyx"
        description="Request a walkthrough to understand how the AI Wrapper capability fits your organisation's AI adoption and data governance requirements."
        primaryCTA={{ label: "Request walkthrough", href: "/contact" }}
        secondaryCTA={{ label: "View pipeline", href: "/pipeline" }}
      />
    </>
  );
}
