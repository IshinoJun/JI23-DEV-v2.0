import { pagesPath } from '@/lib/$path';
import Link, { LinkProps } from 'next/link';
import React from 'react';
import { FaChevronRight } from 'react-icons/fa';
import 'twin.macro';

type BreadCrumbValue = {
  label: string;
} & Partial<Pick<LinkProps, 'href'>>;

type Props = {
  links: BreadCrumbValue[];
};

export const Breadcrumb = ({ links }: Props): JSX.Element => {
  return (
    <nav tw='flex' aria-label='Breadcrumb'>
      <ol tw='inline-flex items-center space-x-1 md:space-x-3 overflow-x-scroll'>
        <li tw='inline-flex items-center'>
          <Link
            href={pagesPath.$url()}
            tw='inline-flex items-center text-sm font-medium text-blue-gray-400 hover:text-white'
          >
            Home
          </Link>
        </li>
        {links.map((link, idx) => (
          <React.Fragment key={idx}>
            {typeof link.href !== 'undefined' ? (
              <li>
                <div tw='flex items-center'>
                  <FaChevronRight tw='text-blue-gray-400' size='16px' />
                  <Link
                    href={link.href}
                    tw='ml-1 text-sm font-medium text-blue-gray-400 hover:text-white md:ml-2 whitespace-nowrap'
                  >
                    {link.label}
                  </Link>
                </div>
              </li>
            ) : (
              <li aria-current='page'>
                <div tw='flex items-center'>
                  <FaChevronRight tw='text-blue-gray-400' size='16px' />
                  <span tw='ml-1 text-sm font-medium text-white md:ml-2 whitespace-nowrap'>
                    {link.label}
                  </span>
                </div>
              </li>
            )}
          </React.Fragment>
        ))}
      </ol>
    </nav>
  );
};
