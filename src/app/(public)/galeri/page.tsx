import type { Metadata } from 'next';
import GalleryHero from '@/components/gallery/GalleryHero';
import GalleryGrid from '@/components/gallery/GalleryGrid';
import { galleryItems } from '@/data/mock-data';

export const metadata: Metadata = {
  title: 'Galeri Kegiatan',
  description:
    'Arsip visual resmi PERIKLINDO: pameran PEVS di JIExpo Kemayoran, audiensi pemerintah, seminar industri, dan kunjungan pabrik anggota.',
  keywords: [
    'Galeri PERIKLINDO',
    'PEVS 2026',
    'Dokumentasi kendaraan listrik',
    'Audiensi KBLBB',
    'Kunjungan pabrik EV',
  ],
  openGraph: {
    title: 'Galeri Kegiatan | PERIKLINDO',
    description:
      'Dokumentasi pameran PEVS, audiensi kementerian, seminar, dan kunjungan pabrik industri kendaraan listrik Indonesia.',
    type: 'website',
    locale: 'id_ID',
    url: '/galeri',
    images: [
      {
        url: '/assets/news/pevs-2026-game-changer.jpg',
        width: 1200,
        height: 675,
        alt: 'PEVS 2026 Grand Opening',
      },
    ],
  },
};

export default function GaleriPage() {
  return (
    <>
      <GalleryHero />
      <GalleryGrid items={galleryItems} />
    </>
  );
}
