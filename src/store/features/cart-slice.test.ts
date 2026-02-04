import cartReducer, {
  addToCart,
  removeFromCart,
  updateQuantity,
  clearCart,
  CartItem,
} from "@/store/features/cart-slice";

const mockProduct = {
  id: "101",
  name: "NFT Exclusive",
  description: "Rare NFT",
  image: "/img.png",
  price: 100,
};

describe("Fluxo de Negócio: Carrinho de Compras (CartSlice)", () => {
  const initialState = {
    items: [],
    totalPrice: 0,
    totalQuantity: 0,
  };

  test("Deve retornar o estado inicial corretamente", () => {
    expect(cartReducer(undefined, { type: "unknown" })).toEqual(initialState);
  });

  describe("Funcionalidade: Adicionar Item (addToCart)", () => {
    test("Deve adicionar um novo item ao carrinho vazio", () => {
      const action = addToCart(mockProduct);
      const state = cartReducer(initialState, action);

      expect(state.items).toHaveLength(1);
      expect(state.items[0]).toEqual({ ...mockProduct, quantity: 1 });
      expect(state.totalPrice).toBe(100);
      expect(state.totalQuantity).toBe(1);
    });

    test("Deve incrementar a quantidade se o item JÁ existe (não duplicar na lista)", () => {
      const stateWithItem = cartReducer(initialState, addToCart(mockProduct));

      const finalState = cartReducer(stateWithItem, addToCart(mockProduct));

      expect(finalState.items).toHaveLength(1);
      expect(finalState.items[0].quantity).toBe(2);
      expect(finalState.totalPrice).toBe(200);
    });
  });

  describe("Funcionalidade: Remover Item (removeFromCart)", () => {
    test("Deve remover um item completamente e zerar os totais", () => {
      const previousState = {
        items: [{ ...mockProduct, quantity: 1 } as CartItem],
        totalPrice: 100,
        totalQuantity: 1,
      };

      const action = removeFromCart("101");
      const state = cartReducer(previousState, action);

      expect(state.items).toHaveLength(0);
      expect(state.totalPrice).toBe(0);
      expect(state.totalQuantity).toBe(0);
    });
  });

  describe("Funcionalidade: Atualizar Quantidade (updateQuantity)", () => {
    test("Deve atualizar a quantidade e recalcular o preço total", () => {
      const previousState = {
        items: [{ ...mockProduct, quantity: 1 } as CartItem],
        totalPrice: 100,
        totalQuantity: 1,
      };

      const action = updateQuantity({ id: "101", quantity: 3 });
      const state = cartReducer(previousState, action);

      expect(state.items[0].quantity).toBe(3);
      expect(state.totalPrice).toBe(300);
    });

    test("Deve remover o item se a quantidade for definida como 0 ou menor", () => {
      const previousState = {
        items: [{ ...mockProduct, quantity: 1 } as CartItem],
        totalPrice: 100,
        totalQuantity: 1,
      };

      const action = updateQuantity({ id: "101", quantity: 0 });
      const state = cartReducer(previousState, action);

      expect(state.items).toHaveLength(0);
    });
  });

  test("Funcionalidade: Limpar Carrinho (clearCart)", () => {
    const previousState = {
      items: [
        { ...mockProduct, quantity: 2 } as CartItem,
        { ...mockProduct, id: "102", price: 50, quantity: 1 } as CartItem,
      ],
      totalPrice: 250,
      totalQuantity: 3,
    };

    const state = cartReducer(previousState, clearCart());

    expect(state.items).toHaveLength(0);
    expect(state.totalPrice).toBe(0);
    expect(state.totalQuantity).toBe(0);
  });
});
