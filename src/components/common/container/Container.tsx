import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  size?: keyof typeof sizeClasses;
};

const sizeClasses = {
  large: 'max-w-5xl',
  medium: 'max-w-3xl',
};

export const Container = ({ children, size = 'large' }: Props) => {
  return (
    <div className={`sm:px-6 mx-auto px-4 relative ${sizeClasses[size]}`}>
      {children}
    </div>
  );
};
