import api from '@/lib/aspida/microCMS/$api';
import aspida from '@aspida/axios';
import axios from 'axios';

export const microCMSClient = api(
  aspida(axios, {
    baseURL: process.env.MICROCMS_END_POINT as string,
    headers: {
      'X-API-KEY': process.env.MICROCMS_API_KEY as string,
    },
  }),
);
