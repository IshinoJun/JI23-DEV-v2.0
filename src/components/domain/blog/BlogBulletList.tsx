import { BlogText } from '@/components/domain/blog/BlogText';
import { RichEditorTextContent } from '@/models/RichEditorObject';

type Props = { value: RichEditorTextContent[] };

export const BlogBulletList = ({ value }: Props): JSX.Element => {
  return (
    <ul className='list-disc list-inside my-5'>
      {value.map((v, idx) => (
        <li className='my-4 pl-2.5' key={idx}>
          <BlogText {...v} />
        </li>
      ))}
    </ul>
  );
};
