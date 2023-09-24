import { ReactNode } from 'react';
import tw from 'twin.macro';

type Props = {
  children: ReactNode;
  delay: '0' | '100' | '200' | '300' | '400' | '600' | '800' | '1000' | '2000';
};

const styles = {
  delay: {
    '0': tw`animate-fade-in animation-delay-none`,
    '100': tw`animate-fade-in animation-delay-100`,
    '200': tw`animate-fade-in animation-delay-200`,
    '300': tw`animate-fade-in animation-delay-300`,
    '400': tw`animate-fade-in animation-delay-400`,
    '600': tw`animate-fade-in animation-delay-600`,
    '800': tw`animate-fade-in animation-delay-800`,
    '1000': tw`animate-fade-in animation-delay-1000`,
    '2000': tw`animate-fade-in animation-delay-2000`,
  },
};

export const FadeIn = ({ children, delay }: Props): JSX.Element => {
  return <div css={styles.delay[delay]}>{children}</div>;
};
