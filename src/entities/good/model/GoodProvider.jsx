import { useGetGoodsQuery } from '@/entities/good/api/goodApi';
import { useGetAllSizesQuery } from '@/entities/size/api/sizeApi';
import React from 'react';
import { GoodContext } from '../model/GoodContext';
import { Alert, Box } from '@mui/material';

export const GoodProvider = ({ children }) => {
  const { data: goods = [], error: goodsError } = useGetGoodsQuery();
  const { data: allSizes = [], error: sizesError } = useGetAllSizesQuery();

  if (goodsError || sizesError) {
    return (
      <Box sx={{ p: 3 }}>
        <Alert severity="error" sx={{ maxWidth: 600, margin: '0 auto' }}>
          {goodsError?.data?.message ||
            sizesError?.data?.message ||
            'Не удалось загрузить данные'}
        </Alert>
      </Box>
    );
  }

  const getGoodById = (id) => goods.find((good) => good.id === id);
  const getSizesByIds = (ids) =>
    ids ? allSizes.filter((size) => ids.includes(Number(size.id))) : [];

  const value = {
    goods,
    allSizes,
    getGoodById,
    getSizesByIds,
  };

  return <GoodContext.Provider value={value}>{children}</GoodContext.Provider>;
};
