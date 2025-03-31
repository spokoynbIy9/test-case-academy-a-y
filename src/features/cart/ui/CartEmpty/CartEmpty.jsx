import { Typography } from '@mui/material';
import classes from './CartEmpty.module.scss';

export const CartEmpty = () => {
  return <Typography className={classes.emptyText}>В корзине пусто</Typography>;
};
