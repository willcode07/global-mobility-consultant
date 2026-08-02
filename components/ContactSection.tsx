'use client';

import { useTranslations } from 'next-intl';
import ContactForm from './ContactForm';
import CalendlyButton from './CalendlyButton';
import { siteConfig } from '@/lib/site';

export default function ContactSection() {
  const t = useTranslations('contact');
  const hasCalendly = Boolean(siteConfig.calendlyUrl);

  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-nexo-lavender/40 to-white py-20 lg:py-24"
    >
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-nexo-black md:text-4xl">
            {t('title')}
          </h2>
          <p className="mt-4 text-lg text-nexo-gray">{t('subtitle')}</p>
          <p className="mt-2 text-sm font-medium text-nexo-purple">{t('locations')}</p>
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          <div className="rounded-2xl border border-nexo-light bg-white p-8 shadow-sm">
            <ContactForm />
          </div>

          <div className="rounded-2xl bg-nexo-black p-8 text-white">
            <h3 className="font-heading text-xl font-semibold">{t('calendlyTitle')}</h3>
            <div className="mt-6">
              {hasCalendly ? (
                <CalendlyButton variant="accent" size="lg" label={t('calendlyCta')} />
              ) : (
                <div className="space-y-4">
                  <p className="text-sm text-white/70">{t('calendlyUnavailable')}</p>
                  <CalendlyButton
                    variant="accent"
                    size="lg"
                    label={t('calendlyCta')}
                    fallbackHref={
                      siteConfig.contactEmail
                        ? `mailto:${siteConfig.contactEmail}`
                        : '#contact'
                    }
                  />
                </div>
              )}
            </div>
            {siteConfig.contactEmail ? (
              <p className="mt-8 text-sm text-white/60">
                <a
                  href={`mailto:${siteConfig.contactEmail}`}
                  className="text-nexo-accent hover:underline"
                >
                  {siteConfig.contactEmail}
                </a>
              </p>
            ) : null}
            {siteConfig.linkedinUrl ? (
              <p className="mt-2 text-sm">
                <a
                  href={siteConfig.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-nexo-accent hover:underline"
                >
                  LinkedIn
                </a>
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
