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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { SectionDivider } from "@/components/ui/DecorativeElements";
import { getProduct } from "@/config/products";
import { siteConfig } from "@/config/site";

const pageDescription =
  "Algoscope is a partner product represented by Translyx in New Zealand — AI-powered workflow automation, computer vision, 3D modelling, and traceability across surgery-to-pathology pathways for operating rooms and pathology laboratories.";

export const metadata: Metadata = {
  title: "Algoscope — Surgery-to-Pathology Workflow Automation | Translyx",
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
    images: [{ url: siteConfig.seo.ogImage, width: 1200, height: 630, alt: "Algoscope — partner product represented by Translyx" }],
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

const sampleJourney = [
  "Operating room",
  "Specimen capture",
  "Documentation",
  "Transport",
  "Lab accession",
  "Pathology reporting",
];

/*
 * Milestones from Algoscope's public materials.
 * TODO: verify each item and add its specific source URL before publishing —
 * remove any entry that cannot be source-linked.
 */
const milestones = [
  { label: "CytologIA DataChallenge", detail: "Participation in the CytologIA data challenge for AI in cytology" },
  { label: "Algoscope × Xpath partnership", detail: "Partnership announcement with Xpath" },
  { label: "Carrefour Pathologie", detail: "Presence at the French pathology congress" },
  { label: "AWS HealthDataCon", detail: "Presented at AWS HealthDataCon" },
  { label: "European Pathology Congress", detail: "Presence at the European Congress of Pathology" },
  { label: "ISO 13485 certification", detail: "According to Algoscope's public materials, obtained June 2023" },
  { label: "Next French Healthcare", detail: "Participation in the Next French Healthcare programme" },
];

export default function AlgoscopePage() {
  const algoscope = getProduct("algoscope");

  return (
    <>
      <Hero
        badge={{ text: "Partner product · Represented by Translyx in New Zealand", icon: <Workflow className="w-3.5 h-3.5" /> }}
        headline="AI-powered workflow automation for surgery and pathology"
        description="Algoscope streamlines workflows from surgery to pathology through intelligent automation, computer vision, 3D modelling, and traceability-focused tools designed for operating rooms and pathology laboratories."
        primaryCTA={{ label: "Discuss Algoscope", href: "/contact" }}
        secondaryCTA={{ label: "See all products", href: "/products" }}
        className="py-16 sm:py-20 md:py-28 lg:py-36"
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
            <div className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-gradient-to-br from-[#0F1C3F] to-[#0B1430] p-6 sm:p-8">
              <div className="grid grid-cols-2 gap-y-6 sm:grid-cols-3 lg:grid-cols-6">
                {sampleJourney.map((step, i) => (
                  <div key={step} className="relative flex flex-col items-center text-center">
                    {i < sampleJourney.length - 1 && (
                      <span className="absolute left-1/2 top-[14px] hidden h-px w-full bg-gradient-to-r from-violet-400/50 to-cyan-400/20 lg:block" />
                    )}
                    <span className="relative z-10 flex h-7 w-7 items-center justify-center rounded-full border border-violet-300/40 bg-violet-400/15 text-[11px] font-bold text-violet-200 shadow-[0_0_14px_rgba(139,92,246,0.35)]">
                      {i + 1}
                    </span>
                    <p className="mt-2.5 text-[11px] font-semibold leading-snug text-slate-200">{step}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 border-t border-white/10 pt-4 text-center text-[11px] text-slate-400">
                Traceability nodes capture each step — barcode, vision, and structured data — so the laboratory sees the
                full surgical context with every specimen.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider variant="gradient" />

      {/* Why manual workflows create bottlenecks */}
      <section className="bg-[#F5F8FC] py-16 sm:py-20 md:py-24 border-y border-slate-200/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-content mx-auto">
            <div className="max-w-2xl mb-10">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400 mb-3">The problem</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0F1C3F]">
                Why manual surgery-to-pathology workflows create bottlenecks
              </h2>
            </div>
            <div className="grid gap-5 sm:grid-cols-3">
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
            </div>
          </div>
        </div>
      </section>

      {/* Solution areas */}
      <section className="bg-white py-16 sm:py-20 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-content mx-auto">
            <div className="max-w-2xl mb-10">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400 mb-3">Solution areas</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0F1C3F]">
                From operating room to laboratory bench
              </h2>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {solutionAreas.map(({ icon: Icon, label, description }) => (
                <div key={label} className="rounded-xl bg-[#F5F8FC] border border-slate-200/80 p-4 sm:p-5">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-violet-50 ring-1 ring-violet-200/60">
                    <Icon className="h-5 w-5 text-violet-600" />
                  </div>
                  <p className="text-sm font-semibold text-[#0F1C3F]">{label}</p>
                  <p className="mt-1 text-xs text-slate-500 leading-snug">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-[#F5F8FC] py-16 sm:py-20 md:py-24 border-y border-slate-200/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-content mx-auto">
            <div className="max-w-2xl mb-10">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400 mb-3">Benefits</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0F1C3F]">
                Traceability, reliability, and laboratory efficiency
              </h2>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
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
            </div>
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="bg-white py-16 sm:py-20 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-content mx-auto">
            <div className="max-w-2xl mb-10">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400 mb-3">Technology</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0F1C3F]">
                Computer vision, 3D modelling, and workflow intelligence
              </h2>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
              {technology.map(({ icon: Icon, label, description }) => (
                <div key={label} className="rounded-xl bg-[#F5F8FC] border border-slate-200/80 p-4 text-center">
                  <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-white ring-1 ring-slate-200/70">
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
                <ul className="space-y-2.5">
                  {milestones.map(({ label, detail }) => (
                    <li key={label} className="flex items-start gap-2.5 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-violet-500 shrink-0 mt-0.5" />
                      <span>
                        <span className="font-semibold text-[#0F1C3F]">{label}</span>
                        <span className="text-slate-500"> — {detail}</span>
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 border-t border-slate-100 pt-3 text-xs leading-relaxed text-slate-400">
                  Milestones are drawn from Algoscope&apos;s public materials and are subject to source verification.
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
                      Translyx represents Algoscope in New Zealand — supporting regional evaluation, clinical workflow
                      relevance assessment, governance expectations, and adoption pathways for New Zealand and Oceania
                      healthcare organisations.
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
        primaryCTA={{ label: "Discuss Algoscope", href: "/contact" }}
        secondaryCTA={{ label: "See all products", href: "/products" }}
      />
    </>
  );
}
