/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        pathname: '/images/**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  // Enable compression for better performance
  compress: true,
  // Remove X-Powered-By header for security
  poweredByHeader: false,
  // Enable React strict mode for catching issues
  reactStrictMode: true,
  // Optimize package imports for better tree-shaking
  experimental: {
    optimizePackageImports: ['framer-motion', 'styled-components'],
  },
};

module.exports = nextConfig;
