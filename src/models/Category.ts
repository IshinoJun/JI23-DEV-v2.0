import { Blog } from '@/models/Blog';
import type { MicroCMSDate } from 'microcms-js-sdk';

export type Category = {
  name: string;
  posts: Blog[];
} & MicroCMSDate;
