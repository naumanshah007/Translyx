/**
 * Central product data for Translyx
 *
 * Product types:
 *   "partner"   – Authorised partner solution (e.g. Aiforia)
 *   "privexa"   – Built by Privexa Limited
 *   "clinical"  – Clinical workflow product built by Privexa
 *   "pipeline"  – Diagnostic pipeline category
 */

export type ProductType = "partner" | "privexa" | "clinical" | "pipeline";
export type ProductStatus = "available" | "pilot" | "pipeline";

export interface Product {
  slug: string;
  title: string;
  shortTitle?: string;
  type: ProductType;
  status: ProductStatus;
  tagline: string;
  description: string;
  href: string;
  externalHref?: string;
  icon: string;
  badge: string;
  featured?: boolean;
}

export const products: Product[] = [
  {
    slug: "aiforia",
    title: "Aiforia Digital Pathology AI",
    shortTitle: "Aiforia",
    type: "partner",
    status: "available",
    tagline: "Authorised partner solution represented by Translyx in New Zealand",
    description:
      "AI-assisted digital pathology workflows for clinical, preclinical, and research applications — including Aiforia Clinical Suites and Aiforia Create Platform.",
    href: "/products/aiforia",
    icon: "Microscope",
    badge: "Authorised partner solution",
    featured: true,
  },
  {
    slug: "privexa-ai-wrapper",
    title: "Privexa AI Wrapper",
    shortTitle: "AI Wrapper",
    type: "privexa",
    status: "available",
    tagline: "Secure LLM gateway for privacy-preserving AI use",
    description:
      "A secure LLM gateway that intercepts and replaces sensitive data with safe tokens before any message reaches an AI system. Responses are restored with original context automatically.",
    href: "/products/privexa-ai-wrapper",
    externalHref: "https://app.privexa.co",
    icon: "Lock",
    badge: "Built by Privexa",
  },
  {
    slug: "privexa-cloud-shield",
    title: "Privexa Cloud Shield",
    shortTitle: "Cloud Shield",
    type: "privexa",
    status: "available",
    tagline: "Field-level protection for cloud platforms and data workflows",
    description:
      "Field-level tokenisation for cloud data pipelines. Sensitive fields are replaced before reaching cloud platforms — the local mapping vault is reversible only inside your perimeter.",
    href: "/products/privexa-cloud-shield",
    externalHref: "https://app.privexa.co",
    icon: "Cloud",
    badge: "Built by Privexa",
  },
  {
    slug: "privexa-scribe",
    title: "Privexa Scribe",
    shortTitle: "Scribe",
    type: "privexa",
    status: "available",
    tagline: "Privacy-protected clinical documentation and structured notes",
    description:
      "Clinical consultation recording with full PHI protection. Record, transcribe, and generate clinician-ready notes — sensitive data never leaves your boundary.",
    href: "/products/privexa-scribe",
    externalHref: "https://app.privexa.co",
    icon: "FileText",
    badge: "Built by Privexa",
  },
  {
    slug: "privexa-trace",
    title: "Privexa Trace",
    shortTitle: "Trace",
    type: "privexa",
    status: "available",
    tagline: "Reviewer-gated evidence and synthetic control workflows",
    description:
      "Reviewer-gated synthetic control arm workflows with manual benchmark comparison, lineage, visible limitations, and submission-oriented packaging.",
    href: "/products/privexa-trace",
    externalHref: "https://trace.privexa.co",
    icon: "GitBranch",
    badge: "Built by Privexa",
    featured: true,
  },
  {
    slug: "clinical-triage",
    title: "ClinicalTriage",
    shortTitle: "ClinicalTriage",
    type: "clinical",
    status: "pilot",
    tagline: "Clinical pathway and referral grading support for authorised healthcare teams",
    description:
      "Audited clinical pathway and referral grading support with role-based access, specialist review, and full audit trail. Designed for authorised clinical users.",
    href: "/products/clinical-triage",
    externalHref: "https://screening.privexa.co",
    icon: "Stethoscope",
    badge: "Built by Privexa",
  },
  {
    slug: "diagnostic-pipeline",
    title: "Clinical & Diagnostic Pipeline",
    shortTitle: "Diagnostic Pipeline",
    type: "pipeline",
    status: "pipeline",
    tagline: "AMR, sepsis, POCT, oncology, endocrine, cardiac, and precision medicine portfolio",
    description:
      "Advanced diagnostic technologies for New Zealand healthcare — antimicrobial resistance, sepsis, point-of-care testing, oncology biomarkers, endocrinology, cardiac markers, and precision medicine.",
    href: "/product-pipeline",
    icon: "FlaskConical",
    badge: "Diagnostic portfolio",
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByType(type: ProductType): Product[] {
  return products.filter((p) => p.type === type);
}

export const productTypeLabels: Record<ProductType, string> = {
  partner: "Authorised partner solution",
  privexa: "Privexa-built product",
  clinical: "Clinical workflow product",
  pipeline: "Diagnostic pipeline",
};

export const statusLabels: Record<ProductStatus, { text: string; className: string }> = {
  available: {
    text: "Available",
    className: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
  pilot: {
    text: "In pilot",
    className: "bg-amber-50 text-amber-700 border-amber-200",
  },
  pipeline: {
    text: "Pipeline",
    className: "bg-slate-100 text-slate-500 border-slate-200",
  },
};

export const PRIVEXA_APP_URL = "https://app.privexa.co";

/** Premium accent per product, used for card glows and icon tints */
export type ProductAccent = "cyan" | "violet" | "teal" | "emerald" | "sky";
export const accentBySlug: Record<string, ProductAccent> = {
  aiforia: "cyan",
  "privexa-ai-wrapper": "violet",
  "privexa-cloud-shield": "sky",
  "privexa-scribe": "teal",
  "privexa-trace": "cyan",
  "clinical-triage": "emerald",
  "diagnostic-pipeline": "teal",
};

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
