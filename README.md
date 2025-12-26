# Global Mobility Consultant Website

A modern, clean website for a global mobility consultant specializing in helping companies expand to the United States. The site features multi-language support (English, Spanish, and Catalan) and integrates with Calendly for consultation bookings.

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

This project can be deployed to Vercel, Netlify, or any platform that supports Next.js applications.

## License

Private - All rights reserved.

