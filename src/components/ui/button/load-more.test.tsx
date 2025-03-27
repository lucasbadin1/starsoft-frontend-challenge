import { render, screen, fireEvent } from "@testing-library/react";
import LoadMoreButton from "@/components/ui/button/load-more";

describe("LoadMoreButton", () => {
    it("deve renderizar corretamente o texto do botão com base no estado de carregamento", () => {
        // Teste quando `isLoading` é false
        render(<LoadMoreButton isLoading={false} onClick={() => { }} />);

        // Seleciona o botão pelo texto "Carregar mais"
        const button = screen.getByText("Carregar mais");
        expect(button).toBeInTheDocument();

        // Teste quando `isLoading` é true
        render(<LoadMoreButton isLoading={true} onClick={() => { }} />);

        // Seleciona o botão pelo texto "Carregando..."
        const updatedButton = screen.getByText("Carregando...");
        expect(updatedButton).toBeInTheDocument();
    });

    it("deve desabilitar o botão quando `isLoading` for true", () => {
        render(<LoadMoreButton isLoading={true} onClick={() => { }} />);
        const button = screen.getByText("Carregando...");
        expect(button).toBeDisabled();
    });

    it("deve chamar a função onClick quando o botão for clicado", () => {
        const mockOnClick = jest.fn();
        render(<LoadMoreButton isLoading={false} onClick={mockOnClick} />);

        const button = screen.getByText("Carregar mais");
        fireEvent.click(button);

        expect(mockOnClick).toHaveBeenCalledTimes(1);
    });
});