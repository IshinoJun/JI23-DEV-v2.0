'use client';

import { GlobalNavigationIcon } from '@/components/common/navigation/GlobalNavigationIcon';
import {
  GlobalNavigationToTitle,
  GlobalNavigationType,
} from '@/enumObjects/GlobalNavigationType';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type Props = {
  href: string;
  type: GlobalNavigationType;
};

export const GlobalNavigationItem = ({ href, type }: Props): JSX.Element => {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={`relative h-12 flex items-center space-x-2 text-white font-semibold before:absolute before:bottom-0 before:block before:w-full before:h-0.5  before:bg-blue-gray-600 before:transition before:scale-x-0 hover:before:scale-100 ${
        pathname?.includes(href) ? 'before:scale-x-100' : ''
      }`}
    >
      <GlobalNavigationIcon type={type} color='white' />
      <span>{GlobalNavigationToTitle(type)}</span>
    </Link>
  );
};
