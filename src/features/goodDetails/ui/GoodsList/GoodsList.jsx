import { Alert, Box, CircularProgress, Stack } from '@mui/material';
import { useGetGoodsQuery } from '../../../../entities/good/api/goodApi';
import classes from './GoodsList.module.scss';
import GoodsItem from '../GoodsItem/GoodsItem';

export const GoodsList = () => {
  const { data: goods, isLoading, isError, error } = useGetGoodsQuery();

  const errorMessage =
    error?.data?.message || error?.message || 'Не удалось загрузить товары';

  if (isError) {
    return (
      <Box className={classes.errorContainer}>
        <Alert severity="error">{errorMessage}</Alert>
      </Box>
    );
  }

  if (isLoading) {
    return (
      <Box className={classes.loader}>
        <CircularProgress />
      </Box>
    );
  }

  if (goods?.length === 0) {
    return (
      <Box className={classes.emptyContainer}>
        <Typography variant="h6">Товары не найдены</Typography>
      </Box>
    );
  }

  return (
    <Stack className={classes.goodsContainer}>
      {goods.map((good) => (
        <GoodsItem key={good.id} good={good} />
      ))}
    </Stack>
  );
};
