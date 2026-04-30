const withNextIntl = require('next-intl/plugin')('./i18n.ts');

// When deploying to GitHub Pages the site is served from
// https://<user>.github.io/<repo>/, so we need a basePath in production.
// Locally (next dev / next build without GITHUB_PAGES) we leave it empty.
const isGithubPages = process.env.GITHUB_PAGES === 'true';
const repoName = 'global-mobility-consultant';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: isGithubPages ? `/${repoName}` : '',
  assetPrefix: isGithubPages ? `/${repoName}/` : '',
  env: {
    NEXT_PUBLIC_BASE_PATH: isGithubPages ? `/${repoName}` : '',
  },
};

module.exports = withNextIntl(nextConfig);
