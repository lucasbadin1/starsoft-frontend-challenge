import { motion } from "framer-motion";
import { FinalizeButtonProps } from "@/interfaces/button";

export default function FinalizeButton({
  purchaseCompleted,
  onClick,
  hasItems,
}: FinalizeButtonProps) {
  const isDisabled = !hasItems; // Desabilita o botão se o carrinho estiver vazio

  return (
    <motion.button
      className="btn-finalize"
      onClick={isDisabled ? () => {} : onClick} // Não executa onClick se estiver desabilitado
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
