import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Product = {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  quantity: number;
};

type CartState = {
  items: Product[];
  totalPrice: number;
};

const initialState: CartState = {
  items: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const existingProduct = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      state.totalPrice = state.items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
    },

    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      state.totalPrice = state.items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
    },

    updateQuantity: (
      state,
      action: PayloadAction<{ id: string; quantity: number }>
    ) => {
      const product = state.items.find((item) => item.id === action.payload.id);
      if (product) {
        product.quantity = action.payload.quantity;
        state.totalPrice = state.items.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0
        );
      }
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
