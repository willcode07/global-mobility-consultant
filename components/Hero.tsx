'use client';

import { useTranslations, useLocale } from 'next-intl';
import Logo from './Logo';
import Button from './Button';
import { withBasePath } from '@/lib/site';

export default function Hero() {
  const t = useTranslations('hero');
  const locale = useLocale();
  const howItWorksHref = withBasePath(`/${locale}/#how-it-works`);

  return (
    <section id="home" className="relative isolate min-h-[85vh] overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={withBasePath('/images/hero-skyline.jpg')}
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-nexo-purple/80 via-nexo-black/65 to-nexo-black/50" />

      <div className="relative mx-auto flex min-h-[85vh] max-w-content flex-col justify-center px-4 py-24 sm:px-6 lg:px-8">
        <div className="animate-fade-up max-w-3xl">
          <div className="mb-8 inline-flex rounded-2xl bg-white/95 px-5 py-4 shadow-lg shadow-nexo-black/10 backdrop-blur-sm">
            <Logo variant="full" className="!h-auto" />
          </div>
          <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-[3.25rem]">
            {t('title')}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/90 md:text-xl">
            {t('subtitle')}
          </p>
          <div className="animate-fade-up-delay mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
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
