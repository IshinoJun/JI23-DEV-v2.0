import GlobalStyles from '@/components/common/styles/GlobalStyles';
import { cache } from '@emotion/css';
import { CacheProvider } from '@emotion/react';
import { AppProps } from 'next/app';
import 'highlight.js/styles/github-dark.css';
import { NextSeo, DefaultSeo } from 'next-seo';
import SEO from '../../next-seo.config';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <CacheProvider value={cache}>
      <GlobalStyles />
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </CacheProvider>
  );
};

export default App;
