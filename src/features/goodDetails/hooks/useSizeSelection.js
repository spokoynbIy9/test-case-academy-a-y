import { useGetSizesPerCodesQuery } from '@/entities/size/api/sizeApi';
import { findPerId } from '@/shared/lib/helpers/findPerId';
import { useCallback, useEffect, useState } from 'react';

export const useSizeSelection = (sizeCodes) => {
  const { data: sizes } = useGetSizesPerCodesQuery(sizeCodes, {
    skip: !sizeCodes,
  });

  const [selectedSize, setSelectedSize] = useState(null);

  useEffect(() => {
    if (sizes?.length > 0 && !selectedSize) {
      setSelectedSize(sizes[0]);
    }
  }, [selectedSize, sizes]);

  useEffect(() => {
    setSelectedSize(sizes?.[0] || null);
  }, [sizes]);

  const changeSize = useCallback(
    (sizeId) => {
      const newSize = findPerId(sizes, sizeId);
      setSelectedSize(newSize);
    },
    [sizes]
  );

  return {
    sizes: sizes || [],
    selectedSize,
    changeSize,
    hasSizes: (sizes?.length ?? 0) > 0,
  };
};
