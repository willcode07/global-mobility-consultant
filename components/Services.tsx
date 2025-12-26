'use client';

import { useTranslations } from 'next-intl';

export default function Services() {
  const t = useTranslations('services');

  const services = [
    {
      key: 'immigration',
      icon: '📋',
    },
    {
      key: 'supplier',
      icon: '🤝',
    },
    {
      key: 'manufacturing',
      icon: '🏭',
    },
    {
      key: 'corporate',
      icon: '💼',
    },
    {
      key: 'cultural',
      icon: '🌉',
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.key}
              className="bg-white p-8 rounded-lg border border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {t(`${service.key}.title`)}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t(`${service.key}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

