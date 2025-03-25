import Header from "@/components/header";
import NftList from "@/components/nft-list";
import Footer from "@/components/footer";
import { Product } from "@/types/product";

export default function Home() {
  const products: Product[] = [];

  return (
    <div className="relative">
      <Header />
      <NftList initialProducts={products} />
      <Footer />
    </div>
  );
}
