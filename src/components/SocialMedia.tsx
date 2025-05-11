import React from 'react';
import { SocialIcon } from './SocialIcon';

type SocialPlatform = 'telegram' | 'discord' | 'twitter' | 'github' | 'wechat' | 'bilibili';

interface SocialLink {
  platform: SocialPlatform;
  url: string;
  label: string;
}

export function SocialMedia() {
  const socialLinks: SocialLink[] = [
    { platform: 'telegram', url: 'https://t.me/rebasenetwork', label: 'Join our Telegram group' },
    { platform: 'discord', url: 'https://discord.gg/9BATkxjfXS', label: 'Join our Discord server' },
    { platform: 'twitter', url: 'https://x.com/RebaseCommunity', label: 'Follow us on Twitter' },
    { platform: 'github', url: 'https://github.com/rebase-network', label: 'Check our GitHub' },
    { platform: 'wechat', url: 'rebase_network', label: 'Follow our WeChat: rebase_network' },
    {
      platform: 'bilibili',
      url: 'https://space.bilibili.com/382886213',
      label: 'Follow us on Bilibili',
    },
  ];

  const handleWeChatClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    alert('WeChat Official Account: rebase_network');
  };

  return (
    <div className="flex flex-nowrap justify-end gap-6">
      {socialLinks.map((link) => (
        <a
          key={link.platform}
          href={link.url}
          className="text-gray-400 hover:text-white transition-colors"
          aria-label={link.label}
          target="_blank"
          rel="noopener noreferrer"
          onClick={link.platform === 'wechat' ? handleWeChatClick : undefined}
        >
          <SocialIcon platform={link.platform} />
        </a>
      ))}
    </div>
  );
}
