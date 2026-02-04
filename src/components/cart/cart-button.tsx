"use client";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { addToCart } from "@/store/features/cart-slice";
import { openCart, closeCart } from "@/store/features/cart-state-slice";
import { Product } from "@/types/product";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import AddToCartButton from "@/components/cart/components/button/buy-button";
import BackButton from "@/components/cart/components/button/back-button";
import CartItem from "@/components/cart/components/cart-item";
import CartSummary from "@/components/cart/components/cart-summary";

export default function CartButton({ product }: { product: Product }) {
  const dispatch = useDispatch();

  const cart = useSelector((state: RootState) => state.cart.items);
  const totalPrice = useSelector((state: RootState) => state.cart.totalPrice);
  const isCartOpen = useSelector((state: RootState) => state.cartUI.isOpen);

  // Hidratação Segura
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const existingItem = cart.find((item) => item.id === product.id);
  const realQuantity = existingItem ? existingItem.quantity : 0;

  // Server/First Render
  const displayQuantity = isMounted ? realQuantity : 0;

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    dispatch(openCart());
  };

  return (
    <>
      <AddToCartButton quantity={displayQuantity} onClick={handleAddToCart} />

      <Sheet
        open={isCartOpen}
        onOpenChange={(open) => (open ? dispatch(openCart()) : dispatch(closeCart()))}
      >
        <SheetContent
          side="right"
          className={`sheet-content ${isCartOpen ? "sheet-open" : "sheet-closed"}`}
        >
          <SheetHeader>
            <SheetTitle className="sheet-title">
              <BackButton onClick={() => dispatch(closeCart())} />
              <p className="cart-title">Mochila de Compras</p>
            </SheetTitle>
          </SheetHeader>

          <div className="cart-item-container">
            {cart.length === 0 ? (
              <p className="cart-empty">Carrinho vazio</p>
            ) : (
              cart.map((item) => <CartItem key={item.id} item={item} />)
            )}
          </div>

          <CartSummary totalPrice={totalPrice} />
        </SheetContent>
      </Sheet>
    </>
  );
}
