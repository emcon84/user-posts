/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['via.placeholder.com', 'reqres.in'],
  },
}

module.exports = nextConfig
