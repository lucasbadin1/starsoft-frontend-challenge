import Image from "next/image";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import FinalizeButton from "./button/finalize-button";
import { CartSummaryProps } from "@/types/cart";
import { clearCart } from "@/store/features/cart-slice";

export default function CartSummary({ totalPrice }: CartSummaryProps) {
  const dispatch = useDispatch();
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
          <Image src="/Etherium.png" width={30} height={30} alt="Etherium" />
          <p className="cart-summary-coin-info">{totalPrice} ETH</p>
        </div>
      </div>

      <FinalizeButton
        purchaseCompleted={purchaseCompleted}
        onClick={purchaseCompleted ? () => {} : handleFinalizePurchase}
      />
    </div>
  );
}
