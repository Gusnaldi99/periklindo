import Image from 'next/image';
import type { OrgMember } from '@/types';

interface OrgMemberCardProps {
  member: OrgMember;
  featured?: boolean;
}

export default function OrgMemberCard({
  member,
  featured = false,
}: OrgMemberCardProps) {
  // Color accents based on role tier
  const getBadgeStyle = () => {
    switch (member.category) {
      case 'chairman':
        return 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/20';
      case 'secretariat':
        return 'bg-blue-600 text-white';
      case 'treasury':
        return 'bg-indigo-600 text-white';
      case 'advisor':
        return 'bg-slate-800 text-amber-300 border border-amber-400/30';
      case 'vice-chairman':
      default:
        return 'bg-electric text-white';
    }
  };

  return (
    <div
      className={`group relative h-full bg-white border rounded-2xl overflow-hidden transition-all duration-300 ease-out flex flex-col justify-between ${
        featured
          ? 'border-electric/50 shadow-xl shadow-electric/10 ring-1 ring-electric/30 hover:shadow-2xl hover:border-electric hover:-translate-y-1.5'
          : 'border-slate-200 shadow-sm hover:shadow-xl hover:border-electric/40 hover:-translate-y-1.5'
      }`}
    >
      <div>
        {/* Photo Container with subtle background pattern */}
        <div
          className={`relative w-full overflow-hidden flex items-center justify-center p-4 ${
            featured
              ? 'bg-gradient-to-b from-slate-100 to-slate-200/90 h-64'
              : 'bg-gradient-to-b from-slate-50 to-slate-100 h-56'
          }`}
        >
          {/* Subtle watermark background */}
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage:
                'radial-gradient(circle at 1px 1px, #0A192F 1px, transparent 0)',
              backgroundSize: '16px 16px',
            }}
            aria-hidden="true"
          />

          {/* Leader Photo */}
          <div className="relative z-10 w-full h-full flex items-center justify-center">
            <Image
              src={member.photoUrl}
              alt={member.fullName}
              width={180}
              height={180}
              className={`max-h-full w-auto object-contain transition-transform duration-300 ease-out group-hover:scale-105 drop-shadow-md ${
                featured ? 'scale-105' : ''
              }`}
            />
          </div>

          {/* Level Tag (Top Left) */}
          <div className="absolute top-3 left-3 z-20">
            <span className="text-[11px] font-bold uppercase tracking-wider bg-white/90 backdrop-blur-sm text-navy px-2.5 py-1 rounded-md border border-slate-200 shadow-xs">
              {member.level}
            </span>
          </div>

          {/* Official Order Number (Top Right) */}
          <div className="absolute top-3 right-3 z-20">
            <span className="text-xs font-extrabold text-slate-400/80 font-[family-name:var(--font-heading)]">
              #{String(member.order).padStart(2, '0')}
            </span>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-5 sm:p-6">
          {/* Official English Position from Chart */}
          <div className="mb-3">
            <span
              className={`inline-block text-[11px] font-extrabold tracking-wide uppercase px-3 py-1.5 rounded-lg ${getBadgeStyle()}`}
            >
              {member.positionEn || member.position}
            </span>
          </div>

          {/* Indonesian Title */}
          <p className="text-xs font-semibold text-slate-500 mb-1">
            {member.position}
          </p>

          {/* Official Full Name */}
          <h3
            className={`font-bold text-navy group-hover:text-electric transition-colors duration-150 leading-snug mb-3 ${
              featured ? 'text-xl sm:text-2xl' : 'text-base sm:text-lg'
            }`}
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

      {/* Card Footer status */}
      <div className="px-5 sm:px-6 py-3.5 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-500" aria-hidden="true" />
          <span>Pengurus Resmi</span>
        </span>
        <span className="font-medium text-navy text-[11px]">
          PERIKLINDO
        </span>
      </div>
    </div>
  );
}
