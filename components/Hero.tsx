'use client';

import { useTranslations, useLocale } from 'next-intl';
import Logo from './Logo';
import Button from './Button';
import CalendlyButton from './CalendlyButton';
import { siteConfig, withBasePath } from '@/lib/site';

export default function Hero() {
  const t = useTranslations('hero');
  const locale = useLocale();
  const guideUrl = siteConfig.expansionGuideUrl;

  const secondaryHref = guideUrl || withBasePath(`/${locale}/#services`);
  const contactHref = withBasePath(`/${locale}/#contact`);

  return (
    <section id="home" className="relative isolate min-h-[85vh] overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={withBasePath('/images/hero-skyline.jpg')}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-nexo-purple/85 via-nexo-black/70 to-nexo-black/55" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(91,33,182,0.35),_transparent_55%)]" />

      <div className="relative mx-auto flex min-h-[85vh] max-w-content flex-col justify-center px-4 py-24 sm:px-6 lg:px-8">
        <div className="animate-fade-up max-w-3xl">
          <Logo variant="full" inverted className="mb-10" />
          <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
            {t('title')}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85 md:text-xl">
            {t('subtitle')}
          </p>
          <div className="animate-fade-up-delay mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <CalendlyButton
              variant="accent"
              size="lg"
              label={t('ctaPrimary')}
              fallbackHref={contactHref}
            />
            {guideUrl ? (
              <Button
                href={secondaryHref}
                variant="ghost"
                size="lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('ctaSecondary')}
              </Button>
            ) : (
              <a
                href={secondaryHref}
                className="inline-flex items-center justify-center rounded-lg border border-white/70 px-8 py-3.5 text-base font-semibold text-white transition-all hover:bg-white/10"
              >
                {t('ctaSecondaryFallback')}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
