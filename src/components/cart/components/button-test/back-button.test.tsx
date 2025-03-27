import { render, screen, fireEvent } from "@testing-library/react";
import BackButton from "@/components/cart/components/button/back-button";

describe("BackButton", () => {
    it("deve renderizar o botão corretamente", () => {
        // Renderiza o botão
        render(<BackButton onClick={() => { }} />);

        // Verifique se o botão está no documento
        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();

        // Verifique se o ícone ArrowLeft está presente dentro do botão
        const icon = screen.getByTestId("back-icon");
        expect(icon).toBeInTheDocument();
    });

    it("deve chamar a função onClick quando o botão for clicado", () => {
        const onClickMock = jest.fn(); // Cria uma função mock

        // Renderiza o botão com a função mock
        render(<BackButton onClick={onClickMock} />);

        // Encontre o botão e simule o clique
        const button = screen.getByRole("button");
        fireEvent.click(button);

        // Verifique se a função onClick foi chamada
        expect(onClickMock).toHaveBeenCalledTimes(1);
    });

    it("deve ter o efeito de hover no botão", () => {
        const onClickMock = jest.fn();

        // Renderiza o botão
        render(<BackButton onClick={onClickMock} />);

        // Simule o hover no botão
        const button = screen.getByRole("button");
        fireEvent.mouseOver(button);

    });
});
