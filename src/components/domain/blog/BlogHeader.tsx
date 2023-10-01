import { staticPath } from '@/lib/$path';
import { formatDate, toDateJP } from '@/utils/FormatUtils';
import { isString } from '@/utils/TypeGuardUtils';
import Image from 'next/image';
import { FaPen } from 'react-icons/fa';

type Props = {
  title: string;
  publishedAt?: string;
};

export const BlogHeader = ({ title, publishedAt }: Props): JSX.Element => {
  return (
    <header>
      <div className='rounded-3xl overflow-hidden relative flex m-auto'>
        <Image
          width={1200}
          height={630}
          src={staticPath.ogpBackground_png}
          alt={title}
        />
        <h1 className='sm:text-3xl sm:px-8 w-full flex justify-center text-base text-blue-gray-900 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4'>
          <span>{title}</span>
        </h1>
      </div>
      <div className='mt-4'>
        {isString(publishedAt) && (
          <div className='flex items-center space-x-1 text-blue-gray-300'>
            <FaPen size='10px' />
            <time
              className='text-sm block'
              dateTime={formatDate(
                toDateJP(new Date(publishedAt)),
                'dateHyphen',
              )}
            >
              {formatDate(toDateJP(new Date(publishedAt)), 'dateDot')}
            </time>
          </div>
        )}
      </div>
    </header>
  );
};
