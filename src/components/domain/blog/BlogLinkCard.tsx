import { Card } from '@/components/common/card/Card';
import { Blog } from '@/models/Blog';
import Image from 'next/image';
import Link from 'next/link';
import 'twin.macro';
import type { MicroCMSListContent } from 'microcms-js-sdk';
import { formatDate, toDateJP } from '@/utils/FormatUtils';
import { Tag } from '@/components/common/tag/tag';
import { ScrollBar } from '@/components/common/animation/ScrollBar';
import { pagesPath, staticPath } from '@/lib/$path';

type Props = Blog & MicroCMSListContent;

export const BlogLinkCard = ({ title, publishedAt, tags, id }: Props) => {
  return (
    <Link href={pagesPath.blogs._id(id).$url()} tw='flex justify-center'>
      <Card>
        <div tw='relative flex'>
          <Image
            width={640}
            height={336}
            src={staticPath.ogpBackground_png}
            alt={title}
          />
          <h2 tw='text-blue-gray-900 text-base flex justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-4'>
            {title}
          </h2>
        </div>
        <div tw='flex flex-col flex-[1] justify-between mx-4 my-4'>
          {publishedAt && (
            <time
              tw='text-blue-gray-300 text-sm'
              dateTime={formatDate(
                toDateJP(new Date(publishedAt)),
                'dateHyphen',
              )}
            >
              {formatDate(toDateJP(new Date(publishedAt)), 'dateDot')}
            </time>
          )}
          <ScrollBar>
            <div tw='mt-4 mb-2 flex'>
              {tags?.map((tag) => <Tag key={tag.id} name={tag.name} />)}
            </div>
          </ScrollBar>
        </div>
      </Card>
    </Link>
  );
};
