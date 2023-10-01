import { StickyHeader } from '@/components/common/header/StickyHeader';
import { GlobalNavigation } from '@/components/common/navigation/GlobalNavigation';
import { Footer } from '@/components/common/footer/Footer';
import { Container } from '@/components/common/container/Container';
import Image from 'next/image';
import { staticPath } from '@/lib/$path';
import { TopTypedTitle } from '@/components/domain/top/TopTypedTitle';
import { TopGlobalLinkCard } from '@/components/domain/top/TopGlobalLinkCard';
import { TopExternLinksCard } from '@/components/domain/top/TopExternLinksCard';
import { GlobalNavigationType } from '@/enumObjects/GlobalNavigationType';
import { GradationSpin } from '@/components/common/animation/GradationSpin';
import { FadeIn } from '@/components/common/animation/FadeIn';
import { NextSeo } from 'next-seo';

const description = `JI23's personal website.`;

const App = () => (
  <>
    <NextSeo
      description={description}
      openGraph={{ type: 'website', description }}
    />
    <StickyHeader>
      <GlobalNavigation />
    </StickyHeader>
    <main className='overflow-hidden relative'>
      <Container>
        <div className='min-h-screen'>
          <FadeIn delay='100'>
            <section className='sm:mt-20 mt-8'>
              <div className='sm:space-x-4 flex items-center space-x-2'>
                <div className='sm:w-40 w-20'>
                  <Image
                    alt='icon'
                    src={staticPath.icon_png}
                    height={166}
                    width={166}
                  />
                </div>
                <TopTypedTitle />
              </div>
            </section>
          </FadeIn>
          <FadeIn delay='200'>
            <section className='sm:mt-20 mt-8'>
              <div className='lg:grid-cols-3 md:grid-cols-2 grid gap-6 grid-cols-1'>
                {[GlobalNavigationType.PROFILE, GlobalNavigationType.BLOGS].map(
                  (type) => (
                    <TopGlobalLinkCard type={type} key={type} />
                  ),
                )}
                <TopExternLinksCard />
              </div>
              <GradationSpin />
            </section>
          </FadeIn>
        </div>
      </Container>
    </main>
    <Footer />
  </>
);

export default App;
