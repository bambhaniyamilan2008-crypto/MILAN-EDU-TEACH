import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Dhyan dein: 'output: export' yahan nahi hona chahiye
  
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