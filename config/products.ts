import {
  Microscope,
  Cpu,
  Cloud,
  FileText,
  GitBranch,
  Stethoscope,
  type LucideIcon,
} from "lucide-react";

export type ProductStatus = "available" | "pilot" | "pipeline";
export type ProductOrigin = "partner" | "privexa";

export interface Product {
  id: string;
  name: string;
  /** Badge text — e.g. "Authorised Partner Solution" or "Built by Privexa" */
  badge: string;
  origin: ProductOrigin;
  status: ProductStatus;
  icon: LucideIcon;
  /** Short label used in compact panels */
  oneLiner: string;
  /** Card / portfolio description */
  description: string;
  href: string;
  cta: string;
  external?: boolean;
  /** Accent colour key for premium card glows */
  accent: "cyan" | "violet" | "teal" | "emerald" | "sky";
}

export const PRIVEXA_APP_URL = "https://app.privexa.co";

export const products: Product[] = [
  {
    id: "aiforia",
    name: "Aiforia Digital Pathology AI",
    badge: "Authorised Partner Solution",
    origin: "partner",
    status: "available",
    icon: Microscope,
    oneLiner: "AI-assisted digital pathology",
    description:
      "AI-assisted digital pathology for clinical, preclinical, and research workflows — represented by Translyx in New Zealand as an authorised business partner.",
    href: "/aiforia",
    cta: "Explore Aiforia",
    accent: "cyan",
  },
  {
    id: "privexa-ai-wrapper",
    name: "Privexa AI Wrapper",
    badge: "Built by Privexa",
    origin: "privexa",
    status: "available",
    icon: Cpu,
    oneLiner: "Secure gateway for clinical AI",
    description:
      "A protected gateway that lets teams use modern AI models while sensitive clinical data is de-identified and shielded before it ever reaches a model.",
    href: "/privexa#ai-wrapper",
    cta: "View AI Wrapper",
    accent: "violet",
  },
  {
    id: "privexa-cloud-shield",
    name: "Privexa Cloud Shield",
    badge: "Built by Privexa",
    origin: "privexa",
    status: "available",
    icon: Cloud,
    oneLiner: "Field-level data protection",
    description:
      "Field-level protection and policy controls for healthcare workflows — keeping identifiable data inside your governed environment.",
    href: "/privexa#cloud-shield",
    cta: "View Cloud Shield",
    accent: "sky",
  },
  {
    id: "privexa-scribe",
    name: "Privexa Scribe",
    badge: "Built by Privexa",
    origin: "privexa",
    status: "available",
    icon: FileText,
    oneLiner: "Governed clinical documentation",
    description:
      "Reviewer-aware clinical documentation support that drafts within guardrails — structured, traceable, and always returned to a human for sign-off.",
    href: "/privexa#scribe",
    cta: "View Scribe",
    accent: "teal",
  },
  {
    id: "privexa-trace",
    name: "Privexa Trace",
    badge: "Built by Privexa",
    origin: "privexa",
    status: "available",
    icon: GitBranch,
    oneLiner: "Reviewer-gated evidence workflows",
    description:
      "Reviewer-gated synthetic control arm workflows with manual benchmark comparison, full lineage, visible limitations, and submission-oriented packaging.",
    href: "/products/privexa-trace",
    cta: "Explore Privexa Trace",
    accent: "cyan",
  },
  {
    id: "clinical-triage",
    name: "ClinicalTriage",
    badge: "Built by Privexa",
    origin: "privexa",
    status: "pilot",
    icon: Stethoscope,
    oneLiner: "Reviewer-gated triage support",
    description:
      "Decision-support tooling that prioritises clinical review under explicit governance — currently in pilot with selected partners.",
    href: "/privexa#clinical-triage",
    cta: "Learn more",
    accent: "emerald",
  },
];

export const statusMeta: Record<ProductStatus, { label: string }> = {
  available: { label: "Available" },
  pilot: { label: "In Pilot" },
  pipeline: { label: "Pipeline" },
};

export function getProduct(id: string) {
  return products.find((p) => p.id === id);
}

/** Who Translyx works with — audience cards */
export const audiences = [
  {
    title: "Hospitals & Laboratories",
    detail: "Adoption support for diagnostic and digital pathology technologies across acute and lab settings.",
  },
  {
    title: "Pathology Groups",
    detail: "AI-assisted digital pathology workflows for clinical, preclinical, and research reporting.",
  },
  {
    title: "Research Teams",
    detail: "Governed evidence workflows, image analysis, and reviewer-gated synthetic control arms.",
  },
  {
    title: "Pharma & CROs",
    detail: "Protected AI workflows and submission-oriented evidence packaging for clinical programmes.",
  },
  {
    title: "Health Innovation Teams",
    detail: "A local bridge to evaluate, govern, and deploy clinical AI with privacy and confidence.",
  },
];
