import { Alert, Box, CircularProgress, Stack } from '@mui/material';
import { useGetGoodsQuery } from '../../api/goodApi';
import classes from './GoodsList.module.scss';
import GoodsItem from '../GoodsItem/GoodsItem';

export const GoodsList = () => {
  const { data: goods, isLoading, isError, error } = useGetGoodsQuery();

  if (isError) {
    return (
      <Box className={classes.errorContainer}>
        <Alert severity="error">
          {error instanceof Error
            ? error.message
            : 'Не удалось загрузить товары'}
        </Alert>
      </Box>
    );
  }

  if (isLoading) {
    return (
      <Box>
        <CircularProgress />
      </Box>
    );
  }

  if (goods) {
    return (
      <Stack className={classes.goodsContainer}>
        {goods.map((good) => (
          <GoodsItem key={good.id} good={good} />
        ))}
      </Stack>
    );
  }
};
