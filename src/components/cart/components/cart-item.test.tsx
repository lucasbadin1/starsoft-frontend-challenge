import { render, screen } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import CartItem from "@/components/cart/components/cart-item"; 
import cartReducer from "@/store/features/cart-slice"; 

// Criando a store mockada
const mockStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState: {
    cart: {
      items: [
        {
          id: "1",
          name: "Produto Teste",
          description: "Descrição do produto",
          image: "/path/to/image.jpg",
          price: 10,
          quantity: 2,
        },
      ],
      totalPrice: 20,
    },
  },
});

describe("CartItem", () => {
  it("deve renderizar corretamente o item do carrinho", () => {
    render(
      <Provider store={mockStore}>
        <CartItem item={mockStore.getState().cart.items[0]} />
      </Provider>
    );

    // Verificar se o nome do produto está na tela
    expect(screen.getByText("Produto Teste")).toBeInTheDocument();
    // Verificar se a quantidade do produto está correta
    expect(screen.getByText("Descrição do produto")).toBeInTheDocument();
    // Verificar o preço total
    expect(screen.getByText("20 ETH")).toBeInTheDocument();
  });
});
