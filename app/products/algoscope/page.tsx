import type { Metadata } from "next";
import {
  Workflow,
  ScanLine,
  Boxes,
  CheckCircle2,
  Microscope,
  FlaskConical,
  Building2,
  Stethoscope,
  TestTubes,
  Dna,
  ClipboardList,
  ShieldCheck,
  Cpu,
  Eye,
  BarChart3,
  MapPin,
  Award,
  Newspaper,
  Users,
} from "lucide-react";

import { Hero } from "@/components/sections/Hero";
import { CTA } from "@/components/sections/CTA";
import { SampleJourneyDiagram } from "@/components/sections/SampleJourneyDiagram";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { getProduct } from "@/config/products";
import { siteConfig } from "@/config/site";

const pageDescription =
  "Algoscope is a partner product Translyx is bringing to New Zealand — AI-powered workflow automation, computer vision, 3D modelling, and traceability across surgery-to-pathology pathways for operating rooms and pathology laboratories. Translyx and Algoscope are finalising a New Zealand representation partnership.";

export const metadata: Metadata = {
  title: "Algoscope — Surgery-to-Pathology Workflow Automation",
  description: pageDescription,
  keywords: [
    "Algoscope",
    "Algoscope New Zealand",
    "surgery-to-pathology workflow automation",
    "pathology traceability",
    "pre-analytical workflow optimisation",
    "sample traceability",
    "computer vision pathology",
    "anatomopathology tools",
  ],
  alternates: { canonical: "/products/algoscope" },
  openGraph: {
    title: "Algoscope — Surgery-to-Pathology Workflow Automation | Translyx",
    description: pageDescription,
    url: `${siteConfig.url}/products/algoscope`,
    siteName: siteConfig.name,
    images: [{ url: siteConfig.seo.ogImage, width: 1200, height: 630, alt: "Algoscope — partner product Translyx is bringing to New Zealand" }],
  },
};

const trustChips = [
  { icon: ShieldCheck, label: "Partner Product" },
  { icon: Workflow, label: "Surgery-to-pathology workflow" },
  { icon: ScanLine, label: "AI-driven traceability" },
  { icon: Microscope, label: "Pathology laboratory efficiency" },
  { icon: Boxes, label: "Computer vision & 3D modelling" },
];

const bottlenecks = [
  {
    title: "Manual sample handover",
    body: "Specimens move from theatre to laboratory through manual, paper-based steps — each one a point where documentation can drift from reality.",
  },
  {
    title: "Fragmented documentation",
    body: "Surgical context, specimen details, and laboratory records often live in separate systems, making end-to-end traceability slow and error-prone.",
  },
  {
    title: "Pre-analytical variability",
    body: "Inconsistent labelling, handling, and accessioning in the pre-analytical phase remains one of the largest sources of laboratory error worldwide.",
  },
];

const solutionAreas = [
  { icon: Microscope, label: "Anatomopathology tools", description: "Structured support for anatomic pathology specimen workflows" },
  { icon: Building2, label: "Pathology laboratories", description: "Accessioning, tracking, and documentation reliability in the lab" },
  { icon: Stethoscope, label: "Surgery workflow support", description: "Specimen capture and documentation from the operating room onward" },
  { icon: TestTubes, label: "Cytology", description: "Workflow automation relevant to cytology preparation and review" },
  { icon: Dna, label: "Molecular biology", description: "Traceability supporting molecular and downstream testing pathways" },
  { icon: FlaskConical, label: "CROs & research workflows", description: "Standardised, documented sample journeys for research programmes" },
];

const benefits = [
  {
    icon: ScanLine,
    title: "AI-driven traceability",
    body: "Each specimen's journey from surgery to pathology is captured and documented — supported by computer vision and structured workflow data.",
  },
  {
    icon: CheckCircle2,
    title: "Reliability & precision",
    body: "Reducing manual transcription and handover gaps improves documentation reliability across the pre-analytical pathway.",
  },
  {
    icon: Workflow,
    title: "Workflow optimisation",
    body: "Intelligent automation streamlines the surgery-to-pathology pathway, standardising steps that are otherwise highly variable.",
  },
  {
    icon: BarChart3,
    title: "Efficiency gain",
    body: "Laboratories gain time and consistency — fewer interruptions chasing missing context, more standardised throughput.",
  },
];

const technology = [
  { icon: Eye, label: "Computer vision", description: "Visual capture and recognition across specimen handling steps" },
  { icon: Boxes, label: "3D modelling", description: "Three-dimensional specimen representation supporting documentation" },
  { icon: Cpu, label: "Pre-analytical workflow intelligence", description: "Automation focused on the highest-risk phase of the testing pathway" },
  { icon: TestTubes, label: "Sample handling", description: "Structured support for specimen identification and movement" },
  { icon: ClipboardList, label: "Structured workflow data", description: "Workflow dashboards and documented, reviewable data trails" },
];

