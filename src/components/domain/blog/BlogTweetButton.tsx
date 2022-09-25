import Image from 'next/image';
import React from 'react';
import 'twin.macro';

type Props = {
  id: string;
  title: string;
};

export const BlogTweetButton = ({ id, title }: Props): JSX.Element => {
  return (
    <div tw='text-left hover:(-translate-y-1 scale-100)'>
      <a
        tw='inline-flex items-center p-0 overflow-hidden text-white px-3 py-2 bg-twitter rounded-3xl'
        href={`https://twitter.com/intent/tweet?${new URLSearchParams({
          url: `${process.env.NEXT_PUBLIC_BASE_URL}/blogs/${id}`,
          text: title,
        }).toString()}`}
        rel='nofollow noopener noreferrer'
        target='_black'
      >
        <Image src='/twitterLogoWhite.svg' height={17} width={31} alt='tweet' />
        <div tw='pl-1 text-sm text-white font-bold'>Tweet</div>
      </a>
    </div>
  );
};
