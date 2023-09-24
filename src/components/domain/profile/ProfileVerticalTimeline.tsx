import { VerticalTimeline } from '@/components/common/timeline/VerticalTimeline';
import { ProfileVerticalTimelineItem } from '@/components/domain/profile/ProfileVerticalTimelineItem';
import { FaLaptopCode, FaUserTie } from 'react-icons/fa';
import 'twin.macro';

const EXPERIENCE_DATE = [
  {
    title: 'SNSサービスの開発',
    icon: FaLaptopCode,
    content: (
      <ProfileVerticalTimelineItem
        date='Jun 2022 -'
        description='SNSサービスのiOSとAndroid版を開発中'
        stack='Ionic(React) / TypeScript / NestJS / PostgreSQL'
      />
    ),
  },
  {
    title: 'チームマネジメント',
    icon: FaLaptopCode,
    content: (
      <ProfileVerticalTimelineItem
        date='Jun 2022 -'
        description='開発チームのマネジメントにも挑戦中。ビジネスサイド含めた関係者と開発フロー（アジャイル）の検討・設計・導入'
      />
    ),
  },
  {
    title: 'メディアサービスの開発',
    icon: FaLaptopCode,
    content: (
      <ProfileVerticalTimelineItem
        date='Feb 2022 -'
        description='投資家向けのメディアサービスを開発。0 → 1 開発 でフロントの設計〜リリースまで1人で担当'
        stack='Next.js / Typescript / microCMS / Vercel'
      />
    ),
  },
  {
    title: 'OSSのコミッター',
    icon: FaLaptopCode,
    content: (
      <ProfileVerticalTimelineItem
        date='Jun 2021 - Jul 2022'
        description='Frourio や Asipda のコミッターとして、機能追加や不具合修正などを担当'
      />
    ),
  },
  {
    title: 'SNSサービスの開発',
    icon: FaLaptopCode,
    content: (
      <ProfileVerticalTimelineItem
        date='Oct 2021 - Feb 2022'
        description='SNSサービスのWeb版を開発。0 → 1 開発でフロント・バック共の設計〜テストまで1人で担当'
        stack='Next.js / Typescript / NestJS / PostgreSQL'
      />
    ),
  },
  {
    title: 'CRMサービスの開発',
    icon: FaLaptopCode,
    content: (
      <ProfileVerticalTimelineItem
        date='Sep 2019 - '
        description='投資家向けCRMサービスの開発。新規開発及び既存機能の改修など開発全般を担当（設計・開発・テスト・リリース・障害対応など）'
        stack='React / Typescript / Spring Boot / Java / PostgreSQL / AWS'
      />
    ),
  },
  {
    title: '某スタートアップ',
    icon: FaUserTie,
    content: (
      <ProfileVerticalTimelineItem
        date='Sep 2019 - Present'
        description='自社サービスのアプリケーション開発に従事'
      />
    ),
  },
  {
    title: '某大手Sler',
    icon: FaUserTie,
    content: (
      <ProfileVerticalTimelineItem
        date='Apr 2015 - Aug 2019'
        description='官公庁を中心に全業種へ自社クラウドサービス（IaaS,DaaS,PaaS）の提案・導入・運用支援'
      />
    ),
  },
];

export const ProfileVerticalTimeline = (): JSX.Element => {
  return <VerticalTimeline date={EXPERIENCE_DATE} />;
};
