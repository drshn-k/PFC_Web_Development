/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
  images: {
    domains: ['links.papareact.com', 'fakestoreapi.com'],
  },
  env: {
    stripe_public_key: process.env.STRIPE_PUBLIC_KEY
  },
}

module.exports = nextConfig
