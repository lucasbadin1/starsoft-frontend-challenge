import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

const cartStateSlice = createSlice({
  name: "cartUI",
  initialState,
  reducers: {
    openCart: (state) => {
      state.isOpen = true;
    },
    closeCart: (state) => {
      state.isOpen = false;
    },
    toggleCart: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { openCart, closeCart, toggleCart } = cartStateSlice.actions;
export default cartStateSlice.reducer;
