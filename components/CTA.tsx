'use client';

import { useTranslations } from 'next-intl';
import CalendlyButton from './CalendlyButton';

export default function CTA() {
  const t = useTranslations('cta');

  return (
    <section id="contact" className="py-20 bg-primary-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          {t('title')}
        </h2>
        <p className="text-xl text-primary-100 mb-8">
          {t('subtitle')}
        </p>
        <CalendlyButton variant="light" />
      </div>
    </section>
  );
}

