import { GlobalNavigationIcon } from '@/components/common/navigation/GlobalNavigationIcon';
import {
  GlobalNavigationToTitle,
  GlobalNavigationType,
} from '@/enumObjects/GlobalNavigationType';
import Link from 'next/link';
import { useRouter } from 'next/router';
import tw from 'twin.macro';

type Props = {
  href: string;
  type: GlobalNavigationType;
};

export const GlobalNavigationItem = ({ href, type }: Props): JSX.Element => {
  const router = useRouter();

  return (
    <Link href={href} passHref>
      <a
        css={[
          tw`relative h-12 flex items-center space-x-2 text-white font-semibold before:(absolute bottom-0 block w-full h-0.5 content bg-blue-gray-600 transition scale-x-0) hover:(before:scale-x-100)`,
          router.asPath.includes(href) && tw`before:scale-x-100`,
        ]}
      >
        <GlobalNavigationIcon type={type} color='white' />
        <span>{GlobalNavigationToTitle(type)}</span>
      </a>
    </Link>
  );
};
