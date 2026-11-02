import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, CalendarDays, Clock, ExternalLink, Quote, User } from 'lucide-react';
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
          className="relative my-8 rounded-2xl border border-electric/20 bg-electric/5 px-6 py-5"
        >
          <Quote className="absolute -top-3 left-5 w-6 h-6 text-electric" aria-hidden="true" />
          <p className="text-base sm:text-lg text-navy font-semibold leading-relaxed italic">
            {quote}
          </p>
        </blockquote>
      );
    }

    return (
      <p key={index} className="text-[17px] leading-[1.8] text-slate-700 mb-6">
        {trimmed}
      </p>
    );
  });
}

export default function NewsArticleContent({ post, related }: NewsArticleContentProps) {
  const readMinutes = estimateReadMinutes(post);

  return (
    <article id="artikel-utama" className="bg-white">
      <header className="relative bg-navy text-white overflow-hidden border-b border-navy-light">
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, #FFFFFF 1px, transparent 0)',
            backgroundSize: '28px 28px',
          }}
          aria-hidden="true"
        />
        <div className="container-main relative z-10 py-12 md:py-16">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-slate-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors duration-150">
                  Beranda
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/berita" className="hover:text-white transition-colors duration-150">
                  Berita
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-white font-medium line-clamp-1" aria-current="page">
                {post.title}
              </li>
            </ol>
          </nav>

          <span className="inline-flex items-center text-[10px] font-extrabold uppercase tracking-wider bg-electric text-white px-2.5 py-1 rounded-md mb-4">
            {CATEGORY_LABEL[post.category]}
          </span>
          <h1 className="max-w-4xl text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.18] text-white mb-6">
            {post.title}
          </h1>
          <p className="max-w-3xl text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
            {post.excerpt}
          </p>
          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-400">
            <span className="inline-flex items-center gap-1.5">
              <User className="w-4 h-4 text-teal" />
              {post.author}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays className="w-4 h-4 text-electric" />
              {formatDateId(post.publishedAt)}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {readMinutes} menit baca
            </span>
          </div>
        </div>
      </header>

      <div className="container-main py-10 md:py-14">
        <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 mb-10">
          <Image
            src={post.thumbnailUrl}
            alt={post.title}
            fill
            priority
            sizes="(max-width: 1200px) 100vw, 1120px"
            className="object-cover"
          />
        </div>

        <div className="max-w-3xl mx-auto">
          {renderContent(post.content)}

          {post.externalUrl ? (
            <a
              href={post.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-2 mb-10 text-sm font-bold text-electric hover:text-electric-hover"
            >
              Baca liputan asli di {post.sourceName ?? 'sumber'}
              <ExternalLink className="w-4 h-4" />
            </a>
          ) : null}

          <Link
            href="/berita"
            className="inline-flex items-center gap-2 text-sm font-bold text-navy hover:text-electric min-h-[44px]"
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali ke arsip berita
          </Link>
        </div>

        {related.length > 0 ? (
          <section className="mt-16 pt-12 border-t border-slate-200">
            <h2 className="text-2xl font-extrabold text-navy mb-2">Berita terkait</h2>
            <span className="block h-0.5 w-12 rounded-full bg-gradient-to-r from-electric to-teal mb-8" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
