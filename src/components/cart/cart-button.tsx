"use client";

import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import Image from "next/image";
import { Trash } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart, updateQuantity } from "@/store/features/cart-slice";
import { RootState } from "@/store/store";
import { openCart, closeCart } from "@/store/features/cart-state-slice";
import { Product } from "@/types/product";
import BackButton from "./components/back-button";

type CartButtonProps = {
  product: Product;
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
      <button onClick={handleAddToCart} className="btn-cart">
        {quantity > 0 ? `COMPRAR (${quantity + 1})` : "COMPRAR"}
      </button>

      <Sheet
        open={isCartOpen}
        onOpenChange={(open) => (open ? dispatch(openCart()) : dispatch(closeCart()))}
      >
        <SheetContent side="right" className="sheet-content">
          <SheetHeader>
            <SheetTitle className="sheet-title">
              <BackButton onClick={() => dispatch(closeCart())} />
              <p className="title-cart">Mochila de Compras</p>
            </SheetTitle>
          </SheetHeader>

          <div className="max-h-[60vh] flex-1 overflow-y-auto px-7">
            {cart.length === 0 ? (
              <p className="mt-10 text-center text-white">Carrinho vazio</p>
            ) : (
              cart.map((item) => (
                <div
                  key={item.id}
                  className="mt-[20px] flex min-h-[20px] flex-col items-center gap-2 rounded-lg bg-[#2B2B2B] px-7 py-5 md:flex-row"
                >
                  <Image
                    src={item.image}
                    width={170}
                    height={170}
                    alt={item.name}
                    className="rounded-lg object-contain"
                  />

                  <div className="flex flex-col gap-1 pl-7">
                    <h2 className="text-heading text-lg font-medium text-white">{item.name}</h2>
                    <h3 className="text-heading line-clamp-2 text-xs font-light text-white sm:line-clamp-3">
                      {product.description}
                    </h3>
                    <div className="flex items-center gap-4">
                      <Image src="/Etherium.png" width={30} height={30} alt="Etherium" />
                      <p className="text-heading text-xl font-semibold text-white">
                        {item.price * item.quantity} ETH
                      </p>
                    </div>
                    <div className="flex items-center justify-between pt-2 pr-2">
                      <button className="bg-dark flex h-12 w-[115px] items-center justify-between gap-4 rounded-lg px-4">
                        <p
                          className="text-heading cursor-pointer text-sm font-semibold text-white"
                          onClick={() =>
                            item.quantity > 1 &&
                            dispatch(
                              updateQuantity({
                                id: item.id,
                                quantity: item.quantity - 1,
                              }),
                            )
                          }
                        >
                          -
                        </p>
                        <p className="text-heading text-sm font-semibold text-white">
                          {item.quantity}
                        </p>
                        <p
                          className="text-heading cursor-pointer text-sm font-semibold text-white"
                          onClick={() =>
                            dispatch(
                              updateQuantity({
                                id: item.id,
                                quantity: item.quantity + 1,
                              }),
                            )
                          }
                        >
                          +
                        </p>
                      </button>
                      <button
                        className="bg-orange flex h-10 w-10 items-center justify-center rounded-full"
                        onClick={() => dispatch(removeFromCart(item.id))}
                      >
                        <Trash className="h-6 w-6 text-white" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="bg-night border-t border-gray-700 px-7 py-5">
            <div className="mb-5 flex items-center justify-between">
              <p className="text-heading text-2xl font-bold text-white">TOTAL</p>
              <div className="flex items-center gap-3">
                <Image src="/Etherium.png" width={30} height={30} alt="Etherium" />
                <p className="text-heading text-2xl font-bold text-white">{totalPrice} ETH</p>
              </div>
            </div>
            <button className="bg-orange text-heading h-[60px] w-full rounded-lg text-base font-bold text-white">
              FINALIZAR COMPRA
            </button>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
