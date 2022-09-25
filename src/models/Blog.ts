import { Category } from '@/models/Category';
import { RichEditorObject } from '@/models/RichEditorObject';
import { Tag } from '@/models/Tag';
import type { MicroCMSImage } from 'microcms-js-sdk';

export type Blog = {
  title: string;
  category: Category;
  tags?: Tag[];
  content: RichEditorObject;
  blogImage: MicroCMSImage;
};
