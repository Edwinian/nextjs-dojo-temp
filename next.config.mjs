/** @type {import('next').NextConfig} */
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.resolve.alias['@app'] = path.join(__dirname, 'app');
    config.resolve.alias['@lib'] = path.join(__dirname, 'lib');
    return config;
  },
};

export default nextConfig;