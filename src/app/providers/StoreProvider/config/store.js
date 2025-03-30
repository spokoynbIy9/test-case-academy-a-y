import { cartReducer } from '@/entities/cart/model/cartSlice';
import { localStorageMiddleware } from '@/entities/cart/model/middleware/localStorageMiddleware';
import { baseApi } from '@/shared/api';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(baseApi.middleware)
      .concat(localStorageMiddleware),
});
