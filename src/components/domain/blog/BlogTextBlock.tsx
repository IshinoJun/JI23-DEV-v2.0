import { BlogText } from '@/components/domain/blog/BlogText';
import { RichEditorTextContent } from '@/models/RichEditorObject';
import 'twin.macro';

type Props = {
  value: RichEditorTextContent[];
};

export const BlogTextBlock = ({ value }: Props) => {
  return (
    <p tw='mt-5'>
      {value.map((v, idx) => (
        <BlogText key={idx} {...v} />
      ))}
    </p>
  );
};
