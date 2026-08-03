'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Mail } from 'lucide-react';
import Logo from './Logo';
import { siteConfig, withBasePath } from '@/lib/site';

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function Footer() {
  const t = useTranslations('footer');
  const tNav = useTranslations('nav');
  const locale = useLocale();
  const homePath = `/${locale}/`;

  const links = [
    { href: withBasePath(`${homePath}#how-it-works`), label: tNav('howItWorks') },
    { href: withBasePath(`${homePath}#ecosystem`), label: tNav('ecosystem') },
    { href: withBasePath(`${homePath}#services`), label: tNav('services') },
    { href: withBasePath(`${homePath}#contact`), label: tNav('contact') },
  ];

  return (
    <footer className="border-t border-nexo-light bg-nexo-black text-white">
      <div className="mx-auto max-w-content px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Logo href={homePath} inverted />
            <p className="mt-4 text-sm text-white/60">{t('tagline')}</p>
            <p className="mt-2 text-sm text-white/60">{siteConfig.locations}</p>
          </div>

          <div>
            <p className="font-heading text-sm font-semibold uppercase tracking-wider text-white/40">
              {t('explore')}
            </p>
            <ul className="mt-4 space-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/80 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-heading text-sm font-semibold uppercase tracking-wider text-white/40">
              {tNav('contact')}
            </p>
            <div className="mt-4 flex flex-col gap-3">
              {siteConfig.linkedinUrl ? (
                <a
                  href={siteConfig.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white"
                >
                  <LinkedInIcon className="h-4 w-4" />
                  LinkedIn
                </a>
              ) : null}
              {siteConfig.contactEmail ? (
                <a
                  href={`mailto:${siteConfig.contactEmail}`}
                  className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white"
                >
                  <Mail className="h-4 w-4" />
                  {siteConfig.contactEmail}
                </a>
              ) : (
                <a
                  href={withBasePath(`${homePath}#contact`)}
                  className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white"
                >
                  <Mail className="h-4 w-4" />
                  {tNav('contact')}
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} Nexo Mobility. {t('rights')}
          </p>
          <div className="flex gap-4">
            <span className="cursor-default">{t('privacy')}</span>
            <span className="cursor-default">{t('terms')}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
