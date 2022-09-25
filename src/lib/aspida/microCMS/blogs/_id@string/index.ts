import { Blog } from '@/models/Blog';
import type { MicroCMSListContent, MicroCMSQueries } from 'microcms-js-sdk';

export type Methods = {
  get: {
    query?: MicroCMSQueries & { richEditorFormat?: 'html' | 'object' };
    resBody: Blog & MicroCMSListContent;
  };
};
