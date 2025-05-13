import React from 'react';
import { useTranslation } from 'react-i18next';
import { FAQItem } from './FAQItem';
import { faqData } from './faqData';

export function FAQ() {
  const { t } = useTranslation();

  return (
    <div className="pt-16 sm:pt-24 bg-gradient-to-b from-white to-gray-50" id="faq">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent uppercase">
            {t('faq.title')}
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">{t('faq.subtitle')}</p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="divide-y divide-gray-200 px-2 sm:px-6">
            {faqData.map((faq, index) => (
              <FAQItem key={index} {...faq} />
            ))}
          </div>
        </div>
      </div>
      <div>
        <img src="/images/wave.svg" alt="" />
      </div>
    </div>
  );
}
