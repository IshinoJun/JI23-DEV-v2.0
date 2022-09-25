import { ReactNode } from 'react';
import 'twin.macro';

type Props = {
  children: ReactNode;
};

export const Card = ({ children }: Props): JSX.Element => {
  return (
    <div tw='flex flex-direction[column] max-w-sm rounded-2xl overflow-hidden shadow-lg bg-blue-gray-800 transition ease-in-out delay-100 hover:(-translate-y-1 scale-100)'>
      {children}
    </div>
  );
};
