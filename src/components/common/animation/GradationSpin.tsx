import 'twin.macro';

export const GradationSpin = (): JSX.Element => {
  return (
    <div tw='animate-spin animation[spin 10s linear infinite] absolute left-0 top-0 w-full filter[blur(100px)] opacity-20 z-index[-1] max-width[44%] min-height[74%]'>
      <div tw='absolute right-0 top-0 width[70%] max-height[70%] min-height[70%] min-width[70%] border-radius[1000000px] bg-yellow-600' />
      <div tw='absolute right-0 bottom-0 width[70%] max-height[70%] min-height[70%] min-width[70%] border-radius[1000000px] bg-blue-600' />
      <div tw='absolute left-0 top-1/2 transform[translateY(-50%)] width[70%] max-height[70%] min-height[70%] min-width[70%] border-radius[1000000px] bg-pink-600' />
    </div>
  );
};
