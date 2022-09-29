import 'twin.macro';
import { StickyHeader } from '@/components/common/header/StickyHeader';
import { GlobalNavigation } from '@/components/common/navigation/GlobalNavigation';
import { Footer } from '@/components/common/footer/Footer';
import { Container } from '@/components/common/container/Container';
import { Breadcrumb } from '@/components/common/breadcrumb/Breadcrumb';
import { GetStaticProps, NextPage } from 'next';
import type { MicroCMSListResponse } from 'microcms-js-sdk';
import { Blog } from '@/models/Blog';
import { microCMSClient } from '@/clients/microCMS/microCMSClient';
import { BlogLinkCard } from '@/components/domain/blog/BlogLinkCard';
import { FadeIn } from '@/components/common/animation/FadeIn';
import { NextSeo } from 'next-seo';

type Props = {
  blogs: MicroCMSListResponse<Blog>;
};

const description = `JI23's blogs`;

const BlogsPage: NextPage<Props> = ({ blogs }) => {
  return (
    <>
      <NextSeo
        title='Blogs'
        description={description}
        openGraph={{ type: 'article', description }}
      />
      <StickyHeader>
        <GlobalNavigation />
      </StickyHeader>
      <main tw='overflow-hidden relative'>
        <Container>
          <div tw='mt-4'>
            <Breadcrumb links={[{ label: 'Blogs' }]} />
          </div>
          <div tw='mt-8 sm:mt-10'>
            <h1 tw='text-4xl text-white font-bold'>Blogs</h1>
            <div tw='mt-8 space-y-10 sm:mt-10 relative'>
              <FadeIn delay='100'>
                <div tw='grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
                  {blogs.contents.map((blog) => (
                    <BlogLinkCard key={blog.id} {...blog} />
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default BlogsPage;

export const getStaticProps: GetStaticProps = async (): Promise<{
  props: Props;
}> => {
  const blogs = await microCMSClient.blogs.$get({
    query: { offset: 0, limit: 9999 },
  });

  return {
    props: {
      blogs,
    },
  };
};
