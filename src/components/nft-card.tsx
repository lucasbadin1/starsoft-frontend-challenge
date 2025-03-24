import Image from "next/image";
import CartButton from "./cart-button";
import DescriptionShowMore from "./Button/description-show-more";

type ProductProps = {
  product: {
    id: string;
    name: string;
    description: string;
    image: string;
    price: number;
  };
};

export default function NftCard({ product }: ProductProps) {
  return (
    <div className="max-w-87 max-h-180 w-full h-auto bg-dark p-6 rounded-lg text-white flex flex-col justify-center items-center">
      <Image src={product.image} width={300} height={250} alt={product.name} />
      <div className="flex flex-col gap-3 mt-12">
        <h1 className="text-heading text-lg font-medium">{product.name}</h1>
        <h2 className="text-heading text-xs font-light line-clamp-3">
        <DescriptionShowMore text={product.description}  /> 
        </h2>

        <div className="flex gap-3 mt-6">
          <Image src="/Etherium.png" width={30} height={30} alt="Etherium" />
          <p className="text-heading text-xl font-semibold">
            {product.price} ETH
          </p>
        </div>
      </div>

      <CartButton product={product} />
    </div>
  );
}
