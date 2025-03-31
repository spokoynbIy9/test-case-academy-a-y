import { Button, Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import classes from './OrderPage.module.scss';
import { RoutesPath } from '@/app/providers/Router/config/RouterConfig';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAllGood, deleteGood } from '@/entities/cart/model/cartSlice';

const OrderPage = () => {
  const navigate = useNavigate();
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const goBack = () => {
    navigate(RoutesPath.GoodsPage);
  };

  const deleteProduct = (id) => {
    dispatch(deleteGood(id));
  };

  const approveOrder = () => {
    dispatch(deleteAllGood());
  };

  return (
    <Stack className={classes.orderContainer}>
      <Stack className={classes.goodsView}>
        {cart.length > 0 ? (
          cart.map((good) => (
            <Stack key={good.id}>
              <img src={good.img} alt={good.name + ' ' + good.color} />
              <Stack className={classes.goodInfo}>
                <Typography>{good.name}</Typography>
                <Typography>Цвет: {good.color}</Typography>
                <Typography>Размер: {good.size}</Typography>
                <Typography>Цена: {good.price}</Typography>

                <Button onClick={() => deleteProduct(good.id)}>Удалить</Button>
              </Stack>
            </Stack>
          ))
        ) : (
          <Typography margin="0 auto">В корзине пусто</Typography>
        )}
      </Stack>
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
    </Stack>
  );
};

export default OrderPage;
