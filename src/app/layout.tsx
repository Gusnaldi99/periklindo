import type { Metadata } from 'next';
import { Source_Serif_4, Public_Sans } from 'next/font/google';
import './globals.css';

const sourceSerif = Source_Serif_4({
  variable: '--font-source-serif',
  subsets: ['latin'],
  weight: ['600', '700'],
  display: 'swap',
});

const publicSans = Public_Sans({
  variable: '--font-public-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://periklindo.or.id'),
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
  icons: {
    icon: [
      { url: '/assets/logo/logo.ico' },
      { url: '/assets/logo/logo32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/assets/logo/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/assets/logo/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/assets/logo/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: 'PERIKLINDO | Perkumpulan Industri Kendaraan Listrik Indonesia',
    description:
      'Asosiasi industri kendaraan listrik Indonesia. Berdiri sejak 2021.',
    type: 'website',
    locale: 'id_ID',
    url: '/',
    siteName: 'PERIKLINDO',
    images: [
      {
        url: '/assets/logo/logo-periklindo.png',
        width: 232,
        height: 144,
        alt: 'Logo PERIKLINDO',
      },
    ],
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
      className={`${sourceSerif.variable} ${publicSans.variable} h-full`}
    >
      <body className={`${publicSans.className} min-h-full flex flex-col antialiased`}>
        {children}
      </body>
    </html>
  );
}
