/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Canonical host and redirects for SEO: avoid duplicate content (www vs non-www, trailing slash)
  async redirects() {
    return [
      // Prefer non-www; redirect www to non-www (adjust if your canonical is www)
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.techemulsion.com' }],
        destination: 'https://techemulsion.com/:path*',
        permanent: true,
      },
      // Trailing slash: prefer no trailing slash (Next.js default; explicit for consistency)
      {
        source: '/:path+/',
        destination: '/:path+',
        permanent: true,
      },
    ];
  },
  // Turbopack config to silence the error when using webpack config
  turbopack: {},
  // Image optimization configuration
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgoConfig: {
              plugins: [
                {
                  name: 'removeViewBox',
                  active: false,
                },
              ],
            },
          },
        },
      ],
    })
    return config
  },
}

export default nextConfig
