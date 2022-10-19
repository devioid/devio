/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {

  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['picsum.photos', 'i.picsum.photos'],
  },
  experimental: {
    images: {
      allowFutureImage: true,
    },
  },
}

module.exports = nextConfig
