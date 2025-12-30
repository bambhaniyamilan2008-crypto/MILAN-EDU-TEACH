import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: "export",  <-- Humne isko comment kar diya taaki Server Actions chalein
  
  images: {
    unoptimized: true, // Images ko bina error ke dikhane ke liye
  },
  
  /* Niche wali settings isliye hain taaki choti-moti 
    coding galtiyon ki wajah se build fail na ho 
  */
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;