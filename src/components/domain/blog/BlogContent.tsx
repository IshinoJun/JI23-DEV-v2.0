import type {
  DOMNode,
  HTMLReactParserOptions,
  Element,
} from 'html-react-parser';
import parse, { attributesToProps, domToReact } from 'html-react-parser';
import styles from './BlogContent.module.css';
import { BlogHeading } from '@/components/domain/blog/BlogHeading';
import { Code } from 'bright';
import { isString } from '@/utils/TypeGuardUtils';
import { BlogImage } from '@/components/domain/blog/BlogImage';

const HEADING_NODE_LIST = ['h1', 'h2', 'h3', 'h4', 'h5'] as const;
let filename = '';

const options: HTMLReactParserOptions = {
  replace: (domNode) => {
    if (domNode.type === 'tag') {
      const { attribs, name } = domNode;
      const children = domNode.children as DOMNode[];

      // MarkdownProps とは異なる Props
      const props = attributesToProps(attribs);

      if (HEADING_NODE_LIST.some((node) => node === name)) {
        return (
          <BlogHeading heading={name} {...props}>
            {domToReact(children, options)}
          </BlogHeading>
        );
      }

      if (name === 'ul') {
        return (
          <ul className='list-disc list-inside my-5'>
            {domToReact(children, options)}
          </ul>
        );
      }

      if (name === 'ol') {
        return (
          <ul className='list-decimal list-inside my-5'>
            {domToReact(children, options)}
          </ul>
        );
      }

      if (name === 'li') {
        return <li className='my-2 pl-2.5'>{domToReact(children, options)}</li>;
      }

      if (name === 'p') {
        return <p className='mt-1'>{domToReact(children, options)}</p>;
      }

      if (name === 'a') {
        return (
          <a
            className={`text-cyan-400 hover:underline`}
            href={attribs.href}
            rel={attribs.rel}
            target={attribs.target}
          >
            {domToReact(children, options)}
          </a>
        );
      }

      if (name === 'span') {
        return <span>{domToReact(children, options)}</span>;
      }

      if (name === 'pre') {
        return <pre>{domToReact(children, options)}</pre>;
      }

      if (name === 'div') {
        filename = isString(props['data-filename'])
          ? props['data-filename']
          : '';
        return <div>{domToReact(children, options)}</div>;
      }

      if (name === 'code') {
        if ((domNode?.parent as unknown as Element | null)?.name === 'pre') {
          const lang = isString(props.className)
            ? props.className.split('-').pop() ?? ''
            : '';
          const title = filename;
          filename = '';
          return (
            <Code title={title} theme='github-dark' lineNumbers lang={lang}>
              {domToReact(children, options)}
            </Code>
          );
        } else {
          return (
            <code className='py-0.5 px-1 mx-1 bg-blue-gray-700 rounded break-all'>
              {domToReact(children, options)}
            </code>
          );
        }
      }

      if (name === 'img') {
        return (
          <BlogImage
            src={isString(props.src) ? props.src : ''}
            height={
              isString(props.height) ? Number.parseInt(props.height, 10) : 0
            }
            width={isString(props.width) ? Number.parseInt(props.width, 10) : 0}
          />
        );
      }

      if (name === 'br') return <br />;
    }
  },
};
type Props = { source: string };

export const BlogContent = ({ source }: Props): JSX.Element => {
  return (
    <div className={`text-blue-gray-300 ${styles.content}`}>
      {parse(source, options)}
    </div>
  );
};
