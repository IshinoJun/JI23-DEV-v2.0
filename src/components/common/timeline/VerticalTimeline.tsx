import { IconType } from 'react-icons';
import { ReactElement } from 'react';
import tw from 'twin.macro';

type Props = {
  date: { icon: IconType; content: ReactElement; title: string }[];
};

export const VerticalTimeline = ({ date }: Props): JSX.Element => {
  return (
    <ol tw='relative border-l border-blue-gray-700'>
      {date.map((d, idx) => (
        <li css={date.length + 1 === idx ? tw`ml-6` : tw`mb-10 ml-6`} key={idx}>
          <span tw='flex absolute -left-3 justify-center items-center w-6 h-6 rounded-full ring-8 ring-blue-gray-900 bg-white'>
            <d.icon aria-hidden='true' tw='text-blue-gray-900' />
          </span>
          <h3 tw='mb-1 text-lg font-semibold text-white'>{d.title}</h3>
          {d.content}
        </li>
      ))}
    </ol>
  );
};
