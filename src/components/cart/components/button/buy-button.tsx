"use client";

import { CartActionButtonProps } from "@/types/cart";

export default function AddToCartButton({ quantity, onClick }: CartActionButtonProps) {
  return (
    <button onClick={onClick} className="btn-cart">
      {quantity > 0 ? `COMPRAR (${quantity + 1})` : "COMPRAR"}
    </button>
  );
}
