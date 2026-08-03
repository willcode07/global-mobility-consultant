const withNextIntl = require('next-intl/plugin')('./i18n.ts');

// Served at the custom domain root (nexo-mobility.com) — no repo basePath.
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  env: {
    NEXT_PUBLIC_BASE_PATH: '',
  },
};

module.exports = withNextIntl(nextConfig);
