import type { ComponentProps, ReactNode } from 'react';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import 'twin.macro';

interface Props {
  children: ReactNode;
}

type ScrollBarProps = Props & ComponentProps<typeof SimpleBar>;

export const ScrollBar = ({
  children,
  ...rest
}: ScrollBarProps): JSX.Element => {
  return (
    <SimpleBar
      autoHide={false}
      css={{
        '.simplebar-scrollbar:before': {
          height: '4px !important',
          background: 'rgb(214, 217,223)',
          opacity: 0.3,
        },
        '.simplebar-content-wrapper': {
          '&::-webkit-scrollbar': {
            display: 'none', // fix: iphone
          },
        },
      }}
      {...rest}
    >
      {children}
    </SimpleBar>
  );
};
