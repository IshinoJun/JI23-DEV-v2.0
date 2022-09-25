import { ConfigService } from '@/service/ConfigService';

// PVを測定する
export const pageView = (url: string): void => {
  if (!ConfigService.gaTrackingId) return;
  window.gtag('config', ConfigService.gaTrackingId, {
    page_path: url,
  });
};
