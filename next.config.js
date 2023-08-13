/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true, // TODO: Remove this after typing
  },
};

module.exports = nextConfig;
