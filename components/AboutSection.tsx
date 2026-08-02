'use client';

import { useTranslations } from 'next-intl';
import SectionHeading from './SectionHeading';

const valueKeys = [
  'trust',
  'transparency',
  'closeness',
  'excellence',
  'innovation',
  'collaboration',
  'results',
] as const;

export default function AboutSection() {
  const t = useTranslations('about');

  return (
    <section id="about" className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <SectionHeading title={t('title')} subtitle={t('subtitle')} />

        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h3 className="font-heading text-xl font-semibold text-nexo-purple">
              {t('storyTitle')}
            </h3>
            <p className="mt-4 leading-relaxed text-nexo-gray">{t('story')}</p>
          </div>
          <div className="rounded-2xl bg-gradient-to-br from-nexo-lavender to-white p-8">
            <h3 className="font-heading text-xl font-semibold text-nexo-black">
              {t('promiseTitle')}
            </h3>
            <p className="mt-3 text-lg font-medium text-nexo-purple">{t('promise')}</p>
          </div>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-nexo-light p-8">
            <h3 className="font-heading text-xl font-semibold text-nexo-black">
              {t('missionTitle')}
            </h3>
            <p className="mt-3 leading-relaxed text-nexo-gray">{t('mission')}</p>
          </div>
          <div className="rounded-2xl border border-nexo-light p-8">
            <h3 className="font-heading text-xl font-semibold text-nexo-black">
              {t('visionTitle')}
            </h3>
            <p className="mt-3 leading-relaxed text-nexo-gray">{t('vision')}</p>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="font-heading text-xl font-semibold text-nexo-black">
            {t('valuesTitle')}
          </h3>
          <ul className="mt-6 flex flex-wrap gap-3">
            {valueKeys.map((key) => (
              <li
                key={key}
                className="rounded-full border border-nexo-purple/20 bg-nexo-lavender px-4 py-2 text-sm font-medium text-nexo-purple"
              >
                {t(`values.${key}`)}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
