import { baseApi } from '@/shared/api';

const sizeApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllSizes: build.query({
      query: () => ({
        url: `/sizes`,
      }),
    }),
  }),
});

export const { useGetAllSizesQuery } = sizeApi;
