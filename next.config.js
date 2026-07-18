/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Don't advertise the framework.
  poweredByHeader: false,
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "publichealthnotes.com", pathname: "/**" },
      { protocol: "https", hostname: "as1.ftcdn.net", pathname: "/**" },
      { protocol: "https", hostname: "as2.ftcdn.net", pathname: "/**" },
      { protocol: "https", hostname: "t3.ftcdn.net", pathname: "/**" },
      { protocol: "https", hostname: "t4.ftcdn.net", pathname: "/**" },
      { protocol: "https", hostname: "www.endocrine.org", pathname: "/**" },
      { protocol: "https", hostname: "www.60plusindia.com", pathname: "/**" },
      { protocol: "https", hostname: "www.gener8.net", pathname: "/**" },
      { protocol: "https", hostname: "cdn.open-pr.com", pathname: "/**" },
      { protocol: "https", hostname: "www.genomicseducation.hee.nhs.uk", pathname: "/**" },
    ],
  },
  // Baseline security headers (defence-in-depth). NB: a Content-Security-Policy
  // is intentionally omitted here — it needs nonce wiring + testing against the
  // inline JSON-LD, Next.js runtime, fonts, and remote news images, and a broken
  // CSP is worse than none. Treat CSP as a separate, tested follow-up.
  async headers() {
    const securityHeaders = [
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "X-Frame-Options", value: "SAMEORIGIN" },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), browsing-topics=()" },
      { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
    ];
    return [{ source: "/:path*", headers: securityHeaders }];
  },
  async redirects() {
    return [
      // --- 2026 single-brand restructure: legacy routes → new structure ---
      // Former Privexa product pages → pipeline capabilities
      { source: '/products/privexa-ai-wrapper', destination: '/pipeline/ai-wrapper', permanent: true },
      { source: '/products/privexa-cloud-shield', destination: '/pipeline/cloud-shield', permanent: true },
      { source: '/products/privexa-scribe', destination: '/pipeline/scribe', permanent: true },
      { source: '/products/privexa-trace', destination: '/pipeline/trace', permanent: true },
      { source: '/products/clinical-triage', destination: '/pipeline/clinical-triage', permanent: true },
      // Deleted product stubs
      { source: '/products/ai-vision-assistant', destination: '/products', permanent: true },
      { source: '/products/gynecology-referral', destination: '/pipeline/clinical-triage', permanent: true },
      // Pipeline rename (covers the 6 diagnostic slugs via wildcard)
      { source: '/product-pipeline', destination: '/pipeline', permanent: true },
      { source: '/product-pipeline/:slug', destination: '/pipeline/:slug', permanent: true },
      // Folded pages
      { source: '/ai-solutions', destination: '/pipeline', permanent: true },
      { source: '/digital-pathology', destination: '/products/aiforia', permanent: true },
      { source: '/about', destination: '/company', permanent: true },
      { source: '/services', destination: '/company', permanent: true },
      { source: '/features', destination: '/company', permanent: true },
      // News absorbs updates/blog/collaboration
      { source: '/updates', destination: '/news', permanent: true },
      { source: '/collaboration', destination: '/news', permanent: true },
      { source: '/blog', destination: '/news', permanent: true },
      // Pricing was a stub that pointed at contact
      { source: '/pricing', destination: '/contact', permanent: true },
    ];
  },
}

module.exports = nextConfig
