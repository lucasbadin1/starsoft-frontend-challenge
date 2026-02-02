"use client"; // 1. Obrigatório para interações de clique

import Image from "next/image";

export default function Logo() {
  
  const handleScrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth", 
      });
    }
  };

  return (
    <Image
      src="/Logo.png"
      width={100}
      height={40}
      alt="Logotipo da Starsoft com fonte arredondada e tom dourado sobre fundo escuro"
      className="cursor-pointer transition-opacity hover:opacity-80" 
      onClick={handleScrollToTop}
    />
  );
}