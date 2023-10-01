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
      <p className='block text-sm font-normal leading-none text-blue-gray-500'>
        {date}
      </p>
      <p className='text-base mt-2 font-normal text-blue-gray-300'>
        {description}
      </p>
      {stack && (
        <p className='text-xs mt-2 font-normal text-blue-gray-300'>{stack}</p>
      )}
    </>
  );
};
