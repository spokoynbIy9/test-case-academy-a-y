import { baseApi } from '@/shared/api';

const goodApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getGoods: build.query({
      query: () => ({
        url: `/goods`,
      }),
    }),
  }),
});

export const { useGetGoodsQuery } = goodApi;
