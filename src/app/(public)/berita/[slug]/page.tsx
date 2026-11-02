import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import NewsArticleContent from '@/components/news/NewsArticleContent';
import ReadingProgressBar from '@/components/news/ReadingProgressBar';
import { getAllNewsSlugs, getNewsBySlug, getRelatedNews } from '@/lib/news';

interface NewsDetailPageProps {
  params: Promise<{ slug: string }>;
}

export const instant = false;

export function generateStaticParams() {
  return getAllNewsSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: NewsDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getNewsBySlug(slug);

  if (!post) {
    return {
      title: 'Artikel Tidak Ditemukan',
      description: 'Artikel yang Anda cari tidak tersedia di arsip PERIKLINDO.',
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | PERIKLINDO`,
      description: post.excerpt,
      type: 'article',
      locale: 'id_ID',
      url: `/berita/${post.slug}`,
      images: [
        {
          url: post.thumbnailUrl,
          width: 1200,
          height: 675,
          alt: post.title,
        },
      ],
    },
  };
}

export default async function NewsDetailPage({ params }: NewsDetailPageProps) {
  const { slug } = await params;
  const post = getNewsBySlug(slug);

  if (!post) {
    notFound();
  }

  const related = getRelatedNews(post.slug);

  return (
    <>
      <ReadingProgressBar />
      <NewsArticleContent post={post} related={related} />
    </>
  );
}
