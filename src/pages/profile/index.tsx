import { StickyHeader } from '@/components/common/header/StickyHeader';
import { GlobalNavigation } from '@/components/common/navigation/GlobalNavigation';
import { Footer } from '@/components/common/footer/Footer';
import { Container } from '@/components/common/container/Container';
import { Breadcrumb } from '@/components/common/breadcrumb/Breadcrumb';
import { TWITTER_LINK } from '@/constants/ExternLinks';
import { ProfileVerticalTimeline } from '@/components/domain/profile/ProfileVerticalTimeline';
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
    <main className='overflow-hidden relative'>
      <Container>
        <div className='mt-4'>
          <Breadcrumb links={[{ label: 'Profile' }]} />
        </div>
        <div className='mt-8 sm:mt-10'>
          <h1 className='text-4xl text-white font-bold'>Profile</h1>
          <div className='mt-8 space-y-10 sm:mt-10 relative'>
            <FadeIn delay='100'>
              <div className='text-blue-gray-300'>
                <p>
                  JI23は某スタートアップに勤める、アプリケーションの開発エンジニアです。
                </p>
                <p className='mt-4'>
                  最近は、モバイルアプリケーション開発や開発チームのマネジメントを主に行っています。
                </p>
              </div>
            </FadeIn>
            <FadeIn delay='200'>
              <section className='space-y-4'>
                <h2 className='text-xl text-white font-bold'>Experience</h2>
                <div className='ml-4 '>
                  <ProfileVerticalTimeline />
                </div>
              </section>
            </FadeIn>
            <FadeIn delay='300'>
              <section className='space-y-4'>
                <h2 className='text-xl text-white font-bold'>Contact</h2>
                <p className='text-blue-gray-300'>
                  j-ishino@outlook.jp にメールか
                  <a
                    className='underline'
                    href={TWITTER_LINK.href}
                    target='_black'
                    rel='nofollow noopener noreferrer'
                  >
                    Twitter
                  </a>
                  に DM をお願いします。
                </p>
              </section>
            </FadeIn>
          </div>
        </div>
      </Container>
    </main>
    <Footer />
  </>
);

export default ProfilePage;
