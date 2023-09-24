import {
  GlobalNavigationToHref,
  GlobalNavigationType,
} from '@/enumObjects/GlobalNavigationType';
import Link from 'next/link';
import Image from 'next/image';
import 'twin.macro';
import { GlobalNavigationItem } from '@/components/common/navigation/GlobalNavigationItem';
import { pagesPath, staticPath } from '@/lib/$path';

export const GlobalNavigation = () => {
  return (
    <nav tw='mx-auto max-w-5xl px-4 sm:px-6'>
      <div tw='sm:(flex space-x-12) items-center'>
        <div tw='flex justify-center'>
          <Link
            href={pagesPath.$url()}
            tw='flex justify-center pt-4 sm:pt-0 w-32 sm:-ml-4'
          >
            <Image
              src={staticPath.logo_png}
              alt='logo'
              width={788}
              height={197}
            />
          </Link>
        </div>
        <ul tw='flex items-center space-x-6 justify-center'>
          {[GlobalNavigationType.PROFILE, GlobalNavigationType.BLOGS].map(
            (type) => (
              <li key={type}>
                <GlobalNavigationItem
                  type={type}
                  href={GlobalNavigationToHref(type)}
                />
              </li>
            ),
          )}
        </ul>
      </div>
    </nav>
  );
};
