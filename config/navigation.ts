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
    label: "Home",
    href: "/",
    description: "Translyx — clinical technology & governed AI",
  },
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
        label: "ClinicalTriage",
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
    label: "News",
    href: "/news",
    description: "News intelligence for diagnostics, pathology & clinical AI",
    subItems: [
      {
        label: "All News",
        href: "/news",
        description: "Latest market intelligence across all regions",
      },
      {
        label: "New Zealand",
        href: "/news?region=new-zealand",
        description: "NZ healthcare, diagnostics & pathology news",
      },
      {
        label: "Australia",
        href: "/news?region=australia",
        description: "Australian pathology & diagnostic technology news",
      },
      {
        label: "Global",
        href: "/news?region=global",
        description: "Global digital pathology, clinical AI & regulation",
      },
    ],
  },
  {
    label: "Partners",
    href: "/partners",
    description: "Translyx partner network",
    subItems: [
      {
        label: "All partners",
        href: "/partners",
        description: "The Translyx partner network",
      },
      {
        label: "Aiforia Technologies",
        href: "/products/aiforia",
        description: "Authorised digital pathology AI partner",
        badge: "Authorised partner",
        status: "available",
      },
      {
        label: "Algoscope",
        href: "/products/algoscope",
        description: "Surgery-to-pathology workflow automation partner",
        badge: "Partner product",
        status: "available",
      },
      {
        label: "Become a partner",
        href: "/partners#become-a-partner",
        description: "Bring your innovation to NZ & Oceania",
      },
    ],
  },
  {
    label: "Company",
    href: "/company",
    description: "About Translyx Limited",
  },
  {
    label: "Contact",
    href: "/contact",
    description: "Get in touch",
  },
];

export const headerCTA = {
  label: "Request Walkthrough",
  href: "/contact",
};
