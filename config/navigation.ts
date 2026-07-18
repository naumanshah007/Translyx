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
    label: "Products",
    href: "/products",
    description: "Partner diagnostic & pathology products",
    subItems: [
      {
        label: "Aiforia Digital Pathology AI",
        href: "/products/aiforia",
        description: "Authorised partner solution for New Zealand",
        status: "available",
      },
      {
        label: "Algoscope",
        href: "/products/algoscope",
        description: "Surgery-to-pathology workflow automation & traceability",
        status: "available",
        badge: "Partner product",
      },
    ],
  },
  {
    label: "Pipeline",
    href: "/pipeline",
    description: "Translyx pipeline — workflow capabilities & diagnostic innovation",
    subItems: [
      {
        label: "AI Wrapper",
        href: "/pipeline/ai-wrapper",
        description: "Secure LLM gateway for protected AI use",
        status: "evaluation",
        group: "Capabilities",
      },
      {
        label: "Cloud Shield",
        href: "/pipeline/cloud-shield",
        description: "Field-level cloud data protection",
        status: "evaluation",
        group: "Capabilities",
      },
      {
        label: "Scribe",
        href: "/pipeline/scribe",
        description: "Privacy-protected clinical documentation",
        status: "development",
        group: "Capabilities",
      },
      {
        label: "Trace",
        href: "/pipeline/trace",
        description: "Reviewer-gated synthetic control workflows",
        status: "evaluation",
        group: "Capabilities",
      },
      {
        label: "Clinical Triage",
        href: "/pipeline/clinical-triage",
        description: "Clinical pathway and referral grading support",
        status: "development",
        group: "Capabilities",
      },
      {
        label: "Diagnostic Innovation Pipeline",
        href: "/pipeline#diagnostic-innovation",
        description: "AMR, sepsis, POCT, oncology, endocrine, cardiac & precision medicine",
        group: "Diagnostic innovation",
      },
    ],
  },
  {
    label: "Partners",
    href: "/partners",
    description: "The Translyx partner network — and how to join it",
  },
  {
    label: "Company",
    href: "/company",
    description: "About Translyx Limited",
  },
  {
    label: "Contact Us",
    href: "/contact",
    description: "Contact Translyx",
  },
];
