import { render, screen, fireEvent } from "@testing-library/react";
import QuantityButton from "./quantity-button";
import { updateQuantity } from "@/store/features/cart-slice";

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  useDispatch: () => mockDispatch,
}));

describe("Component: QuantityButton", () => {
  const itemId = "product-123";

  beforeEach(() => {
    mockDispatch.mockClear();
  });

  test("Deve renderizar a quantidade correta", () => {
    render(<QuantityButton itemId={itemId} quantity={5} />);
    expect(screen.getByText("5")).toBeInTheDocument();
  });

  test("Deve disparar updateQuantity(+1) ao clicar no botão de incremento (+)", () => {
    render(<QuantityButton itemId={itemId} quantity={1} />);

    const plusBtn = screen.getByText("+");
    fireEvent.click(plusBtn);

    expect(mockDispatch).toHaveBeenCalledTimes(1);
    expect(mockDispatch).toHaveBeenCalledWith(updateQuantity({ id: itemId, quantity: 2 }));
  });

  test("Deve disparar updateQuantity(-1) ao clicar no botão de decremento (-) quando quantidade > 1", () => {
    render(<QuantityButton itemId={itemId} quantity={5} />);

    const minusBtn = screen.getByText("-");
    fireEvent.click(minusBtn);

    expect(mockDispatch).toHaveBeenCalledTimes(1);
    expect(mockDispatch).toHaveBeenCalledWith(updateQuantity({ id: itemId, quantity: 4 }));
  });

  test("NÃO deve disparar ação ao clicar em (-) se a quantidade for 1", () => {
    render(<QuantityButton itemId={itemId} quantity={1} />);

    const minusBtn = screen.getByText("-");
    fireEvent.click(minusBtn);

    expect(mockDispatch).not.toHaveBeenCalled();
  });
});
