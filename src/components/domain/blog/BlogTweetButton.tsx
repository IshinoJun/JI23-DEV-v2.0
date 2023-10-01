import { staticPath } from '@/lib/$path';
import { ConfigService } from '@/service/ConfigService';
import Image from 'next/image';
import React from 'react';

type Props = {
  id: string;
  title: string;
};

export const BlogTweetButton = ({ id, title }: Props): JSX.Element => {
  return (
    <div className='text-left lg:hover:-translate-y-1 lg:hover:scale-100'>
      <a
        className='inline-flex items-center p-0 overflow-hidden text-white px-3 py-2 bg-twitter rounded-3xl'
        href={`https://twitter.com/intent/tweet?${new URLSearchParams({
          url: `${ConfigService.baseUrl}/blogs/${id}`,
          text: title,
        }).toString()}`}
        rel='nofollow noopener noreferrer'
        target='_black'
      >
        <Image
          src={staticPath.twitterLogoWhite_svg}
          height={17}
          width={31}
          alt='tweet'
        />
        <div className='pl-1 text-sm text-white font-bold'>Tweet</div>
      </a>
    </div>
  );
};
