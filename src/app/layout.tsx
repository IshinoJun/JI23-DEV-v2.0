import { GoogleAnalytics } from '@/components/common/GoogleAnalytics';
import './global.css';
import { Inter } from 'next/font/google';
import { StickyHeader } from '@/components/common/header/StickyHeader';
import { GlobalNavigation } from '@/components/common/navigation/GlobalNavigation';
import { Footer } from '@/components/common/footer/Footer';
import { Metadata } from 'next';
import { ConfigService } from '@/service/ConfigService';

const description = `JI23's personal website.`;

export const metadata: Metadata = {
  metadataBase: new URL(ConfigService.baseUrl),
  description,
  title: { default: 'JI23-DEV', template: '%s | JI23-DEV' },
  creator: 'JI23',
  openGraph: {
    title: 'JI23-DEV',
    description,
    type: 'article',
    locale: 'ja_JP',
    siteName: 'JI23-DEV',
    images: `/ogp.png`,
    url: ConfigService.baseUrl,
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
