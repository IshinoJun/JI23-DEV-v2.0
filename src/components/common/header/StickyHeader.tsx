import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const StickyHeader = ({ children }: Props): JSX.Element => {
  return (
    <header className='bg-gradient-to-r from-blue-gray-900 to-blue-gray-800  sticky top-0 z-50'>
      {children}
    </header>
  );
};
