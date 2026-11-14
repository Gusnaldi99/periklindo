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
    'bg-white border border-white/20',
    'shadow-sm shadow-black/10',
    'transition-all duration-300 ease-out',
    'hover:scale-105 hover:border-[#087BEB]/50 hover:shadow-md hover:shadow-[#087BEB]/15',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087BEB]/60',
    compact
      ? 'p-3 w-[160px] sm:w-[190px] md:w-[220px]'
      : 'p-4 sm:p-5'
  );

  const inner = (
    <>
      <div
        className="absolute inset-0 opacity-[0.2] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(#e2e8f0 1px, transparent 1px), linear-gradient(90deg, #e2e8f0 1px, transparent 1px)',
          backgroundSize: '18px 18px',
        }}
        aria-hidden="true"
      />
      <Image
        src={member.logoUrl}
        alt={`Logo ${member.name}`}
        width={180}
        height={180}
        className="relative z-10 object-contain max-h-14 sm:max-h-16 md:max-h-20 max-w-[85%] w-auto h-auto"
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
