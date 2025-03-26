"use client";

import { motion } from "framer-motion";
import { CartActionButtonProps } from "@/types/cart";

export default function AddToCartButton({ quantity, onClick }: CartActionButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      className="btn-cart"
      whileHover={{
        scale: 1.03, // Aumento suave no tamanho
        transition: {
          repeat: Infinity,
          repeatType: "reverse",
          duration: 0.6,
          ease: "easeInOut",
        },
      }}
    >
      {quantity > 0 ? `COMPRAR (${quantity + 1})` : "COMPRAR"}
    </motion.button>
  );
}
