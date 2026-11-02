'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import {
  Newspaper,
  Calendar,
  Clock,
  ArrowRight,
  ExternalLink,
  PlayCircle,
  TrendingUp,
} from 'lucide-react';
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
    <section className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="container-main">
        {/* Top Header */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md text-xs font-bold bg-blue-100 text-electric border border-blue-200 mb-3">
                <Newspaper className="w-3.5 h-3.5 text-electric" />
                Warta & Publikasi Kebijakan
              </div>
              <SectionHeader
                title="Warta Terkini & Analisis Regulasi Industri"
                subtitle="Dokumentasi agenda asosiasi, dinamika kebijakan insentif kendaraan listrik, dan liputan strategis dari ajang PEVS nasional."
              />
            </div>

            <Link
              href="/berita"
              className="group inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-electric hover:text-electric-hover transition-colors min-h-[44px]"
            >
              <span>Arsip Berita Lengkap</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </ScrollReveal>

        {/* Magazine Editorial Grid: 7 Cols Lead Hero (Left) : 5 Cols Analytical List (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* ================= LEFT: 1 HEROIC FEATURED CARD (7 Cols) ================= */}
          <ScrollReveal delay={100} className="lg:col-span-7 h-full">
            <a
              href={featuredHref}
              target={isFeaturedExternal ? '_blank' : undefined}
              rel={isFeaturedExternal ? 'noopener noreferrer' : undefined}
              className="group flex flex-col h-full bg-slate-50 border border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:border-electric/50 transition-all duration-300"
            >
              {/* High-Resolution Lead Image */}
              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-slate-900">
                <Image
                  src={featuredPost.thumbnailUrl}
                  alt={featuredPost.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />

                {/* Badges on Top */}
                <div className="absolute top-4 left-4 z-10 flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-electric text-white shadow-md">
                    Sorotan Utama
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-navy/90 text-white backdrop-blur-md border border-white/20">
                    {featuredPost.sourceName ?? featuredPost.category}
                  </span>
                </div>

                {featuredPost.mediaType === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center bg-navy/30 group-hover:bg-navy/40 transition-colors">
                    <PlayCircle className="w-16 h-16 text-white drop-shadow-lg group-hover:scale-110 transition-transform" />
                  </div>
                )}
              </div>

              {/* Lead Card Body */}
              <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
                <div>
                  {/* Meta Bar */}
                  <div className="flex items-center gap-4 text-xs text-slate-500 font-medium mb-3">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      {formatNewsDate(featuredPost.publishedAt)}
                    </span>
                    <span>&bull;</span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      4 menit baca
                    </span>
                    <span>&bull;</span>
                    <span className="text-slate-600 font-semibold">
                      Oleh {featuredPost.author}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-black text-navy leading-snug mb-4 group-hover:text-electric transition-colors">
                    {featuredPost.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3 mb-6">
                    {featuredPost.excerpt}
                  </p>
                </div>

                {/* Read Link */}
                <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-xs sm:text-sm font-bold text-electric">
                  <span className="flex items-center gap-1.5">
                    Baca Liputan Khusus
                    {isFeaturedExternal && <ExternalLink className="w-3.5 h-3.5 ml-1" />}
                  </span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
                </div>
              </div>
            </a>
          </ScrollReveal>

          {/* ================= RIGHT: 3 ANALYTICAL HORIZONTAL CARDS (5 Cols) ================= */}
          <div className="lg:col-span-5 flex flex-col gap-4 sm:gap-5">
            {supportingPosts.map((post, idx) => {
              const href = post.externalUrl ?? `/berita/${post.slug}`;
              const isExternal = Boolean(post.externalUrl);

              return (
                <ScrollReveal key={post.id} delay={150 + idx * 100}>
                  <a
                    href={href}
                    target={isExternal ? '_blank' : undefined}
                    rel={isExternal ? 'noopener noreferrer' : undefined}
                    className="group flex flex-col sm:flex-row gap-4 p-4 sm:p-4.5 bg-slate-50 border border-slate-200 rounded-2xl hover:bg-white hover:border-electric/40 hover:shadow-lg transition-all duration-200"
                  >
                    {/* Thumbnail 16:9 */}
                    <div className="relative aspect-[16/10] sm:aspect-square sm:w-28 sm:h-28 shrink-0 rounded-xl overflow-hidden bg-slate-900">
                      <Image
                        src={post.thumbnailUrl}
                        alt={post.title}
                        fill
                        sizes="(max-width: 640px) 100vw, 120px"
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {post.mediaType === 'video' && (
                        <div className="absolute inset-0 flex items-center justify-center bg-navy/30">
                          <PlayCircle className="w-7 h-7 text-white" />
                        </div>
                      )}
                    </div>

                    {/* Content Details */}
                    <div className="flex flex-col justify-between flex-1">
                      <div>
                        {/* Meta Category & Time */}
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="text-[10px] font-black uppercase tracking-wider text-electric bg-blue-100 px-2 py-0.5 rounded-md">
                            {post.sourceName ?? post.category}
                          </span>
                          <span className="text-[11px] text-slate-400 font-medium">
                            3 menit baca
                          </span>
                        </div>

                        {/* Title */}
                        <h4 className="text-xs sm:text-sm font-bold text-navy leading-snug line-clamp-2 group-hover:text-electric transition-colors mb-1.5">
                          {post.title}
                        </h4>

                        {/* Short snippet */}
                        <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed">
                          {post.excerpt}
                        </p>
                      </div>

                      {/* Date & Arrow Slide */}
                      <div className="flex items-center justify-between pt-2 mt-2 border-t border-slate-200/70 text-[11px] text-slate-400 font-medium">
                        <span>{formatNewsDate(post.publishedAt)}</span>
                        <span className="flex items-center gap-1 font-bold text-electric group-hover:translate-x-1 transition-transform">
                          <span>{post.mediaType === 'video' ? 'Tonton' : 'Baca'}</span>
                          <ArrowRight className="w-3 h-3" />
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
