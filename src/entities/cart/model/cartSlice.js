import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: JSON.parse(localStorage.getItem('cart')) || [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addGood: (state, action) => {
      state.cart.push(action.payload);
    },
    deleteGood: (state, action) => {
      state.cart = state.cart.filter((good) => good.id !== action.payload);
    },
    deleteAllGood: (state) => {
      state.cart = [];
    },
  },
});

export const { addGood, deleteGood, deleteAllGood } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
