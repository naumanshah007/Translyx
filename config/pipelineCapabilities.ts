/**
 * Pipeline capabilities — Translyx clinical AI workflow capabilities.
 *
 * These are NOT launched products. They are internal workflow capabilities
 * under evaluation or in development, presented as part of the Translyx
 * pipeline. There is intentionally no externalHref field: capabilities must
 * never link out to a live platform. Detail pages CTA to /contact.
 */

import type { ProductAccent } from "./products";

export type CapabilityStage = "evaluation" | "development" | "future";

export interface PipelineCapability {
  slug: string;
  title: string;
  stage: CapabilityStage;
  tagline: string;
  description: string;
  icon: string;
  accent: ProductAccent;
  href: string;
  /** Bullet points for the capability detail page */
  capabilities: string[];
}

export const stageLabels: Record<CapabilityStage, { text: string; className: string; dotClass: string }> = {
  evaluation: {
    text: "Under evaluation",
    className: "bg-cyan-50 text-cyan-700 border-cyan-200",
    dotClass: "bg-cyan-400",
  },
  development: {
    text: "In development",
    className: "bg-violet-50 text-violet-700 border-violet-200",
    dotClass: "bg-violet-400",
  },
  future: {
    text: "Future module",
    className: "bg-slate-100 text-slate-500 border-slate-200",
    dotClass: "bg-slate-400",
  },
};

export const pipelineCapabilities: PipelineCapability[] = [
  {
    slug: "ai-wrapper",
    title: "AI Wrapper",
    stage: "evaluation",
    tagline: "Secure LLM gateway for privacy-preserving AI use",
    description:
      "A secure LLM gateway concept that intercepts and replaces sensitive data with safe tokens before any message reaches an AI system, restoring original context on response.",
    icon: "Lock",
    accent: "violet",
    href: "/pipeline/ai-wrapper",
    capabilities: [
      "Field-level detection of sensitive and identifying data",
      "Token replacement before content leaves the trusted boundary",
      "Automatic restoration of original context in responses",
      "Designed for hospitals, research teams, and protected enterprise workflows",
    ],
  },
  {
    slug: "cloud-shield",
    title: "Cloud Shield",
    stage: "evaluation",
    tagline: "Field-level protection for cloud platforms and data workflows",
    description:
      "Field-level tokenisation for cloud data pipelines — sensitive fields are replaced before reaching cloud platforms, with the local mapping vault reversible only inside your perimeter.",
    icon: "Cloud",
    accent: "sky",
    href: "/pipeline/cloud-shield",
    capabilities: [
      "Field-level tokenisation before data reaches cloud platforms",
      "Local mapping vault — reversible only inside your perimeter",
      "Designed for governed cloud adoption in clinical settings",
      "Privacy-preserving by design, no raw identifiers in transit",
    ],
  },
  {
    slug: "scribe",
    title: "Scribe",
    stage: "development",
    tagline: "Privacy-protected clinical documentation and structured notes",
    description:
      "A clinical documentation concept: record and transcribe consultations and generate clinician-ready structured notes, with sensitive data kept inside your boundary throughout.",
    icon: "FileText",
    accent: "teal",
    href: "/pipeline/scribe",
    capabilities: [
      "Consultation recording and transcription with PHI protection",
      "Clinician-ready structured note generation",
      "Human review before anything enters the record",
      "Sensitive data never leaves the trusted boundary",
    ],
  },
  {
    slug: "trace",
    title: "Trace",
    stage: "evaluation",
    tagline: "Reviewer-gated evidence and synthetic control workflows",
    description:
      "Reviewer-gated synthetic control arm workflows with manual benchmark comparison, full lineage, visible limitations, and submission-oriented packaging.",
    icon: "GitBranch",
    accent: "cyan",
    href: "/pipeline/trace",
    capabilities: [
      "Reviewer sign-off gates at every workflow stage",
      "Manual benchmark comparison against synthetic outputs",
      "Full lineage and traceability of every artefact",
      "Submission-oriented evidence packaging with visible limitations",
    ],
  },
  {
    slug: "clinical-triage",
    title: "Clinical Triage",
    stage: "development",
    tagline: "Clinical pathway and referral grading support for authorised healthcare teams",
    description:
      "An audited clinical pathway and referral grading capability with role-based access, specialist review, and a full audit trail — human review at every stage.",
    icon: "Stethoscope",
    accent: "emerald",
    href: "/pipeline/clinical-triage",
    capabilities: [
      "Structured referral review with specialist oversight",
      "Role-based access for authorised clinical users",
      "Full audit trail across every decision point",
      "Human review at every stage — no autonomous grading",
    ],
  },
];

export function getCapability(slug: string): PipelineCapability | undefined {
  return pipelineCapabilities.find((c) => c.slug === slug);
}
