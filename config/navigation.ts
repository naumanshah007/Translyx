export interface NavSubItem {
  label: string;
  href: string;
  description?: string;
  status?: "available" | "pilot" | "pipeline";
  badge?: string;
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
    description: "Translyx product portfolio",
    subItems: [
      {
        label: "Aiforia Digital Pathology AI",
        href: "/products/aiforia",
        description: "Authorised partner solution for New Zealand",
        status: "available",
      },
      {
        label: "Privexa AI Wrapper",
        href: "/products/privexa-ai-wrapper",
        description: "Secure LLM gateway for protected AI use",
        status: "available",
      },
      {
        label: "Privexa Cloud Shield",
        href: "/products/privexa-cloud-shield",
        description: "Field-level cloud data protection",
        status: "available",
      },
      {
        label: "Privexa Scribe",
        href: "/products/privexa-scribe",
        description: "Privacy-protected clinical documentation",
        status: "available",
      },
      {
        label: "Privexa Trace",
        href: "/products/privexa-trace",
        description: "Reviewer-gated synthetic control workflows",
        status: "available",
      },
      {
        label: "ClinicalTriage",
        href: "/products/clinical-triage",
        description: "Clinical pathway and referral grading support",
        status: "pilot",
      },
      {
        label: "Diagnostic Pipeline",
        href: "/product-pipeline",
        description: "AMR, sepsis, POCT, oncology, and more",
        status: "pipeline",
      },
    ],
  },
  {
    label: "Digital Pathology",
    href: "/digital-pathology",
    description: "Aiforia-powered digital pathology AI for New Zealand",
  },
  {
    label: "AI Solutions",
    href: "/ai-solutions",
    description: "Protected AI and governed evidence workflows",
  },
  {
    label: "Pipeline",
    href: "/product-pipeline",
    description: "Broader clinical technology portfolio",
  },
  {
    label: "Company",
    href: "/about",
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
