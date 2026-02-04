import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "@/store/features/cart-slice";
import cartUIReducer from "@/store/features/cart-state-slice";
import { localStorageMiddleware } from "@/store/middleware/local-storage-middleware";

const loadCartState = () => {
  if (typeof window === "undefined") return undefined;

  try {
    const serializedCart = localStorage.getItem("starsoft-cart");
    if (serializedCart === null) return undefined;
    return JSON.parse(serializedCart);
  } catch (e) {
    console.warn("Erro ao carregar estado do carrinho", e);
    return undefined;
  }
};

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    cartUI: cartUIReducer,
  },
  preloadedState: {
    cart: loadCartState(),
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
