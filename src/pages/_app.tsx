import { AppProps } from 'next/app';
import 'highlight.js/styles/github-dark.css';
import { DefaultSeo } from 'next-seo';
import SEO from '../../next-seo.config';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { ConfigService } from '@/service/ConfigService';
import { pageView } from '@/lib/gtag';
import '../styles/global.css';

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  useEffect(() => {
    // GA_TRACKING_ID が設定されていない場合は、処理終了
    if (!ConfigService.gaTrackingId) return;

    const handleRouteChange = (url: string): void => {
      pageView(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  );
};

export default App;
