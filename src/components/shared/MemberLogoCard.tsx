'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';
import type { MemberBrand } from '@/types';

interface MemberLogoCardProps {
  member: MemberBrand;
  compact?: boolean;
}

/**
 * Member logo plate — full-color brand identity, never grayscale.
 * Compact mode is used inside the infinite marquee track.
 */
export default function MemberLogoCard({
  member,
  compact = false,
}: MemberLogoCardProps) {
  const className = cn(
    'group relative block overflow-hidden rounded-xl',
    'aspect-video flex items-center justify-center shrink-0',
    'bg-gradient-to-b from-[#0c2247]/90 to-[#071733]/95 backdrop-blur-md',
    'border border-sky-400/25 shadow-md shadow-black/40',
    'transition-all duration-300 ease-out',
    'hover:scale-105 hover:border-sky-400/60 hover:shadow-lg hover:shadow-sky-500/20 hover:from-[#102d5c] hover:to-[#091f42]',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60',
    compact
      ? 'p-2 w-[160px] sm:w-[190px] md:w-[220px]'
      : 'p-2.5 sm:p-3'
  );

  const inner = (
    <>
      <div
        className="absolute inset-0 opacity-[0.35] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(56,189,248,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.07) 1px, transparent 1px)',
          backgroundSize: '16px 16px',
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(8,123,235,0.18),transparent_70%)]"
        aria-hidden="true"
      />
      <Image
        src={member.logoUrl}
        alt={`Logo ${member.name}`}
        width={220}
        height={120}
        className="relative z-10 object-contain max-h-[78%] max-w-[90%] w-auto h-auto transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]"
        draggable={false}
      />
    </>
  );

  if (member.websiteUrl) {
    return (
      <a
        href={member.websiteUrl}
        target="_blank"
        rel="noopener noreferrer"
        title={member.name}
        aria-label={`Profil anggota ${member.name}`}
        className={className}
      >
        {inner}
      </a>
    );
  }

  return (
    <div
      title={member.name}
      aria-label={`Profil anggota ${member.name}`}
      className={className}
    >
      {inner}
    </div>
  );
}
