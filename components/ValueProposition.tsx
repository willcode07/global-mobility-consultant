'use client';

import { useTranslations } from 'next-intl';

export default function ValueProposition() {
  const t = useTranslations('value');

  const values = [
    {
      key: 'catalan',
      icon: '🇪🇸',
    },
    {
      key: 'network',
      icon: '🌐',
    },
    {
      key: 'efficiency',
      icon: '⚡',
    },
    {
      key: 'expertise',
      icon: '🎯',
    },
  ];

  return (
    <section id="value" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('title')}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value) => (
            <div
              key={value.key}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-start">
                <div className="text-4xl mr-4">{value.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {t(`${value.key}.title`)}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {t(`${value.key}.description`)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

