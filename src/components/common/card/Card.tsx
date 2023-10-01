import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const Card = ({ children }: Props): JSX.Element => {
  return (
    <div className='flex flex-col max-w-sm rounded-2xl overflow-hidden shadow-lg bg-blue-gray-800 transition ease-in-out delay-100 lg:hover:-translate-y-1 lg:hover:scale-100'>
      {children}
    </div>
  );
};
