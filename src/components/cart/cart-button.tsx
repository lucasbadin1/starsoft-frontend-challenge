"use client";

import { useDispatch, useSelector } from "react-redux";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import AddToCartButton from "./components/button/buy-button";
import BackButton from "./components/button/back-button";
import CartItem from "./components/cart-item";
import CartSummary from "./components/cart-summary";
import { addToCart } from "@/store/features/cart-slice";
import { openCart, closeCart } from "@/store/features/cart-state-slice";
import { RootState } from "@/store/store";
import { Product } from "@/types/product";


export default function CartButton({ product }: { product: Product }) {
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
      <AddToCartButton quantity={quantity} onClick={handleAddToCart} />

      <Sheet
        open={isCartOpen}
        onOpenChange={(open) => (open ? dispatch(openCart()) : dispatch(closeCart()))}
      >
        <SheetContent side="right" className="sheet-content">
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
