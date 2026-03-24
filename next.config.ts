import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // imapflow → pino → thread-stream; bundling pulls test files — load from node_modules at runtime
  serverExternalPackages: ['imapflow', 'mailparser'],
  images: {
    remotePatterns: [],
    unoptimized: false,
  },
}

export default nextConfig

