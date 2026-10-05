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
  companyTagline: "Technology for trusted AI, diagnostics and clinical transformation",
  companyDescription:
    "Translyx Limited is a New Zealand-founded technology company working across privacy-first enterprise AI, digital pathology, diagnostic innovation and healthcare technology. Privexa, the control boundary for the AI era, is a Translyx platform.",
  tagline: "Technology for trusted AI, diagnostics and clinical transformation",
  description:
    "Translyx builds Privexa, a privacy-preserving control boundary for enterprise AI, and brings digital pathology and diagnostic innovation — including partner technologies Aiforia and Algoscope — into real-world workflows.",

  // Domain & URLs
  // www.translyx.co.nz is the canonical public origin. The legacy .co domain
  // is intentionally not redirected by this app. `url` drives all canonicals,
  // Open Graph metadata, and the sitemap; `domain` is shown in the UI.
  domain: "www.translyx.co.nz",
  url: "https://www.translyx.co.nz",

  // Company Details
  company: {
    name: "Translyx Limited",
    location: "Auckland, New Zealand",
    email: "info@translyx.co.nz",
    address: "Auckland, New Zealand",
  },

  // Team Contact Information
  team: {
    ehsan: {
      name: "Dr Ehsan Ullah",
      role: "Clinical & Technology Liaison",
      phone: "+64220141390",
      email: "ehsan.ullah@translyx.co.nz",
    },
  },
  
  // SEO Defaults
  seo: {
    defaultTitle: "Translyx | Privexa Enterprise AI Privacy, Digital Pathology & Diagnostic Innovation",
    defaultDescription:
      "Translyx is a New Zealand-founded technology company. Privexa, a Translyx platform, is the control boundary for the AI era — alongside digital pathology and diagnostic innovation.",
    keywords: [
      "Translyx",
      "Privexa",
      "enterprise AI privacy",
      "privacy-preserving AI",
      "secure AI gateway",
      "AI governance",
      "digital pathology privacy",
      "WSI privacy",
      "healthcare AI privacy",
      "digital pathology AI",
      "Aiforia New Zealand",
      "Algoscope New Zealand",
      "diagnostic innovation New Zealand",
    ],
    author: "Translyx Limited",
    // Use the dynamically-generated branded card from app/opengraph-image.tsx
    // (served at /opengraph-image). Avoids a missing static /og-image.png.
    ogImage: "/og-privexa.png",
  },
};
