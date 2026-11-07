import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, CalendarDays, Clock, ExternalLink, User } from 'lucide-react';
import { estimateReadMinutes, formatDateId } from '@/lib/content';
import type { NewsPost } from '@/types';
import NewsCard from '@/components/shared/NewsCard';

const CATEGORY_LABEL: Record<NewsPost['category'], string> = {
  'Siaran Pers': 'Siaran Pers',
  Regulasi: 'Regulasi',
  Kegiatan: 'Kegiatan Asosiasi',
  'Industri EV': 'Teknologi EV',
};

interface NewsArticleContentProps {
  post: NewsPost;
  related: NewsPost[];
}

function renderContent(content: string) {
  return content.split('\n\n').map((block, index) => {
    const trimmed = block.trim();
    if (trimmed.startsWith('>')) {
      const quote = trimmed.replace(/^>\s?/, '');
      return (
        <blockquote
          key={index}
          className="my-8 border-l-2 border-electric bg-slate-50 px-5 py-4 sm:px-6"
        >
          <p className="font-[family-name:var(--font-heading)] text-base font-semibold leading-relaxed text-navy sm:text-lg">
            {quote}
          </p>
        </blockquote>
      );
    }

    return (
      <p
        key={index}
        className="mb-6 font-[family-name:var(--font-body)] text-[17px] leading-[1.8] text-slate-700"
      >
        {trimmed}
      </p>
    );
  });
}

export default function NewsArticleContent({ post, related }: NewsArticleContentProps) {
  const readMinutes = estimateReadMinutes(post);

  return (
    <article id="artikel-utama" className="bg-white">
      <header className="relative overflow-x-clip border-b border-navy-light bg-navy text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, var(--color-slate-100) 1px, transparent 0)',
            backgroundSize: '32px 32px',
          }}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-navy-light/40 to-transparent"
          aria-hidden="true"
        />
        <div className="container-main relative z-10 py-12 md:py-16">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex flex-wrap items-center gap-2 font-[family-name:var(--font-body)] text-xs text-slate-300 sm:text-sm">
              <li>
                <Link
                  href="/"
                  className="transition-[color] duration-150 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric"
                >
                  Beranda
                </Link>
              </li>
              <li aria-hidden="true" className="text-slate-500">
                /
              </li>
              <li>
                <Link
                  href="/berita"
                  className="transition-[color] duration-150 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric"
                >
                  Berita
                </Link>
              </li>
              <li aria-hidden="true" className="text-slate-500">
                /
              </li>
              <li className="line-clamp-1 font-medium text-white" aria-current="page">
                {post.title}
              </li>
            </ol>
          </nav>

          <p className="mb-3 font-[family-name:var(--font-body)] text-sm font-medium text-teal">
            {CATEGORY_LABEL[post.category]}
          </p>
          <h1 className="mb-6 max-w-4xl min-w-0 break-words font-[family-name:var(--font-heading)] text-3xl font-semibold leading-[1.15] tracking-tight text-balance text-white sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>
          <p className="mb-8 max-w-3xl font-[family-name:var(--font-body)] text-base leading-relaxed text-slate-300 sm:text-lg">
            {post.excerpt}
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 font-[family-name:var(--font-body)] text-xs text-slate-300 sm:text-sm">
            <span className="inline-flex items-center gap-1.5">
              <User className="h-4 w-4 shrink-0 text-teal" aria-hidden="true" />
              {post.author}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays className="h-4 w-4 shrink-0 text-electric" aria-hidden="true" />
              {formatDateId(post.publishedAt)}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-4 w-4 shrink-0" aria-hidden="true" />
              {readMinutes} menit baca
            </span>
          </div>
        </div>
      </header>

      <div className="container-main py-10 md:py-14">
        <div className="relative mb-10 aspect-[16/9] min-w-0 overflow-hidden border border-slate-200 bg-slate-100">
          <Image
            src={post.thumbnailUrl}
            alt={post.title}
            fill
            priority
            sizes="(max-width: 1200px) 100vw, 1120px"
            className="object-cover"
          />
        </div>

        <div className="mx-auto max-w-3xl">
          {renderContent(post.content)}

          {post.externalUrl ? (
            <a
              href={post.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mb-10 mt-2 inline-flex min-h-[44px] items-center gap-2 font-[family-name:var(--font-body)] text-sm font-semibold text-electric transition-[color] duration-150 hover:text-electric-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric"
            >
              Baca liputan asli di {post.sourceName ?? 'sumber'}
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
          ) : null}

          <Link
            href="/berita"
            className="inline-flex min-h-[44px] items-center gap-2 font-[family-name:var(--font-body)] text-sm font-semibold text-navy transition-[color] duration-150 hover:text-electric focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Kembali ke arsip berita
          </Link>
        </div>

        {related.length > 0 ? (
          <section className="mt-16 border-t border-slate-200 pt-12">
            <h2 className="mb-8 font-[family-name:var(--font-heading)] text-2xl font-semibold text-navy">
              Berita terkait
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-[repeat(3,minmax(0,1fr))]">
              {related.map((item) => (
                <NewsCard key={item.id} post={item} preferInternal />
              ))}
            </div>
          </section>
        ) : null}
      </div>
    </article>
  );
}
