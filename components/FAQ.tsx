'use client';

import { useTranslations } from 'next-intl';
import SectionHeading from './SectionHeading';

const items = ['who', 'diff', 'start', 'locations'] as const;

export default function FAQ() {
  const t = useTranslations('faq');

  return (
    <section id="faq" className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title={t('title')} />
        <div className="space-y-3">
          {items.map((key) => (
            <details
              key={key}
              className="group rounded-xl border border-nexo-light bg-nexo-light/30 px-5 py-4 open:bg-nexo-lavender/40"
            >
              <summary className="cursor-pointer list-none font-heading text-base font-semibold text-nexo-black marker:content-none [&::-webkit-details-marker]:hidden">
                <span className="flex items-center justify-between gap-4">
                  {t(`items.${key}.q`)}
                  <span className="text-nexo-purple transition-transform group-open:rotate-45">+</span>
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-nexo-gray">
                {t(`items.${key}.a`)}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
