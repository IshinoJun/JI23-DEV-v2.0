import { ExternLinkType } from '@/enumObjects/ExternLinkType';

export const TWITTER_LINK = {
  type: ExternLinkType.TWITTER,
  href: 'https://twitter.com/JJ_1123_I',
};

export const GITHUB_LINK = {
  type: ExternLinkType.GITHUB,
  href: 'https://github.com/IshinoJun',
};

export const ZENN_LINK = {
  type: ExternLinkType.ZENN,
  href: 'https://zenn.dev/jun1123',
};

export const PREVIOUS_SITE_LINK = {
  type: ExternLinkType.PREVIOUS_SITE,
  href: 'https://ji-23-dev-ishinojun.vercel.app/',
};

export const EXTERN_LINKS = [
  GITHUB_LINK,
  TWITTER_LINK,
  ZENN_LINK,
  PREVIOUS_SITE_LINK,
] as const;
