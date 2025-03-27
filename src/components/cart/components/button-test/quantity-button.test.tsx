import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import QuantityButton from "@/components/cart/components/button/quantity-button";
import cartReducer, { updateQuantity } from "@/store/features/cart-slice"; 

const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
    preloadedState: {
        cart: {
            items: [{ id: "1", quantity: 2 }],
            totalPrice: 100,  
        },
    },
});

describe("QuantityButton", () => {
    it("não deve permitir que a quantidade seja menor que 1", () => {
        render(
            <Provider store={store}>
                <QuantityButton itemId="1" quantity={2} />
            </Provider>
        );

        // Simula o clique no botão de decremento
        const decrementButton = screen.getByText("-");
        fireEvent.click(decrementButton);

        // Verifica se a quantidade não foi alterada para abaixo de 1
        expect(store.getState().cart.items[0].quantity).toBe(1);
    });

    it("deve decrementar a quantidade quando o botão de - for clicado", () => {
        render(
            <Provider store={store}>
                <QuantityButton itemId="1" quantity={3} />
            </Provider>
        );

        const decrementButton = screen.getByText("-");
        fireEvent.click(decrementButton);

        // Verifica se o estado foi alterado corretamente
        expect(store.getState().cart.items[0].quantity).toBe(2);
    });

    it("não deve permitir que a quantidade seja menor que 1", () => {
        render(
            <Provider store={store}>
                <QuantityButton itemId="1" quantity={1} />
            </Provider>
        );

        // Simula o clique no botão de decremento
        const decrementButton = screen.getByText("-");
        fireEvent.click(decrementButton);

        // Verifica se a quantidade não foi alterada (não deve ir abaixo de 1)
        expect(store.getState().cart.items[0].quantity).toBe(1);
    });


    it("deve chamar dispatch com os valores corretos ao clicar nos botões", () => {
        const dispatchMock = jest.fn();
        store.dispatch = dispatchMock;

        render(
            <Provider store={store}>
                <QuantityButton itemId="1" quantity={1} />
            </Provider>
        );

        // Simula o clique no botão de incremento
        const incrementButton = screen.getByText("+");
        fireEvent.click(incrementButton);

        // Verifica se o dispatch foi chamado corretamente
        expect(dispatchMock).toHaveBeenCalledWith(
            updateQuantity({ id: "1", quantity: 2 })
        );
    });
});
