import { ArrowLeft } from "lucide-react";
import { BackButtonProps } from "@/interfaces/button";

export default function BackButton({ onClick }: BackButtonProps) {
  return (
    <button className="back-button" onClick={onClick}>
      <ArrowLeft className="back-icon" />
    </button>
  );
}
