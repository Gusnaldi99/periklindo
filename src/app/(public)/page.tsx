import type { Metadata } from 'next';
import HeroSection from '@/components/home/HeroSection';
import LeadershipMessage from '@/components/home/LeadershipMessage';
import MemberShowcase from '@/components/home/MemberShowcase';
import PevsSpotlight from '@/components/home/PevsSpotlight';
import StrategicPillars from '@/components/home/StrategicPillars';
import LatestNews from '@/components/home/LatestNews';
import SocialMediaFeed from '@/components/home/SocialMediaFeed';
import CtaSection from '@/components/home/CtaSection';
import { memberBrands, newsPosts, socialPosts } from '@/data/mock-data';

export const metadata: Metadata = {
  title: 'PERIKLINDO | Perkumpulan Industri Kendaraan Listrik Indonesia',
  description:
    'Portal resmi PERIKLINDO. Asosiasi industri kendaraan listrik Indonesia pengawal Perpres No. 55/2019, mewadahi pabrikan roda 4, roda 2, industri baterai nasional, dan infrastruktur pengisian daya.',
  keywords: [
    'PERIKLINDO',
    'Kendaraan Listrik Indonesia',
    'Asosiasi EV Indonesia',
    'PEVS 2026',
    'Moeldoko PERIKLINDO',
    'Mobil Listrik Indonesia',
    'Motor Listrik Indonesia',
    'Baterai EV Indonesia',
    'Perpres 55 2019',
  ],
  openGraph: {
    title: 'PERIKLINDO - Perkumpulan Industri Kendaraan Listrik Indonesia',
    description:
      'Wadah resmi produsen otomotif, pengembang baterai, dan infrastruktur pengisian daya listrik Indonesia.',
    type: 'website',
    locale: 'id_ID',
    images: [
      {
        url: '/assets/news/pevs-2026-game-changer.jpg',
        width: 1200,
        height: 675,
        alt: 'PERIKLINDO Electric Vehicle Show',
      },
    ],
  },
};

export default function HomePage() {
  return (
    <>
      {/* 1. Asymmetrical Editorial Hero with Live Telemetry */}
      <HeroSection />

      {/* 2. Institutional Leadership Statement & National Strategy */}
      <LeadershipMessage />

      {/* 3. Industry Consortium Showcase with Capsule Pills & Infinite Marquee */}
      <MemberShowcase members={memberBrands} />

      {/* 4. Flagship Spotlight: PEVS (PERIKLINDO Electric Vehicle Show) */}
      <PevsSpotlight />

      {/* 5. Strategic Pillars (Advokasi Regulasi, Akselerasi Pasar, Hilirisasi Baterai) */}
      <StrategicPillars />

      {/* 6. Magazine-Style Editorial News Digest */}
      <LatestNews posts={newsPosts} />

      {/* 7. Real Documentation Social & Field Activities */}
      <SocialMediaFeed posts={socialPosts} />

      {/* 8. Dual-Track Institutional Gateway (B2B vs Secretariat) */}
      <CtaSection />
    </>
  );
}
