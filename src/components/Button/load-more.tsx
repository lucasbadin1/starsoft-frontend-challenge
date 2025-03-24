interface LoadMoreButtonProps {
  isLoading: boolean;
  onClick: () => void;
}

export default function LoadMoreButton({
  isLoading,
  onClick,
}: LoadMoreButtonProps) {
  return (
    <div className="flex justify-center items-center mt-10">
      <div className="flex flex-col min-h-[100px] min-w-[400px] space-y-2 p-4">
        <div className="w-full h-2 bg-gray-700 rounded-full relative overflow-hidden">
          <div
            className="h-2 bg-orange-500 rounded-full transition-all duration-500"
            style={{ width: isLoading ? "100%" : "50%" }}
          ></div>
        </div>

        <button
          onClick={onClick}
          className="w-full h-[86px] bg-slate text-heading text-xl text-white flex items-center justify-center font-semibold rounded-lg"
          disabled={isLoading}
        >
          {isLoading ? "Carregando..." : "Carregar mais"}
        </button>
      </div>
    </div>
  );
}
