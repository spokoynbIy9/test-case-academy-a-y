import { Alert, Box, CircularProgress, Stack, Typography } from '@mui/material';
import classes from './GoodsList.module.scss';
import GoodsItem from '../GoodsItem/GoodsItem';
import { useGood } from '@/entities/good/model';

export const GoodsList = () => {
  const { goods } = useGood();

  return (
    <Stack className={classes.goodsContainer}>
      {goods.map((good) => (
        <GoodsItem key={good.id} good={good} />
      ))}
    </Stack>
  );
};
