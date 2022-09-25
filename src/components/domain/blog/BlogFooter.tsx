import { BlogTweetButton } from '@/components/domain/blog/BlogTweetButton';
import 'twin.macro';
import { BlogProfile } from '@/components/domain/blog/BlogProfile';
import tw from 'twin.macro';

type Props = {
  id: string;
  title: string;
};

export const BlogFooter = ({ id, title }: Props): JSX.Element => {
  return (
    <footer>
      <aside>
        <div tw='mt-10 flex justify-end'>
          <BlogTweetButton id={id} title={title} />
        </div>
      </aside>
      <aside>
        <BlogProfile cssInterpolation={tw`mt-10`} />
      </aside>
    </footer>
  );
};
