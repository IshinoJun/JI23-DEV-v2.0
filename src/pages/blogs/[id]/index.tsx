import { StickyHeader } from '@/components/common/header/StickyHeader';
import { GlobalNavigation } from '@/components/common/navigation/GlobalNavigation';
import { Footer } from '@/components/common/footer/Footer';
import { Container } from '@/components/common/container/Container';
import { Breadcrumb } from '@/components/common/breadcrumb/Breadcrumb';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import type { MicroCMSListContent } from 'microcms-js-sdk';
import { Blog } from '@/models/Blog';
import { microCMSClient } from '@/clients/microCMS/microCMSClient';
import { isPreviewData } from '@/models/PreviewDate';
import { pagesPath } from '@/lib/$path';
import { Tag } from '@/components/common/tag/tag';
import { BlogContent } from '@/components/domain/blog/BlogContent';
import { useEffect } from 'react';
import hljs from 'highlight.js';
import { BlogFooter } from '@/components/domain/blog/BlogFooter';
import { BlogHeader } from '@/components/domain/blog/BlogHeader';
import { FadeIn } from '@/components/common/animation/FadeIn';
import { NextSeo } from 'next-seo';
import { ConfigService } from '@/service/ConfigService';
import { usePathname } from 'next/navigation';

type Props = {
  blog: Blog & MicroCMSListContent;
  draftKey: string | null;
};

const BlogsPage: NextPage<Props> = ({ blog, draftKey }) => {
  const pathname = usePathname();

  const description = `JI23's blog | ${blog.title}`;
  const openGraph = {
    title: blog.title,
    type: 'article',
    description,
    url: `${ConfigService.baseUrl}${pathname}`,
    images: [
      {
        url: `${ConfigService.baseUrl}/api/blogs/${blog.id}/ogp`,
      },
    ],
  };

  useEffect(() => {
    hljs.configure({ ignoreUnescapedHTML: true });
    hljs.highlightAll();
  }, []);
  return (
    <>
      <NextSeo
        title={blog.title}
        description={description}
        noindex={!!draftKey}
        openGraph={openGraph}
      />
      <StickyHeader>
        <GlobalNavigation />
      </StickyHeader>
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

export const getStaticPaths: GetStaticPaths = async () => {
  const blogs = await microCMSClient.blogs.$get({
    query: { offset: 0, limit: 9999 },
  });
  const paths = blogs.contents.map((blog) => `/blogs/${blog.id}`);

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({
  params,
  preview,
  previewData,
}): Promise<{
  props: Props;
}> => {
  let blog: (Blog & MicroCMSListContent) | null = null;
  const paramsId = params?.id?.toString() ?? '';
  let draftKey;

  // 下書きは draftKey を含む必要があるのでプレビューの時は追加
  if (preview && isPreviewData(previewData)) {
    draftKey = previewData.draftKey;
    blog = await microCMSClient.blogs._id(paramsId).$get({
      query: { draftKey, richEditorFormat: 'object' },
    });
  } else {
    blog = await microCMSClient.blogs._id(paramsId).$get({
      query: { richEditorFormat: 'object' },
    });
  }

  return {
    props: {
      blog,
      draftKey: draftKey ? draftKey : null,
    },
  };
};
