import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addGood: (state, action) => {
      state.cart.push(action.payload);
    },
    // deleteGood: (state, payload) => {
    //   state.cart = state.cart.filter((good) => good.id !== payload.id);
    // },
  },
});

export const { addGood } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
