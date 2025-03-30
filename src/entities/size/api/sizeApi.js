import { baseApi } from '@/shared/api';

const sizeApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getSizesPerCodes: build.query({
      query: (sizeIds) => ({
        url: `/sizes?${sizeIds.map((id) => `id=${id}`).join('&')}`,
      }),
      transformResponse: (response, _, arg) =>
        response.filter((size) => arg.includes(Number(size.id))),
    }),
  }),
});

export const { useGetSizesPerCodesQuery } = sizeApi;
