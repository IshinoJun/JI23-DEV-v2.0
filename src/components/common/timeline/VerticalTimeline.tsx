import { IconType } from 'react-icons';
import { ReactElement } from 'react';

type Props = {
  date: { icon: IconType; content: ReactElement; title: string }[];
};

export const VerticalTimeline = ({ date }: Props): JSX.Element => {
  return (
    <ol className='relative border-l border-blue-gray-700'>
      {date.map((d, idx) => (
        <li
          className={date.length + 1 === idx ? 'ml-6' : 'mb-10 ml-6'}
          key={idx}
        >
          <span className='flex absolute -left-3 justify-center items-center w-6 h-6 rounded-full ring-8 ring-blue-gray-900 bg-white'>
            <d.icon aria-hidden='true' className='text-blue-gray-900' />
          </span>
          <h3 className='mb-1 text-lg font-semibold text-white'>{d.title}</h3>
          {d.content}
        </li>
      ))}
    </ol>
  );
};