/*
 * Milestones drawn from Algoscope's public materials and verified against their
 * public site (June 2026). Each is attributed to Algoscope, with dates as they
 * publish them. Source-linked at the foot of the section.
 */
const milestones = [
  { label: "Algoscope × Xpath Groupe partnership", detail: "Partnership to integrate AI-powered laboratory solutions (Nov 2024)" },
  { label: "CytologIA DataChallenge", detail: "AI-in-cytology data challenge, with GFHC and the Health Data Hub (Dec 2024)" },
  { label: "Carrefour Pathologie", detail: "Showcase at the French pathology congress (Nov 2024)" },
  { label: "AWS HealthDataCon", detail: "Featured in the AWS HealthDataCon “Unicorn Tank” (Oct 2024)" },
  { label: "European Congress of Pathology", detail: "Presence at the 36th ECP in Italy (Sep 2024)" },
  { label: "ISO 13485:2016 certification", detail: "Certified by AFNOR Certification, per Algoscope (Jun 2023)" },
  { label: "Next French Healthcare", detail: "Participation in the Business France Next Healthcare programme (May 2023)" },
];

export default function AlgoscopePage() {
  const algoscope = getProduct("algoscope");

  return (
    <>
      <Hero
        badge={{ text: "Partner product · New Zealand representation being finalised", icon: <Workflow className="w-3.5 h-3.5" /> }}
        headline="AI-powered workflow automation for surgery and pathology"
        description="Algoscope streamlines workflows from surgery to pathology through intelligent automation, computer vision, 3D modelling, and traceability-focused tools designed for operating rooms and pathology laboratories."
        primaryCTA={{ label: "Discuss Algoscope", href: "/contact?topic=algoscope" }}
        secondaryCTA={{ label: "See all products", href: "/products" }}
      />

      {/* Trust chips */}
      <section className="bg-[#F5F8FC] border-b border-slate-200/60 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-content mx-auto flex flex-wrap items-center justify-center gap-3">
            {trustChips.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white px-4 py-2 text-xs font-semibold text-slate-600 shadow-[0_1px_8px_-2px_rgba(15,28,63,0.06)]"
              >
                <Icon className="h-3.5 w-3.5 text-violet-500" />
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Sample journey visual */}
      <section className="bg-white py-14 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-content mx-auto">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400 mb-6 text-center">
              The sample journey, traced end to end
            </p>
            <SampleJourneyDiagram />
          </div>
        </div>
      </section>

      {/* Why manual workflows create bottlenecks */}
      <section className="bg-[#F5F8FC] py-16 sm:py-20 md:py-24 border-y border-slate-200/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-content mx-auto">
            <SectionHeader
              eyebrow="The problem"
              title="Why manual surgery-to-pathology workflows create bottlenecks"
              maxWidth="max-w-2xl"
              className="mb-10"
            />
            <Reveal className="grid gap-5 sm:grid-cols-3">
              {bottlenecks.map(({ title, body }, i) => (
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

      {/* Solution areas */}
      <section className="bg-white py-16 sm:py-20 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-content mx-auto">
            <SectionHeader
              eyebrow="Solution areas"
              title="From operating room to laboratory bench"
              maxWidth="max-w-2xl"
              className="mb-10"
            />
            <Reveal className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {solutionAreas.map(({ icon: Icon, label, description }) => (
                <div key={label} className="rounded-xl bg-[#F5F8FC] border border-slate-200/80 p-4 sm:p-5 transition-all duration-300 hover:-translate-y-1 hover:border-violet-300/60 hover:shadow-[0_18px_40px_-22px_rgba(139,92,246,0.35)]">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-violet-50 ring-1 ring-violet-200/60">
                    <Icon className="h-5 w-5 text-violet-600" />
                  </div>
                  <p className="text-sm font-semibold text-[#0F1C3F]">{label}</p>
                  <p className="mt-1 text-xs text-slate-500 leading-snug">{description}</p>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-[#F5F8FC] py-16 sm:py-20 md:py-24 border-y border-slate-200/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-content mx-auto">
            <SectionHeader
              eyebrow="Benefits"
              title="Traceability, reliability, and laboratory efficiency"
              maxWidth="max-w-2xl"
              className="mb-10"
            />
            <Reveal className="grid gap-5 sm:grid-cols-2">
              {benefits.map(({ icon: Icon, title, body }) => (
                <Card key={title} className="p-5 sm:p-6">
                  <CardHeader className="p-0">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-violet-50 flex items-center justify-center shrink-0 ring-1 ring-violet-200/60">
                        <Icon className="w-5 h-5 text-violet-600" />
                      </div>
                      <CardTitle className="text-base sm:text-lg leading-snug text-[#0F1C3F]">{title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="p-0 pt-4">
                    <p className="text-sm text-slate-600 leading-relaxed">{body}</p>
                  </CardContent>
                </Card>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="bg-white py-16 sm:py-20 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-content mx-auto">
            <SectionHeader
              eyebrow="Technology"
              title="Computer vision, 3D modelling, and workflow intelligence"
              maxWidth="max-w-2xl"
              className="mb-10"
            />
            <Reveal className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
              {technology.map(({ icon: Icon, label, description }) => (
                <div key={label} className="rounded-xl bg-[#F5F8FC] border border-slate-200/80 p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/60">
                  <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-white ring-1 ring-slate-200/70">
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

      {/* Company credibility + milestones */}
      <section className="bg-[#F5F8FC] py-16 sm:py-20 md:py-24 border-y border-slate-200/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-content mx-auto grid gap-8 lg:grid-cols-2">
            <Card className="p-5 sm:p-7 lg:p-8" cornerAccent>
              <CardHeader className="p-0">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-violet-50 flex items-center justify-center ring-1 ring-violet-200/60">
                    <Users className="w-5 h-5 text-violet-600" />
                  </div>
                  <CardTitle className="text-2xl text-[#0F1C3F]">Built by clinicians and engineers</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-0 space-y-4 text-base leading-relaxed text-slate-700">
                <p>
                  Algoscope was founded in France by a pathologist, a clinical pathologist, and an engineer, and emerged
                  from doctoral research into pathology workflow automation. The result is technology shaped by the
                  people who live the surgery-to-pathology pathway every day.
                </p>
                {algoscope?.claims?.map((claim) => (
                  <div key={claim.text} className="flex items-start gap-3 rounded-xl border border-slate-200/80 bg-white p-4">
                    <Award className="mt-0.5 h-4 w-4 shrink-0 text-violet-500" />
                    <p className="text-sm leading-relaxed text-slate-600">
                      {claim.text}{" "}
                      <a
                        href={claim.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-[#0891B2] hover:underline"
                      >
                        Source: {claim.attribution}
                      </a>
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="p-5 sm:p-7 lg:p-8">
              <CardHeader className="p-0">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-[#0F1C3F]/6 flex items-center justify-center">
                    <Newspaper className="w-5 h-5 text-[#0F1C3F]" />
                  </div>
                  <CardTitle className="text-2xl text-[#0F1C3F]">Milestones &amp; recognition</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <ol className="relative space-y-5 border-l border-violet-200/70 pl-5">
                  {milestones.map(({ label, detail }) => (
                    <li key={label} className="relative text-sm">
                      <span className="absolute -left-[26px] top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-white ring-2 ring-violet-400">
                        <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />
                      </span>
                      <span className="font-semibold text-[#0F1C3F]">{label}</span>
                      <span className="block text-slate-500">{detail}</span>
                    </li>
                  ))}
                </ol>
                <p className="mt-5 border-t border-slate-100 pt-3 text-xs leading-relaxed text-slate-400">
                  Milestones are as published by Algoscope. Source:{" "}
                  <a
                    href="https://www.algoscope.fr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-violet-600 underline-offset-2 hover:underline"
                  >
                    algoscope.fr
                  </a>
                  .
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Translyx regional role + partner attribution */}
      <section className="bg-white py-12 sm:py-14">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-content mx-auto">
            <Card className="p-5 sm:p-7 border-violet-200/60" hover={false}>
              <CardContent className="pt-0">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-violet-50 flex items-center justify-center shrink-0 ring-1 ring-violet-200/60">
                    <MapPin className="w-5 h-5 text-violet-600" />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-violet-600 mb-1">
                      Translyx regional role
                    </p>
                    <p className="text-sm text-slate-600 leading-relaxed mb-3">
                      Translyx and Algoscope are finalising a New Zealand representation partnership. Translyx is
                      supporting regional evaluation, clinical workflow relevance assessment, governance expectations,
                      and adoption pathways for New Zealand and Oceania healthcare organisations.
                    </p>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      Algoscope is a partner product — it is not owned or developed by Translyx. Product-specific
                      regulatory status, intended use, and applicable local requirements should be confirmed with
                      Algoscope and the relevant regulatory authorities. Translyx does not claim or imply any
                      jurisdiction-specific regulatory endorsement for Algoscope products.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <CTA
        title="Discuss Algoscope for your surgical or pathology workflows"
        description="Talk to Translyx about how Algoscope's workflow automation and traceability could fit your operating rooms, pathology laboratories, or research programmes."
        primaryCTA={{ label: "Discuss Algoscope", href: "/contact?topic=algoscope" }}
        secondaryCTA={{ label: "See all products", href: "/products" }}
      />
    </>
  );
}
