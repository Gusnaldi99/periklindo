'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { ShieldCheck, Sparkles, X, BadgeCheck } from 'lucide-react';
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
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [isOpen]);

  const getBadgeStyle = () => {
    switch (member.category) {
      case 'pembina':
        return 'bg-amber-950 text-amber-300 border border-amber-400/30';
      case 'pengawas':
        return 'bg-slate-900 text-sky-300 border border-sky-400/30';
      case 'chairman':
        return 'bg-gradient-to-r from-blue-700 via-[#087BEB] to-indigo-700 text-white shadow-md shadow-blue-500/25 ring-1 ring-white/20';
      case 'secretariat':
        return 'bg-navy text-emerald-400 border border-emerald-400/30';
      case 'treasury':
        return 'bg-slate-900 text-teal-300 border border-teal-400/30';
      case 'vice-chairman':
      default:
        return 'bg-blue-900 text-blue-200 border border-blue-400/30';
    }
  };

  return (
    <>
      <motion.button
        type="button"
        onClick={() => setIsOpen(true)}
        whileHover={shouldReduceMotion ? undefined : { y: -6, scale: 1.01 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          'group relative h-full w-full text-left bg-white border rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 cursor-pointer',
          featured
            ? 'border-[#087BEB]/50 shadow-xl shadow-[#087BEB]/15 ring-2 ring-[#087BEB]/30 hover:shadow-2xl'
            : 'border-slate-200 shadow-sm hover:shadow-xl hover:shadow-[#087BEB]/10 hover:border-[#087BEB]/40'
        )}
        aria-label={`Lihat profil ${member.fullName}`}
      >
        <div>
          <div
            className={cn(
              'relative w-full overflow-hidden flex items-center justify-center p-4 select-none',
              featured
                ? 'bg-gradient-to-b from-slate-100 via-blue-50/40 to-slate-200/90 h-64 sm:h-72'
                : 'bg-gradient-to-b from-slate-50 to-slate-100/90 h-56 sm:h-60'
            )}
          >
            <div
              className="absolute inset-0 opacity-[0.05] pointer-events-none"
              style={{
                backgroundImage:
                  'radial-gradient(circle at 1px 1px, #0A192F 1px, transparent 0)',
                backgroundSize: '16px 16px',
              }}
              aria-hidden="true"
            />

            <div
              className={cn(
                'absolute top-0 inset-x-0 h-1 transition-colors duration-300',
                featured
                  ? 'bg-gradient-to-r from-[#087BEB] via-emerald-400 to-indigo-600'
                  : 'bg-gradient-to-r from-transparent via-slate-300 to-transparent group-hover:via-[#087BEB]'
              )}
            />

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

            <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5">
              <span className="text-[11px] font-bold uppercase tracking-wider bg-white/95 backdrop-blur-sm text-navy px-2.5 py-1 rounded-md border border-slate-200 shadow-xs flex items-center gap-1">
                {featured && <Sparkles className="w-3 h-3 text-amber-500 fill-amber-500" />}
                {member.level}
              </span>
            </div>

            <div className="absolute top-3 right-3 z-20">
              <span className="text-xs font-black tracking-tight text-slate-400/80 bg-white/80 px-2 py-0.5 rounded-md border border-slate-200/60">
                #{String(member.order).padStart(2, '0')}
              </span>
            </div>
          </div>

          <div className="p-5 sm:p-6">
            <div className="mb-3">
              <span
                className={cn(
                  'inline-flex items-center gap-1.5 text-[11px] font-extrabold tracking-wide px-3 py-1.5 rounded-lg text-left leading-snug',
                  getBadgeStyle()
                )}
              >
                {member.position}
              </span>
            </div>

            <h3
              className={cn(
                'font-bold text-navy group-hover:text-[#087BEB] transition-colors duration-150 leading-snug mb-3 break-words',
                featured ? 'text-xl sm:text-2xl' : 'text-base sm:text-lg'
              )}
            >
              {member.fullName}
            </h3>

            {member.description && (
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                {member.description}
              </p>
            )}
          </div>
        </div>

        <div className="px-5 sm:px-6 py-3.5 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <span className="flex items-center gap-1.5 font-medium text-emerald-700">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Pengurus Terverifikasi</span>
          </span>
          <span className="font-bold text-navy text-[11px] tracking-wider uppercase">
            Periode 2026–2031
          </span>
        </div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[80] flex items-end sm:items-center justify-center p-0 sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <button
              type="button"
              className="absolute inset-0 bg-[#06152F]/75 backdrop-blur-sm"
              aria-label="Tutup detail pengurus"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby={`org-member-${member.id}-title`}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 w-full sm:max-w-2xl max-h-[92vh] overflow-y-auto rounded-t-3xl sm:rounded-3xl bg-white border border-slate-200 shadow-2xl"
            >
              <div className="sticky top-0 z-20 flex items-center justify-between gap-3 px-5 py-4 bg-white/95 backdrop-blur-md border-b border-slate-100">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-700">
                  <BadgeCheck className="w-4 h-4" />
                  <span>Profil Resmi Pengurus</span>
                </div>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="w-10 h-10 rounded-full border border-slate-200 bg-slate-50 hover:bg-slate-100 flex items-center justify-center transition-colors"
                  aria-label="Tutup"
                >
                  <X className="w-5 h-5 text-slate-600" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-5 gap-0">
                <div className="sm:col-span-2 bg-gradient-to-b from-slate-50 to-slate-100 flex items-center justify-center p-6 min-h-[240px]">
                  <Image
                    src={member.photoUrl}
                    alt={member.fullName}
                    width={280}
                    height={320}
                    className="max-h-72 w-auto object-contain drop-shadow-lg"
                  />
                </div>

                <div className="sm:col-span-3 p-6 sm:p-8">
                  <span
                    className={cn(
                      'inline-flex text-[11px] font-extrabold tracking-wide px-3 py-1.5 rounded-lg mb-3 leading-snug',
                      getBadgeStyle()
                    )}
                  >
                    {member.position}
                  </span>

                  <h3
                    id={`org-member-${member.id}-title`}
                    className="text-xl sm:text-2xl font-bold text-navy leading-snug break-words mb-2"
                  >
                    {member.fullName}
                  </h3>

                  <p className="text-sm font-semibold text-[#087BEB] mb-1">{member.level}</p>
                  <p className="text-xs text-slate-500 mb-5">Kepengurusan Periode 2026–2031</p>

                  {member.description && (
                    <p className="text-sm text-slate-600 leading-relaxed">{member.description}</p>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
