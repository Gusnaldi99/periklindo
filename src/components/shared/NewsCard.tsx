import Image from 'next/image';
import Link from 'next/link';
import type { NewsPost } from '@/types';

interface NewsCardProps {
  post: NewsPost;
}

/**
 * News article card per DESIGN_v2.md section 3.2:
 * - 16:9 thumbnail with smooth zoom on hover
 * - Category badge in Electric Blue
 * - Card hover: subtle lift (-translate-y-1.5) and shadow enhancement (MOTION 2)
 * - Title clamped to 2 lines
 * - Date + excerpt
 */
export default function NewsCard({ post }: NewsCardProps) {
  const formattedDate = new Date(post.publishedAt).toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <Link
      href={`/berita/${post.slug}`}
      className="group block h-full bg-white border border-slate-200 rounded-xl overflow-hidden
        hover:shadow-xl hover:border-slate-300 hover:-translate-y-1.5
        transition-all duration-200 ease-out"
    >
      {/* Thumbnail */}
      <div className="aspect-video overflow-hidden bg-slate-100">
        <Image
          src={post.thumbnailUrl}
          alt={post.title}
          width={480}
          height={270}
          className="object-cover w-full h-full
            group-hover:scale-105 transition-transform duration-300 ease-out"
        />
      </div>

      {/* Content */}
      <div className="p-5 lg:p-6 flex flex-col justify-between">
        <div>
          {/* Category badge */}
          <span className="inline-block text-xs font-semibold text-electric bg-electric/10 px-2.5 py-1 rounded-md mb-3">
            {post.category}
          </span>

          <p className="text-xs text-slate-400 mb-2 font-medium">{formattedDate}</p>

          <h3 className="text-base font-bold text-navy leading-snug line-clamp-2 mb-2 group-hover:text-electric transition-colors duration-150">
            {post.title}
          </h3>

          <p className="text-sm text-slate-500 leading-relaxed line-clamp-2">
            {post.excerpt}
          </p>
        </div>
      </div>
    </Link>
  );
}
