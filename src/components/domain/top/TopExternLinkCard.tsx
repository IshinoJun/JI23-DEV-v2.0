import { TopExternLinkCardItem } from '@/components/domain/top/TopExternLinkCardItem';
import { ExternLinkType } from '@/enumObjects/ExternLinkType';

type Props = {
  href: string;
  type: ExternLinkType;
};

export const TopExternLinkCard = ({ href, type }: Props): JSX.Element => {
  return (
    <a
      href={href}
      target='_blank'
      className='flex items-center justify-center p-4 h-[120px] w-[120px] rounded-2xl border bg-white transition ease-in-out delay-100 lg:hover:-translate-y-1 lg:hover:scale-100'
      rel='nofollow noopener noreferrer'
      aria-label={type}
    >
      <TopExternLinkCardItem type={type} />
    </a>
  );
};
