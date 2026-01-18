/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
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
