'use client';

import Image from 'next/image';
import { ShieldCheck } from 'lucide-react';
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
  const getBadgeStyle = () => {
    switch (member.category) {
      case 'chairman':
        return 'bg-navy text-white';
      case 'secretariat':
        return 'bg-navy text-teal';
      case 'treasury':
        return 'bg-slate-900 text-slate-200';
      case 'advisor':
        return 'bg-slate-800 text-slate-200';
      case 'vice-chairman':
      default:
        return 'bg-navy-light text-slate-200';
    }
  };

  return (
    <article
      className={cn(
        'group relative flex h-full flex-col justify-between overflow-hidden border bg-white',
        featured
          ? 'border-electric/40 ring-1 ring-electric/20'
          : 'border-slate-200'
      )}
    >
      <div>
        <div
          className={cn(
            'relative flex w-full select-none items-center justify-center overflow-hidden p-4',
            featured ? 'h-64 bg-slate-100 sm:h-72' : 'h-56 bg-slate-50 sm:h-60'
          )}
        >
          <div
            className={cn(
              'absolute inset-x-0 top-0 h-0.5',
              featured ? 'bg-electric' : 'bg-slate-200'
            )}
            aria-hidden="true"
          />

          <div className="relative z-10 flex h-full w-full items-center justify-center">
            <Image
              src={member.photoUrl}
              alt={member.fullName}
              width={220}
              height={220}
              className={cn(
                'max-h-full w-auto object-contain',
                featured && 'scale-105'
              )}
              priority={featured}
            />
          </div>

          <div className="absolute top-3 left-3 z-20">
            <span className="border border-slate-200 bg-white/95 px-2.5 py-1 font-[family-name:var(--font-body)] text-[11px] font-medium text-navy">
              {member.level}
            </span>
          </div>

          <div className="absolute top-3 right-3 z-20">
            <span className="border border-slate-200/60 bg-white/80 px-2 py-0.5 font-[family-name:var(--font-heading)] text-xs font-semibold tracking-tight text-slate-400">
              #{String(member.order).padStart(2, '0')}
            </span>
          </div>
        </div>

        <div className="p-5 sm:p-6">
          <div className="mb-3">
            <span
              className={cn(
                'inline-flex items-center px-2.5 py-1 font-[family-name:var(--font-body)] text-[11px] font-semibold',
                getBadgeStyle()
              )}
            >
              <span>{member.positionEn || member.position}</span>
            </span>
          </div>

          <p className="mb-1 font-[family-name:var(--font-body)] text-xs font-medium text-slate-500">
            {member.position}
          </p>

          <h3
            className={cn(
              'mb-3 font-[family-name:var(--font-heading)] font-semibold leading-snug text-navy',
              featured ? 'text-xl sm:text-2xl' : 'text-base sm:text-lg'
            )}
          >
            {member.fullName}
          </h3>

          {member.description && (
            <p className="font-[family-name:var(--font-body)] text-xs leading-relaxed text-slate-600 sm:text-sm">
              {member.description}
            </p>
          )}
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-slate-100 bg-slate-50/80 px-5 py-3.5 font-[family-name:var(--font-body)] text-xs text-slate-600 sm:px-6">
        <span className="flex items-center gap-1.5 font-medium text-slate-700">
          <ShieldCheck className="h-3.5 w-3.5 text-teal" aria-hidden="true" />
          <span>Pengurus Terverifikasi</span>
        </span>
        <span className="text-[11px] font-semibold text-navy">PERIKLINDO</span>
      </div>
    </article>
  );
}
