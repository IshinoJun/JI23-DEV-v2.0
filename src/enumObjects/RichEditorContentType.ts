import { EnumUnionKey, EnumUnionValue } from '@/utils/TypeUtils';

export const RichEditorContentType = {
  BLOCK: 'block',
  TEXT_BLOCK: 'textBlock',
  TEXT: 'text',
  IMAGE: 'image',
} as const;

export type RichEditorContentType = EnumUnionValue<
  typeof RichEditorContentType
>;
export type RichEditorContentTypeKey = EnumUnionKey<
  typeof RichEditorContentType
>;
