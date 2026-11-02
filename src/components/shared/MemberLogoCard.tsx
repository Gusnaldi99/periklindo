'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'motion/react';
import { cn } from '@/lib/utils';
import type { MemberBrand } from '@/types';

interface MemberLogoCardProps {
  member: MemberBrand;
  compact?: boolean;
}

const CATEGORY_LABEL: Record<MemberBrand['category'], string> = {
  'Roda 4': 'Roda 4',
  'Roda 2': 'Roda 2',
  'Komponen & Baterai': 'Baterai',
  Infrastruktur: 'SPKLU',
};

/**
 * Member logo card styled per DESIGN_v2.md section 3.1:
 * - 16:9 ratio, high-contrast plate so transparent logos stay readable
 * - Category micro-label at the bottom corner
 * - Hover physics via motion spring
 */
export default function MemberLogoCard({
  member,
  compact = false,
}: MemberLogoCardProps) {
  const shouldReduceMotion = useReducedMotion();
  const categoryLabel = CATEGORY_LABEL[member.category];

  const className = cn(
    'group relative block overflow-hidden rounded-xl border border-slate-200',
    'aspect-video flex items-center justify-center shrink-0',
    'bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_55%,#eef2f7_100%)]',
    'shadow-sm shadow-slate-200/70',
    compact ? 'p-3 pb-7 w-[190px] sm:w-[220px]' : 'p-4 sm:p-5 pb-8'
  );

  const inner = (
    <>
      <div
        className="absolute inset-0 opacity-[0.35] pointer-events-none"
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
        className="relative z-10 object-contain max-h-16 sm:max-h-18 md:max-h-20 max-w-[85%] max-h-[72%] w-auto h-auto drop-shadow-[0_1px_1px_rgba(15,23,42,0.08)]"
      />
      <span className="absolute bottom-2 left-2 z-10 text-[9px] font-bold uppercase tracking-wider text-slate-600 bg-white/90 border border-slate-200 px-1.5 py-0.5 rounded">
        {categoryLabel}
      </span>
    </>
  );

  const hover = shouldReduceMotion ? undefined : { y: -4, scale: 1.02 };

  if (member.websiteUrl) {
    return (
      <motion.a
        href={member.websiteUrl}
        target="_blank"
        rel="noopener noreferrer"
        title={member.name}
        aria-label={`Profil anggota ${member.name}`}
        whileHover={hover}
        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
        className={cn(className, 'hover:shadow-lg hover:shadow-slate-200/80 hover:border-electric/40')}
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
      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
      className={cn(className, 'hover:shadow-lg hover:shadow-slate-200/80 hover:border-electric/40')}
    >
      {inner}
    </motion.div>
  );
}
