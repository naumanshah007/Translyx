/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // Enable static export for Bluehost
  images: {
    unoptimized: true,
  },
  // Disable API routes for static export
  trailingSlash: true,
}

module.exports = nextConfig

