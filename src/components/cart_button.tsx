"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useState } from "react";
import Image from "next/image";
import { ArrowLeft, Trash } from "lucide-react";

type CartButtonProps = {
  product: {
    id: string;
    name: string;
    description: string;
    image: string;
    price: number;
  };
};

export default function CartButton({ product }: CartButtonProps) {
  const [open, setOpen] = useState(false);

  const handleAddToCart = () => {
    setOpen(true); 
  };

  return (
    <>
      <button
        onClick={handleAddToCart}
        className="mt-8 p-2 bg-orange text-white font-semibold text-base rounded-lg w-full h-14"
      >
        COMPRAR
      </button>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="right" className="min-w-[800px] bg-night overflow-y-auto overflow-x-hidden max-h-screen">
          <SheetHeader>
            <SheetTitle className="flex w-full gap-[20%] mt-[40px] ml-[70px]">
              <button className="bg-[#2B2B2B] w-12 h-12 flex items-center justify-center rounded-full">
                <ArrowLeft className="w-6 h-6 text-orange" />
              </button>
              <p className="text-heading text-2xl font-medium text-white pt-2">
                Mochila de Compras
              </p>
            </SheetTitle>
          </SheetHeader>
          <div className="mt-[50px] min-h-[20px] mx-7 flex rounded-lg px-7 py-5 bg-[#2B2B2B]">
            <Image
              src={product.image}
              width={170}
              height={160}
              alt={product.name}
              className="rounded-lg"
            />
            <div className="flex flex-col gap-2 pl-7">
              <h2 className="text-heading text-lg font-medium text-white">
                {product.name}
              </h2>
              <p className="text-heading text-xs font-light text-white">
                {product.description}
              </p>
              <div className="flex items-center gap-3">
                <Image
                  src="/Etherium.png"
                  width={30}
                  height={30}
                  alt="Etherium"
                />
                <p className="text-heading text-xl font-semibold text-white">
                  {product.price} ETH
                </p>
              </div>
              <div className="flex justify-between pt-2">
                <button className="bg-dark flex items-center justify-between px-4 gap-4 w-[115px] h-12 rounded-lg">
                  <p className="text-heading text-sm font-semibold text-white">
                    +
                  </p>
                  <p className="text-heading text-sm font-semibold text-white">
                    1
                  </p>
                  <p className="text-heading text-sm font-semibold text-white">
                    -
                  </p>
                </button>
                <button className="bg-orange w-10 h-10 flex items-center justify-center rounded-full">
                  <Trash className="w-6 h-6 text-white" />
                </button>
              </div>
            </div>
          </div>
          <div className="mt-[70px] mx-13 flex justify-between items-center">
            <p className="text-heading text-2xl font-bold text-white">TOTAL</p>
            <div className="flex items-center gap-3">
              <Image
                src="/Etherium.png"
                width={30}
                height={30}
                alt="Etherium"
              />
              <p className="text-heading text-2xl font-bold text-white">
                {product.price} ETH
              </p>
            </div>
          </div>
          <button className="mt-[70px] mx-7 w-auto h-[80px] bg-orange text-white text-heading text-base font-bold rounded-lg">
            FINALIZAR COMPRA
          </button>
        </SheetContent>
      </Sheet>
    </>
  );
}
