import { Product } from "@/types/product";
import Header from "@/components/layout/header";
import NftList from "@/components/layout/nft-list";
import Footer from "@/components/layout/footer";

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
