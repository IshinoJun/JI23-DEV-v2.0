import { TypedText } from '@/components/common/animation/TypedText';
import 'twin.macro';

export const TopTypedTitle = () => {
  return (
    <div tw='w-full'>
      <h1 tw='lg:text-5xl sm:text-3xl text-xl font-bold text-white'>
        <TypedText>
          Hi, I,m <span tw='text-cyan-400'>JI23</span>
          <span>. </span>
          <br tw='sm:hidden' />
          Software developer.
        </TypedText>
      </h1>
    </div>
  );
};
