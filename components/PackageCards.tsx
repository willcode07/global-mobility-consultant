'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Check, Rocket, TrendingUp, Target, Star } from 'lucide-react';
import Button from './Button';
import CalendlyButton from './CalendlyButton';

type Tier = 'essential' | 'professional' | 'enterprise';

const tierMeta: Record<
  Tier,
  {
    icon: typeof Rocket;
    card: string;
    title: string;
    check: string;
    button: 'outline-purple' | 'primary' | 'outline-teal';
    featured?: boolean;
  }
> = {
  essential: {
    icon: Rocket,
    card: 'bg-nexo-lavender/60 border-nexo-purple/15',
    title: 'text-nexo-purple',
    check: 'text-nexo-purple',
    button: 'outline-purple',
  },
  professional: {
    icon: TrendingUp,
    card: 'bg-[#EDE9FE] border-nexo-purple/25 ring-2 ring-nexo-purple/20',
    title: 'text-nexo-purple-dark',
    check: 'text-nexo-purple-dark',
    button: 'primary',
    featured: true,
  },
  enterprise: {
    icon: Target,
    card: 'bg-nexo-mint border-nexo-accent/25',
    title: 'text-nexo-accent-dark',
    check: 'text-nexo-accent',
    button: 'outline-teal',
  },
};

const tiers: Tier[] = ['essential', 'professional', 'enterprise'];

export default function PackageCards() {
  const t = useTranslations('packages');
  const locale = useLocale();

  return (
    <div className="grid items-stretch gap-6 lg:grid-cols-3">
      {tiers.map((tier) => {
        const meta = tierMeta[tier];
        const Icon = meta.icon;
        const features = t.raw(`${tier}.features`) as string[];

        return (
          <article
            key={tier}
            className={`flex flex-col rounded-2xl border p-8 ${meta.card}`}
          >
            <div
              className={`mb-5 inline-flex h-14 w-14 items-center justify-center rounded-full border border-current/25 bg-white/70 ${meta.title}`}
            >
              <Icon className="h-6 w-6" strokeWidth={1.75} />
            </div>

            <div className="flex items-center gap-2">
              <h3
                className={`font-heading text-2xl font-bold uppercase tracking-wide ${meta.title}`}
              >
                {t(`${tier}.name`)}
              </h3>
              {meta.featured ? (
                <Star className="h-5 w-5 fill-nexo-purple-dark text-nexo-purple-dark" />
              ) : null}
            </div>

            <p className="mt-2 text-sm font-medium text-nexo-black/80">
              {t(`${tier}.tagline`)}
            </p>
            <p className={`mt-4 font-heading text-2xl font-bold ${meta.title}`}>
              {t(`${tier}.price`)}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-nexo-gray">
              {t(`${tier}.description`)}
            </p>

            <ul className="mt-6 flex-1 space-y-3">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5 text-sm text-nexo-black">
                  <Check
                    className={`mt-0.5 h-4 w-4 shrink-0 ${meta.check}`}
                    strokeWidth={2.5}
                  />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              {tier === 'enterprise' ? (
                <Button
                  href={`/${locale}/#contact`}
                  variant={meta.button}
                  size="lg"
                  pill
                  className="w-full"
                >
                  {t(`${tier}.cta`)}
                </Button>
              ) : (
                <CalendlyButton
                  variant={meta.button === 'primary' ? 'primary' : 'secondary'}
                  size="lg"
                  pill
                  label={t(`${tier}.cta`)}
                  fallbackHref={`/${locale}/#contact`}
                  className="w-full"
                />
              )}
            </div>
          </article>
        );
      })}
    </div>
  );
}
