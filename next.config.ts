import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["example.com", "https://static.cdnlogo.com"], // 👈 whitelist external domains here
  },
};

export default nextConfig;
