import type { Metadata } from 'next';
import NewsHero from '@/components/news/NewsHero';
import NewsFilterBar from '@/components/news/NewsFilterBar';
import { newsPosts } from '@/data/mock-data';

export const metadata: Metadata = {
  title: 'Berita & Publikasi',
  description:
    'Berita resmi PERIKLINDO: kegiatan asosiasi, industri EV, kebijakan & regulasi, kerja sama, dan siaran pers.',
  keywords: [
    'Berita PERIKLINDO',
    'PEVS 2026',
    'Kebijakan Regulasi KBLBB',
    'Siaran pers kendaraan listrik',
    'Moeldoko PERIKLINDO',
  ],
  openGraph: {
    title: 'Berita & Publikasi | PERIKLINDO',
    description:
      'Layout editorial majalah: berita utama, grid pendukung, dan filter kategori resmi PERIKLINDO.',
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
  const supporting = newsPosts
    .filter((post) => post.id !== featured?.id)
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
    .slice(0, 4);

  return (
    <>
      <NewsHero featured={featured} supporting={supporting} />
      <NewsFilterBar posts={newsPosts} featuredId={featured?.id} />
    </>
  );
}
