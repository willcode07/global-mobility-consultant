'use client';

import { useTranslations } from 'next-intl';
import { ShieldCheck, UserRound, Users, Flag } from 'lucide-react';
import SectionHeading from './SectionHeading';

const items = [
  { key: 'trust', icon: ShieldCheck },
  { key: 'single', icon: UserRound },
  { key: 'ecosystem', icon: Users },
  { key: 'results', icon: Flag },
] as const;

export default function WhyNexo() {
  const t = useTranslations('why');

  return (
    <section id="why" className="bg-gradient-to-b from-nexo-purple to-nexo-purple-dark py-20 lg:py-24">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <SectionHeading title={t('title')} subtitle={t('subtitle')} light />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ key, icon: Icon }) => (
            <div key={key}>
              <Icon className="mb-4 h-6 w-6 text-nexo-accent" strokeWidth={1.75} />
              <h3 className="font-heading text-lg font-semibold text-white">
                {t(`items.${key}.title`)}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/75">
                {t(`items.${key}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
