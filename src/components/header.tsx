"use client";

import Image from "next/image";
import { ShoppingBag } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import { openCart } from "@/store/features/cart-state-slice";

export default function Header() {
  const dispatch = useDispatch();
  const totalItems = useSelector((state: RootState) =>
    state.cart.items.reduce((total, item) => total + item.quantity, 0)
  );

  return (
    <div className="bg-night flex justify-between items-center px-11 py-7 max-h-[100px] border-b-2 border-gray">
      <Image
        src="/logo1.png"
        width={100}
        height={40}
        alt="Picture of the author"
      />
      <div className="flex gap-3 items-center text-white">
        <ShoppingBag
          size={24}
          className="text-orange cursor-pointer"
          onClick={() => dispatch(openCart())}
        />
        <p className="text-2xl">{totalItems}</p>
      </div>
    </div>
  );
}
