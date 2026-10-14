import Image from 'next/image';
import type { SocialMediaPost } from '@/types';
import SectionHeader from '@/components/shared/SectionHeader';
import ScrollReveal from '@/components/shared/ScrollReveal';

interface SocialMediaFeedProps {
  posts: SocialMediaPost[];
}

export default function SocialMediaFeed({ posts }: SocialMediaFeedProps) {
  const activePosts = posts.filter((p) => p.isActive).slice(0, 4);

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white border-b border-slate-200">
      <div className="container-main">
        {/* Header with ScrollReveal */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <SectionHeader
              title="Aktivitas & Media Sosial"
              subtitle="Dokumentasi agenda, siaran langsung, dan pembaruan terkini yang dikurasi dari kanal resmi PERIKLINDO."
            />

            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
              <span className="px-3 py-1.5 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors">
                Instagram
              </span>
              <span className="px-3 py-1.5 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors">
                YouTube
              </span>
              <span className="px-3 py-1.5 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors">
                LinkedIn
              </span>
            </div>
          </div>
        </ScrollReveal>

        {/* 4-Column Grid of Curated Social Media Cards with Staggered Entrance */}
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
                  className="group relative flex flex-col h-full bg-slate-50 border border-slate-200 rounded-xl overflow-hidden hover:shadow-xl hover:border-slate-300 hover:-translate-y-1.5 transition-all duration-200 ease-out"
                >
                  {/* Visual Media (1:1 square) with Zoom */}
                  <div className="relative aspect-square w-full overflow-hidden bg-slate-100">
                    <Image
                      src={post.mediaUrl}
                      alt={post.caption}
                      width={400}
                      height={400}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300 ease-out"
                    />

                    {/* Platform Badge with Hover Transition */}
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-semibold bg-navy/90 text-white backdrop-blur-xs shadow-xs group-hover:bg-electric transition-colors duration-200">
                      {post.platform}
                    </div>
                  </div>

                  {/* Caption & Date */}
                  <div className="p-4 flex flex-col flex-1 justify-between">
                    <p className="text-sm text-slate-700 leading-snug line-clamp-3 mb-3 group-hover:text-navy transition-colors">
                      {post.caption}
                    </p>
                    <p className="text-xs text-slate-400 font-medium">
                      {formattedDate}
                    </p>
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
