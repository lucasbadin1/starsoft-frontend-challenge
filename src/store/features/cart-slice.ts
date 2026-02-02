import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "@/types/product";

export interface CartItem extends Product {
  quantity: number;
}
interface CartState {
  items: CartItem[];
  totalPrice: number;
  totalQuantity: number; 
}

const initialState: CartState = {
  items: [],
  totalPrice: 0,
  totalQuantity: 0,
};

const calculateCartTotals = (state: CartState) => {
  const { total, qty } = state.items.reduce(
    (acc, item) => {
      acc.qty += item.quantity;
      acc.total += item.price * item.quantity;
      return acc;
    },
    { total: 0, qty: 0 }
  );

  state.totalQuantity = qty;
  state.totalPrice = Number(total.toFixed(2));
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const existingItem = state.items.find((item) => item.id === action.payload.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }

      calculateCartTotals(state);
    },

    removeFromCart: (state, action: PayloadAction<number>) => { // ID agora é number
      state.items = state.items.filter((item) => item.id !== action.payload);
      calculateCartTotals(state);
    },

    updateQuantity: (
      state,
      action: PayloadAction<{ id: number; quantity: number }> 
    ) => {
      const { id, quantity } = action.payload;
      const item = state.items.find((item) => item.id === id);

      if (item) {
        if (quantity <= 0) {
          state.items = state.items.filter((i) => i.id !== id);
        } else {
          item.quantity = quantity;
        }
      }
      calculateCartTotals(state);
    },

    clearCart: (state) => {
      state.items = [];
      state.totalPrice = 0;
      state.totalQuantity = 0;
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;