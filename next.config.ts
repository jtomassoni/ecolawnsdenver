import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // imapflow → pino → thread-stream; bundling pulls test files — load from node_modules at runtime
  serverExternalPackages: ['imapflow', 'mailparser'],
  images: {
    remotePatterns: [],
    unoptimized: false,
  },
  experimental: {
    /** Default 10MB — iPhone photos exceed this; bodies get truncated and formData() fails. */
    proxyClientMaxBodySize: '32mb',
    serverActions: {
      bodySizeLimit: '32mb',
    },
  },
}

export default nextConfig

