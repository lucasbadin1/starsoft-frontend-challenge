"use client";

import { useEffect, useState } from "react";
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

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <motion.div
      className="header-container-cart"
      whileHover={{
        scale: 1.2,
        transition: { type: "spring", stiffness: 100, damping: 10 },
      }}
      onClick={() => dispatch(openCart())}
    >
      <ShoppingBag size={24} className="header-shopping-bag" />

      <p className="text-2xl">{mounted ? totalItems : 0}</p>
    </motion.div>
  );
}
