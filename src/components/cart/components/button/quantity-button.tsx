import { useDispatch } from "react-redux";
import { updateQuantity } from "@/store/features/cart-slice";

type QuantityButtonProps = {
  itemId: string;
  quantity: number;
};

export default function QuantityButton({ itemId, quantity }: QuantityButtonProps) {
  const dispatch = useDispatch();

  const handleDecrement = () => {
    if (quantity > 1) {
      dispatch(updateQuantity({ id: itemId, quantity: quantity - 1 }));
    }
  };

  const handleIncrement = () => {
    dispatch(updateQuantity({ id: itemId, quantity: quantity + 1 }));
  };

  return (
    <button className="btn-quantity">
      <p
        className="btn-reduce"
        onClick={handleDecrement}
      >
        -
      </p>
      <p className="btn-value">{quantity}</p>
      <p
        className="btn-increase"
        onClick={handleIncrement}
      >
        +
      </p>
    </button>
  );
}
