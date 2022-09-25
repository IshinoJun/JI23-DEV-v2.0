import { Card } from '@/components/common/card/Card';
import { Blog } from '@/models/Blog';
import Image from 'next/image';
import Link from 'next/link';
import 'twin.macro';
import type { MicroCMSListContent } from 'microcms-js-sdk';
import { formatDate } from '@/utils/FormatUtils';
import { Tag } from '@/components/common/tag/tag';
import { ScrollBar } from '@/components/common/animation/ScrollBar';
import { pagesPath, staticPath } from '@/lib/$path';

type Props = Blog & MicroCMSListContent;

export const BlogLinkCard = ({ title, publishedAt, tags, id }: Props) => {
  return (
    <Link href={pagesPath.blogs._id(id).$url()} passHref>
      <a tw='flex justify-center'>
        <Card>
          <div tw='relative flex'>
            <Image
              width='640px'
              height='336px'
              src={staticPath.ogpBackground_png}
              alt={title}
            />
            <h2 tw='text-blue-gray-900 text-base flex justify-center absolute top-1/2 left-1/2 transform[translate(-50%, -50%)] w-full px-4'>
              <span>{title}</span>
            </h2>
          </div>
          <div tw='flex flex-direction[column] flex[1] justify-between mx-6 my-4'>
            {publishedAt && (
              <time
                tw='text-blue-gray-300 text-sm'
                dateTime={formatDate(new Date(publishedAt), 'dateHyphen')}
              >
                {formatDate(new Date(publishedAt), 'dateDot')}
              </time>
            )}
            <ScrollBar>
              <div tw='mt-4 mb-2 flex'>
                {tags?.map((tag) => (
                  <Tag key={tag.id} name={tag.name} />
                ))}
              </div>
            </ScrollBar>
          </div>
        </Card>
      </a>
    </Link>
  );
};
