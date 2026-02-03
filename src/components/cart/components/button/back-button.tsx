import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { BackButtonProps } from "@/interfaces/button";

export default function BackButton({ onClick }: BackButtonProps) {
  return (
    <motion.button
      className="btn-back"
      onClick={onClick}
      whileHover={{
        scale: 1.05, 
        transition: { type: "spring", stiffness: 100, damping: 10 }, 
      }}
    >
      <ArrowLeft className="icon-back" />
    </motion.button>
  );
}
