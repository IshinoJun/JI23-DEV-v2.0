import { BlogTweetButton } from '@/components/domain/blog/BlogTweetButton';
import { BlogProfile } from '@/components/domain/blog/BlogProfile';

type Props = {
  id: string;
  title: string;
};

export const BlogFooter = ({ id, title }: Props): JSX.Element => {
  return (
    <footer>
      <aside>
        <div className='mt-10 flex justify-end'>
          <BlogTweetButton id={id} title={title} />
        </div>
      </aside>
      <aside>
        <BlogProfile className='mt-10' />
      </aside>
    </footer>
  );
};
