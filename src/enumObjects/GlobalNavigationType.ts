import { pagesPath } from '@/lib/$path';
import { unreachable } from '@/utils/ErrorHandlingUtils';
import type { EnumUnionKey, EnumUnionValue } from '@/utils/TypeUtils';

export const GlobalNavigationType = {
  PROFILE: 'Profile',
  BLOGS: 'Blogs',
} as const;

export type GlobalNavigationType = EnumUnionValue<typeof GlobalNavigationType>;
export type GlobalNavigationKey = EnumUnionKey<typeof GlobalNavigationType>;

export const GlobalNavigationToTitle = (type: GlobalNavigationType) => {
  switch (type) {
    case GlobalNavigationType.PROFILE:
      return 'Profile';
    case GlobalNavigationType.BLOGS:
      return 'Blogs';
    default:
      unreachable();
  }
};

export const GlobalNavigationToHref = (type: GlobalNavigationType) => {
  switch (type) {
    case GlobalNavigationType.PROFILE:
      return pagesPath.profile.$url().pathname;
    case GlobalNavigationType.BLOGS:
      return pagesPath.blogs.$url().pathname;
    default:
      unreachable();
  }
};
