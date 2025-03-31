import { useNavigate } from 'react-router-dom';
import classes from './CartActions.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RoutesPath } from '@/app/providers/Router/config/RouterConfig';
import { deleteAllGood } from '@/entities/cart/model/cartSlice';
import { Button, Stack } from '@mui/material';

export const CartActions = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);

  const goBack = () => {
    navigate(RoutesPath.GoodsPage);
  };

  const approveOrder = () => {
    dispatch(deleteAllGood());
  };

  return (
    <Stack className={classes.buttonsContainer}>
      <Button onClick={goBack}>Назад</Button>
      <Button
        disabled={cart.length === 0}
        variant="contained"
        onClick={approveOrder}
      >
        Подтвердить
      </Button>
    </Stack>
  );
};
