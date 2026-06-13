/**
 * Site Configuration
 * 
 * Customize this file to match your brand identity.
 * All site-wide settings are defined here for easy updates.
 */

export const siteConfig = {
  // Basic Information
  name: "Translyx",
  companyName: "Translyx Limited",
  companyTagline: "Clinical technology, digital pathology AI, and governed AI for New Zealand healthcare",
  companyDescription:
    "Translyx Limited is an Auckland-based clinical technology company connecting advanced diagnostics, partner digital pathology AI solutions, and governed clinical AI workflow capabilities for healthcare, laboratories, research teams, and clinical organisations.",
  tagline: "Clinical technology, digital pathology AI, and governed AI for New Zealand healthcare",
  description:
    "Translyx Limited brings advanced diagnostics, partner digital pathology AI (Aiforia), surgery-to-pathology workflow automation (Algoscope), and governed clinical AI workflow capabilities to New Zealand and Oceania.",
  
  // Domain & URLs
  // translyx.co.nz is the canonical public domain. translyx.co is kept as a
  // secondary domain that 301-redirects here (see next.config.js).
  domain: "translyx.co.nz",
  url: "https://translyx.co.nz",

  // Company Details
  company: {
    name: "Translyx Limited",
    location: "Auckland, New Zealand",
    // TODO: switch to info@translyx.co.nz once email routing is set up on the new domain.
    email: "info@translyx.co",
    phone: "+64 (0) X XXX XXXX",
    address: "Auckland, New Zealand",
  },

  // Team Contact Information
  team: {
    ehsan: {
      name: "Dr Ehsan Ullah",
      role: "Clinical & Technology Liaison",
      phone: "+64220141390",
      // TODO: switch to ehsan.ullah@translyx.co.nz once email routing is set up on the new domain.
      email: "ehsan.ullah@translyx.co",
    },
  },
  
  // SEO Defaults
  seo: {
    defaultTitle: "Translyx | Digital Pathology AI, Governed AI & Clinical Technology — New Zealand",
    defaultDescription:
      "Translyx Limited connects partner digital pathology AI (Aiforia), surgery-to-pathology workflow automation (Algoscope), and governed clinical AI workflow capabilities for New Zealand healthcare, laboratories, and research teams.",
    keywords: [
      "Translyx",
      "Translyx Limited",
      "Aiforia New Zealand",
      "Aiforia partner New Zealand",
      "Algoscope New Zealand",
      "surgery-to-pathology workflow automation",
      "digital pathology AI",
      "pathology traceability",
      "clinical technology New Zealand",
      "governed clinical AI",
      "privacy-preserving AI healthcare",
      "reviewer-gated synthetic control arm",
      "diagnostic technology New Zealand",
      "clinical AI governance",
      "diagnostics news New Zealand",
      "digital pathology news",
    ],
    author: "Translyx Limited",
    ogImage: "/og-image.png",
  },
  
  // Logo Configuration
  logo: {
    src: "/logo.jpeg",
    alt: "Translyx Limited Logo",
    width: 48,
    height: 48,
  },

  // Services (replacing products)
  services: [
    {
      name: "Regulatory & Compliance Alignment",
      description: "Ensure technology adoption meets New Zealand healthcare regulatory requirements and compliance standards.",
      icon: "Shield",
    },
    {
      name: "Technology Integration Support",
      description: "Facilitate seamless integration of diagnostic and clinical technologies into existing healthcare workflows.",
      icon: "Zap",
    },
    {
      name: "Documentation & Evidence Support",
      description: "Comprehensive documentation and evidence gathering to support technology adoption and regulatory submissions.",
      icon: "FileText",
    },
    {
      name: "Training & Enablement",
      description: "Training programs and operational enablement to ensure successful technology implementation and adoption.",
      icon: "Users",
    },
    {
      name: "Operational & Logistics Support",
      description: "End-to-end operational support for technology deployment, including logistics and workflow facilitation.",
      icon: "Settings",
    },
    {
      name: "Partnership & Stakeholder Coordination",
      description: "Coordinate partnerships between manufacturers, laboratories, clinicians, and research organizations.",
      icon: "Handshake",
    },
  ],

  // Team Expertise
  expertise: {
    talent: "Healthcare Technology Enablement Specialists",
    domains: [
      "Diagnostic Technology",
      "Clinical Systems",
      "Regulatory Compliance",
      "Laboratory Workflows",
      "Healthcare Integration",
      "Technology Training",
    ],
    specialties: [
      "Regulatory Alignment",
      "Technology Integration",
      "Clinical Enablement",
    ],
  },
};
