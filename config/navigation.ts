export interface NavSubItem {
  label: string;
  href: string;
  description?: string;
  status?: "available" | "pilot" | "pipeline";
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
        label: "Privexa Trace",
        href: "/products/privexa-trace",
        description: "Reviewer-gated synthetic control workflows",
        status: "available",
      },
      {
        label: "Privexa",
        href: "/ai-solutions#privexa",
        description: "AI data protection layer for healthcare",
        status: "available",
      },
      {
        label: "AI Vision Assistant",
        href: "/products/ai-vision-assistant",
        description: "Clinical AI vision tools",
        status: "pipeline",
      },
      {
        label: "Gynecology Referral",
        href: "/products/gynecology-referral",
        description: "Referral pathway optimisation",
        status: "pipeline",
      },
    ],
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
