import type { Metadata } from 'next';
import AboutHero from '@/components/about/AboutHero';
import FoundersSection from '@/components/about/FoundersSection';
import VisionMissionSection from '@/components/about/VisionMissionSection';
import StrategicObjectives from '@/components/about/StrategicObjectives';
import HistoryTimeline from '@/components/about/HistoryTimeline';
import StrategicPartnersSection from '@/components/about/StrategicPartnersSection';
import CoreValuesSection from '@/components/about/CoreValuesSection';
import LeadershipSpotlight from '@/components/about/LeadershipSpotlight';
import LegalAndContactSection from '@/components/about/LegalAndContactSection';
import AboutCta from '@/components/about/AboutCta';

export const metadata: Metadata = {
  title: 'Tentang Kami | PERIKLINDO - Perkumpulan Industri Kendaraan Listrik Indonesia',
  description:
    'Profil resmi PERIKLINDO: sejarah pendirian April 2021, visi misi AD/ART, milestone 2021–2026, dan landasan Perpres No. 55 Tahun 2019.',
  keywords: [
    'Tentang Periklindo',
    'Profil Periklindo',
    'Visi Misi Periklindo',
    'Sejarah Periklindo',
    'Moeldoko Periklindo',
    'Asosiasi Kendaraan Listrik Indonesia',
    'Perpres 55 2019',
    'PEVS',
  ],
  openGraph: {
    title: 'Tentang Kami | PERIKLINDO',
    description:
      'Mengenal Perkumpulan Industri Kendaraan Listrik Indonesia—didirikan April 2021, berbadan hukum SK Kemenkumham RI.',
    type: 'website',
    locale: 'id_ID',
  },
};

export default function TentangKamiPage() {
  return (
    <>
      <AboutHero />
      <FoundersSection />
      <VisionMissionSection />
      <StrategicObjectives />
      <HistoryTimeline />
      <StrategicPartnersSection />
      <CoreValuesSection />
      <LeadershipSpotlight />
      <LegalAndContactSection />
      <AboutCta />
    </>
  );
}
