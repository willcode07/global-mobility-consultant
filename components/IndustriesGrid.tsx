'use client';

import { useTranslations } from 'next-intl';
import { Utensils, Cpu, Factory, HeartPulse, ShoppingBag } from 'lucide-react';
import SectionHeading from './SectionHeading';

const items = [
  { key: 'food', icon: Utensils },
  { key: 'technology', icon: Cpu },
  { key: 'manufacturing', icon: Factory },
  { key: 'healthcare', icon: HeartPulse },
  { key: 'consumer', icon: ShoppingBag },
] as const;

export default function IndustriesGrid() {
  const t = useTranslations('industries');

  return (
    <section id="industries" className="bg-nexo-light/50 py-20 lg:py-24">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <SectionHeading title={t('title')} subtitle={t('subtitle')} />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {items.map(({ key, icon: Icon }) => (
            <div
              key={key}
              className="rounded-2xl bg-white p-6 shadow-sm shadow-nexo-purple/5 transition-shadow hover:shadow-md"
            >
              <Icon className="mb-4 h-6 w-6 text-nexo-purple" strokeWidth={1.75} />
              <h3 className="font-heading text-base font-semibold text-nexo-black">
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
