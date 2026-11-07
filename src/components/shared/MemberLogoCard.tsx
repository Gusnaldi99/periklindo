'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'motion/react';
import { cn } from '@/lib/utils';
import type { MemberBrand } from '@/types';

interface MemberLogoCardProps {
  member: MemberBrand;
  compact?: boolean;
}

/**
 * Member logo plate: quiet border hover, no lift/scale costume.
 */
export default function MemberLogoCard({
  member,
  compact = false,
}: MemberLogoCardProps) {
  const shouldReduceMotion = useReducedMotion();

  const className = cn(
    'group relative block aspect-video shrink-0 overflow-hidden rounded-xl border border-slate-200',
    'flex items-center justify-center bg-slate-50',
    'transition-[border-color,box-shadow] duration-200 ease-out',
    'hover:border-slate-300 hover:shadow-sm',
    compact ? 'w-[190px] p-3 sm:w-[220px]' : 'p-4 sm:p-5'
  );

  const inner = (
    <>
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.28]"
        style={{
          backgroundImage:
            'linear-gradient(var(--color-slate-200) 1px, transparent 1px), linear-gradient(90deg, var(--color-slate-200) 1px, transparent 1px)',
          backgroundSize: '18px 18px',
        }}
        aria-hidden="true"
      />
      <Image
        src={member.logoUrl}
        alt={`Logo ${member.name}`}
        width={180}
        height={180}
        className="relative z-10 h-auto max-h-16 w-auto max-w-[85%] max-h-[72%] object-contain sm:max-h-18 md:max-h-20"
      />
    </>
  );

  const hover = shouldReduceMotion ? undefined : { opacity: 0.96 };

  if (member.websiteUrl) {
    return (
      <motion.a
        href={member.websiteUrl}
        target="_blank"
        rel="noopener noreferrer"
        title={member.name}
        aria-label={`Profil anggota ${member.name}`}
        whileHover={hover}
        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className={className}
      >
        {inner}
      </motion.a>
    );
  }

  return (
    <motion.div
      title={member.name}
      aria-label={`Profil anggota ${member.name}`}
      whileHover={hover}
      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {inner}
    </motion.div>
  );
}
