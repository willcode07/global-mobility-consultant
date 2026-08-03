'use client';

import { useTranslations } from 'next-intl';
import {
  ChartColumnIncreasing,
  CalendarRange,
  FileText,
  MessagesSquare,
  Video,
  Timer,
  ListChecks,
  Flag,
} from 'lucide-react';
import SectionHeading from './SectionHeading';

const features = [
  { key: 'progress', icon: ChartColumnIncreasing },
  { key: 'timeline', icon: CalendarRange },
  { key: 'documents', icon: FileText },
  { key: 'messages', icon: MessagesSquare },
  { key: 'meetings', icon: Video },
  { key: 'sla', icon: Timer },
  { key: 'tasks', icon: ListChecks },
  { key: 'milestones', icon: Flag },
] as const;

export default function ClientPortal() {
  const t = useTranslations('portal');

  return (
    <section id="portal" className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="mb-4 flex justify-center">
          <span className="rounded-full bg-nexo-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-nexo-accent-dark">
            {t('badge')}
          </span>
        </div>
        <SectionHeading title={t('title')} subtitle={t('subtitle')} />

        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2 lg:items-center">
          <div className="order-2 lg:order-1">
            <ul className="grid grid-cols-2 gap-4">
              {features.map(({ key, icon: Icon }) => (
                <li
                  key={key}
                  className="flex items-center gap-3 rounded-xl border border-nexo-light bg-nexo-light/30 px-4 py-3"
                >
                  <Icon className="h-4 w-4 shrink-0 text-nexo-purple" strokeWidth={1.75} />
                  <span className="text-sm font-medium text-nexo-black">
                    {t(`features.${key}`)}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-relaxed text-nexo-gray">{t('note')}</p>
          </div>

          <div className="order-1 lg:order-2">
            <div className="overflow-hidden rounded-2xl border border-nexo-purple/15 bg-gradient-to-br from-nexo-lavender via-white to-nexo-mint p-6 shadow-lg shadow-nexo-purple/10">
              <div className="mb-4 flex items-center justify-between">
                <p className="font-heading text-sm font-semibold text-nexo-black">
                  {t('mock.title')}
                </p>
                <span className="rounded-full bg-nexo-accent/15 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-nexo-accent-dark">
                  {t('badge')}
                </span>
              </div>
              <div className="mb-4 h-2 overflow-hidden rounded-full bg-white">
                <div className="h-full w-2/3 rounded-full bg-nexo-purple" />
              </div>
              <div className="space-y-3">
                {[t('mock.row1'), t('mock.row2'), t('mock.row3')].map((row) => (
                  <div
                    key={row}
                    className="flex items-center justify-between rounded-xl bg-white/80 px-4 py-3 text-sm"
                  >
                    <span className="text-nexo-black">{row}</span>
                    <span className="h-2 w-2 rounded-full bg-nexo-accent" />
                  </div>
                ))}
              </div>
              <div className="mt-4 grid grid-cols-3 gap-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-16 rounded-lg bg-white/70" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
