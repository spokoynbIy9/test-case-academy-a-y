import React from 'react';
import classes from './Topbar.module.scss';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { RoutesPath } from '@/app/providers/Router/config/RouterConfig';

export const Topbar = () => {
  const navigate = useNavigate();

  const transferToCartPage = () => {
    navigate(RoutesPath.OrderPage);
  };

  return (
    <Stack className={classes.container}>
      <ShoppingBasketIcon
        onClick={transferToCartPage}
        className={classes.cart}
      />
    </Stack>
  );
};
