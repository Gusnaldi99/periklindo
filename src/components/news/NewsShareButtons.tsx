'use client';

import { useEffect, useState } from 'react';
import { MessageCircle, Share2 } from 'lucide-react';

interface NewsShareButtonsProps {
  title: string;
  slug: string;
  excerpt: string;
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.727-8.894L1.254 2.25H8.08l4.259 5.686L18.244 2.25Zm-1.161 17.52h1.833L7.084 4.126H5.117l11.966 15.644Z" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function NewsShareButtons({ title, slug, excerpt }: NewsShareButtonsProps) {
  const path = `/berita/${slug}`;
  const [absoluteUrl, setAbsoluteUrl] = useState(path);

  useEffect(() => {
    setAbsoluteUrl(`${window.location.origin}${path}`);
  }, [path]);

  const shareText = `${title} — ${excerpt}`;

  const links = [
    {
      label: 'WhatsApp',
      href: `https://wa.me/?text=${encodeURIComponent(`${title}\n${absoluteUrl}`)}`,
      icon: MessageCircle,
      className: 'hover:border-teal/40 hover:text-teal',
    },
    {
      label: 'LinkedIn',
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(absoluteUrl)}`,
      icon: LinkedInIcon,
      className: 'hover:border-electric/40 hover:text-electric',
    },
    {
      label: 'X',
      href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(absoluteUrl)}`,
      icon: XIcon,
      className: 'hover:border-slate-400 hover:text-navy',
    },
  ];

  return (
    <div className="flex flex-wrap items-center gap-3">
      <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-500">
        <Share2 className="w-3.5 h-3.5" />
        Bagikan
      </span>
      {links.map((link) => {
        const Icon = link.icon;
        return (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border border-slate-200 bg-white text-sm font-semibold text-slate-600 min-h-[40px] transition-colors ${link.className}`}
          >
            <Icon className="w-4 h-4" />
            {link.label}
          </a>
        );
      })}
    </div>
  );
}
