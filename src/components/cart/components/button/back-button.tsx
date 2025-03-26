import { ArrowLeft } from "lucide-react";
import { BackButtonProps } from "@/interfaces/button";

export default function BackButton({ onClick }: BackButtonProps) {
  return (
    <button className="btn-back" onClick={onClick}>
      <ArrowLeft className="icon-back" />
    </button>
  );
}
