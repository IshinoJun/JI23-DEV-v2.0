import { Blog } from '@/models/Blog';
import type { MicroCMSListResponse, MicroCMSQueries } from 'microcms-js-sdk';

export type Methods = {
  get: {
    query?: MicroCMSQueries;
    resBody: MicroCMSListResponse<Blog>;
  };
};
