import { useParams } from 'react-router-dom';
import classes from './GoodDetails.module.scss';
import { Alert, Box, CircularProgress, Stack } from '@mui/material';
import { useGetGoodPerIdQuery } from '../../../../entities/good/api/goodApi';
import { useColorSelection } from '@/features/goodDetails/hooks/useColorSelection';
import { useSizeSelection } from '@/features/goodDetails/hooks/useSizeSelection';
import { useImageSelection } from '@/features/goodDetails/hooks/useImageSelection';
import {
  AddToCartButton,
  ColorPicker,
  Gallery,
  ProductImage,
  ProductInfo,
  SizePicker,
} from '@/features/goodDetails/ui/GoodDetails/components';

export const GoodDetails = () => {
  const { id } = useParams();

  const {
    data: good,
    isLoading: isLoadingGood,
    isError,
    error,
  } = useGetGoodPerIdQuery(id);

  const { colors, selectedColor, changeColor } = useColorSelection(
    good?.colors || []
  );

  const { sizes, selectedSize, changeSize, hasSizes } = useSizeSelection(
    selectedColor?.sizes
  );

  const { selectedImage, changeActiveImage } = useImageSelection(
    selectedColor?.images[0]
  );

  if (isLoadingGood) {
    return (
      <Box>
        <CircularProgress />
      </Box>
    );
  }

  const errorMessage =
    error?.data?.message || error?.message || 'Не удалось загрузить товары';

  if (isError) {
    return (
      <Box>
        <Alert severity="error">{errorMessage}</Alert>
      </Box>
    );
  }

  return (
    <Stack className={classes.goodContainer}>
      <Gallery
        images={selectedColor?.images}
        selectedImage={selectedImage}
        onSelect={changeActiveImage}
      />

      <Stack>
        <ProductImage selectedImage={selectedImage} />

        <Stack className={classes.goodInfo}>
          <ProductInfo
            name={good.name}
            description={selectedColor?.description}
          />

          <ColorPicker
            colors={colors}
            selectedId={selectedColor?.id}
            changeColor={changeColor}
          />

          <SizePicker
            sizes={sizes}
            selectedId={selectedSize?.id}
            changeSize={changeSize}
            hasSizes={hasSizes}
          />

          <AddToCartButton
            good={good}
            color={selectedColor}
            size={selectedSize}
          />
        </Stack>
      </Stack>
    </Stack>
  );
};
