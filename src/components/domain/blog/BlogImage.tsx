import Image from 'next/image';

type Props = {
  src: string;
  height: number;
  width: number;
};

export const BlogImage = (props: Props): JSX.Element => {
  return (
    <p className='mt-8'>
      <Image {...props} alt='blog image' />
    </p>
  );
};
