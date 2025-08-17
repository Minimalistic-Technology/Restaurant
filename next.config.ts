import type { NextConfig } from "next";


const nextConfig: NextConfig = {
   images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.hattafoodhub.com",
      },
      {
        protocol: "https",
        hostname: "www.pccmarkets.com",
      },
      {
        protocol: "https",
        hostname: "www.allrecipes.com",
      },
    ],
  },
  
};

export default nextConfig;
