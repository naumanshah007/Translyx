/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "as1.ftcdn.net", pathname: "/**" },
      { protocol: "https", hostname: "as2.ftcdn.net", pathname: "/**" },
      { protocol: "https", hostname: "t3.ftcdn.net", pathname: "/**" },
      { protocol: "https", hostname: "t4.ftcdn.net", pathname: "/**" },
      { protocol: "https", hostname: "publichealthnotes.com", pathname: "/**" },
      { protocol: "https", hostname: "www.endocrine.org", pathname: "/**" },
      { protocol: "https", hostname: "www.60plusindia.com", pathname: "/**" },
      { protocol: "https", hostname: "www.gener8.net", pathname: "/**" },
      { protocol: "https", hostname: "cdn.open-pr.com", pathname: "/**" },
      { protocol: "http", hostname: "www.genomicseducation.hee.nhs.uk", pathname: "/**" },
    ],
  },
  async redirects() {
    return [
      {
        source: '/collaboration',
        destination: '/updates',
        permanent: true, // 308 redirect
      },
    ];
  },
}

module.exports = nextConfig
