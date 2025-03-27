import { motion } from "framer-motion";
import { LoadMoreButtonProps } from "@/interfaces/button";

export default function LoadMoreButton({ isLoading, onClick }: LoadMoreButtonProps) {
  return (
    <div className="btn-container">
      <div className="card-container">
        <div className="loading-bar-gray">
          <div className="loading-bar" style={{ width: isLoading ? "100%" : "50%" }}></div>
        </div>

        <motion.button
          onClick={onClick}
          className="btn-load"
          disabled={isLoading}
          whileHover={{
            scale: 1.03, // Aumento suave no tamanho
            transition: {
              repeat: Infinity,
              repeatType: "reverse",
              duration: 0.6,
              ease: "easeInOut",
            },
          }}
          style={{cursor: "pointer"}}
        >
          {isLoading ? "Carregando..." : "Carregar mais"}
        </motion.button>
      </div>
    </div>
  );
}
