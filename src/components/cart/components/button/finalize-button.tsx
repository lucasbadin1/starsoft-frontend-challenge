import { motion } from "framer-motion";
import { FinalizeButtonProps } from "@/interfaces/button";

export default function FinalizeButton({ purchaseCompleted, onClick }: FinalizeButtonProps) {
  return (
    <motion.button
      className="btn-finalize"
      onClick={onClick}
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
      <p>{purchaseCompleted ? "COMPRA FINALIZADA!" : "FINALIZAR COMPRA"}</p>
    </motion.button>
  );
}
