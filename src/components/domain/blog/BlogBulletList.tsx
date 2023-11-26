import { BlogText } from '@/components/domain/blog/BlogText';
import { RichEditorTextContent } from '@/models/RichEditorObject';
import { ReactNode } from 'react';

type Props = { children: ReactNode };

export const BlogBulletList = ({ children }: Props): JSX.Element => {
  return <ul className='list-disc list-inside my-5'>{children}</ul>;
};
