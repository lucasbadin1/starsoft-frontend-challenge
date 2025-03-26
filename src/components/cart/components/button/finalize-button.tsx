// components/button/FinalizePurchaseButton.tsx
import { FinalizeButtonProps } from "@/interfaces/button";

export default function FinalizeButton({
  purchaseCompleted,
  onClick,
}: FinalizeButtonProps) {
  return (
    <button
      className="btn-finalize"
      onClick={onClick}
    >
      <p>{purchaseCompleted ? "COMPRA FINALIZADA!" : "FINALIZAR COMPRA"}</p>
    </button>
  );
}
