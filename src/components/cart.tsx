import Image from "next/image";
import { ShoppingBag } from "lucide-react";

export default function Cart () {
    return (
        <div className="bg-night flex justify-between items-center px-11 py-7 max-h-[100px] border-b-2 border-gray">
            <Image 
               src="/logo1.png"
               width={100}
               height={40}
               alt="Picture of the author" 
            />
            <div className="flex gap-3 items-center text-white">
                <ShoppingBag size={24} className="text-orange"/>
                <p className="text-2xl">0</p>
            </div>
        </div>
    );
}