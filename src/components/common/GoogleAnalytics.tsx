'use client';

import { ConfigService } from '@/service/ConfigService';
import { usePathname, useSearchParams } from 'next/navigation';
import Script from 'next/script';
import { useEffect } from 'react';
import { pageView } from '@/lib/gtag';

export const GoogleAnalytics = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!ConfigService.gaTrackingId || !searchParams) return;

    const url = pathname + searchParams.toString();
    pageView(url);
  }, [pathname, searchParams]);

  return (
    <>
      <Script
        strategy='lazyOnload'
        src={`https://www.googletagmanager.com/gtag/js?id=${ConfigService.gaTrackingId}`}
      />
      <Script id='gtag-init' strategy='afterInteractive'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${ConfigService.gaTrackingId}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  );
};
