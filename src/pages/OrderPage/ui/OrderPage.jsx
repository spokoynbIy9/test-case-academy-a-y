import { Stack } from '@mui/material';
import classes from './OrderPage.module.scss';
import { useSelector } from 'react-redux';
import { CartList } from '@/features/cart/ui/CartList/CartList';
import { CartActions } from '@/features/cart/ui/CartActions/CartActions';
import { CartEmpty } from '@/features/cart/ui/CartEmpty/CartEmpty';

const OrderPage = () => {
  const { cart } = useSelector((state) => state.cart);

  return (
    <Stack className={classes.orderContainer}>
      <CartList items={cart} />
      {cart.length === 0 && <CartEmpty />}
      <CartActions />
    </Stack>
  );
};

export default OrderPage;
