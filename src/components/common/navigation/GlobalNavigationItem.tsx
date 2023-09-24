import { GlobalNavigationIcon } from '@/components/common/navigation/GlobalNavigationIcon';
import {
  GlobalNavigationToTitle,
  GlobalNavigationType,
} from '@/enumObjects/GlobalNavigationType';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import tw from 'twin.macro';

type Props = {
  href: string;
  type: GlobalNavigationType;
};

export const GlobalNavigationItem = ({ href, type }: Props): JSX.Element => {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      css={[
        tw`relative h-12 flex items-center space-x-2 text-white font-semibold before:(absolute bottom-0 block w-full h-0.5  bg-blue-gray-600 transition scale-x-0) hover:(before:scale-x-100)`,
        pathname.includes(href) && tw`before:scale-x-100`,
      ]}
    >
      <GlobalNavigationIcon type={type} color='white' />
      <span>{GlobalNavigationToTitle(type)}</span>
    </Link>
  );
};
