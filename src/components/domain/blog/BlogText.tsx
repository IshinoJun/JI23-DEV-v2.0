import {
  RichEditorTextContent,
  RichEditorTextContentAttributes,
} from '@/models/RichEditorObject';
import { useCallback } from 'react';
import tw from 'twin.macro';

type Props = RichEditorTextContent;

const styles = {
  'bold-italic-underline': tw`font-bold italic underline`,
  'bold-italic': tw`font-bold italic`,
  'bold-underline': tw`font-bold underline`,
  'italic-underline': tw`font-bold italic`,
  bold: tw`font-bold`,
  italic: tw`italic`,
  underline: tw`underline`,
};

export const BlogText = (props: Props): JSX.Element => {
  const getStyle = useCallback(
    (attributes: RichEditorTextContentAttributes) => {
      if (attributes.bold && attributes.italic && attributes.underline) {
        return styles['bold-italic-underline'];
      }
      if (attributes.bold && attributes.italic) {
        return styles['bold-italic'];
      }
      if (attributes.bold && attributes.underline) {
        return styles['bold-underline'];
      }
      if (attributes.italic && attributes.underline) {
        return styles['italic-underline'];
      }
      if (attributes.bold) {
        return styles.bold;
      }
      if (attributes.italic) {
        return styles.italic;
      }
      if (attributes.underline) {
        return styles.underline;
      }
    },
    [],
  );

  const generateElement = useCallback(
    (content: RichEditorTextContent) => {
      if (content.attributes?.link) {
        return (
          <a
            tw='text-cyan-400 hover:underline'
            href={content.attributes.link}
            rel={content.attributes.rel}
            target={content.attributes.target}
            css={getStyle(content.attributes)}
          >
            {content.value}
          </a>
        );
      }
      if (content.attributes?.code) {
        return (
          <code tw='py-0.5 px-1 mx-1 bg-blue-gray-700 rounded break-all'>
            {content.value}
          </code>
        );
      }

      if (
        content.attributes?.bold ||
        content.attributes?.italic ||
        content.attributes?.underline
      ) {
        return <span css={getStyle(content.attributes)}>{content.value}</span>;
      }

      if (content.value === '\n') {
        return <br />;
      }

      return content.value;
    },
    [getStyle],
  );

  return <>{generateElement(props)}</>;
};
