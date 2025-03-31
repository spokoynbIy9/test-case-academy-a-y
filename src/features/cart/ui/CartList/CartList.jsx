import { Stack } from '@mui/material';
import { CartItem } from '../CartItem/CartItem';
import { useDispatch } from 'react-redux';
import { deleteGood } from '@/entities/cart/model/cartSlice';
import classes from './CartList.module.scss';

export const CartList = ({ items }) => {
  const dispatch = useDispatch();

  const removeGood = (id) => {
    dispatch(deleteGood(id));
  };

  return (
    <Stack className={classes.list}>
      {items.map((item) => (
        <CartItem key={item.id} item={item} removeGood={removeGood} />
      ))}
    </Stack>
  );
};
