import { GoogleAnalytics } from '@/components/common/GoogleAnalytics';
import './global.css';
import { Inter } from 'next/font/google';
import { StickyHeader } from '@/components/common/header/StickyHeader';
import { GlobalNavigation } from '@/components/common/navigation/GlobalNavigation';
import { Footer } from '@/components/common/footer/Footer';
import { Metadata } from 'next';

const description = `JI23's personal website.`;

export const metadata: Metadata = {
  description,
  title: { default: 'JI23-DEV', template: '%s | JI23-DEV' },
  creator: 'JI23',
  openGraph: {
    description,
    type: 'article',
    locale: 'ja_JP',
    siteName: 'JI23-DEV',
    url: process.env.NEXT_PUBLIC_BASE_URL,
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL ?? ''}/ogp.png`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
  },
  icons: ['/icon.png'],
};

const RampartOneFont = Inter({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='ja'>
      <head>
        <GoogleAnalytics />
      </head>
      <body className={RampartOneFont.className}>
        <StickyHeader>
          <GlobalNavigation />
        </StickyHeader>
        {children}
        <Footer />
      </body>
    </html>
  );
};
export default RootLayout;
