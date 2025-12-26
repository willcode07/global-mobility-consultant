import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Global Mobility Consultant - US Expansion Services',
  description: 'Expert global mobility services for companies expanding to the United States',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

