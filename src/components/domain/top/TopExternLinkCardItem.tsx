import { ExternLinkType } from '@/enumObjects/ExternLinkType';
import { staticPath } from '@/lib/$path';
import { FaGithub, FaTwitter } from 'react-icons/fa';
import Image from 'next/image';
import { unreachable } from '@/utils/ErrorHandlingUtils';
import { useCallback } from 'react';

type Props = {
  type: ExternLinkType;
};

export const TopExternLinkCardItem = ({ type }: Props): JSX.Element => {
  const typeToElement = useCallback(() => {
    switch (type) {
      case ExternLinkType.GITHUB:
        return <FaGithub className='text-blue-gray-600' size='40px' />;
      case ExternLinkType.TWITTER:
        return <FaTwitter className='text-blue-gray-600' size='40px' />;
      case ExternLinkType.ZENN:
        return (
          <Image
            src={staticPath.zenn_logo_only_svg}
            height={40}
            width={40}
            alt='zenn logo'
          />
        );
      case ExternLinkType.PREVIOUS_SITE:
        return (
          <span className='text-xl font-medium text-blue-gray-600'>
            Previous
            <br />
            Site.
          </span>
        );
      default:
        unreachable();
    }
  }, [type]);

  return typeToElement();
};
