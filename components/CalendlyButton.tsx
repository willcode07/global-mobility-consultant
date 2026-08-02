'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { X } from 'lucide-react';
import Button from './Button';
import { siteConfig } from '@/lib/site';

type CalendlyButtonProps = {
  variant?: 'primary' | 'secondary' | 'ghost' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  pill?: boolean;
  label?: string;
  className?: string;
  fallbackHref?: string;
};

export default function CalendlyButton({
  variant = 'primary',
  size = 'lg',
  pill = false,
  label,
  className,
  fallbackHref,
}: CalendlyButtonProps) {
  const t = useTranslations();
  const [open, setOpen] = useState(false);
  const url = siteConfig.calendlyUrl;
  const email = siteConfig.contactEmail;

  const buttonLabel = label || t('hero.ctaPrimary');

  if (!url) {
    const href =
      fallbackHref ||
      (email ? `mailto:${email}?subject=Discovery%20Call` : '/contact');

    return (
      <Button href={href} variant={variant} size={size} pill={pill} className={className}>
        {buttonLabel}
      </Button>
    );
  }

  return (
    <>
      <Button
        variant={variant}
        size={size}
        pill={pill}
        className={className}
        onClick={() => setOpen(true)}
      >
        {buttonLabel}
      </Button>

      {open ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-nexo-black/60 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Calendly"
        >
          <div className="relative h-[90vh] w-full max-w-4xl overflow-hidden rounded-2xl bg-white shadow-2xl">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white text-nexo-gray shadow-md hover:text-nexo-black"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
            <iframe
              src={url}
              title="Calendly"
              className="h-full w-full border-0"
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
