import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { EthWuhanLogo } from '../logo/EthWuhanLogo';
import { LanguageSwitcher } from '../LanguageSwitcher';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

  // Updated order: Schedule, Sponsors, FAQ
  const menuItems = [
    { key: 'schedule', label: t('schedule.title') },
    { key: 'sponsors', label: t('sponsors.title') },
    { key: 'faq', label: t('faq.title') },
  ];

  return (
    <nav className="fixed w-full z-50 bg-opacity-90 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-3 sm:py-4">
        <div className="flex justify-between items-center">
          <a href="/" className="flex items-center gap-2 text-white">
            <EthWuhanLogo className="w-8 h-8" />
            <span className="text-lg sm:text-xl font-bold">{t('hero.title')}</span>
          </a>

          <div className="flex items-center gap-4">
            {/* Desktop menu */}
            <div className="hidden lg:flex items-center space-x-8">
              {menuItems.map((item) => (
                <a
                  key={item.key}
                  href={`#${item.key}`}
                  className="text-gray-300 hover:text-white transition-colors text-base"
                >
                  {item.label}
                </a>
              ))}
              <LanguageSwitcher />
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center gap-4">
              <LanguageSwitcher />
              <button
                className="text-white p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden ${isMenuOpen ? 'max-h-48' : 'max-h-0'} overflow-hidden transition-all duration-300`}
        >
          <div className="flex flex-col space-y-4 py-4">
            {menuItems.map((item) => (
              <a
                key={item.key}
                href={`#${item.key}`}
                className="text-gray-300 hover:text-white transition-colors text-lg px-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
