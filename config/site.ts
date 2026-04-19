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
  companyTagline: "Clinical technology and governed AI for New Zealand healthcare",
  companyDescription:
    "Translyx Limited is an Auckland-based clinical technology company. Products include Privexa — a live enterprise AI privacy platform — Privexa Trace for reviewer-gated synthetic control arm workflows, and a broader diagnostic technology pipeline.",
  tagline: "Clinical technology and governed AI for New Zealand healthcare",
  description:
    "Translyx Limited brings advanced diagnostic technologies and governed AI solutions to New Zealand and Oceania. Products include Privexa (live at app.privexa.co), Privexa Trace, and a broader clinical pipeline.",
  
  // Domain & URLs
  domain: "translyx.co",
  url: "https://translyx.co",
  
  // Company Details
  company: {
    name: "Translyx Limited",
    location: "Auckland, New Zealand",
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
      email: "ehsan.ullah@translyx.co",
    },
  },
  
  // SEO Defaults
  seo: {
    defaultTitle: "Translyx | Privexa Trace, AI Solutions, and Clinical Technology",
    defaultDescription:
      "Translyx Limited presents Privexa Trace reviewer-gated synthetic control arm workflows, Privexa protected AI privacy solutions, and clinical technology products for healthcare organizations.",
    keywords: [
      "Translyx",
      "Translyx Limited",
      "Privexa Trace",
      "Translyx Privexa Trace",
      "Translyx AI Solutions",
      "Translyx healthcare AI",
      "Privexa Trace synthetic control",
      "healthcare technology",
      "clinical technology",
      "reviewer-gated synthetic control arm workflow",
      "synthetic control arm",
      "clinical evidence workflow",
      "protected AI healthcare",
      "healthcare AI privacy",
      "clinical workflow",
      "diagnostic technology",
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
