import Image from 'next/image';
import Link from 'next/link';
import type { NewsPost } from '@/types';

interface NewsCardProps {
  post: NewsPost;
  variant?: 'default' | 'featured';
}

function formatNewsDate(isoDate: string) {
  return new Date(isoDate).toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

function PlayOverlay() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-navy/25 group-hover:bg-navy/40 transition-colors duration-200">
      <span
        className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-electric shadow-lg group-hover:scale-105 transition-transform duration-200"
        aria-hidden="true"
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6 ml-0.5 fill-current">
          <path d="M8 5v14l11-7z" />
        </svg>
      </span>
    </div>
  );
}

export default function NewsCard({ post, variant = 'default' }: NewsCardProps) {
  const formattedDate = formatNewsDate(post.publishedAt);
  const isExternal = Boolean(post.externalUrl);
  const isVideo = post.mediaType === 'video';
  const href = post.externalUrl ?? `/berita/${post.slug}`;
  const badgeLabel = post.sourceName ?? post.category;
  const ctaLabel = isVideo
    ? `Tonton di ${post.sourceName ?? 'YouTube'}`
    : `Baca di ${post.sourceName ?? 'sumber'}`;
  const className =
    variant === 'featured'
      ? `group grid md:grid-cols-2 h-full bg-white border border-slate-200 rounded-xl overflow-hidden
        hover:shadow-xl hover:border-slate-300 hover:-translate-y-1.5
        transition-all duration-200 ease-out`
      : `group block h-full bg-white border border-slate-200 rounded-xl overflow-hidden
        hover:shadow-xl hover:border-slate-300 hover:-translate-y-1.5
        transition-all duration-200 ease-out`;

  const body =
    variant === 'featured' ? (
      <>
        <div className="relative aspect-video md:aspect-auto md:h-full md:min-h-[280px] overflow-hidden bg-slate-100">
          <Image
            src={post.thumbnailUrl}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover group-hover:scale-105 transition-transform duration-300 ease-out"
          />
        </div>

        <div className="p-6 lg:p-8 flex flex-col justify-center">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="inline-block text-xs font-semibold text-electric bg-electric/10 px-2.5 py-1 rounded-md">
              {post.category}
            </span>
            <span className="inline-block text-xs font-semibold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-md">
              {badgeLabel}
            </span>
          </div>

          <p className="text-xs text-slate-400 mb-2 font-medium">{formattedDate}</p>

          <h3 className="text-xl lg:text-2xl font-bold text-navy leading-snug mb-3 group-hover:text-electric transition-colors duration-150">
            {post.title}
          </h3>

          <p className="text-sm md:text-base text-slate-500 leading-relaxed line-clamp-3 mb-5">
            {post.excerpt}
          </p>

          <span className="inline-flex items-center text-sm font-semibold text-electric">
            {ctaLabel} &rarr;
          </span>
        </div>
      </>
    ) : (
      <>
        <div className="relative aspect-video overflow-hidden bg-slate-100">
          <Image
            src={post.thumbnailUrl}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-300 ease-out"
          />
          {isVideo ? <PlayOverlay /> : null}
        </div>

        <div className="p-5 lg:p-6 flex flex-col justify-between">
          <div>
            <span className="inline-block text-xs font-semibold text-electric bg-electric/10 px-2.5 py-1 rounded-md mb-3">
              {badgeLabel}
            </span>

            <p className="text-xs text-slate-400 mb-2 font-medium">{formattedDate}</p>

            <h3 className="text-base font-bold text-navy leading-snug line-clamp-2 mb-2 group-hover:text-electric transition-colors duration-150">
              {post.title}
            </h3>

            <p className="text-sm text-slate-500 leading-relaxed line-clamp-2">
              {post.excerpt}
            </p>
          </div>
        </div>
      </>
    );

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${post.title}. ${ctaLabel}, buka di tab baru`}
        className={className}
      >
        {body}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {body}
    </Link>
  );
}
