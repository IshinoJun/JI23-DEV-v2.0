import { BlogText } from '@/components/domain/blog/BlogText';
import { ReactNode } from 'react';

type Props = { children: ReactNode };

export const BlogOrderedList = ({ children }: Props): JSX.Element => {
  return <ul className='list-decimal list-inside my-5'>{children}</ul>;
};
