import { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config, options) {
    // Your webpack customizations here
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

export default nextConfig;
