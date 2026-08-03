import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Inter, Poppins } from 'next/font/google';
import type { Metadata } from 'next';
import { locales, type Locale } from '@/i18n';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { siteConfig, withBasePath } from '@/lib/site';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'meta' });

  return {
    title: t('homeTitle'),
    description: t('homeDescription'),
    openGraph: {
      title: t('homeTitle'),
      description: t('homeDescription'),
      siteName: siteConfig.name,
      locale: locale === 'es' ? 'es_ES' : locale === 'ca' ? 'ca_ES' : 'en_US',
      type: 'website',
    },
    icons: {
      icon: [
        { url: withBasePath('/favicon.ico') },
        { url: withBasePath('/favicon.png'), type: 'image/png' },
      ],
      apple: withBasePath('/brand/apple-touch-icon.png'),
    },
  };
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  unstable_setRequestLocale(locale);
  const messages = await getMessages();
  const t = await getTranslations({ locale, namespace: 'meta' });

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.url,
    description: t('homeDescription'),
    areaServed: ['US', 'ES'],
    address: [
      { '@type': 'PostalAddress', addressLocality: 'Miami', addressCountry: 'US' },
      { '@type': 'PostalAddress', addressLocality: 'Barcelona', addressCountry: 'ES' },
    ],
  };

  return (
    <html lang={locale} className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-body antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <NextIntlClientProvider messages={messages}>
          <Navigation />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
