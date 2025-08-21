// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  async rewrites() {
    return [
      {
        source: '/search/word/:word',
        destination: '/?word=:word',
      },
      {
        source: '/search/word/:word.html',
        destination: '/?word=:word',
      },
    ];
  },
}

module.exports = nextConfig
