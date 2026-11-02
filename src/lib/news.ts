import { newsPosts } from '@/data/mock-data';
import type { NewsPost } from '@/types';

export function getNewsBySlug(slug: string): NewsPost | undefined {
  return newsPosts.find((post) => post.slug === slug);
}

export function getRelatedNews(slug: string, limit = 3): NewsPost[] {
  const current = getNewsBySlug(slug);
  const pool = newsPosts.filter((post) => post.slug !== slug);

  if (!current) return pool.slice(0, limit);

  return [...pool]
    .sort((a, b) => {
      const categoryRank =
        Number(b.category === current.category) -
        Number(a.category === current.category);
      if (categoryRank !== 0) return categoryRank;
      return b.publishedAt.localeCompare(a.publishedAt);
    })
    .slice(0, limit);
}

export function getAllNewsSlugs() {
  return newsPosts.map((post) => post.slug);
}
