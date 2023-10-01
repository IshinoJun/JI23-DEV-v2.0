import React from 'react';
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';
import { ConfigService } from '@/service/ConfigService';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    initialProps.styles = (
      <React.Fragment>{initialProps.styles}</React.Fragment>
    );

    return initialProps;
  }

  render() {
    return (
      <Html lang='ja'>
        <Head>
          <link
            href='https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap'
            rel='stylesheet'
          />
          {ConfigService.gaTrackingId && (
            <>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${ConfigService.gaTrackingId}`}
              />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${ConfigService.gaTrackingId}', {
              page_path: window.location.pathname,
            });
        `,
                }}
              />
            </>
          )}
          {ConfigService.googleSearchId ? (
            <meta
              name='google-site-verification'
              content={ConfigService.googleSearchId}
            />
          ) : null}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
