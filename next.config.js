/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  compiler: {
    reactRemoveProperties: true,
    removeConsole: {
      exclude: ['error'],
    },
  },
}

module.exports = nextConfig
