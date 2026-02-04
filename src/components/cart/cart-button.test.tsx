import { render, screen, fireEvent } from "@testing-library/react";
import CartButton from "./cart-button";
import { addToCart } from "@/store/features/cart-slice";
import { openCart, closeCart } from "@/store/features/cart-state-slice";
import { useSelector } from "react-redux";
import React from "react";

// MOCKS
const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  useDispatch: () => mockDispatch,
  useSelector: jest.fn(),
}));

// Mock da UI (Sheet)
jest.mock("@/components/ui/sheet", () => ({
  Sheet: function MockSheet({ children, open }: { children: React.ReactNode; open: boolean }) {
    return open ? (
      <div data-testid="sheet-open">{children}</div>
    ) : (
      <div data-testid="sheet-closed" />
    );
  },
  SheetContent: function MockSheetContent({ children }: { children: React.ReactNode }) {
    return <div>{children}</div>;
  },
  SheetHeader: function MockSheetHeader({ children }: { children: React.ReactNode }) {
    return <div>{children}</div>;
  },
  SheetTitle: function MockSheetTitle({ children }: { children: React.ReactNode }) {
    return <div>{children}</div>;
  },
}));

// Mock dos botões internos
jest.mock("./components/button/buy-button", () => {
  return function MockBuyButton({ onClick }: { onClick: () => void }) {
    return (
      <button data-testid="buy-btn" onClick={onClick}>
        COMPRAR MOCK
      </button>
    );
  };
});

jest.mock("./components/button/back-button", () => {
  return function MockBackButton({ onClick }: { onClick: () => void }) {
    return (
      <button data-testid="back-btn" onClick={onClick}>
        VOLTAR
      </button>
    );
  };
});

jest.mock("./components/cart-summary", () => {
  return function MockCartSummary() {
    return <div>SUMMARY MOCK</div>;
  };
});

jest.mock("./components/cart-item", () => {
  return function MockCartItem({ item }: { item: { name: string } }) {
    return <div data-testid="cart-item-mock">{item.name}</div>;
  };
});

// Interface para o Mock do Estado
interface MockState {
  cart: {
    items: Array<{ id: string; name: string; quantity: number }>;
    totalPrice: number;
  };
  cartUI: {
    isOpen: boolean;
  };
}

describe("Integração: CartButton & Mochila", () => {
  const mockProduct = {
    id: "1",
    name: "NFT Rare",
    price: 100,
    image: "img.png",
    description: "desc",
  };

  const mockUseSelector = useSelector as unknown as jest.Mock;

  beforeEach(() => {
    mockDispatch.mockClear();
    jest.clearAllMocks();
  });

  test("Cenário 1: Interação de Compra", () => {
    mockUseSelector.mockImplementation((cb: (state: MockState) => unknown) =>
      cb({
        cart: { items: [], totalPrice: 0 },
        cartUI: { isOpen: false },
      }),
    );

    render(<CartButton product={mockProduct} />);

    const btn = screen.getByTestId("buy-btn");
    fireEvent.click(btn);

    expect(mockDispatch).toHaveBeenCalledWith(addToCart(mockProduct));
    expect(mockDispatch).toHaveBeenCalledWith(openCart());
  });

  test("Cenário 2: Renderização de Itens (Mochila Cheia)", () => {
    mockUseSelector.mockImplementation((cb: (state: MockState) => unknown) =>
      cb({
        cart: {
          items: [
            { id: "1", name: "NFT 1", quantity: 1 },
            { id: "2", name: "NFT 2", quantity: 1 },
          ],
          totalPrice: 200,
        },
        cartUI: { isOpen: true },
      }),
    );

    render(<CartButton product={mockProduct} />);

    expect(screen.getByTestId("sheet-open")).toBeInTheDocument();

    const items = screen.getAllByTestId("cart-item-mock");
    expect(items).toHaveLength(2);
    expect(items[0]).toHaveTextContent("NFT 1");
    expect(items[1]).toHaveTextContent("NFT 2");

    expect(screen.queryByText("Carrinho vazio")).not.toBeInTheDocument();
  });

  test("Cenário 3: Renderização de Carrinho Vazio", () => {
    mockUseSelector.mockImplementation((cb: (state: MockState) => unknown) =>
      cb({
        cart: { items: [], totalPrice: 0 },
        cartUI: { isOpen: true },
      }),
    );

    render(<CartButton product={mockProduct} />);

    expect(screen.getByText("Carrinho vazio")).toBeInTheDocument();
    expect(screen.queryByTestId("cart-item-mock")).not.toBeInTheDocument();
  });

  test("Cenário 4: Fechar o Carrinho", () => {
    mockUseSelector.mockImplementation((cb: (state: MockState) => unknown) =>
      cb({
        cart: { items: [], totalPrice: 0 },
        cartUI: { isOpen: true },
      }),
    );

    render(<CartButton product={mockProduct} />);

    fireEvent.click(screen.getByTestId("back-btn"));

    expect(mockDispatch).toHaveBeenCalledWith(closeCart());
  });
});
