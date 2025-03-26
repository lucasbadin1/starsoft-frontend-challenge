import Image from "next/image";
import { Product } from "@/types/product";
import CartButton from "../cart/cart-button";
import DescriptionShowMore from "./description-show-more";

type ProductProps = {
  product: Product;
};

export default function NftCard({ product }: ProductProps) {
  return (
    <div className="nft-card-container">
      <Image src={product.image} width={300} height={250} alt={product.name} />
      <div className="nft-card-info">
        <h1 className="nft-card-title">{product.name}</h1>
        <h2 className="nft-card-description">
          <DescriptionShowMore
            aria-label="Mostrar mais sobre o produto"
            text={product.description}
          />
        </h2>

        <div className="nft-card-container-price">
          <Image src="/Etherium.png" width={30} height={30} alt="Logo da criptomoeda Ethereum" />
          <p className="nft-card-price">{product.price} ETH</p>
        </div>
      </div>

      <CartButton product={product} />
    </div>
  );
}
