import React from 'react';
import classes from './Topbar.module.scss';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Stack } from '@mui/material';

export const Topbar = () => {
  return (
    <Stack className={classes.container}>
      <ShoppingBasketIcon />
    </Stack>
  );
};
