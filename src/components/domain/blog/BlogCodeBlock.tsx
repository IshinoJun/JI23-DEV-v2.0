'use client';

import hljs from 'highlight.js';
import 'highlight.js/styles/github-dark.css';
import { useEffect } from 'react';

type Props = {
  code: string;
};

export const BlogCodeBlock = ({ code }: Props) => {
  useEffect(() => {
    hljs.highlightAll();
    hljs.configure({ ignoreUnescapedHTML: true });
  }, []);

  return (
    <div className='my-5 rounded-2xl overflow-hidden'>
      <pre className='hljs'>
        <code dangerouslySetInnerHTML={{ __html: code }} />
      </pre>
    </div>
  );
};
