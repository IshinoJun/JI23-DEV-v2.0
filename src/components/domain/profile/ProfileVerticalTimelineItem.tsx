import 'twin.macro';

type Props = {
  date: string;
  description: string;
  stack?: string;
};

export const ProfileVerticalTimelineItem = ({
  date,
  description,
  stack,
}: Props) => {
  return (
    <>
      <p tw='block text-sm font-normal leading-none text-blue-gray-500'>
        {date}
      </p>
      <p tw='text-base mt-2 font-normal text-blue-gray-300'>{description}</p>
      {stack && <p tw='text-xs mt-2 font-normal text-blue-gray-300'>{stack}</p>}
    </>
  );
};
