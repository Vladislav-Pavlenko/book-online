import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdnjs.cloudflare.com',
        port: '',
        pathname: '/ajax/libs/pdf.js/**',
      },
    ],
  },
  reactCompiler: true,
};

export default nextConfig;
