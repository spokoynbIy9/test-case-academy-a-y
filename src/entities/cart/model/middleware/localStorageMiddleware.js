export const localStorageMiddleware = (store) => (next) => (action) => {
  const result = next(action);

  const cartActions = ['cart/addGood', 'cart/deleteGood', 'cart/deleteAllGood'];

  if (cartActions.includes(action.type)) {
    const { cart } = store.getState().cart;
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  return result;
};
