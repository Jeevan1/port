/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  compress: false,
  reactStrictMode: false,
  devIndicators: false,
  allowedDevOrigins: [
    '*.run.app',
    '*.asia-east1.run.app',
    '*.google.com',
    '*.googlers.com',
    'ais-dev-jlpvi3f42xkx662cncczg3-890849703463.asia-east1.run.app',
    'ais-pre-jlpvi3f42xkx662cncczg3-890849703463.asia-east1.run.app',
    'localhost',
    'localhost:3000',
    '127.0.0.1',
  ],
  typescript: {
    ignoreBuildErrors: false,
  },
};

export default nextConfig;
