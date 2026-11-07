import type { Metadata } from 'next';
import NewsHero from '@/components/news/NewsHero';
import NewsFilterBar from '@/components/news/NewsFilterBar';
import { newsPosts } from '@/data/mock-data';

export const metadata: Metadata = {
  title: 'Berita & Artikel',
  description:
    'Warta resmi PERIKLINDO: liputan PEVS, siaran pers, regulasi KBLBB, dan perkembangan teknologi kendaraan listrik Indonesia.',
  keywords: [
    'Berita PERIKLINDO',
    'PEVS 2026',
    'Regulasi KBLBB',
    'Siaran pers kendaraan listrik',
    'Moeldoko PERIKLINDO',
  ],
  openGraph: {
    title: 'Berita & Artikel | PERIKLINDO',
    description:
      'Arsip berita industri kendaraan listrik, kebijakan insentif, dan kegiatan asosiasi PERIKLINDO.',
    type: 'website',
    locale: 'id_ID',
    url: '/berita',
    images: [
      {
        url: '/assets/news/pevs-2026-game-changer.jpg',
        width: 1200,
        height: 675,
        alt: 'Warta PERIKLINDO',
      },
    ],
  },
};

export default function BeritaPage() {
  const featured = newsPosts.find((post) => post.isFeatured) ?? newsPosts[0];

  // Section order frozen: NewsHero → NewsFilterBar (room 06 keep-the-layout).
  return (
    <>
      <NewsHero featured={featured} />
      <NewsFilterBar posts={newsPosts} featuredId={featured?.id} />
    </>
  );
}
