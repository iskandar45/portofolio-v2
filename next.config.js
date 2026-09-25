/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "avatars.githubusercontent.com" },
      { protocol: "https", hostname: "placehold.it" },
    ],
  },
  // Next 16 blocks cross-origin requests to dev resources (/_next/*, HMR)
  // unless the origin is allowlisted. The Freebuff preview serves this app
  // through a 3000-<workspace>.e2b.app proxy host, so allow it in dev.
  allowedDevOrigins: ["**.e2b.app"],
}

module.exports = nextConfig
