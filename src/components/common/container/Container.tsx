import { CSSInterpolation } from '@emotion/css';
import { ReactNode } from 'react';
import 'twin.macro';

type Props = {
  children: ReactNode;
  cssInterpolation?: CSSInterpolation;
};

export const Container = ({ children, cssInterpolation }: Props) => {
  return (
    <div tw='sm:px-6 mx-auto max-w-5xl px-4 relative' css={cssInterpolation}>
      {children}
    </div>
  );
};
