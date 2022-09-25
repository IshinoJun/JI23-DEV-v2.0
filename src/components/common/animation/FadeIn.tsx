import { ReactNode } from 'react';
import tw from 'twin.macro';

type Props = {
  children: ReactNode;
  delay: '0' | '100' | '200' | '300' | '400' | '600' | '800' | '1000' | '2000';
};

const styles = {
  delay: {
    '0': tw`animate-fade-in animation-delay[0ms]`,
    '100': tw`animate-fade-in animation-delay[100ms]`,
    '200': tw`animate-fade-in animation-delay[200ms]`,
    '300': tw`animate-fade-in animation-delay[300ms]`,
    '400': tw`animate-fade-in animation-delay[400ms]`,
    '600': tw`animate-fade-in animation-delay[600ms]`,
    '800': tw`animate-fade-in animation-delay[800ms]`,
    '1000': tw`animate-fade-in animation-delay[1000ms]`,
    '2000': tw`animate-fade-in animation-delay[2000ms]`,
  },
};

export const FadeIn = ({ children, delay }: Props): JSX.Element => {
  return <div css={styles.delay[delay]}>{children}</div>;
};
