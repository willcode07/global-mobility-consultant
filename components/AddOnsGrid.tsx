'use client';

import { useTranslations } from 'next-intl';
import {
  Globe2,
  UserRoundSearch,
  Scale,
  IdCard,
  Users,
  MessagesSquare,
  ChartColumnIncreasing,
  Plane,
  Plus,
} from 'lucide-react';
import SectionHeading from './SectionHeading';

type Addon = {
  label: string;
  price: string;
};

const icons = [
  Globe2,
  UserRoundSearch,
  Scale,
  IdCard,
  Users,
  MessagesSquare,
  ChartColumnIncreasing,
  Plane,
];

export default function AddOnsGrid() {
  const t = useTranslations('packages');
  const addons = t.raw('addons') as Addon[];

  return (
    <div className="mt-20">
      <SectionHeading title={t('addonsTitle')} />
      <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
        {addons.map((addon, index) => {
          const Icon = icons[index] || Plus;
          return (
            <div key={addon.label} className="flex flex-col items-center text-center">
              <div className="mb-3 flex h-12 w-12 items-center justify-center text-nexo-purple">
                <Icon className="h-7 w-7" strokeWidth={1.5} />
              </div>
              <p className="text-xs leading-snug text-nexo-black md:text-sm">{addon.label}</p>
              <p className="mt-1.5 text-sm font-semibold text-nexo-purple">{addon.price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
