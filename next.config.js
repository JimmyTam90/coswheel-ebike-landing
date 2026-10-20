/** @type {import('next').NextConfig} */
const SUBPATH = '/coswheel-ebike';

const nextConfig = {
  basePath: SUBPATH,
  assetPrefix: SUBPATH,
  trailingSlash: false,
  reactStrictMode: true,
  poweredByHeader: false,
  env: { NEXT_PUBLIC_BASE_PATH: SUBPATH },
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'www.coswheelebike.com', pathname: '/cdn/shop/**' },
      { protocol: 'https', hostname: 'review-images.judgeme.com', pathname: '/**' },
      { protocol: 'https', hostname: 'img.youtube.com', pathname: '/vi/**' },
    ],
  },
  async redirects() {
    // Direct visits to the bare Vercel domain land on the landing page.
    return [{ source: '/', destination: SUBPATH, basePath: false, permanent: false }];
  },
};

module.exports = nextConfig;
