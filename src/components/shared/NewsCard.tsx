import Image from 'next/image';
import Link from 'next/link';
import { Clock, Play } from 'lucide-react';
import { estimateReadMinutes, formatDateId } from '@/lib/content';
import { cn } from '@/lib/utils';
import type { NewsPost } from '@/types';

interface NewsCardProps {
  post: NewsPost;
  variant?: 'default' | 'featured';
  preferInternal?: boolean;
}

function PlayOverlay() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-navy/25 transition-colors duration-200 group-hover:bg-navy/40">
      <span
        className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-electric shadow-md"
        aria-hidden="true"
      >
        <Play className="h-6 w-6 ml-0.5 fill-current" />
      </span>
    </div>
  );
}

export default function NewsCard({
  post,
  variant = 'default',
  preferInternal = false,
}: NewsCardProps) {
  const formattedDate = formatDateId(post.publishedAt);
  const isExternal = !preferInternal && Boolean(post.externalUrl);
  const isVideo = post.mediaType === 'video';
  const href = isExternal ? (post.externalUrl as string) : `/berita/${post.slug}`;
  const readMinutes = estimateReadMinutes(post);
  const ctaLabel = preferInternal
    ? 'Baca selengkapnya'
    : isVideo
      ? `Tonton di ${post.sourceName ?? 'YouTube'}`
      : `Baca di ${post.sourceName ?? 'sumber'}`;
  const className = cn(
    'group flex h-full min-w-0 flex-col overflow-hidden border border-slate-200 bg-white',
    'transition-[border-color,box-shadow,opacity] duration-200 ease-out',
    'hover:border-slate-300 hover:shadow-sm active:opacity-90',
    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric',
    variant === 'featured' ? 'md:grid md:grid-cols-2' : ''
  );

  const body =
    variant === 'featured' ? (
      <>
        <div className="relative aspect-video overflow-hidden bg-slate-100 md:aspect-auto md:h-full md:min-h-[280px]">
          <Image
            src={post.thumbnailUrl}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col justify-center p-6 lg:p-8">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span className="inline-block rounded-md bg-electric px-2.5 py-1 text-xs font-semibold text-white">
              {post.category}
            </span>
            {post.sourceName ? (
              <span className="inline-block rounded-md bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600">
                {post.sourceName}
              </span>
            ) : null}
            <span className="inline-flex items-center gap-1 text-xs font-medium text-slate-600">
              <Clock className="h-3.5 w-3.5" aria-hidden="true" />
              {readMinutes} mnt baca
            </span>
          </div>

          <p className="mb-2 text-xs font-medium text-slate-600">{formattedDate}</p>

          <h3 className="mb-3 line-clamp-2 text-xl font-semibold leading-snug text-navy transition-[color] duration-150 group-hover:text-electric lg:text-2xl">
            {post.title}
          </h3>

          <p className="mb-5 line-clamp-3 text-sm leading-relaxed text-slate-600 md:text-base">
            {post.excerpt}
          </p>

          <span className="inline-flex items-center text-sm font-semibold text-electric">
            {ctaLabel}
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
            className="object-cover"
          />
          {isVideo ? <PlayOverlay /> : null}
        </div>

        <div className="flex flex-col justify-between gap-3 p-5 pb-6 lg:p-6 lg:pb-7">
          <div className="min-w-0">
            <div className="mb-3 flex flex-wrap items-center gap-2">
              <span className="inline-block rounded-md bg-electric px-2.5 py-1 text-xs font-semibold text-white">
                {post.category}
              </span>
              <span className="inline-flex items-center gap-1 text-xs font-medium text-slate-600">
                <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                {readMinutes} mnt baca
              </span>
            </div>

            <p className="mb-2 text-xs font-medium text-slate-600">{formattedDate}</p>

            <h3 className="mb-2 line-clamp-2 text-base font-semibold leading-snug text-navy transition-[color] duration-150 group-hover:text-electric">
              {post.title}
            </h3>

            <p className="line-clamp-2 text-sm leading-relaxed text-slate-600">
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
