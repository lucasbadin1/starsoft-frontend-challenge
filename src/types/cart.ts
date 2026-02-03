import { Product } from "@/types/product";

export type CartActionButtonProps = {
  quantity: number;
  onClick: () => void;
};

export type CartSummaryProps = {
  totalPrice: number;
};

export type CartItemProps = {
    product: Product & { quantity: number };
};