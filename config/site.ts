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
  // www.translyx.co.nz is the canonical public origin. The legacy .co domain
  // is intentionally not redirected by this app. `url` drives all canonicals,
  // Open Graph metadata, and the sitemap; `domain` is shown in the UI.
  domain: "www.translyx.co.nz",
  url: "https://www.translyx.co.nz",

  // Company Details
  company: {
    name: "Translyx Limited",
    location: "Auckland, New Zealand",
    // TODO: switch to info@translyx.co.nz once email routing is set up on the new domain.
    email: "info@translyx.co",
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
    // Use the dynamically-generated branded card from app/opengraph-image.tsx
    // (served at /opengraph-image). Avoids a missing static /og-image.png.
    ogImage: "/og-premium.png",
  },
};
