import { Trash } from "lucide-react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "@/store/features/cart-slice";

type RemoveButtonProps = {
  itemId: string;
};

export default function RemoveButton({ itemId }: RemoveButtonProps) {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeFromCart(itemId));
  };

  return (
    <button
      className="btn-remove"
      onClick={handleRemove}
    >
      <Trash className="icon-remove" />
    </button>
  );
}
