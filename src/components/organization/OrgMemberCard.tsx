'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'motion/react';
import { ShieldCheck, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { OrgMember } from '@/types';

interface OrgMemberCardProps {
  member: OrgMember;
  featured?: boolean;
}

export default function OrgMemberCard({
  member,
  featured = false,
}: OrgMemberCardProps) {
  const shouldReduceMotion = useReducedMotion();

  // Color accents and styles based on role tier
  const getBadgeStyle = () => {
    switch (member.category) {
      case 'chairman':
        return 'bg-gradient-to-r from-blue-700 via-electric to-indigo-700 text-white shadow-md shadow-blue-500/25 ring-1 ring-white/20';
      case 'secretariat':
        return 'bg-navy text-emerald-400 border border-emerald-400/30';
      case 'treasury':
        return 'bg-slate-900 text-sky-300 border border-sky-400/30';
      case 'advisor':
        return 'bg-amber-950 text-amber-300 border border-amber-400/30';
      case 'vice-chairman':
      default:
        return 'bg-blue-900 text-blue-200 border border-blue-400/30';
    }
  };

  return (
    <motion.div
      whileHover={shouldReduceMotion ? undefined : { y: -6, scale: 1.01 }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        'group relative h-full bg-white border rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300',
        featured
          ? 'border-electric/50 shadow-xl shadow-electric/15 ring-2 ring-electric/30 hover:shadow-2xl hover:shadow-electric/25'
          : 'border-slate-200 shadow-sm hover:shadow-xl hover:shadow-electric/10 hover:border-electric/40'
      )}
    >
      <div>
        {/* Photo Container with subtle background pattern */}
        <div
          className={cn(
            'relative w-full overflow-hidden flex items-center justify-center p-4 select-none',
            featured
              ? 'bg-gradient-to-b from-slate-100 via-blue-50/40 to-slate-200/90 h-64 sm:h-72'
              : 'bg-gradient-to-b from-slate-50 to-slate-100/90 h-56 sm:h-60'
          )}
        >
          {/* Subtle circuit dot background watermark */}
          <div
            className="absolute inset-0 opacity-[0.05] pointer-events-none"
            style={{
              backgroundImage:
                'radial-gradient(circle at 1px 1px, #0A192F 1px, transparent 0)',
              backgroundSize: '16px 16px',
            }}
            aria-hidden="true"
          />

          {/* Electric Top Accent line */}
          <div
            className={cn(
              'absolute top-0 inset-x-0 h-1 transition-colors duration-300',
              featured
                ? 'bg-gradient-to-r from-electric via-emerald-400 to-indigo-600'
                : 'bg-gradient-to-r from-transparent via-slate-300 to-transparent group-hover:via-electric'
            )}
          />

          {/* Leader Photo with Micro-Zoom */}
          <div className="relative z-10 w-full h-full flex items-center justify-center">
            <Image
              src={member.photoUrl}
              alt={member.fullName}
              width={220}
              height={220}
              className={cn(
                'max-h-full w-auto object-contain transition-transform duration-300 ease-out group-hover:scale-105 drop-shadow-md',
                featured && 'scale-105 group-hover:scale-110'
              )}
              priority={featured}
            />
          </div>

          {/* Level Tag (Top Left) */}
          <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5">
            <span className="text-[11px] font-bold uppercase tracking-wider bg-white/95 backdrop-blur-sm text-navy px-2.5 py-1 rounded-md border border-slate-200 shadow-xs flex items-center gap-1">
              {featured && <Sparkles className="w-3 h-3 text-amber-500 fill-amber-500" />}
              {member.level}
            </span>
          </div>

          {/* Official Order Number (Top Right) */}
          <div className="absolute top-3 right-3 z-20">
            <span className="text-xs font-black tracking-tight text-slate-400/80 bg-white/80 px-2 py-0.5 rounded-md border border-slate-200/60 font-[family-name:var(--font-heading)]">
              #{String(member.order).padStart(2, '0')}
            </span>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-5 sm:p-6">
          {/* Official English Position from Chart */}
          <div className="mb-3">
            <span
              className={cn(
                'inline-flex items-center gap-1.5 text-[11px] font-extrabold tracking-wider uppercase px-3 py-1.5 rounded-lg',
                getBadgeStyle()
              )}
            >
              <span>{member.positionEn || member.position}</span>
            </span>
          </div>

          {/* Indonesian Title */}
          <p className="text-xs font-semibold text-slate-500 mb-1">
            {member.position}
          </p>

          {/* Official Full Name */}
          <h3
            className={cn(
              'font-bold text-navy group-hover:text-electric transition-colors duration-150 leading-snug mb-3',
              featured ? 'text-xl sm:text-2xl' : 'text-base sm:text-lg'
            )}
          >
            {member.fullName}
          </h3>

          {/* Description of Duties */}
          {member.description && (
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {member.description}
            </p>
          )}
        </div>
      </div>

      {/* Card Footer status with verified badge */}
      <div className="px-5 sm:px-6 py-3.5 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
        <span className="flex items-center gap-1.5 font-medium text-emerald-700">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          <span>Pengurus Terverifikasi</span>
        </span>
        <span className="font-bold text-navy text-[11px] tracking-wider uppercase">
          PERIKLINDO
        </span>
      </div>
    </motion.div>
  );
}
