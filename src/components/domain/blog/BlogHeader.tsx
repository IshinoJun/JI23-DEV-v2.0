import { staticPath } from '@/lib/$path';
import { formatDate } from '@/utils/FormatUtils';
import { isString } from '@/utils/TypeGuardUtils';
import Image from 'next/image';
import { FaPen } from 'react-icons/fa';
import 'twin.macro';

type Props = {
  title: string;
  publishedAt?: string;
};

export const BlogHeader = ({ title, publishedAt }: Props): JSX.Element => {
  return (
    <header>
      <div tw='rounded-3xl overflow-hidden relative flex m-auto'>
        <Image
          width='1200px'
          height='630px'
          objectFit='cover'
          src={staticPath.ogpBackground_png}
          alt={title}
        />
        <h1 tw='sm:(text-3xl px-8) w-full flex justify-center text-base text-blue-gray-900 absolute top-1/2 left-1/2 transform[translate(-50%, -50%)] px-4'>
          <span>{title}</span>
        </h1>
      </div>
      <div tw='mt-4'>
        {isString(publishedAt) && (
          <div tw='flex items-center space-x-1 text-blue-gray-300'>
            <FaPen size='10px' />
            <time
              tw='text-sm block'
              dateTime={formatDate(new Date(publishedAt), 'dateHyphen')}
            >
              {formatDate(new Date(publishedAt), 'dateDot')}
            </time>
          </div>
        )}
      </div>
    </header>
  );
};
