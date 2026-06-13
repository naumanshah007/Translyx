/**
 * Central product data for Translyx
 *
 * Products are partner solutions represented or supported by Translyx in
 * New Zealand and Oceania. Translyx does not own or develop these products.
 *
 * Internal/pre-launch workflow capabilities live in config/pipelineCapabilities.ts —
 * they are NOT products and must never be presented as launched offerings.
 */

export type ProductType = "partner";
export type ProductStatus = "available" | "pilot" | "pipeline";

/** A claim that must be attributed to its source (e.g. partner certifications). */
export interface AttributedClaim {
  text: string;
  attribution: string;
  sourceUrl: string;
}

export interface Product {
  slug: string;
  title: string;
  shortTitle?: string;
  type: ProductType;
  status: ProductStatus;
  tagline: string;
  description: string;
  href: string;
  icon: string;
  badge: string;
  featured?: boolean;
  /** Source-attributed claims (certifications etc.) — render only with attribution + link. */
  claims?: AttributedClaim[];
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
    slug: "algoscope",
    title: "Algoscope",
    shortTitle: "Algoscope",
    type: "partner",
    status: "available",
    tagline: "Partner product — AI-powered surgery-to-pathology workflow automation",
    description:
      "AI-powered workflow automation and traceability across surgery-to-pathology pathways — computer vision, 3D modelling, and pre-analytical workflow intelligence for operating rooms and pathology laboratories.",
    href: "/products/algoscope",
    icon: "Workflow",
    badge: "Partner product",
    featured: true,
    claims: [
      {
        text: "According to Algoscope's public materials, Algoscope obtained ISO 13485 certification in June 2023.",
        attribution: "Algoscope",
        // TODO: verify and replace with the specific announcement URL before publishing.
        sourceUrl: "https://www.algoscope.fr",
      },
    ],
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByType(type: ProductType): Product[] {
  return products.filter((p) => p.type === type);
}

export const productTypeLabels: Record<ProductType, string> = {
  partner: "Partner product",
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

/** Premium accent per product, used for card glows and icon tints */
export type ProductAccent = "cyan" | "violet" | "teal" | "emerald" | "sky";
export const accentBySlug: Record<string, ProductAccent> = {
  aiforia: "cyan",
  algoscope: "violet",
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
    detail: "Governed evidence workflows, image analysis, and reviewer-gated evaluation pathways.",
  },
  {
    title: "Pharma & CROs",
    detail: "Workflow traceability, governed AI evaluation, and submission-oriented evidence support for clinical programmes.",
  },
  {
    title: "Health Innovation Teams",
    detail: "A local bridge to evaluate, govern, and deploy clinical AI with privacy and confidence.",
  },
  {
    title: "Global Diagnostic Companies",
    detail: "A trusted regional pathway for diagnostic and clinical technologies entering New Zealand and Australia.",
  },
];
