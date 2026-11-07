'use client';

import Image from 'next/image';
import { Share2 } from 'lucide-react';
import type { SocialMediaPost } from '@/types';
import SectionHeader from '@/components/shared/SectionHeader';
import ScrollReveal from '@/components/shared/ScrollReveal';

interface SocialMediaFeedProps {
  posts: SocialMediaPost[];
}

function InstagramIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function YouTubeIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function LinkedInIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28z" />
    </svg>
  );
}

function getPlatformIcon(platform: SocialMediaPost['platform']) {
  switch (platform) {
    case 'Instagram':
      return <InstagramIcon className="w-3.5 h-3.5" />;
    case 'YouTube':
      return <YouTubeIcon className="w-3.5 h-3.5" />;
    case 'LinkedIn':
      return <LinkedInIcon className="w-3.5 h-3.5" />;
    default:
      return <Share2 className="w-3.5 h-3.5" />;
  }
}

export default function SocialMediaFeed({ posts }: SocialMediaFeedProps) {
  const activePosts = posts.filter((p) => p.isActive).slice(0, 4);

  return (
    <section className="border-b border-slate-200 bg-white py-16 md:py-24">
      <div className="container-main">
        <ScrollReveal>
          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl min-w-0">
              <p className="mb-3 font-[family-name:var(--font-body)] text-sm font-medium text-slate-500">
                Dokumentasi Kegiatan Nyata & Media
              </p>
              <SectionHeader
                title="Aktivitas Lapangan & Kanal Media Resmi"
                subtitle="Dokumentasi agenda asosiasi, audiensi kementerian, siaran langsung konferensi, dan edukasi publik yang dikurasi dari kanal resmi PERIKLINDO."
              />
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <a
                href="https://instagram.com/periklindo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 border border-slate-200 bg-slate-50 px-3.5 py-2 font-[family-name:var(--font-body)] text-xs font-semibold text-slate-700 transition-[border-color,color] duration-150 hover:border-slate-300 hover:text-navy"
              >
                <InstagramIcon className="h-3.5 w-3.5" />
                <span>Instagram</span>
              </a>
              <a
                href="https://youtube.com/@periklindo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 border border-slate-200 bg-slate-50 px-3.5 py-2 font-[family-name:var(--font-body)] text-xs font-semibold text-slate-700 transition-[border-color,color] duration-150 hover:border-slate-300 hover:text-navy"
              >
                <YouTubeIcon className="h-3.5 w-3.5" />
                <span>YouTube</span>
              </a>
              <a
                href="https://linkedin.com/company/periklindo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 border border-slate-200 bg-slate-50 px-3.5 py-2 font-[family-name:var(--font-body)] text-xs font-semibold text-slate-700 transition-[border-color,color] duration-150 hover:border-slate-300 hover:text-navy"
              >
                <LinkedInIcon className="h-3.5 w-3.5" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {activePosts.map((post, index) => {
            const formattedDate = new Date(post.postedAt).toLocaleDateString('id-ID', {
              day: 'numeric',
              month: 'short',
              year: 'numeric',
            });

            return (
              <ScrollReveal key={post.id} delay={index * 80} className="h-full min-w-0">
                <a
                  href={post.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex h-full flex-col overflow-hidden border border-slate-200 bg-navy transition-[border-color] duration-150 hover:border-slate-400"
                >
                  <div className="relative aspect-square w-full min-w-0 overflow-hidden bg-navy">
                    <Image
                      src={post.mediaUrl}
                      alt={post.caption}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent" />

                    <div className="absolute right-3 top-3 z-10 flex items-center gap-1.5 border border-white/20 bg-navy/85 px-2.5 py-1 font-[family-name:var(--font-body)] text-xs font-medium text-white">
                      {getPlatformIcon(post.platform)}
                      <span>{post.platform}</span>
                    </div>

                    <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col justify-end p-5 text-white">
                      <p className="mb-2 font-[family-name:var(--font-body)] text-xs text-slate-300">
                        {formattedDate}
                      </p>

                      <p className="mb-3 line-clamp-3 font-[family-name:var(--font-body)] text-sm font-medium leading-snug text-slate-100">
                        {post.caption}
                      </p>

                      <p className="border-t border-white/20 pt-2 font-[family-name:var(--font-body)] text-xs font-semibold text-white">
                        Buka Dokumentasi
                      </p>
                    </div>
                  </div>
                </a>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
