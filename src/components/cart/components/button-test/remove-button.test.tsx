import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import RemoveButton from "@/components/cart/components/button/remove-button";
import cartReducer from "@/store/features/cart-slice"; 
import { removeFromCart } from "@/store/features/cart-slice";

// Configuração do store mockado para os testes
const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

describe("RemoveButton", () => {
  it("deve renderizar o ícone de remoção (Trash) corretamente", () => {
    render(
      <Provider store={store}>
        <RemoveButton itemId="1" />
      </Provider>
    );

    const icon = screen.getByTestId("remove-icon");
    expect(icon).toBeInTheDocument();
  });

  it("deve chamar a função removeFromCart quando o botão for clicado", () => {
    const dispatchMock = jest.fn();
    // Mock o dispatch para verificar se a função é chamada
    jest.spyOn(store, "dispatch").mockImplementation(dispatchMock);

    render(
      <Provider store={store}>
        <RemoveButton itemId="1" />
      </Provider>
    );

    const button = screen.getByRole("button"); // Obtém o botão
    fireEvent.click(button); // Simula o clique no botão

    // Verifica se a ação de remoção foi disparada
    expect(dispatchMock).toHaveBeenCalledWith(removeFromCart("1"));
  });

  it("deve aplicar o efeito de hover corretamente", () => {
    render(
      <Provider store={store}>
        <RemoveButton itemId="1" />
      </Provider>
    );

    const button = screen.getByRole("button");
    fireEvent.mouseOver(button); 

    // Verifica se a transição do efeito de hover é aplicada corretamente
    expect(button).toHaveClass("btn-remove"); 
  });
});
