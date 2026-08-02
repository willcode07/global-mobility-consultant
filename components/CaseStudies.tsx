'use client';

import { useTranslations } from 'next-intl';
import SectionHeading from './SectionHeading';

const items = ['one', 'two'] as const;

export default function CaseStudies() {
  const t = useTranslations('cases');

  return (
    <section id="cases" className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <SectionHeading title={t('title')} subtitle={t('subtitle')} />
        <div className="grid gap-6 md:grid-cols-2">
          {items.map((key) => (
            <article
              key={key}
              className="rounded-2xl border border-nexo-light bg-gradient-to-br from-white to-nexo-lavender/30 p-8"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-nexo-purple">
                {t(`items.${key}.sector`)}
              </p>
              <h3 className="mt-3 font-heading text-xl font-semibold text-nexo-black">
                {t(`items.${key}.title`)}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-nexo-gray">
                {t(`items.${key}.description`)}
              </p>
            </article>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-nexo-gray/80">{t('note')}</p>
      </div>
    </section>
  );
}
