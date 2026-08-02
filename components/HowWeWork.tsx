'use client';

import { useTranslations } from 'next-intl';
import SectionHeading from './SectionHeading';

const steps = ['discovery', 'assessment', 'proposal', 'project', 'partner'] as const;

export default function HowWeWork() {
  const t = useTranslations('howWeWork');

  return (
    <section id="how-we-work" className="bg-gradient-to-b from-nexo-light/80 to-white py-20 lg:py-24">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <SectionHeading title={t('title')} subtitle={t('subtitle')} />
        <ol className="relative grid gap-8 md:grid-cols-5">
          {steps.map((key, index) => (
            <li key={key} className="relative text-center md:text-left">
              <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-nexo-purple font-heading text-sm font-bold text-white md:mx-0">
                {index + 1}
              </div>
              <h3 className="font-heading text-base font-semibold text-nexo-black">
                {t(`steps.${key}.title`)}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-nexo-gray">
                {t(`steps.${key}.description`)}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
