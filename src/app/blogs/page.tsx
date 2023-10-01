import { Container } from '@/components/common/container/Container';
import { Breadcrumb } from '@/components/common/breadcrumb/Breadcrumb';
import { microCMSClient } from '@/clients/microCMS/microCMSClient';
import { BlogLinkCard } from '@/components/domain/blog/BlogLinkCard';
import { FadeIn } from '@/components/common/animation/FadeIn';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blogs',
};

const BlogsPage = async () => {
  const blogs = await microCMSClient.blogs.$get({
    query: { offset: 0, limit: 9999 },
  });

  return (
    <main className='overflow-hidden relative'>
      <Container>
        <div className='mt-4'>
          <Breadcrumb links={[{ label: 'Blogs' }]} />
        </div>
        <div className='mt-8 sm:mt-10'>
          <h1 className='text-4xl text-white font-bold'>Blogs</h1>
          <div className='mt-8 space-y-10 sm:mt-10 relative'>
            <FadeIn delay='100'>
              <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
                {blogs.contents.map((blog) => (
                  <BlogLinkCard key={blog.id} {...blog} />
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default BlogsPage;
