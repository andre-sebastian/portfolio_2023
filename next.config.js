/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  cacheComponents: true,
  async redirects() {
    return [
      {
        source: '/portfolio',
        destination: '/',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig
