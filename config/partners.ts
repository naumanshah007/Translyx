/**
 * Partner registry for Translyx.
 *
 * Translyx is the New Zealand / Oceania bridge for global clinical-technology
 * companies. Add new partners here — set status "active" once announced, or
 * "upcoming" for partners in discussion (rendered as "announcing soon").
 */

export type PartnerStatus = "active" | "upcoming";
export type PartnerAccent = "cyan" | "violet" | "teal" | "emerald" | "sky";

export interface Partner {
  slug: string;
  name: string;
  shortName: string;
  /** Role label, e.g. "Authorised Partner Solution" */
  type: string;
  /** What they do, short */
  category: string;
  status: PartnerStatus;
  description: string;
  href: string;
  external?: boolean;
  icon: string; // lucide name, resolved via lib/productIcons
  accent: PartnerAccent;
  location?: string;
}

export const partners: Partner[] = [
  {
    slug: "aiforia",
    name: "Aiforia Technologies Plc",
    shortName: "Aiforia",
    type: "Authorised Partner Solution",
    category: "Digital Pathology AI",
    status: "active",
    description:
      "AI-assisted digital pathology for clinical, preclinical, and research workflows. Represented by Translyx in New Zealand as an authorised business partner.",
    href: "/products/aiforia",
    icon: "Microscope",
    accent: "cyan",
    location: "Helsinki, Finland",
  },
  {
    slug: "privexa",
    name: "Privexa Limited",
    shortName: "Privexa",
    type: "Software Partner",
    category: "Protected AI Software",
    status: "active",
    description:
      "Builds the protected AI software layer — AI Wrapper, Cloud Shield, Scribe, Trace, and ClinicalTriage — clinically positioned through Translyx.",
    href: "/products",
    icon: "ShieldCheck",
    accent: "violet",
    location: "Auckland, New Zealand",
  },
];

/** Slots reserved for partners in discussion — replace with real names as they sign. */
export const upcomingPartners: { area: string; category: string; icon: string; accent: PartnerAccent }[] = [
  { area: "Sepsis & AMR diagnostics", category: "Diagnostics partner", icon: "Activity", accent: "teal" },
  { area: "Molecular & oncology", category: "Diagnostics partner", icon: "FlaskConical", accent: "emerald" },
  { area: "Point-of-care testing", category: "Diagnostics partner", icon: "Stethoscope", accent: "sky" },
];

/** Why a global innovator partners with Translyx */
export const partnerValues: { icon: string; title: string; body: string }[] = [
  {
    icon: "Globe",
    title: "Market access",
    body: "Direct reach into hospitals, laboratories, pathology groups, and research teams across New Zealand and Oceania.",
  },
  {
    icon: "ShieldCheck",
    title: "Clinical & regulatory navigation",
    body: "Local expertise to position technology appropriately — careful compliance and no implied regulatory endorsement.",
  },
  {
    icon: "UserCheck",
    title: "Governed adoption",
    body: "Reviewer-gated, privacy-first deployment so clinical AI is adopted with confidence and human oversight.",
  },
  {
    icon: "Wrench",
    title: "Implementation & support",
    body: "Hands-on evaluation, onboarding, training, and ongoing local support across clinical and research settings.",
  },
  {
    icon: "Truck",
    title: "Distribution & logistics",
    body: "Operational, supply, and logistics support for diagnostic products entering the region.",
  },
  {
    icon: "Building2",
    title: "A trusted local entity",
    body: "An accountable New Zealand company representing your brand to local healthcare and research organisations.",
  },
];

export function getPartner(slug: string) {
  return partners.find((p) => p.slug === slug);
}
