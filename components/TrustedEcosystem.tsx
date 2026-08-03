'use client';

import { useTranslations } from 'next-intl';
import {
  Scale,
  Calculator,
  Plane,
  Users,
  Wallet,
  Landmark,
  ShieldCheck,
  Truck,
  Megaphone,
  BriefcaseBusiness,
} from 'lucide-react';
import SectionHeading from './SectionHeading';

const areas = [
  { key: 'legal', icon: Scale },
  { key: 'tax', icon: Calculator },
  { key: 'immigration', icon: Plane },
  { key: 'hr', icon: Users },
  { key: 'payroll', icon: Wallet },
  { key: 'banking', icon: Landmark },
  { key: 'compliance', icon: ShieldCheck },
  { key: 'logistics', icon: Truck },
  { key: 'marketing', icon: Megaphone },
  { key: 'business', icon: BriefcaseBusiness },
] as const;

export default function TrustedEcosystem() {
  const t = useTranslations('ecosystem');

  return (
    <section id="ecosystem" className="bg-nexo-light/40 py-20 lg:py-24">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <SectionHeading title={t('title')} subtitle={t('subtitle')} />
        <p className="mx-auto mb-12 max-w-3xl text-center text-base leading-relaxed text-nexo-gray md:text-lg">
          {t('intro')}
        </p>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {areas.map(({ key, icon: Icon }) => (
            <div
              key={key}
              className="flex flex-col items-center rounded-2xl bg-white px-4 py-6 text-center shadow-sm shadow-nexo-purple/5"
            >
              <Icon className="mb-3 h-5 w-5 text-nexo-purple" strokeWidth={1.75} />
              <p className="text-sm font-medium text-nexo-black">{t(`areas.${key}`)}</p>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center font-heading text-lg font-semibold text-nexo-purple md:text-xl">
          {t('closing')}
        </p>
      </div>
    </section>
  );
}
