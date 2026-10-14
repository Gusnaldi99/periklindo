export interface MemberBrand {
  id: string;
  name: string;
  logoUrl: string;
  category: 'Roda 2' | 'Roda 4' | 'Komponen & Baterai' | 'Infrastruktur';
  websiteUrl?: string;
  isFeatured: boolean;
  order: number;
}

export interface NewsPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  thumbnailUrl: string;
  category: 'Siaran Pers' | 'Regulasi' | 'Kegiatan' | 'Industri EV';
  publishedAt: string;
  author: string;
  isFeatured?: boolean;
}

export interface SocialMediaPost {
  id: string;
  platform: 'Instagram' | 'YouTube' | 'LinkedIn';
  caption: string;
  mediaUrl: string;
  externalUrl: string;
  postedAt: string;
  isActive: boolean;
}

export interface OrgMember {
  id: string;
  fullName: string;
  position: string;
  level: 'Pimpinan Inti' | 'Ketua Bidang' | 'Sekretariat';
  photoUrl: string;
  order: number;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Pameran PEVS' | 'Audiensi Pemerintah' | 'Seminar & Forum' | 'Kunjungan';
  imageUrl: string;
  date: string;
  description: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
  order: number;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
  sentAt: string;
  isRead: boolean;
}
