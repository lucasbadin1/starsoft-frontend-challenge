"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import Image from "next/image";
import { ArrowLeft, Trash } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  updateQuantity,
} from "@/store/features/cart-slice";
import { RootState } from "@/store/store";
import { openCart, closeCart } from "@/store/features/cart-state-slice";

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
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart.items);
  const totalPrice = useSelector((state: RootState) => state.cart.totalPrice);
  const isCartOpen = useSelector((state: RootState) => state.cartUI.isOpen);

  const cartItem = cart.find((item) => item.id === product.id);
  const quantity = cartItem ? cartItem.quantity : 0;

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity: 1 }));
    dispatch(openCart());
  };

  return (
    <>
      <button
        onClick={handleAddToCart}
        className="max-w-74 h-16 w-full mt-8 p-2 bg-orange text-white font-semibold text-base rounded-lg"
      >
        {quantity > 0 ? `COMPRAR (${quantity + 1})` : "COMPRAR"}
      </button>

      <Sheet
        open={isCartOpen}
        onOpenChange={(open) =>
          open ? dispatch(openCart()) : dispatch(closeCart())
        }
      >
        <SheetContent
          side="right"
          className="max-w-[90vw] sm:min-w-[80vw] md:w-[60vw] lg:min-w-[55vw] xl:min-w-[800px] w-full bg-night overflow-hidden max-h-screen flex flex-col z-[999]"
        >
          <SheetHeader>
            <SheetTitle className="flex w-full gap-5 md:gap-[20%] mt-[40px] ml-7 md:ml-[70px]">
              <button
                className="bg-[#2B2B2B] w-12 h-12 flex items-center justify-center rounded-full"
                onClick={() => dispatch(closeCart())}
              >
                <ArrowLeft className="w-6 h-6 text-orange" />
              </button>
              <p className="text-heading text-2xl font-medium text-white pt-2">
                Mochila de Compras
              </p>
            </SheetTitle>
          </SheetHeader>

          <div className="flex-1 overflow-y-auto px-7 max-h-[60vh]">
            {cart.length === 0 ? (
              <p className="text-white text-center mt-10">Carrinho vazio</p>
            ) : (
              cart.map((item) => (
                <div
                  key={item.id}
                  className="mt-[20px] min-h-[20px] flex flex-col md:flex-row items-center gap-2 rounded-lg px-7 py-5 bg-[#2B2B2B]"
                >
                  <Image
                    src={item.image}
                    width={170}
                    height={170}
                    alt={item.name}
                    className="rounded-lg object-contain"
                  />

                  <div className="flex flex-col gap-1 pl-7">
                    <h2 className="text-heading text-lg font-medium text-white">
                      {item.name}
                    </h2>
                    <h3 className="text-heading text-xs font-light text-white line-clamp-2 sm:line-clamp-3">
                      {product.description}
                    </h3>
                    <div className="flex items-center gap-4">
                      <Image
                        src="/Etherium.png"
                        width={30}
                        height={30}
                        alt="Etherium"
                      />
                      <p className="text-heading text-xl font-semibold text-white">
                        {item.price * item.quantity} ETH
                      </p>
                    </div>
                    <div className="flex justify-between items-center pt-2 pr-2">
                      <button className="bg-dark flex items-center justify-between px-4 gap-4 w-[115px] h-12 rounded-lg">
                        <p
                          className="text-heading text-sm font-semibold text-white cursor-pointer"
                          onClick={() =>
                            item.quantity > 1 &&
                            dispatch(
                              updateQuantity({
                                id: item.id,
                                quantity: item.quantity - 1,
                              })
                            )
                          }
                        >
                          -
                        </p>
                        <p className="text-heading text-sm font-semibold text-white">
                          {item.quantity}
                        </p>
                        <p
                          className="text-heading text-sm font-semibold text-white cursor-pointer"
                          onClick={() =>
                            dispatch(
                              updateQuantity({
                                id: item.id,
                                quantity: item.quantity + 1,
                              })
                            )
                          }
                        >
                          +
                        </p>
                      </button>
                      <button
                        className="bg-orange w-10 h-10 flex items-center justify-center rounded-full"
                        onClick={() => dispatch(removeFromCart(item.id))}
                      >
                        <Trash className="w-6 h-6 text-white" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="bg-night py-5 px-7 border-t border-gray-700">
            <div className="flex justify-between items-center mb-5">
              <p className="text-heading text-2xl font-bold text-white">
                TOTAL
              </p>
              <div className="flex items-center gap-3">
                <Image
                  src="/Etherium.png"
                  width={30}
                  height={30}
                  alt="Etherium"
                />
                <p className="text-heading text-2xl font-bold text-white">
                  {totalPrice} ETH
                </p>
              </div>
            </div>
            <button className="w-full h-[60px] bg-orange text-white text-heading text-base font-bold rounded-lg">
              FINALIZAR COMPRA
            </button>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
