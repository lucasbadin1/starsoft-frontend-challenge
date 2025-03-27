import { render, screen } from "@testing-library/react";
import FinalizeButton from "@/components/cart/components/button/finalize-button";

describe("FinalizeButton", () => {
    it("deve desabilitar o botão quando não houver itens no carrinho", () => {
        render(<FinalizeButton purchaseCompleted={false} onClick={() => { }} hasItems={false} />);
        const button = screen.getByRole("button");

        // Verifica se o botão está desabilitado
        expect(button).toBeDisabled();
    });
});
