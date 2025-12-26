'use client';

import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import CalendlyButton from './CalendlyButton';

export default function Hero() {
  const t = useTranslations('hero');
  const locale = useLocale();

  return (
    <section className="relative bg-gradient-to-br from-primary-50 via-white to-primary-50 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            {t('title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            {t('subtitle')}
          </p>
          <CalendlyButton />
        </div>
      </div>
    </section>
  );
}

