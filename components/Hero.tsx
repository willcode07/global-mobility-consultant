'use client';

import { useTranslations, useLocale } from 'next-intl';
import Button from './Button';
import { withBasePath } from '@/lib/site';

export default function Hero() {
  const t = useTranslations('hero');
  const locale = useLocale();
  const howItWorksHref = withBasePath(`/${locale}/#how-it-works`);

  return (
    <section id="home" className="relative isolate min-h-[80vh] overflow-hidden">
      <picture>
        <source
          type="image/webp"
          srcSet={`${withBasePath('/images/hero-network-1440.webp')} 1440w, ${withBasePath('/images/hero-network.webp')} 2880w`}
          sizes="100vw"
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={withBasePath('/images/hero-network.jpg')}
          alt=""
          width={2880}
          height={1920}
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover object-[center_68%]"
        />
      </picture>
      <div className="absolute inset-0 bg-gradient-to-l from-nexo-black/70 via-nexo-black/35 to-transparent" />

      <div className="relative mx-auto flex min-h-[80vh] max-w-content flex-col justify-end px-4 pb-28 pt-32 sm:px-6 lg:px-8 lg:pb-36">
        <div className="animate-fade-up ml-auto max-w-3xl text-right">
          <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-[3.25rem]">
            {t('title')}
          </h1>
          <p className="mt-4 font-heading text-2xl font-semibold leading-snug text-white md:text-3xl">
            {t('lead')}
          </p>
          <p className="mt-6 ml-auto max-w-2xl text-lg leading-relaxed text-white/90 md:text-xl">
            {t('subtitle')}
          </p>
          <div className="animate-fade-up-delay mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end">
            <Button href={`/${locale}/#contact`} variant="accent" size="lg">
              {t('ctaPrimary')}
            </Button>
            <a
              href={howItWorksHref}
              className="inline-flex items-center justify-center rounded-lg border border-white/70 px-8 py-3.5 text-base font-semibold text-white transition-all hover:bg-white/10"
            >
              {t('ctaSecondary')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
