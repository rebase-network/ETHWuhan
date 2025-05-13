import React from 'react';
import { useTranslation } from 'react-i18next';

interface HostType {
  name: string;
  role: string;
  logo: string;
}

const hosts: HostType[] = [
  {
    name: 'Rebase Community',
    role: 'hosts.roles.mainOrganizer',
    logo: '/logos/hosts/rebase.svg',
  },
  {
    name: 'WHU Web3 Club',
    role: 'hosts.roles.coOrganizer',
    logo: '/logos/hosts/whu-web3.svg',
  },
];

export function Hosts() {
  const { t } = useTranslation();

  return (
    <div className="py-16 sm:py-24 bg-[url('/images/ball.svg')] bg-no-repeat bg-center bg-cover">
      <div className="w-full px-2 sm:container sm:mx-auto sm:px-4">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent uppercase">
            {t('hosts.title')}
          </h2>
          <p className="text-gray-600">{t('hosts.subtitle')}</p>
        </div>

        <div className="max-w-[280px] sm:max-w-2xl mx-auto">
          <div className="grid md:grid-cols-2 gap-4 sm:gap-8 justify-items-center">
            {hosts.map((host, index) => (
              <div
                key={index}
                className="w-full max-w-xs flex flex-col items-center p-4 sm:p-6 bg-white rounded-lg sm:rounded-xl border border-gray-100 hover:shadow-md transition-all duration-300"
              >
                <div className="w-40 h-40 mb-4 p-4">
                  <img
                    src={host.logo}
                    alt={`${host.name} logo`}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{host.name}</h3>
                <p className="text-purple-600">{t(host.role)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
