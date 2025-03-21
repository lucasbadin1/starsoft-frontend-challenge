import Link from "next/link";
import Image from "next/image";

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
        <div className="bg-dark p-6 rounded-lg text-white flex flex-col justify-center items-center">
            <Image
                src={product.image}
                width={300}
                height={250}
                alt={product.name}
            />
            <div className="flex flex-col gap-3 mt-12">
                <h1 className="text-heading text-lg font-medium">{product.name}</h1>
                <h2 className="text-heading text-xs font-light">{product.description}</h2>
                <div className="flex gap-3 mt-3">
                    <Image
                        src="/Etherium.png"
                        width={30}
                        height={30}
                        alt="Imagem da criptomoeda Etherium"
                    />
                    <p className="text-heading text-xl font-semibold">{product.price} ETH</p>
                </div>
            </div>
            <Link href={`/product/${product.id}`} className="w-full">
    <button className="mt-8 p-2 bg-orange text-white font-semibold text-base rounded-lg w-full h-14">
        COMPRAR
    </button>
</Link>

        </div>
    );
}
