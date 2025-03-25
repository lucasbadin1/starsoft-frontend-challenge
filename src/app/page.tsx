import Header from "@/components/layout/header";
import NftList from "@/components/layout/nft-list";
import Footer from "@/components/layout/footer";
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
