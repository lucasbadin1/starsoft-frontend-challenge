"use client";

import { motion } from "framer-motion";
import { LoadMoreButtonProps } from "@/interfaces/button";

export default function LoadMoreButton({ 
  isLoading, 
  onClick, 
  currentCount, 
  totalCount 
}: LoadMoreButtonProps) {

  const safeTotal = totalCount > 0 ? totalCount : 1;
  const percentage = Math.min((currentCount / safeTotal) * 100, 100);

  return (
    <div className="btn-container flex flex-col items-center gap-4 w-full max-w-md mx-auto">
      <div className="card-container w-full">
        <div className="loading-bar-gray w-full h-2 bg-gray-200 rounded-full overflow-hidden dark:bg-zinc-700 mb-4">
          <motion.div 
            className="loading-bar h-full bg-indigo-600"
            initial={{ width: 0 }}
            animate={{ width: `${percentage}%` }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </div>

        <motion.button
          onClick={onClick}
          className="btn-load w-full px-8 py-3 rounded-full bg-zinc-900 text-white font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-zinc-800 transition-colors"
          disabled={isLoading}
          whileHover={{
            scale: 1.03,
            transition: {
              repeat: Infinity,
              repeatType: "reverse",
              duration: 0.6,
              ease: "easeInOut",
            },
          }}
          style={{ cursor: isLoading ? "not-allowed" : "pointer" }}
        >
          {isLoading ? "Carregando..." : "Carregar mais"}
        </motion.button>
      </div>
    </div>
  );
}