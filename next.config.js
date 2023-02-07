/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['ipfs.infura.io','zubaire.infura-ipfs.io']
  },
  eslint: {
    ignoreDuringBuilds: true,
  }
}

module.exports = nextConfig
