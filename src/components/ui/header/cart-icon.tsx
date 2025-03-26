"use client";

import { ShoppingBag } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import { openCart } from "@/store/features/cart-state-slice";

export default function CartIcon() {
  const dispatch = useDispatch();
  const totalItems = useSelector((state: RootState) =>
    state.cart.items.reduce((total, item) => total + item.quantity, 0),
  );

  return (
    <div className="header-container-cart">
      <ShoppingBag size={24} className="header-shopping-bag" onClick={() => dispatch(openCart())} />
      <p className="text-2xl">{totalItems}</p>
    </div>
  );
}
