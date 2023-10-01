type Props = {
  name: string;
};

export const Tag = ({ name }: Props) => {
  return (
    <span className='inline-block bg-blue-gray-200 rounded-full px-3 py-1 text-sm text-blue-gray-700 mr-2 mb-2 whitespace-nowrap'>
      {name}
    </span>
  );
};
