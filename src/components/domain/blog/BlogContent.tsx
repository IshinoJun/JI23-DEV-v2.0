import tw from 'twin.macro';
import { RichEditorContent, RichEditorObject } from '@/models/RichEditorObject';
import { BloHeading } from '@/components/domain/blog/BlogHeading';
import { BlogBulletList } from '@/components/domain/blog/BlogBulletList';
import { BlogOrderedList } from '@/components/domain/blog/BlogOrderedList';
import { BlogImage } from '@/components/domain/blog/BlogImage';
import { BlogTextBlock } from '@/components/domain/blog/BlogTextBlock';
import { useCallback } from 'react';
import { RichEditorContentType } from '@/enumObjects/RichEditorContentType';

type Props = RichEditorObject;

export const BlogContent = (props: Props) => {
  const generateElement = useCallback(
    (content: RichEditorContent, idx: number) => {
      if (content.type === RichEditorContentType.BLOCK) {
        if (content.attributes.header && Array.isArray(content.value)) {
          return (
            <BloHeading
              value={content.value}
              heading={content.attributes.header}
              key={idx}
              {...content.attributes}
            />
          );
        }
        if (
          content.attributes.list === 'bullet' &&
          Array.isArray(content.value)
        ) {
          return <BlogBulletList value={content.value} key={idx} />;
        }

        if (
          content.attributes.list === 'ordered' &&
          Array.isArray(content.value)
        ) {
          return <BlogOrderedList value={content.value} key={idx} />;
        }

        if (content.attributes['code-block'] && !Array.isArray(content.value)) {
          return (
            <div tw='my-5 rounded-3xl overflow-hidden' key={idx}>
              <pre>
                <code
                  dangerouslySetInnerHTML={{ __html: content.value.value }}
                />
              </pre>
            </div>
          );
        }
      }

      if (content.type === RichEditorContentType.IMAGE) {
        return (
          <BlogImage
            src={content.value}
            height={content.attributes.height}
            width={content.attributes.width}
            key={idx}
          />
        );
      }

      if (content.type === RichEditorContentType.TEXT_BLOCK) {
        if (content.value.every((v) => v.value === '\n')) return;
        return <BlogTextBlock value={content.value} key={idx} />;
      }
    },
    [],
  );

  return (
    <div
      tw='text-blue-gray-300'
      css={{ '>:first-child': tw`mt-4`, 'h2 + h3': tw`mt-4` }}
    >
      {props.contents.map((c, idx) => generateElement(c, idx))}
    </div>
  );
};
