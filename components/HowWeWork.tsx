'use client';

import { useTranslations } from 'next-intl';
import { Phone, Map, Waypoints, Rocket } from 'lucide-react';
import SectionHeading from './SectionHeading';

const steps = [
  { key: 'discovery', icon: Phone },
  { key: 'strategy', icon: Map },
  { key: 'execution', icon: Waypoints },
  { key: 'launch', icon: Rocket },
] as const;

export default function HowWeWork() {
  const t = useTranslations('howWeWork');

  return (
    <section id="how-it-works" className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <SectionHeading title={t('title')} subtitle={t('subtitle')} />
        <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ key, icon: Icon }, index) => (
            <li key={key} className="relative text-center">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-nexo-purple/20 bg-nexo-lavender text-nexo-purple">
                <Icon className="h-6 w-6" strokeWidth={1.75} />
              </div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-nexo-purple">
                {String(index + 1).padStart(2, '0')}
              </p>
              <h3 className="font-heading text-lg font-semibold text-nexo-black">
                {t(`steps.${key}.title`)}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-nexo-gray">
                {t(`steps.${key}.description`)}
              </p>
              {index < steps.length - 1 ? (
                <div
                  className="pointer-events-none absolute right-0 top-7 hidden h-px w-8 translate-x-1/2 bg-nexo-purple/25 lg:block"
                  aria-hidden
                />
              ) : null}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
