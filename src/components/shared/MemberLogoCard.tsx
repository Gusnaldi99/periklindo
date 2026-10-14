import Image from 'next/image';
import type { MemberBrand } from '@/types';

interface MemberLogoCardProps {
  member: MemberBrand;
  compact?: boolean;
}

/**
 * Member logo card styled per DESIGN_v2.md section 3.1:
 * - 16:9 ratio, white background, subtle border
 * - Hover: smooth -translate-y-1 elevation, shadow lift + blue border accent (MOTION 2)
 * - Scale transition on hover with smooth cubic bezier
 */
export default function MemberLogoCard({
  member,
  compact = false,
}: MemberLogoCardProps) {
  const Wrapper = member.websiteUrl ? 'a' : 'div';
  const wrapperProps = member.websiteUrl
    ? {
        href: member.websiteUrl,
        target: '_blank' as const,
        rel: 'noopener noreferrer',
      }
    : {};

  return (
    <Wrapper
      {...wrapperProps}
      title={member.name}
      aria-label={`Profil anggota ${member.name}`}
      className={`group block bg-white border border-slate-200 rounded-xl overflow-hidden
        aspect-video flex items-center justify-center shrink-0
        ${compact ? 'p-3 w-[190px] sm:w-[220px]' : 'p-4 sm:p-5'}
        hover:shadow-lg hover:border-electric/50 hover:-translate-y-1
        transition-all duration-200 ease-out`}
    >
      <Image
        src={member.logoUrl}
        alt={`Logo ${member.name}`}
        width={180}
        height={180}
        className="object-contain max-h-16 sm:max-h-18 md:max-h-20 max-w-[85%] max-h-[82%] w-auto h-auto
          group-hover:scale-105 transition-transform duration-200 ease-out"
      />
    </Wrapper>
  );
}
