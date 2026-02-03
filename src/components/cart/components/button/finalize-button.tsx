import { motion } from "framer-motion";
import { FinalizeButtonProps } from "@/interfaces/button";

export default function FinalizeButton({
  purchaseCompleted,
  onClick,
  hasItems,
}: FinalizeButtonProps) {
  const isDisabled = !hasItems; 

  return (
    <motion.button
      className="btn-finalize"
      onClick={isDisabled ? () => {} : onClick} 
      whileHover={{
        scale: 1.03, 
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
