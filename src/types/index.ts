export interface MemberBrand {
  id: string;
  name: string;
  logoUrl: string;
  category: 'Roda 2' | 'Roda 4' | 'Komponen & Baterai' | 'Infrastruktur';
  websiteUrl?: string;
  isFeatured: boolean;
  order: number;
}

export type NewsCategory =
  | 'Kegiatan PERIKLINDO'
  | 'Industri EV'
  | 'Kebijakan & Regulasi'
  | 'Kerja Sama'
  | 'Siaran Pers Resmi';

export interface NewsPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  thumbnailUrl: string;
  category: NewsCategory;
  publishedAt: string;
  author: string;
  isFeatured?: boolean;
  mediaType?: 'article' | 'video';
  externalUrl?: string;
  sourceName?: string;
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
  positionEn?: string;
  level: 'Dewan Pembina' | 'Dewan Pengawas' | 'Dewan Penasihat' | 'Pimpinan Inti' | 'Ketua Bidang' | 'Sekretariat';
  category?: 'chairman' | 'secretariat' | 'treasury' | 'advisor' | 'vice-chairman' | 'pembina' | 'pengawas';
  photoUrl: string;
  order: number;
  description?: string;
}

export interface ContactChannel {
  label: string;
  number: string;
  waUrl: string;
}

export interface ContactInfo {
  address: {
    building: string;
    street: string;
    district: string;
    city: string;
    postalCode: string;
    full: string;
  };
  email: string;
  phone: {
    secretariat: ContactChannel;
    registration: ContactChannel;
  };
  officeHours: {
    days: string;
    hours: string;
    note: string;
  };
  socialMedia: {
    instagram: string;
    youtube: string;
    linkedin: string;
  };
}

export type GalleryCategory =
  | 'PEVS (Pameran)'
  | 'PEVC (Konferensi)'
  | 'Audiensi Pemerintah'
  | 'Rapat Organisasi'
  | 'Kunjungan Industri'
  | 'Kerja Sama Nasional/Internasional'
  | 'Kegiatan Lainnya';

export interface GalleryItem {
  id: string;
  title: string;
  category: GalleryCategory;
  imageUrl: string;
  date: string;
  location?: string;
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
