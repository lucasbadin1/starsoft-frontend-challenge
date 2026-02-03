import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "@/store/features/cart-slice";
import cartUIReducer from "@/store/features/cart-state-slice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    cartUI: cartUIReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
