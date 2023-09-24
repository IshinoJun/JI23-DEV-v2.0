import { TopExternLinkCardItem } from '@/components/domain/top/TopExternLinkCardItem';
import { ExternLinkType } from '@/enumObjects/ExternLinkType';
import 'twin.macro';

type Props = {
  href: string;
  type: ExternLinkType;
};

export const TopExternLinkCard = ({ href, type }: Props): JSX.Element => {
  return (
    <a
      href={href}
      target='_blank'
      tw='flex items-center justify-center p-4 h-[120px] w-[120px] rounded-2xl border bg-white transition ease-in-out delay-100 lg:hover:(-translate-y-1 scale-100)'
      rel='nofollow noopener noreferrer'
      aria-label={type}
    >
      <TopExternLinkCardItem type={type} />
    </a>
  );
};
