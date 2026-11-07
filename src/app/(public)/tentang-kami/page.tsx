import type { Metadata } from 'next';
import AboutHero from '@/components/about/AboutHero';
import FoundersSection from '@/components/about/FoundersSection';
import VisionMissionSection from '@/components/about/VisionMissionSection';
import StrategicObjectives from '@/components/about/StrategicObjectives';
import HistoryTimeline from '@/components/about/HistoryTimeline';
import CoreValuesSection from '@/components/about/CoreValuesSection';
import LeadershipSpotlight from '@/components/about/LeadershipSpotlight';
import LegalAndContactSection from '@/components/about/LegalAndContactSection';
import AboutCta from '@/components/about/AboutCta';

export const metadata: Metadata = {
  title: 'Tentang Kami | PERIKLINDO - Perkumpulan Industri Kendaraan Listrik Indonesia',
  description:
    'Profil resmi, sejarah pendirian, visi misi, dewan kepemimpinan, dan landasan hukum PERIKLINDO. Berdiri sejak 2021 atas inisiatif pabrikan otomotif nasional untuk mengakselerasi ekosistem KBLBB Indonesia.',
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
      'Wadah resmi industri kendaraan listrik Indonesia. Pelajari sejarah, visi misi, dan jajaran kepemimpinan PERIKLINDO.',
    type: 'website',
    locale: 'id_ID',
  },
};

export default function TentangKamiPage() {
  return (
    <>
      {/* 1. AboutHero — institutional profile + quiet facts */}
      <AboutHero />

      {/* 2. FoundersSection */}
      <FoundersSection />

      {/* 3. VisionMissionSection */}
      <VisionMissionSection />

      {/* 4. StrategicObjectives */}
      <StrategicObjectives />

      {/* 5. HistoryTimeline */}
      <HistoryTimeline />

      {/* 6. CoreValuesSection */}
      <CoreValuesSection />

      {/* 7. LeadershipSpotlight */}
      <LeadershipSpotlight />

      {/* 8. LegalAndContactSection */}
      <LegalAndContactSection />

      {/* 9. AboutCta */}
      <AboutCta />
    </>
  );
}
