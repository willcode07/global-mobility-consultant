# Global Mobility Consultant Website

A modern, clean website for a global mobility consultant specializing in helping companies expand to the United States. The site features multi-language support (English, Spanish, and Catalan) and integrates with Calendly for consultation bookings.

**Live demo:** https://willcode07.github.io/global-mobility-consultant/

## Features

- 🌍 **Multi-language Support**: English, Spanish, and Catalan
- 📅 **Calendly Integration**: Book consultations directly from the site
- 🎨 **Clean, Modern Design**: Professional and minimalist UI
- 📱 **Fully Responsive**: Works beautifully on all devices
- ⚡ **Next.js 14**: Built with the latest Next.js App Router
- 🎯 **TypeScript**: Type-safe development

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Update Calendly URL:
   - Open `components/CalendlyButton.tsx`
   - Replace `'https://calendly.com/your-username'` with your actual Calendly URL

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
global-mobility-consultant/
├── app/
│   ├── [locale]/          # Locale-specific pages
│   ├── globals.css        # Global styles
│   └── layout.tsx         # Root layout
├── components/
│   ├── Navigation.tsx     # Navigation with language switcher
│   ├── Hero.tsx          # Hero section
│   ├── Services.tsx      # Services section
│   ├── ValueProposition.tsx  # Value proposition section
│   ├── CTA.tsx           # Call-to-action section
│   ├── CalendlyButton.tsx # Calendly integration
│   └── Footer.tsx        # Footer component
├── messages/             # Translation files
│   ├── en.json          # English translations
│   ├── es.json          # Spanish translations
│   └── ca.json          # Catalan translations
├── i18n.ts              # i18n configuration
└── middleware.ts        # Next.js middleware for routing
```

## Customization

### Update Calendly Integration

Edit `components/CalendlyButton.tsx` and replace the `calendlyUrl` constant with your Calendly scheduling page URL.

### Modify Content

All text content is stored in the `messages/` directory. Edit the JSON files to update content in each language.

### Styling

The project uses Tailwind CSS. Customize colors and styles in `tailwind.config.js`.

## Build for Production

```bash
npm run build
npm start
```

## Deployment

### GitHub Pages (current)

The site auto-deploys to GitHub Pages on every push to `main` via
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml). The workflow runs
`GITHUB_PAGES=true next build`, which produces a static export in `out/` with the
correct `basePath` (`/global-mobility-consultant`) and uploads it to Pages.

To enable Pages the first time, go to **Settings → Pages** on GitHub and set
**Source** to **GitHub Actions**.

To produce the same static build locally:

```bash
npm run build:gh-pages
npx serve out  # optional preview
```

### Other platforms

The project also runs on any Next.js host (Vercel, Netlify, etc.) — just run
`npm run build` (without `GITHUB_PAGES=true`) to skip the basePath.

## License

Private - All rights reserved.

