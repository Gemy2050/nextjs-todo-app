import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    serverActions: {
      allowedOrigins: ["nextjs-fullstack-todo", "*.nextjs-fullstack-todo"],
    },
  },
};

export default nextConfig;
