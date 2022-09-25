import { BlogText } from '@/components/domain/blog/BlogText';
import { RichEditorTextContent } from '@/models/RichEditorObject';
import 'twin.macro';

type Props = { value: RichEditorTextContent[] };

export const BlogBulletList = ({ value }: Props): JSX.Element => {
  return (
    <ul tw='list-disc list-inside my-5'>
      {value.map((v, idx) => (
        <li tw='my-4 pl-2.5' key={idx}>
          <BlogText {...v} />
        </li>
      ))}
    </ul>
  );
};
