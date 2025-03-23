export default function LoadFinished()
  {
    return (
      <div className="flex justify-center items-center mt-10">
        <div className="flex flex-col min-h-[100px] w-[400px] space-y-2 p-4">
          <div 
          className="w-full h-2 bg-orange-500 rounded-full transition-all duration-500">
          </div>
          <button 
          className="w-full h-[86px] bg-slate text-heading text-xl text-white flex items-center justify-center font-semibold rounded-lg"
          >
            Você já viu tudo
          </button>
        </div>
      </div>
    );
  }