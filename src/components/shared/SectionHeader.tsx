interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

/**
 * Consistent section title treatment.
 * Uses Plus Jakarta Sans heading font with navy color.
 * Left or center align based on section context.
 */
export default function SectionHeader({
  title,
  subtitle,
  align = 'left',
}: SectionHeaderProps) {
  return (
    <div className={align === 'center' ? 'text-center' : ''}>
      <h2 className="text-2xl md:text-3xl font-bold mb-2">{title}</h2>
      {subtitle && (
        <p className="text-slate-500 text-base md:text-lg max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
