'use client';

import { useTranslations } from 'next-intl';
import { Compass, Globe2, Network, Handshake } from 'lucide-react';
import SectionHeading from './SectionHeading';

const items = [
  { key: 'consulting', icon: Compass },
  { key: 'expansion', icon: Globe2 },
  { key: 'ecosystem', icon: Network },
  { key: 'partnership', icon: Handshake },
] as const;

export default function WhatWeDo() {
  const t = useTranslations('whatWeDo');

  return (
    <section id="what-we-do" className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <SectionHeading title={t('title')} subtitle={t('subtitle')} />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ key, icon: Icon }) => (
            <div key={key} className="group">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full border border-nexo-purple/20 bg-nexo-lavender text-nexo-purple transition-transform duration-300 group-hover:-translate-y-1">
                <Icon className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <h3 className="font-heading text-lg font-semibold text-nexo-black">
                {t(`items.${key}.title`)}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-nexo-gray">
                {t(`items.${key}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
