import { GITHUB_LINK, TWITTER_LINK } from '@/constants/ExternLinks';
import { pagesPath, staticPath } from '@/lib/$path';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaTwitter } from 'react-icons/fa';

type Props = {
  className?: string;
};

export const BlogProfile = ({ className }: Props): JSX.Element => {
  return (
    <div className={`flex ${className}`}>
      <div className='max-w-[120px] -ml-5'>
        <Image alt='icon' src={staticPath.icon_png} height={166} width={166} />
      </div>
      <div className='flex flex-col justify-center ml-1'>
        <div className='flex space-x-4 items-center'>
          <p className='text-cyan-400 text-xl font-bold'>JI23</p>
          <div className='flex space-x-3'>
            <a
              href={GITHUB_LINK.href}
              target='_blank'
              rel='nofollow noopener noreferrer'
              className='lg:hover:-translate-y-1 lg:hover:scale-100'
              aria-label='github'
            >
              <FaGithub className='text-blue-gray-600' size='20px' />
            </a>
            <a
              href={TWITTER_LINK.href}
              target='_blank'
              rel='nofollow noopener noreferrer'
              className='lg:hover:-translate-y-1 lg:hover:scale-100'
              aria-label='twitter'
            >
              <FaTwitter className='text-blue-gray-600' size='20px' />
            </a>
          </div>
        </div>
        <p className='text-blue-gray-100 mt-1 text-sm'>
          某スタートアップで自社のアプリケーション開発をしています
        </p>
        <Link
          passHref
          href={pagesPath.profile.$url()}
          className='text-blue-gray-400 mt-3 text-xs hover:underline'
        >
          For more information ...
        </Link>
      </div>
    </div>
  );
};
