// Bibliotecas Externas
import { motion } from "framer-motion"; 
import Image from "next/image"; 
import { Product } from "@/types/product"; 
import QuantityButton from "./button/quantity-button"; 
import RemoveButton from "./button/remove-button"; 

type CartItemProps = {
  item: Product & { quantity: number };
};

export default function CartItem({ item }: CartItemProps) {
  return (
    <motion.div
      className="cart-item"
      whileHover={{
        scale: 1.01, // Suavemente aumenta o tamanho do card
        transition: { type: "spring", stiffness: 100, damping: 10 },
      }}
    >
      <Image
        src={item.image}
        width={170}
        height={170}
        alt={item.name}
        className="cart-item-image"
      />

      <div className="cart-item-info">
        <h2 className="cart-item-name">{item.name}</h2>
        <h3 className="cart-item-description">{item.description}</h3>
        <div className="cart-item-coin">
          <Image src="/Etherium.png" width={30} height={30} alt="Etherium" />
          <p className="cart-item-coin-info">{item.price * item.quantity} ETH</p>
        </div>
        <div className="cart-item-actions">
          <QuantityButton itemId={item.id} quantity={item.quantity} />

          <RemoveButton itemId={item.id} />
        </div>
      </div>
    </motion.div>
  );
}
