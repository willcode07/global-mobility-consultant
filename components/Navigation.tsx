'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { locales } from '@/i18n';

export default function Navigation() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    const pathWithoutLocale = pathname.replace(`/${locale}`, '') || '/';
    return `/${newLocale}${pathWithoutLocale}`;
  };

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <Link href={`/${locale}`} className="text-xl font-bold text-primary-700">
              Global Mobility
            </Link>
            <div className="hidden md:flex space-x-6">
              <Link href={`/${locale}`} className="text-gray-700 hover:text-primary-600 transition-colors">
                {t('home')}
              </Link>
              <a href="#services" className="text-gray-700 hover:text-primary-600 transition-colors">
                {t('services')}
              </a>
              <a href="#value" className="text-gray-700 hover:text-primary-600 transition-colors">
                {t('about')}
              </a>
              <a href="#contact" className="text-gray-700 hover:text-primary-600 transition-colors">
                {t('contact')}
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            {locales.map((loc) => (
              <Link
                key={loc}
                href={switchLocale(loc)}
                className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                  locale === loc
                    ? 'bg-primary-100 text-primary-700'
                    : 'text-gray-600 hover:text-primary-600 hover:bg-gray-50'
                }`}
              >
                {loc.toUpperCase()}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

