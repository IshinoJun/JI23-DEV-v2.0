/* eslint-disable react/no-unescaped-entities */
import { TypedText } from '@/components/common/animation/TypedText';

export const TopTypedTitle = () => {
  return (
    <div className='w-full'>
      <h1 className='lg:text-5xl sm:text-3xl text-xl font-bold text-white'>
        <TypedText>
          Hi, I'm <span className='text-cyan-400'>JI23</span>
          <span>. </span>
          <br className='sm:hidden' />
          Software developer.
        </TypedText>
      </h1>
    </div>
  );
};
