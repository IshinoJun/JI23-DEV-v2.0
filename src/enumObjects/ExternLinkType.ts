import type { EnumUnionKey, EnumUnionValue } from '@/utils/TypeUtils';

export const ExternLinkType = {
  GITHUB: 'Github',
  TWITTER: 'Twitter',
  ZENN: 'Zenn',
  PREVIOUS_SITE: 'PreviousSite',
} as const;

export type ExternLinkType = EnumUnionValue<typeof ExternLinkType>;
export type ExternLinkTypeKey = EnumUnionKey<typeof ExternLinkType>;
