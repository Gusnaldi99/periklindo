import type { Metadata } from 'next';
import GalleryHero from '@/components/gallery/GalleryHero';
import GalleryGrid from '@/components/gallery/GalleryGrid';
import { galleryItems } from '@/data/mock-data';

export const metadata: Metadata = {
  title: 'Galeri Kegiatan',
  description:
    'Dokumentasi asli kegiatan PERIKLINDO. Arsip PEVS tersedia; kategori PEVC, audiensi, rapat, kunjungan industri, dan kerja sama akan dilengkapi setelah aset resmi diunggah.',
  keywords: [
    'Galeri PERIKLINDO',
    'PEVS 2026',
    'PEVC',
    'Dokumentasi kendaraan listrik',
    'Audiensi KBLBB',
    'Kunjungan industri EV',
  ],
  openGraph: {
    title: 'Galeri Kegiatan | PERIKLINDO',
    description:
      'Dokumentasi asli PEVS PERIKLINDO di JIExpo Kemayoran. Kategori lain menyusul setelah aset resmi tersedia.',
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
