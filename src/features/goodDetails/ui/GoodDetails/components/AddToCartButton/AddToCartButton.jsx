import { addGood } from '@/entities/cart/model/cartSlice';
import { createGoodHash } from '@/shared/lib/helpers/createGoodHash';
import { Button } from '@mui/material';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const AddToCartButton = ({ good, color, size }) => {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const addToCart = useCallback(() => {
    const hash = createGoodHash(good.name, color.name, size.label, color.price);

    const similiarGood = cart.find((good) => good.id === hash);

    if (!similiarGood) {
      const currentGood = {
        id: hash,
        name: good.name,
        color: color.name,
        size: size.label,
        price: color.price,
        img: color.images[0],
      };

      dispatch(addGood(currentGood));
    }
  }, [cart, color, dispatch, good.name, size]);

  return (
    <Button onClick={addToCart} disabled={!size}>
      Добавить
    </Button>
  );
};
