import { useParams } from 'react-router-dom';
import classes from './GoodDetails.module.scss';
import { Alert, Box, CircularProgress, Stack } from '@mui/material';
import {
  AddToCartButton,
  ColorPicker,
  Gallery,
  ProductImage,
  ProductInfo,
  SizePicker,
} from '@/features/goodDetails/ui/GoodDetails/components';

import { useGoodState } from '../../hooks/useGoodState';
import { useMemo } from 'react';
import { useGood } from '@/entities/good/model';

export const GoodDetails = () => {
  const { id } = useParams();

  const { getGoodById, getSizesByIds } = useGood();

  const good = getGoodById(id);

  const {
    colorId,
    sizeId,
    selectedImage,
    setColorId,
    setSelectedImage,
    setSizeId,
  } = useGoodState(good?.colors || []);

  const selectedColor = useMemo(
    () => good?.colors?.find((c) => c.id === colorId),
    [good?.colors, colorId]
  );

  const sizes = useMemo(
    () => getSizesByIds(selectedColor?.sizes),
    [getSizesByIds, selectedColor?.sizes]
  );

  const selectedSize = sizes.find((s) => s.id === sizeId) || sizes[0];

  return (
    <Stack className={classes.goodContainer}>
      <Gallery
        images={selectedColor?.images || []}
        selectedImage={selectedImage}
        onSelect={setSelectedImage}
      />

      <Stack>
        <ProductImage selectedImage={selectedImage} />

        <Stack className={classes.goodInfo}>
          <ProductInfo
            name={good?.name}
            description={selectedColor?.description}
          />

          <ColorPicker
            colors={good?.colors}
            selectedId={selectedColor?.id}
            changeColor={setColorId}
          />

          <SizePicker
            sizes={sizes}
            selectedId={selectedSize?.id}
            changeSize={setSizeId}
            hasSizes={sizes?.length > 0}
          />

          <AddToCartButton
            good={good || {}}
            color={selectedColor}
            size={selectedSize}
          />
        </Stack>
      </Stack>
    </Stack>
  );
};
