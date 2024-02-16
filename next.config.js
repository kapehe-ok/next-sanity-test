/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      if (!config.resolve.fallback) {
        config.resolve.fallback = {};
      }
      // Provide polyfills for the buffer module
      config.resolve.fallback.buffer = require.resolve("buffer/");
      config.plugins.push(
        new (require("webpack").ProvidePlugin)({
          Buffer: ["buffer", "Buffer"],
        })
      );
    }
    return config;
  },
};

module.exports = nextConfig;
