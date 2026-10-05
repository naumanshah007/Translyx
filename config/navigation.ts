export interface NavSubItem {
  label: string;
  href: string;
  description?: string;
  /** Product availability or pipeline capability stage — drives the status dot */
  status?: "available" | "pilot" | "pipeline" | "evaluation" | "development" | "future";
  badge?: string;
  /** Optional section header — consecutive items with the same group render under one heading */
  group?: string;
}

export interface NavItem {
  label: string;
  href: string;
  description?: string;
  subItems?: NavSubItem[];
}

export const navigation: NavItem[] = [
  {
    label: "Privexa",
    href: "/privexa",
    description: "The control boundary for the AI era",
    subItems: [
      { label: "Privexa overview", href: "/privexa", description: "Enterprise AI privacy & control" },
      { label: "Digital pathology / WSI", href: "/privexa/wsi", description: "Whole-slide privacy — under validation", badge: "Validation" },
      { label: "Platform & API", href: "/privexa/platform", description: "Embed Privexa in your product" },
      { label: "Deployment", href: "/privexa/deployment", description: "Hosted, private cloud, on-premises" },
      { label: "Trust & product status", href: "/trust", description: "Architecture and capability maturity" },
    ],
  },
  {
    label: "Digital Pathology",
    href: "/digital-pathology",
    description: "Partner pathology AI & workflow technology",
    subItems: [
      { label: "Aiforia Digital Pathology AI", href: "/products/aiforia", description: "Authorised partner solution for New Zealand", status: "available" },
      { label: "Algoscope", href: "/products/algoscope", description: "Surgery-to-pathology workflow automation", status: "available", badge: "Partner product" },
      { label: "Slide privacy (Privexa)", href: "/privexa/wsi", description: "Privacy controls for whole-slide images" },
    ],
  },
  {
    label: "Diagnostic Innovation",
    href: "/pipeline",
    description: "Emerging diagnostics and translational technology",
    subItems: [
      { label: "Diagnostic innovation pipeline", href: "/pipeline#diagnostic-innovation", description: "AMR, sepsis, POCT, oncology, cardiac & more" },
      { label: "Trace", href: "/pipeline/trace", description: "Reviewer-gated synthetic control workflows", status: "evaluation", group: "Research capabilities" },
      { label: "Clinical Triage", href: "/pipeline/clinical-triage", description: "Clinical pathway and referral grading support", status: "development", group: "Research capabilities" },
    ],
  },
  {
    label: "Solutions",
    href: "/solutions",
    description: "By industry, and our partner network",
    subItems: [
      { label: "Healthcare & pathology", href: "/solutions#healthcare" },
      { label: "Financial services", href: "/solutions#financial-services" },
      { label: "Government & public sector", href: "/solutions#government" },
      { label: "Research & life sciences", href: "/solutions#research" },
      { label: "Enterprise AI", href: "/solutions#enterprise" },
      { label: "Partners", href: "/partners", description: "The Translyx partner network", group: "Partners" },
    ],
  },
  { label: "Resources", href: "/resources", description: "Videos, guides and FAQs" },
  { label: "About", href: "/company", description: "About Translyx" },
  { label: "Contact", href: "/contact", description: "Talk to Translyx" },
];
