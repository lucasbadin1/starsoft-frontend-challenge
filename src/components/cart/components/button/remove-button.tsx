import { motion } from "framer-motion";
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
    <motion.button
      className="btn-remove"
      onClick={handleRemove}
      whileHover={{
        scale: 1.15, 
        transition: { type: "spring", stiffness: 100, damping: 10 }, 
      }}
    >
      <Trash className="icon-remove" />
    </motion.button>
  );
}
