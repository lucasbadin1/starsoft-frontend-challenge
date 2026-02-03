import Image from "next/image";
import { Product } from "@/types/product";
import QuantityButton from "@/components/cart/components/button/quantity-button";
import RemoveButton from "@/components/cart/components/button/remove-button";

type CartItemProps = {
  item: Product & { quantity: number };
};

export default function CartItem({ item }: CartItemProps) {
  return (
    <div className="cart-item">
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
          <Image
            src="/Etherium.png"
            width={23}
            height={23}
            alt="Etherium"
            className="h-[20px] w-[20px] sm:h-[23px] sm:w-[23px]"
          />
          <p className="cart-item-coin-info">{item.price * item.quantity} ETH</p>
        </div>
        <div className="cart-item-actions">
          <QuantityButton itemId={item.id} quantity={item.quantity} />

          <RemoveButton itemId={item.id} />
        </div>
      </div>
    </div>
  );
}
