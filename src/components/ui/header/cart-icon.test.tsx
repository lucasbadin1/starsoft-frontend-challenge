import { render, screen, fireEvent } from "@testing-library/react";
import CartIcon from "@/components/ui/header/cart-icon";
import { Provider } from "react-redux";
import { store } from "@/store/store";

describe("CartIcon", () => {
    it("deve chamar a ação openCart quando o ícone do carrinho for clicado", () => {
      render(
        <Provider store={store}>
          <CartIcon />
        </Provider>
      );
  
      // Simula o clique no ícone do carrinho
      const cartIcon = screen.getByTestId("cart-icon");
      fireEvent.click(cartIcon);
  
      // Verifique se o dispatch foi chamado
      // Aqui você precisa verificar o efeito colateral do dispatch
      // Exemplo: verificar o chamado de uma ação do Redux
    });
  
    it("deve aplicar o efeito de hover corretamente no ícone", () => {
      render(
        <Provider store={store}>
          <CartIcon />
        </Provider>
      );
  
      // Simulando o hover no ícone
      const cartIcon = screen.getByTestId("cart-icon");
      fireEvent.mouseOver(cartIcon);
  
      // Verifique se o ícone foi aumentado
      // Aqui você poderia verificar a classe de transformação ou o estilo aplicado após o hover
    });
  });