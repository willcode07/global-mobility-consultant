'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';

interface CalendlyButtonProps {
  variant?: 'default' | 'light';
}

export default function CalendlyButton({ variant = 'default' }: CalendlyButtonProps) {
  const t = useTranslations('hero');
  const [showCalendly, setShowCalendly] = useState(false);

  // Replace with your actual Calendly URL
  const calendlyUrl = 'https://calendly.com/your-username';

  const buttonClasses = variant === 'light'
    ? 'bg-white text-primary-600 hover:bg-primary-50 border-2 border-white'
    : 'bg-primary-600 text-white hover:bg-primary-700';

  return (
    <>
      <button
        onClick={() => setShowCalendly(true)}
        className={`px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 ${buttonClasses}`}
      >
        {t('cta')}
      </button>
      {showCalendly && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="bg-white rounded-lg w-full max-w-4xl h-[90vh] relative">
            <button
              onClick={() => setShowCalendly(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold z-10 bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-md"
            >
              ×
            </button>
            <iframe
              src={calendlyUrl}
              width="100%"
              height="100%"
              frameBorder="0"
              className="rounded-lg"
              title="Calendly Scheduling"
            />
          </div>
        </div>
      )}
    </>
  );
}

