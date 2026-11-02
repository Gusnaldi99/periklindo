'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import {
  Share2,
  ExternalLink,
  Calendar,
} from 'lucide-react';
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
      return <InstagramIcon className="w-4 h-4 text-pink-400" />;
    case 'YouTube':
      return <YouTubeIcon className="w-4 h-4 text-red-500" />;
    case 'LinkedIn':
      return <LinkedInIcon className="w-4 h-4 text-sky-400" />;
    default:
      return <Share2 className="w-4 h-4 text-white" />;
  }
}

export default function SocialMediaFeed({ posts }: SocialMediaFeedProps) {
  const activePosts = posts.filter((p) => p.isActive).slice(0, 4);

  return (
    <section className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="container-main">
        {/* Header */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md text-xs font-bold bg-blue-100 text-electric border border-blue-200 mb-3">
                <Share2 className="w-3.5 h-3.5 text-electric" />
                Dokumentasi Kegiatan Nyata & Media
              </div>
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
                className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 hover:text-pink-600 hover:border-pink-300 transition-all shadow-2xs"
              >
                <InstagramIcon className="w-3.5 h-3.5 text-pink-500" />
                <span>Instagram</span>
              </a>
              <a
                href="https://youtube.com/@periklindo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 hover:text-red-600 hover:border-red-300 transition-all shadow-2xs"
              >
                <YouTubeIcon className="w-3.5 h-3.5 text-red-500" />
                <span>YouTube</span>
              </a>
              <a
                href="https://linkedin.com/company/periklindo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 hover:text-blue-600 hover:border-blue-300 transition-all shadow-2xs"
              >
                <LinkedInIcon className="w-3.5 h-3.5 text-blue-600" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </ScrollReveal>

        {/* 4-Column Grid of Real Documentation Photos with Overlay Captions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {activePosts.map((post, index) => {
            const formattedDate = new Date(post.postedAt).toLocaleDateString(
              'id-ID',
              {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
              }
            );

            return (
              <ScrollReveal
                key={post.id}
                delay={index * 100}
                className="h-full"
              >
                <a
                  href={post.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex flex-col h-full bg-slate-900 border border-slate-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-2xl hover:border-electric/50 transition-all duration-300"
                >
                  {/* Visual Media with Real Photos */}
                  <div className="relative aspect-square w-full overflow-hidden bg-slate-950">
                    <Image
                      src={post.mediaUrl}
                      alt={post.caption}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
                    />

                    {/* Gradient Overlay for Text Readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/35 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

                    {/* Platform Badge on Top Right */}
                    <div className="absolute top-3.5 right-3.5 z-10 flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-navy/85 text-white backdrop-blur-md border border-white/20 shadow-md">
                      {getPlatformIcon(post.platform)}
                      <span>{post.platform}</span>
                    </div>

                    {/* Overlay Caption & Meta at Bottom */}
                    <div className="absolute inset-x-0 bottom-0 p-5 z-10 flex flex-col justify-end text-white">
                      <div className="flex items-center gap-1.5 text-[11px] text-cyan-300 font-semibold mb-2">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{formattedDate}</span>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-100 font-medium leading-snug line-clamp-3 mb-3 group-hover:text-white transition-colors">
                        {post.caption}
                      </p>

                      <div className="flex items-center justify-between pt-2 border-t border-white/20 text-[11px] font-bold text-cyan-300 group-hover:text-white transition-colors">
                        <span>Buka Dokumentasi</span>
                        <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                      </div>
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
