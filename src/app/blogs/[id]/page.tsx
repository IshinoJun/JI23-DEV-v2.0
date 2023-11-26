import { Footer } from '@/components/common/footer/Footer';
import { Container } from '@/components/common/container/Container';
import { Breadcrumb } from '@/components/common/breadcrumb/Breadcrumb';
import { Metadata, NextPage, ResolvingMetadata } from 'next';
import { microCMSClient } from '@/clients/microCMS/microCMSClient';
import { pagesPath } from '@/lib/$path';
import { Tag } from '@/components/common/tag/tag';
import { BlogContent } from '@/components/domain/blog/BlogContent';
import { BlogFooter } from '@/components/domain/blog/BlogFooter';
import { BlogHeader } from '@/components/domain/blog/BlogHeader';
import { FadeIn } from '@/components/common/animation/FadeIn';
import { draftMode } from 'next/headers';
import { ConfigService } from '@/service/ConfigService';

type Props = {
  params: { id: string };
  searchParams: { draftKey: string | null };
};

const getBlog = async (
  id: string,
  draftKey: string | null,
  isEnabled: boolean,
) => {
  if (draftKey && isEnabled) {
    return await microCMSClient.blogs._id(id).$get({
      query: { draftKey, richEditorFormat: 'object' },
    });
  } else {
    return await microCMSClient.blogs._id(id).$get({
      query: { richEditorFormat: 'object' },
    });
  }
};

export async function generateMetadata({
  params,
  searchParams,
}: Props): Promise<Metadata> {
  const { isEnabled } = draftMode();
  const blog = await getBlog(params.id, searchParams.draftKey, isEnabled);
  const description = `JI23's blog | ${blog.title}`;

  return {
    title: blog.title,
    description,
    openGraph: {
      title: blog.title,
      type: 'article',
      description,
      url: `${ConfigService.baseUrl}/blogs/${blog.id}`,
      images: `/api/blogs/${blog.id}/ogp?title=${blog.title}111111111111111111111111111111111111111111111jjdfasjajsjjsjjjsajasjああああああああ`,
    },
  };
}

const BlogsPage: NextPage<Props> = async ({
  params: { id },
  searchParams: { draftKey },
}) => {
  const { isEnabled } = draftMode();
  const blog = await getBlog(id, draftKey, isEnabled);

  return (
    <>
      <main className='overflow-hidden relative'>
        <Container>
          <div className='mt-4'>
            <Breadcrumb
              links={[
                { label: 'Blogs', href: pagesPath.blogs.$url() },
                { label: blog.title },
              ]}
            />
          </div>
        </Container>
        <Container size='medium'>
          <div className='mt-4 sm:mt-10'>
            <article>
              <BlogHeader title={blog.title} publishedAt={blog.publishedAt} />
              <div className='mt-8 pt-8 border-t-blue-gray-400 border-t-[1px]'>
                <FadeIn delay='100'>
                  {blog.tags?.map((tag, idx) => (
                    <Tag name={tag.name} key={idx} />
                  ))}
                </FadeIn>
                <FadeIn delay='200'>
                  <BlogContent contents={blog.content.contents} />
                </FadeIn>
              </div>
              <FadeIn delay='300'>
                <BlogFooter id={blog.id} title={blog.title} />
              </FadeIn>
            </article>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default BlogsPage;
