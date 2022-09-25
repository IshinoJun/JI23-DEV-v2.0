import { RichEditorContentType } from '@/enumObjects/RichEditorContentType';

export type RichEditorObject = {
  contents: RichEditorContent[];
};

export type RichEditorContent =
  | RichEditorImageContent
  | RichEditorBlockTextContent
  | RichEditorBlockContent
  | RichEditorTextContent;

export type RichEditorImageAttributes = {
  alt: string | null;
  height: number;
  link: string | null;
  target: string | null;
  width: number;
};

export type RichEditorImageContent = {
  type: typeof RichEditorContentType.IMAGE;
  value: string;
  attributes: RichEditorImageAttributes;
};

export type RichEditorBlockTextContentAttributes = {
  link: string | null;
  target: string | null;
  width: number;
};

export type RichEditorBlockTextContent = {
  type: typeof RichEditorContentType.TEXT_BLOCK;
  value: RichEditorTextContent[];
  attributes: RichEditorBlockTextContentAttributes;
};

export type RichEditorBlockContentAttributes = {
  header?: 1 | 2 | 3 | 4 | 5;
  'code-block'?: boolean;
  list?: 'bullet' | 'ordered';
  indent?: 0;
  link: string | null;
  target: string | null;
  width: number;
};

export type RichEditorBlockContent = {
  type: typeof RichEditorContentType.BLOCK;
  value: RichEditorTextContent[] | RichEditorTextContent;
  attributes: RichEditorBlockContentAttributes;
};

export type RichEditorTextContentAttributes = {
  link?: string;
  rel?: string;
  target?: string;
  color?: string;
  code?: boolean;
  font?: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
};

export type RichEditorTextContent = {
  type: typeof RichEditorContentType.TEXT;
  value: string;
  attributes?: RichEditorTextContentAttributes;
};
