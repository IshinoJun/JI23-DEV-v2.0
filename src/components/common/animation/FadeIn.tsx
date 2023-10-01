import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  delay: '0' | '100' | '200' | '300' | '400' | '600' | '800' | '1000' | '2000';
};

const styles = {
  delay: {
    '0': 'animate-fade-in animation-delay-none',
    '100': 'animate-fade-in animation-delay-100',
    '200': 'animate-fade-in animation-delay-200',
    '300': 'animate-fade-in animation-delay-300',
    '400': 'animate-fade-in animation-delay-400',
    '600': 'animate-fade-in animation-delay-600',
    '800': 'animate-fade-in animation-delay-800',
    '1000': 'animate-fade-in animation-delay-1000',
    '2000': 'animate-fade-in animation-delay-2000',
  },
};

export const FadeIn = ({ children, delay }: Props): JSX.Element => {
  return <div className={styles.delay[delay]}>{children}</div>;
};
