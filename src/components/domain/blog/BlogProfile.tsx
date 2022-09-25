import { GITHUB_LINK, TWITTER_LINK } from '@/constants/ExternLinks';
import { pagesPath, staticPath } from '@/lib/$path';
import { CSSInterpolation } from '@emotion/css';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaTwitter } from 'react-icons/fa';
import 'twin.macro';

type Props = {
  cssInterpolation?: CSSInterpolation;
};

export const BlogProfile = ({ cssInterpolation }: Props): JSX.Element => {
  return (
    <div tw='flex' css={cssInterpolation}>
      <div tw='max-width[120px] -ml-5'>
        <Image
          alt='icon'
          src={staticPath.icon_png}
          height='166px'
          width='166px'
        />
      </div>
      <div tw='flex flex-direction[column] justify-center ml-1'>
        <div tw='flex space-x-4 items-center'>
          <p tw='text-cyan-400 text-xl font-bold'>JI23</p>
          <div tw='flex space-x-3'>
            <a
              href={GITHUB_LINK.href}
              target='_blank'
              rel='nofollow noopener noreferrer'
              tw='lg:hover:(-translate-y-1 scale-100)'
              aria-label='github'
            >
              <FaGithub tw='text-blue-gray-600' size='20px' />
            </a>
            <a
              href={TWITTER_LINK.href}
              target='_blank'
              rel='nofollow noopener noreferrer'
              tw='lg:hover:(-translate-y-1 scale-100)'
              aria-label='twitter'
            >
              <FaTwitter tw='text-blue-gray-600' size='20px' />
            </a>
          </div>
        </div>
        <p tw='text-blue-gray-100 mt-1 text-sm'>
          某スタートアップで自社開発のアプリケーション開発をしています
        </p>
        <Link passHref href={pagesPath.profile.$url()}>
          <a tw='text-blue-gray-400 mt-3 text-xs hover:underline'>
            For more information ...
          </a>
        </Link>
      </div>
    </div>
  );
};
