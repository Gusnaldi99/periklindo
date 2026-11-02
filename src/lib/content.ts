import type { NewsPost } from '@/types';

export function formatDateId(
  isoDate: string,
  variant: 'long' | 'short' = 'long'
) {
  return new Date(isoDate).toLocaleDateString('id-ID', {
    day: 'numeric',
    month: variant === 'short' ? 'short' : 'long',
    year: 'numeric',
  });
}

export function estimateReadMinutes(
  post: Pick<NewsPost, 'title' | 'excerpt' | 'content'>
) {
  const text = `${post.title} ${post.excerpt} ${post.content ?? ''}`;
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 180));
}
