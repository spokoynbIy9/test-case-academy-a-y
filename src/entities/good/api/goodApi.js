import { baseApi } from '@/shared/api';

const goodApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getGoods: build.query({
      query: () => ({
        url: `/goods`,
      }),
    }),
    getGoodPerId: build.query({
      query: (id) => ({
        url: `/goods/${id}`,
      }),
    }),
  }),
});

export const { useGetGoodsQuery, useGetGoodPerIdQuery } = goodApi;
