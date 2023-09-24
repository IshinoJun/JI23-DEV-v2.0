import { TopExternLinkCard } from '@/components/domain/top/TopExternLinkCard';
import { EXTERN_LINKS } from '@/constants/ExternLinks';
import 'twin.macro';

export const TopExternLinksCard = (): JSX.Element => {
  return (
    <div tw='lg:(col-span-1 h-[288px]) md:h-auto sm:col-span-2 row-span-1 col-span-1 h-[288px] flex items-center justify-center p-4 rounded-3xl border shadow-md bg-opacity-40 bg-gray-800 border-gray-700'>
      <div tw='lg:grid-cols-2 md:grid-cols-4 grid gap-3 grid-cols-2 '>
        {EXTERN_LINKS.map((link) => (
          <TopExternLinkCard key={link.type} {...link} />
        ))}
      </div>
    </div>
  );
};
