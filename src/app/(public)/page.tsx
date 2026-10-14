import HeroSection from '@/components/home/HeroSection';
import MemberShowcase from '@/components/home/MemberShowcase';
import AboutBrief from '@/components/home/AboutBrief';
import LatestNews from '@/components/home/LatestNews';
import SocialMediaFeed from '@/components/home/SocialMediaFeed';
import CtaSection from '@/components/home/CtaSection';
import { memberBrands, newsPosts, socialPosts } from '@/data/mock-data';

export const metadata = {
  title: 'Beranda | Perkumpulan Industri Kendaraan Listrik Indonesia',
  description:
    'Website resmi PERIKLINDO. Asosiasi industri kendaraan listrik Indonesia mewadahi produsen otomotif, produsen komponen, dan infrastruktur pengisian daya.',
};

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section with Key Facts */}
      <HeroSection />

      {/* 2. Member Logos Showcase with Category Filter (aeml.or.id style) */}
      <MemberShowcase members={memberBrands} />

      {/* 3. About Brief: 3 Strategic Pillars of PERIKLINDO */}
      <AboutBrief />

      {/* 4. Latest News & Articles Grid */}
      <LatestNews posts={newsPosts} />

      {/* 5. Curated Social Media Feed */}
      <SocialMediaFeed posts={socialPosts} />

      {/* 6. Strategic CTA Section */}
      <CtaSection />
    </>
  );
}
