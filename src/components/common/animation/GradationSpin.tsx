import 'twin.macro';

export const GradationSpin = (): JSX.Element => {
  return (
    <div tw='animate-spin-slow absolute left-0 top-0 w-full blur-[100px] opacity-20 z-[-1] max-w-[44%] min-h-[74%]'>
      <div tw='absolute right-0 top-0 w-[70%] max-h-[70%] min-h-[70%] min-w-[70%] rounded-[1000000px] bg-yellow-600' />
      <div tw='absolute right-0 bottom-0 w-[70%] max-h-[70%] min-h-[70%] min-w-[70%] rounded-[1000000px] bg-blue-600' />
      <div tw='absolute left-0 top-1/2 -translate-y-1/2 w-[70%] max-h-[70%] min-h-[70%] min-w-[70%] rounded-[1000000px] bg-pink-600' />
    </div>
  );
};
