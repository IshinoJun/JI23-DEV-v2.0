import 'twin.macro';
import { StickyHeader } from '@/components/common/header/StickyHeader';
import { GlobalNavigation } from '@/components/common/navigation/GlobalNavigation';
import { Footer } from '@/components/common/footer/Footer';
import { Container } from '@/components/common/container/Container';
import { Breadcrumb } from '@/components/common/breadcrumb/Breadcrumb';
import { TWITTER_LINK } from '@/constants/ExternLinks';
import { ProfileVerticalTimeline } from '@/components/domain/prpfile/ProfileVerticalTimeline';
import { FadeIn } from '@/components/common/animation/FadeIn';
import { NextSeo } from 'next-seo';

const description = `JI23's profile`;

const ProfilePage = () => (
  <>
    <NextSeo
      title='Profile'
      description={description}
      openGraph={{ type: 'article', description }}
    />
    <StickyHeader>
      <GlobalNavigation />
    </StickyHeader>
    <div tw='overflow-hidden relative'>
      <Container>
        <div tw='mt-4'>
          <Breadcrumb links={[{ label: 'Profile' }]} />
        </div>
        <div tw='mt-8 sm:mt-10'>
          <h1 tw='text-4xl text-white font-bold'>Profile</h1>
          <div tw='mt-8 space-y-10 sm:mt-10 relative'>
            <FadeIn delay='100'>
              <div tw='text-blue-gray-300'>
                <p>
                  JI23は某スタートアップに勤める、アプリケーションの開発エンジニアです。
                </p>
                <p tw='mt-4'>
                  最近は、投資家向けのモバイルアプリケーション開発や開発チームのマネジメントを主に行っています。
                </p>
              </div>
            </FadeIn>
            <FadeIn delay='200'>
              <section tw='space-y-4'>
                <h2 tw='text-xl text-white font-bold'>Experience</h2>
                <div tw='ml-4 '>
                  <ProfileVerticalTimeline />
                </div>
              </section>
            </FadeIn>
            <FadeIn delay='300'>
              <section tw='space-y-4'>
                <h2 tw='text-xl text-white font-bold'>Contact</h2>
                <p tw='text-blue-gray-300'>
                  j-ishino@outlook.jp にメールか
                  <a
                    tw='underline'
                    href={TWITTER_LINK.href}
                    target='_black'
                    rel='nofollow noopener noreferrer'
                  >
                    Twitter
                  </a>
                  に DM をお願いします
                </p>
              </section>
            </FadeIn>
          </div>
        </div>
      </Container>
    </div>
    <Footer />
  </>
);

export default ProfilePage;
