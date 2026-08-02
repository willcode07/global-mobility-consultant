'use client';

import { FormEvent, useState } from 'react';
import { useTranslations } from 'next-intl';
import Button from './Button';
import { siteConfig } from '@/lib/site';

type Status = 'idle' | 'sending' | 'success' | 'error';

export default function ContactForm() {
  const t = useTranslations('contact.form');
  const [status, setStatus] = useState<Status>('idle');

  const portalId = siteConfig.hubspotPortalId;
  const formId = siteConfig.hubspotFormId;
  const email = siteConfig.contactEmail;

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get('name') || ''),
      email: String(data.get('email') || ''),
      company: String(data.get('company') || ''),
      message: String(data.get('message') || ''),
    };

    setStatus('sending');

    if (portalId && formId) {
      try {
        const res = await fetch(
          `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              fields: [
                { name: 'fullname', value: payload.name },
                { name: 'email', value: payload.email },
                { name: 'company', value: payload.company },
                { name: 'message', value: payload.message },
              ],
              context: {
                pageUri: typeof window !== 'undefined' ? window.location.href : '',
                pageName: 'Nexo Mobility Contact',
              },
            }),
          }
        );
        if (!res.ok) throw new Error('HubSpot error');
        setStatus('success');
        form.reset();
        return;
      } catch {
        setStatus('error');
        return;
      }
    }

    if (email) {
      const subject = encodeURIComponent(`Nexo Mobility — ${payload.company || payload.name}`);
      const body = encodeURIComponent(
        `${payload.message}\n\n—\n${payload.name}\n${payload.email}\n${payload.company}`
      );
      window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
      setStatus('success');
      return;
    }

    // Demo fallback when no integrations configured
    setStatus('success');
    form.reset();
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-nexo-black">
          {t('name')}
        </label>
        <input
          id="name"
          name="name"
          required
          className="w-full rounded-lg border border-nexo-light bg-white px-4 py-3 text-sm outline-none ring-nexo-purple focus:ring-2"
        />
      </div>
      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-nexo-black">
          {t('email')}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full rounded-lg border border-nexo-light bg-white px-4 py-3 text-sm outline-none ring-nexo-purple focus:ring-2"
        />
      </div>
      <div>
        <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-nexo-black">
          {t('company')}
        </label>
        <input
          id="company"
          name="company"
          className="w-full rounded-lg border border-nexo-light bg-white px-4 py-3 text-sm outline-none ring-nexo-purple focus:ring-2"
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-nexo-black">
          {t('message')}
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full rounded-lg border border-nexo-light bg-white px-4 py-3 text-sm outline-none ring-nexo-purple focus:ring-2"
        />
      </div>

      <Button type="submit" variant="primary" size="lg" disabled={status === 'sending'} className="w-full sm:w-auto">
        {status === 'sending' ? t('sending') : t('submit')}
      </Button>

      {status === 'success' ? (
        <p className="text-sm text-nexo-accent-dark">{t('success')}</p>
      ) : null}
      {status === 'error' ? (
        <p className="text-sm text-red-600">
          {t('error')}
          {email ? (
            <>
              {' '}
              <a className="underline" href={`mailto:${email}`}>
                {t('mailtoHint')}
              </a>
            </>
          ) : null}
        </p>
      ) : null}
    </form>
  );
}
