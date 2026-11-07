'use client';

import Image from 'next/image';
import Link from 'next/link';
import { PlayCircle } from 'lucide-react';
import type { NewsPost } from '@/types';
import SectionHeader from '@/components/shared/SectionHeader';
import ScrollReveal from '@/components/shared/ScrollReveal';

interface LatestNewsProps {
  posts: NewsPost[];
}

function formatNewsDate(isoDate: string) {
  return new Date(isoDate).toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}

export default function LatestNews({ posts }: LatestNewsProps) {
  const featuredPost = posts.find((post) => post.isFeatured) ?? posts[0];
  const supportingPosts = posts
    .filter((post) => post.id !== featuredPost?.id)
    .slice(0, 3);

  if (!featuredPost) {
    return null;
  }

  const featuredHref = featuredPost.externalUrl ?? `/berita/${featuredPost.slug}`;
  const isFeaturedExternal = Boolean(featuredPost.externalUrl);

  return (
    <section className="border-b border-slate-200 bg-white py-16 md:py-24">
      <div className="container-main">
        <ScrollReveal>
          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl min-w-0">
              <p className="mb-3 font-[family-name:var(--font-body)] text-sm font-medium text-slate-500">
                Warta & Publikasi Kebijakan
              </p>
              <SectionHeader
                title="Warta Terkini & Analisis Regulasi Industri"
                subtitle="Dokumentasi agenda asosiasi, dinamika kebijakan insentif kendaraan listrik, dan liputan strategis dari ajang PEVS nasional."
              />
            </div>

            <Link
              href="/berita"
              className="inline-flex min-h-[44px] items-center font-[family-name:var(--font-body)] text-sm font-semibold text-navy underline-offset-4 transition-[opacity] duration-150 hover:opacity-80 hover:underline"
            >
              Arsip Berita Lengkap
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
          <ScrollReveal delay={80} className="h-full min-w-0 lg:col-span-7">
            <a
              href={featuredHref}
              target={isFeaturedExternal ? '_blank' : undefined}
              rel={isFeaturedExternal ? 'noopener noreferrer' : undefined}
              className="group flex h-full flex-col overflow-hidden border border-slate-200 bg-slate-50 transition-[border-color] duration-150 hover:border-slate-300"
            >
              <div className="relative aspect-[16/10] w-full min-w-0 overflow-hidden bg-navy sm:aspect-[16/9]">
                <Image
                  src={featuredPost.thumbnailUrl}
                  alt={featuredPost.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  priority
                  className="object-cover"
                />

                <div className="absolute left-4 top-4 z-10 flex flex-wrap gap-2">
                  <span className="bg-electric px-2.5 py-1 font-[family-name:var(--font-body)] text-xs font-semibold text-white">
                    Sorotan Utama
                  </span>
                  <span className="border border-white/20 bg-navy/90 px-2.5 py-1 font-[family-name:var(--font-body)] text-xs font-medium text-white">
                    {featuredPost.sourceName ?? featuredPost.category}
                  </span>
                </div>

                {featuredPost.mediaType === 'video' ? (
                  <div className="absolute inset-0 flex items-center justify-center bg-navy/30">
                    <PlayCircle className="h-14 w-14 text-white" aria-hidden="true" />
                  </div>
                ) : null}
              </div>

              <div className="flex flex-1 flex-col justify-between gap-4 p-6 pb-7 sm:p-8 sm:pb-9">
                <div className="min-w-0">
                  <div className="mb-3 flex flex-wrap gap-x-4 gap-y-1 font-[family-name:var(--font-body)] text-xs text-slate-600">
                    <span>{formatNewsDate(featuredPost.publishedAt)}</span>
                    <span>4 menit baca</span>
                    <span>Oleh {featuredPost.author}</span>
                  </div>

                  <h3 className="mb-4 font-[family-name:var(--font-heading)] text-xl font-semibold leading-snug text-navy sm:text-2xl">
                    {featuredPost.title}
                  </h3>

                  <p className="mb-6 max-w-[65ch] line-clamp-3 font-[family-name:var(--font-body)] text-sm leading-relaxed text-slate-600">
                    {featuredPost.excerpt}
                  </p>
                </div>

                <p className="border-t border-slate-200 pt-4 font-[family-name:var(--font-body)] text-sm font-semibold text-navy">
                  Baca Liputan Khusus
                </p>
              </div>
            </a>
          </ScrollReveal>

          <div className="flex flex-col gap-4 sm:gap-5 lg:col-span-5">
            {supportingPosts.map((post, idx) => {
              const href = post.externalUrl ?? `/berita/${post.slug}`;
              const isExternal = Boolean(post.externalUrl);

              return (
                <ScrollReveal key={post.id} delay={120 + idx * 80}>
                  <a
                    href={href}
                    target={isExternal ? '_blank' : undefined}
                    rel={isExternal ? 'noopener noreferrer' : undefined}
                    className="group flex flex-col gap-4 border border-slate-200 bg-slate-50 p-4 pb-5 transition-[border-color,background-color] duration-150 hover:border-slate-300 hover:bg-white sm:flex-row sm:p-5"
                  >
                    <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden bg-navy sm:aspect-square sm:h-28 sm:w-28">
                      <Image
                        src={post.thumbnailUrl}
                        alt={post.title}
                        fill
                        sizes="(max-width: 640px) 100vw, 120px"
                        className="object-cover"
                      />
                      {post.mediaType === 'video' ? (
                        <div className="absolute inset-0 flex items-center justify-center bg-navy/30">
                          <PlayCircle className="h-7 w-7 text-white" aria-hidden="true" />
                        </div>
                      ) : null}
                    </div>

                    <div className="flex min-w-0 flex-1 flex-col justify-between">
                      <div>
                        <div className="mb-1.5 flex flex-wrap items-center gap-x-3 gap-y-1">
                          <span className="font-[family-name:var(--font-body)] text-xs font-medium text-slate-600">
                            {post.sourceName ?? post.category}
                          </span>
                          <span className="font-[family-name:var(--font-body)] text-xs text-slate-600">
                            3 menit baca
                          </span>
                        </div>

                        <h4 className="mb-1.5 line-clamp-2 font-[family-name:var(--font-heading)] text-sm font-semibold leading-snug text-navy">
                          {post.title}
                        </h4>

                        <p className="line-clamp-2 font-[family-name:var(--font-body)] text-xs leading-relaxed text-slate-500">
                          {post.excerpt}
                        </p>
                      </div>

                      <div className="mt-2 flex items-center justify-between border-t border-slate-200/70 pt-2 font-[family-name:var(--font-body)] text-xs text-slate-600">
                        <span>{formatNewsDate(post.publishedAt)}</span>
                        <span className="font-semibold text-navy">
                          {post.mediaType === 'video' ? 'Tonton' : 'Baca'}
                        </span>
                      </div>
                    </div>
                  </a>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
