"use client";

import { motion } from "framer-motion";
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
    <motion.div
      data-testid="cart-icon"  // Adicionando data-testid
      className="header-container-cart"
      whileHover={{
        scale: 1.2, // Crescimento suave
        transition: { type: "spring", stiffness: 100, damping: 10 }, // Transição suave
      }}
      onClick={() => dispatch(openCart())}
    >
      <ShoppingBag size={24} className="header-shopping-bag" />
      <p className="text-2xl">{totalItems}</p>
    </motion.div>
  );
}
