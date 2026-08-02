'use client';

import { useTranslations } from 'next-intl';
import {
  Globe2,
  UserRoundSearch,
  Scale,
  FileCheck2,
  Users,
  IdCard,
  Factory,
  Megaphone,
  MessagesSquare,
  ChartColumnIncreasing,
  Handshake,
  Plus,
} from 'lucide-react';
import SectionHeading from './SectionHeading';

const icons = [
  Globe2,
  UserRoundSearch,
  Scale,
  FileCheck2,
  Users,
  IdCard,
  Factory,
  Megaphone,
  MessagesSquare,
  ChartColumnIncreasing,
  Handshake,
  Plus,
];

export default function AddOnsGrid() {
  const t = useTranslations('packages');
  const addons = t.raw('addons') as string[];

  return (
    <div className="mt-20">
      <SectionHeading title={t('addonsTitle')} />
      <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
        {addons.map((label, index) => {
          const Icon = icons[index] || Plus;
          return (
            <div key={label} className="flex flex-col items-center text-center">
              <div className="mb-3 flex h-12 w-12 items-center justify-center text-nexo-purple">
                <Icon className="h-7 w-7" strokeWidth={1.5} />
              </div>
              <p className="text-xs leading-snug text-nexo-black md:text-sm">{label}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
