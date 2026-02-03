import Image from "next/image";
import React, { useState } from "react";
import { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import { CartSummaryProps } from "@/types/cart";
import { clearCart } from "@/store/features/cart-slice";
import FinalizeButton from "./button/finalize-button";

export default function CartSummary({ totalPrice }: CartSummaryProps) {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart.items);
  const hasItems = cart.length > 0;

  const [purchaseCompleted, setPurchaseCompleted] = useState(false);

  const handleFinalizePurchase = () => {
    dispatch(clearCart());
    setPurchaseCompleted(true);
  };

  return (
    <div className="cart-summary-container">
      <div className="cart-summary-info">
        <p className="cart-summary-value">TOTAL</p>
        <div className="cart-summary-coin">
          <Image
            src="/Etherium.png"
            width={23}
            height={23}
            alt="Etherium"
            className="h-[20px] w-[20px] sm:h-[23px] sm:w-[23px]"
          />
          <p className="cart-summary-coin-info">{totalPrice} ETH</p>
        </div>
      </div>

      <FinalizeButton
        purchaseCompleted={purchaseCompleted}
        onClick={purchaseCompleted ? () => {} : handleFinalizePurchase}
        hasItems={hasItems}
      />
    </div>
  );
}
