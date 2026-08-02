'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Menu, X } from 'lucide-react';
import { locales } from '@/i18n';
import Logo from './Logo';
import CalendlyButton from './CalendlyButton';
import { withBasePath } from '@/lib/site';

const links = [
  { key: 'services', hash: '#services' },
  { key: 'industries', hash: '#industries' },
  { key: 'about', hash: '#about' },
  { key: 'contact', hash: '#contact' },
] as const;

function goToLocale(newLocale: string) {
  const hash = window.location.hash || '';
  window.location.assign(withBasePath(`/${newLocale}/${hash}`));
}

export default function Navigation() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const [open, setOpen] = useState(false);

  const homePath = `/${locale}/`;

  return (
    <header className="sticky top-0 z-40 border-b border-nexo-light/80 bg-white/90 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-content items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo href={homePath} />

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.key}
              href={withBasePath(`${homePath}${link.hash}`)}
              className="text-sm font-medium text-nexo-gray transition-colors hover:text-nexo-purple"
            >
              {t(link.key)}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <div className="flex items-center gap-1 rounded-full bg-nexo-light p-1">
            {locales.map((loc) => (
              <a
                key={loc}
                href={withBasePath(`/${loc}/`)}
                onClick={(e) => {
                  e.preventDefault();
                  goToLocale(loc);
                }}
                className={`rounded-full px-2.5 py-1 text-xs font-semibold uppercase transition-colors ${
                  locale === loc
                    ? 'bg-white text-nexo-purple shadow-sm'
                    : 'text-nexo-gray hover:text-nexo-purple'
                }`}
              >
                {loc}
              </a>
            ))}
          </div>
          <CalendlyButton
            variant="primary"
            size="sm"
            label={t('cta')}
            fallbackHref={`${homePath}#contact`}
          />
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg p-2 text-nexo-black md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? t('closeMenu') : t('openMenu')}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-nexo-light bg-white md:hidden">
          <div className="mx-auto flex max-w-content flex-col gap-1 px-4 py-4">
            {links.map((link) => (
              <a
                key={link.key}
                href={withBasePath(`${homePath}${link.hash}`)}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-nexo-black hover:bg-nexo-light"
              >
                {t(link.key)}
              </a>
            ))}
            <div className="mt-3 flex items-center justify-between gap-3 border-t border-nexo-light pt-4">
              <div className="flex gap-1">
                {locales.map((loc) => (
                  <a
                    key={loc}
                    href={withBasePath(`/${loc}/`)}
                    onClick={(e) => {
                      e.preventDefault();
                      setOpen(false);
                      goToLocale(loc);
                    }}
                    className={`rounded-full px-3 py-1 text-xs font-semibold uppercase ${
                      locale === loc
                        ? 'bg-nexo-purple text-white'
                        : 'bg-nexo-light text-nexo-gray'
                    }`}
                  >
                    {loc}
                  </a>
                ))}
              </div>
              <CalendlyButton
                variant="primary"
                size="sm"
                label={t('cta')}
                fallbackHref={`${homePath}#contact`}
              />
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
