import { isString } from '@/utils/TypeGuardUtils';

export class ConfigService {
  public static get baseUrl(): string {
    const env = process.env.NEXT_PUBLIC_BASE_URL;
    if (isString(env)) {
      return env;
    } else {
      return 'http://localhost:3000';
    }
  }

  public static get gaTrackingId(): string {
    const env = process.env.NEXT_PUBLIC_GA_TRACKING_ID;
    if (isString(env)) {
      return env;
    } else {
      return '';
    }
  }

  public static get googleSearchId(): string {
    const env = process.env.NEXT_PUBLIC_GOOGLE_SEARCH_ID;
    if (isString(env)) {
      return env;
    } else {
      return '';
    }
  }
}
