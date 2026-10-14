import Link from 'next/link';
import type { NewsPost } from '@/types';
import NewsCard from '@/components/shared/NewsCard';
import SectionHeader from '@/components/shared/SectionHeader';
import ScrollReveal from '@/components/shared/ScrollReveal';

interface LatestNewsProps {
  posts: NewsPost[];
}

export default function LatestNews({ posts }: LatestNewsProps) {
  const displayedPosts = posts.slice(0, 3);

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-slate-50 border-b border-slate-200">
      <div className="container-main">
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <SectionHeader
              title="Berita & Publikasi Terkini"
              subtitle="Perkembangan regulasi, kegiatan asosiasi, dan dinamika industri kendaraan listrik nasional."
            />

            <Link
              href="/berita"
              className="inline-flex items-center text-sm font-semibold text-electric hover:text-electric-hover active:translate-x-0.5 transition-all min-h-[44px]"
            >
              Lihat Semua Berita &rarr;
            </Link>
          </div>
        </ScrollReveal>

        {/* News 3-Column Grid with Staggered ScrollReveal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {displayedPosts.map((post, index) => (
            <ScrollReveal
              key={post.id}
              delay={index * 120}
              className="h-full"
            >
              <NewsCard post={post} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
