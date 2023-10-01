import { RichEditorTextContent } from '@/models/RichEditorObject';
import { useCallback } from 'react';
import { BlogText } from '@/components/domain/blog/BlogText';

type Props = {
  value: RichEditorTextContent[];
  heading: 1 | 2 | 3 | 4 | 5;
};

export const BloHeading = ({ value, heading }: Props): JSX.Element => {
  const generateElement = useCallback(
    (value: RichEditorTextContent[], heading: 1 | 2 | 3 | 4 | 5) => {
      switch (heading) {
        case 1:
          return (
            <h1 className='text-3xl mt-20 font-semibold'>
              {value.map((v, idx) => (
                <BlogText key={idx} {...v} />
              ))}
            </h1>
          );
        case 2:
          return (
            <h2 className='text-2xl mt-16 font-semibold'>
              {value.map((v, idx) => (
                <BlogText key={idx} {...v} />
              ))}
            </h2>
          );
        case 3:
          return (
            <h3 className='text-xl mt-14 font-semibold'>
              {value.map((v, idx) => (
                <BlogText key={idx} {...v} />
              ))}
            </h3>
          );
        case 4:
          return (
            <h4 className='text-lg mt-12 font-semibold'>
              {value.map((v, idx) => (
                <BlogText key={idx} {...v} />
              ))}
            </h4>
          );
        case 5:
          return (
            <h5 className='text-base mt-10 font-semibold'>
              {value.map((v, idx) => (
                <BlogText key={idx} {...v} />
              ))}
            </h5>
          );
      }
    },
    [],
  );

  return generateElement(value, heading);
};
