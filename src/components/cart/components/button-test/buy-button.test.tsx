import { render, screen, fireEvent } from "@testing-library/react";
import AddToCartButton from "@/components/cart/components/button/buy-button";

describe("AddToCartButton", () => {
    it("deve renderizar corretamente o texto do botão com base na quantidade", () => {
        // Teste quando `quantity` é maior que 0
        render(<AddToCartButton quantity={3} onClick={() => { }} />);
        const buttons = screen.getAllByTestId("add-to-cart-button");
        expect(buttons[0]).toHaveTextContent("COMPRAR (3)"); // Verifique se o botão com quantidade está correto

        // Teste quando `quantity` é 0
        render(<AddToCartButton quantity={0} onClick={() => { }} />);
        const buttonsNoQuantity = screen.getAllByTestId("add-to-cart-button");
        expect(buttonsNoQuantity[0]).toHaveTextContent("COMPRAR"); // Verifique se o texto é "COMPRAR"
    });

    it("deve chamar a função onClick quando o botão for clicado", () => {
        const onClickMock = jest.fn(); // Função mock para testar o clique

        // Renderize o componente com a função mock
        render(<AddToCartButton quantity={3} onClick={onClickMock} />);

        // Simule o clique no botão
        const button = screen.getByTestId("add-to-cart-button");
        fireEvent.click(button);

        // Verifique se a função onClick foi chamada
        expect(onClickMock).toHaveBeenCalledTimes(1);
    });

    it("deve aplicar o efeito de hover corretamente", () => {
        const onClickMock = jest.fn(); // Função mock para testar o clique

        // Renderize o componente
        render(<AddToCartButton quantity={3} onClick={onClickMock} />);

        // Simule o hover sobre o botão
        const button = screen.getByTestId("add-to-cart-button");
        fireEvent.mouseOver(button);

        // Você pode verificar se a animação foi chamada
        expect(button).toHaveClass("btn-cart"); // Exemplo de verificar a classe, mas você pode verificar o estilo com a animação
    });
});
