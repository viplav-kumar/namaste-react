import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    // within the reducer function of all actions, we are mutating the state - modifying the state itself
    addItem: (state, action) => {
      const payloadItem = action.payload;
      const existingItem = state.items.find(
        (item) => item.id === payloadItem.id,
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...payloadItem, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      const index = state.items.findIndex((item) => item.id === action.payload);
      if (index === -1) return;
      const item = state.items[index];
      if (item.quantity > 1) {
        item.quantity -= 1;
      } else if (item.quantity === 1) {
        state.items.splice(index, 1);
      }
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
