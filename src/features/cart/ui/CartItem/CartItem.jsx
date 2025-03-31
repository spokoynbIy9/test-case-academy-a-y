import { Button, Stack, Typography } from '@mui/material';
import classes from './CartItem.module.scss';

export const CartItem = ({ item, removeGood }) => {
  return (
    <Stack key={item.id}>
      <img src={item.img} alt={item.name + ' ' + item.color} />
      <Stack className={classes.goodInfo}>
        <Typography>{item.name}</Typography>
        <Typography>Цвет: {item.color}</Typography>
        <Typography>Размер: {item.size}</Typography>
        <Typography>Цена: {item.price}</Typography>

        <Button onClick={() => removeGood(item.id)}>Удалить</Button>
      </Stack>
    </Stack>
  );
};
