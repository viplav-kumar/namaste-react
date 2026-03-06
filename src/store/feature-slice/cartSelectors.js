export const cartItemsCountSelector = (store) =>
  store.cart.items.reduce((total, item) => total + item.quantity, 0);
