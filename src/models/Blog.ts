import { Category } from '@/models/Category';
import { Tag } from '@/models/Tag';
import type { MicroCMSImage } from 'microcms-js-sdk';

export type Blog = {
  title: string;
  category: Category;
  tags?: Tag[];
  // どっちかは必ずある
  content: string;
  contentV2: string;
  blogImage: MicroCMSImage;
};
