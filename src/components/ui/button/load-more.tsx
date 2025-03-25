import { LoadMoreButtonProps } from "@/interfaces/button";

export default function LoadMoreButton({ isLoading, onClick }: LoadMoreButtonProps) {
  return (
    <div className="btn-container">
      <div className="card-container">
        <div className="relative h-2 w-full overflow-hidden rounded-full bg-gray-700">
          <div className="loading-bar" style={{ width: isLoading ? "100%" : "50%" }}></div>
        </div>

        <button onClick={onClick} className="btn-load" disabled={isLoading}>
          {isLoading ? "Carregando..." : "Carregar mais"}
        </button>
      </div>
    </div>
  );
}
