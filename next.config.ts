import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {},
  /* config options here */
  images: {
    domains: [],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  webpack: (config) => {
    config.resolve = {
      ...config.resolve,
      extensionAlias: {
        '.glb': '.glb',
        '.png': '.png'
      }
    }
    return config
  },
};

export default nextConfig;
