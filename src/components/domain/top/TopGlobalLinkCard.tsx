import { GlobalNavigationIcon } from '@/components/common/navigation/GlobalNavigationIcon';
import {
  GlobalNavigationToHref,
  GlobalNavigationToTitle,
  GlobalNavigationType,
} from '@/enumObjects/GlobalNavigationType';
import Link from 'next/link';
import 'twin.macro';

type Props = {
  type: GlobalNavigationType;
};

export const TopGlobalLinkCard = ({ type }: Props): JSX.Element => {
  return (
    <Link passHref href={GlobalNavigationToHref(type)}>
      <a tw='height[288px] flex items-center justify-center p-6 rounded-3xl border shadow-md bg-opacity-40 bg-blue-gray-800 border-blue-gray-700 transition ease-in-out delay-100 lg:hover:(-translate-y-1 scale-100 bg-opacity-60)'>
        <div tw='space-y-4'>
          <GlobalNavigationIcon type={type} size='120px' color='white' />
          <h2 tw='text-center mb-2 text-2xl font-bold tracking-tight text-white'>
            {GlobalNavigationToTitle(type)}
          </h2>
        </div>
      </a>
    </Link>
  );
};
