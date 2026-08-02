/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        nexo: {
          purple: '#5B21B6',
          'purple-dark': '#4C1D95',
          'purple-light': '#7C3AED',
          accent: '#14B8A6',
          'accent-dark': '#0F766E',
          black: '#111111',
          gray: '#6B7280',
          light: '#F3F4F6',
          lavender: '#F5F3FF',
          mint: '#F0FDFA',
        },
      },
      fontFamily: {
        heading: ['var(--font-poppins)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
      },
      maxWidth: {
        content: '72rem',
      },
    },
  },
  plugins: [],
};
