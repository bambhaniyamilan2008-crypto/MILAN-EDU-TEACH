import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: "export",  <-- Maine ye line hata di hai.

  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;