import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: false, // Mettez à true si vous voulez ignorer les erreurs ESLint pendant le build
  },
  typescript: {
    ignoreBuildErrors: false, // Mettez à true si vous voulez ignorer les erreurs TypeScript pendant le build
  },
  pageExtensions: ["ts", "tsx"]
}

module.exports = nextConfig