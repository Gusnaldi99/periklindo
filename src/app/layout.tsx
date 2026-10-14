import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Inter } from 'next/font/google';
import './globals.css';

const plusJakarta = Plus_Jakarta_Sans({
  variable: '--font-heading',
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  display: 'swap',
});

const inter = Inter({
  variable: '--font-body',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'PERIKLINDO | Perkumpulan Industri Kendaraan Listrik Indonesia',
    template: '%s | PERIKLINDO',
  },
  description:
    'Website resmi PERIKLINDO, asosiasi industri kendaraan listrik Indonesia. Berdiri sejak 2021, mewadahi produsen, komponen, dan infrastruktur EV nasional.',
  keywords: [
    'Periklindo',
    'asosiasi kendaraan listrik',
    'kendaraan listrik Indonesia',
    'PEVS',
    'electric vehicle Indonesia',
  ],
  openGraph: {
    title: 'PERIKLINDO | Perkumpulan Industri Kendaraan Listrik Indonesia',
    description:
      'Asosiasi industri kendaraan listrik Indonesia. Berdiri sejak 2021.',
    type: 'website',
    locale: 'id_ID',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${plusJakarta.variable} ${inter.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased">
        {children}
      </body>
    </html>
  );
}
