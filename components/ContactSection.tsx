'use client';

import { useTranslations } from 'next-intl';
import ContactForm from './ContactForm';
import { siteConfig } from '@/lib/site';

export default function ContactSection() {
  const t = useTranslations('contact');

  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-nexo-lavender/40 to-white py-20 lg:py-24"
    >
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-nexo-black md:text-4xl">
            {t('title')}
          </h2>
          <p className="mt-4 text-lg text-nexo-gray">{t('subtitle')}</p>
          <p className="mt-2 text-sm font-medium text-nexo-purple">{t('locations')}</p>
        </div>

        <div className="mx-auto mt-12 max-w-xl rounded-2xl border border-nexo-light bg-white p-8 shadow-sm">
          <ContactForm />
          {(siteConfig.contactEmail || siteConfig.linkedinUrl) && (
            <div className="mt-8 border-t border-nexo-light pt-6 text-center text-sm text-nexo-gray">
              {siteConfig.contactEmail ? (
                <p>
                  <a
                    href={`mailto:${siteConfig.contactEmail}`}
                    className="font-medium text-nexo-purple hover:underline"
                  >
                    {siteConfig.contactEmail}
                  </a>
                </p>
              ) : null}
              {siteConfig.linkedinUrl ? (
                <p className="mt-2">
                  <a
                    href={siteConfig.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-nexo-purple hover:underline"
                  >
                    LinkedIn
                  </a>
                </p>
              ) : null}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
