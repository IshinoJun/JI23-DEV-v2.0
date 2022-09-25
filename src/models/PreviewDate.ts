import { isString } from '@/utils/TypeGuardUtils';

export type PreviewData = {
  draftKey: string;
  id: string;
};

export const isPreviewData = (item: unknown): item is PreviewData => {
  const target = item as PreviewData;

  return (
    'id' in target &&
    isString(target.id) &&
    !!target.id &&
    'draftKey' in target &&
    isString(target.draftKey) &&
    !!target.draftKey
  );
};
