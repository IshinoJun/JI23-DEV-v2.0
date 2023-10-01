'use client';

import Typed, { TypedOptions } from 'typed.js';
import { ReactNode, useEffect, useRef, useState } from 'react';

type Props = {
  children: ReactNode;
  options?: TypedOptions;
};

export const TypedText = ({ children, options }: Props): JSX.Element => {
  const [typed, setTyped] = useState<Typed | null>(null);

  // Create Ref element.
  const animationRef = useRef<HTMLSpanElement | null>(null);
  const stringsRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (!animationRef.current || !stringsRef.current) return;

    const typed = new Typed(animationRef.current, {
      stringsElement: stringsRef.current,
      startDelay: 300,
      typeSpeed: 25,
      showCursor: true,
      cursorChar: '|',
      ...options,
    });
    setTyped(typed);

    return () => {
      typed.destroy();
    };
  }, [options]);

  return (
    <>
      <span ref={animationRef} />
      <span ref={stringsRef}>
        <span className={typed ? 'block' : 'hidden'}>{children}</span>
      </span>
    </>
  );
};
