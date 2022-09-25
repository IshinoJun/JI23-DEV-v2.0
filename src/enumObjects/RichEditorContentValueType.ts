import { EnumUnionKey, EnumUnionValue } from '@/utils/TypeUtils';

export const RichEditorContentValueType = {
  TEXT: 'text',
} as const;

export type RichEditorContentValueType = EnumUnionValue<
  typeof RichEditorContentValueType
>;
export type RichEditorContentValueTypeKey = EnumUnionKey<
  typeof RichEditorContentValueType
>;
