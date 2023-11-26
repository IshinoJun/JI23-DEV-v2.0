import { ReactNode, useCallback } from 'react';
import { unreachable } from '@/utils/ErrorHandlingUtils';

type Props = {
  heading: string;
  children: ReactNode;
};

export const BlogHeading = ({ heading, children }: Props): JSX.Element => {
  const generateElement = useCallback(() => {
    switch (heading) {
      case 'h1':
        return <h1 className='text-3xl mt-20 font-semibold'>{children}</h1>;
      case 'h2':
        return <h2 className='text-2xl mt-16 font-semibold'>{children}</h2>;
      case 'h3':
        return <h3 className='text-xl mt-14 font-semibold'>{children}</h3>;
      case 'h4':
        return <h4 className='text-lg mt-12 font-semibold'>{children}</h4>;
      case 'h5':
        return <h5 className='text-base mt-10 font-semibold'>{children}</h5>;
      default:
        unreachable();
    }
  }, [children, heading]);

  return generateElement();
};
