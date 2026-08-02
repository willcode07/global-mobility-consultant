'use client';

import { useTranslations } from 'next-intl';
import SectionHeading from './SectionHeading';
import PackageCards from './PackageCards';
import AddOnsGrid from './AddOnsGrid';

export default function ServicesSection() {
  const t = useTranslations('packages');

  return (
    <section id="services" className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <SectionHeading title={t('title')} subtitle={t('subtitle')} />
        <PackageCards />
        <AddOnsGrid />
      </div>
    </section>
  );
}
