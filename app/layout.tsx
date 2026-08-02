import type { Metadata } from 'next';
import { withBasePath } from '@/lib/site';
import './globals.css';

export const metadata: Metadata = {
  title: 'Nexo Mobility',
  description:
    'Boutique consulting for Spanish companies expanding into the United States.',
  icons: {
    icon: withBasePath('/favicon.ico'),
    apple: withBasePath('/brand/apple-touch-icon.png'),
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
