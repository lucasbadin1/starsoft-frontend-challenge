import { Middleware } from "@reduxjs/toolkit";

export const localStorageMiddleware: Middleware = (store) => (next) => (action) => {
  const result = next(action);

  const state = store.getState();

  const typedAction = action as { type: string };

  if (typeof window !== "undefined") {
    // Verifica se é uma ação do carrinho
    if (typedAction.type?.startsWith("cart/")) {
      try {
        const cartState = (state as { cart: unknown }).cart;

        const serializedCart = JSON.stringify(cartState);
        localStorage.setItem("starsoft-cart", serializedCart);
      } catch (e) {
        console.warn("Falha ao salvar carrinho no LocalStorage", e);
      }
    }
  }

  return result;
};
