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
        href: "/aiforia",
        description: "AI-assisted digital pathology",
        badge: "Authorised partner",
        status: "available",
      },
      {
        label: "Privexa AI Wrapper",
        href: "/privexa#ai-wrapper",
        description: "Secure gateway for clinical AI",
        badge: "Built by Privexa",
        status: "available",
      },
      {
        label: "Privexa Cloud Shield",
        href: "/privexa#cloud-shield",
        description: "Field-level data protection",
        badge: "Built by Privexa",
        status: "available",
      },
      {
        label: "Privexa Scribe",
        href: "/privexa#scribe",
        description: "Governed clinical documentation",
        badge: "Built by Privexa",
        status: "available",
      },
      {
        label: "Privexa Trace",
        href: "/products/privexa-trace",
        description: "Reviewer-gated evidence workflows",
        badge: "Built by Privexa",
        status: "available",
      },
      {
        label: "ClinicalTriage",
        href: "/privexa#clinical-triage",
        description: "Reviewer-gated triage support",
        badge: "Built by Privexa",
        status: "pilot",
      },
      {
        label: "Diagnostic Pipeline",
        href: "/product-pipeline",
        description: "AMR, sepsis, POCT, oncology & more",
        status: "pipeline",
      },
    ],
  },
  {
    label: "Digital Pathology",
    href: "/digital-pathology",
    description: "Aiforia-powered digital pathology AI",
  },
  {
    label: "AI Solutions",
    href: "/ai-solutions",
    description: "Governed clinical AI and privacy-first workflows",
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
