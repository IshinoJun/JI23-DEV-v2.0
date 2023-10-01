import {
  RichEditorTextContent,
  RichEditorTextContentAttributes,
} from '@/models/RichEditorObject';
import { useCallback } from 'react';

type Props = RichEditorTextContent;

const styles = {
  'bold-italic-underline': 'font-bold italic underline',
  'bold-italic': 'font-bold italic',
  'bold-underline': 'font-bold underline',
  'italic-underline': 'font-bold italic',
  bold: 'font-bold',
  italic: 'italic',
  underline: 'underline',
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
            className={`text-cyan-400 hover:underline ${content.attributes}`}
            href={content.attributes.link}
            rel={content.attributes.rel}
            target={content.attributes.target}
          >
            {content.value}
          </a>
        );
      }
      if (content.attributes?.code) {
        return (
          <code className='py-0.5 px-1 mx-1 bg-blue-gray-700 rounded break-all'>
            {content.value}
          </code>
        );
      }

      if (
        content.attributes?.bold ||
        content.attributes?.italic ||
        content.attributes?.underline
      ) {
        return (
          <span className={getStyle(content.attributes)}>{content.value}</span>
        );
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
