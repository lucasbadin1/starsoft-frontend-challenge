"use client";

import { useProductsInfiniteQuery } from "@/hooks/use-products";
import { Product } from "@/types/product";
import { LOADING, ERROR, NO_PRODUCTS } from "@/constants/messages";
import NftCard from "@/components/card/nft-card";
import LoadMoreButton from "@/components/ui/button/load-more";
import LoadFinished from "@/components/ui/button/load-finished";

export default function NftList({ initialProducts }: { initialProducts: Product[] }) {
  const { data, isFetchingNextPage, fetchNextPage, hasNextPage, status } =
    useProductsInfiniteQuery(1);

  const products = data?.pages.flatMap((page) => page.products) ?? initialProducts;

  if (status === "pending") return <p>{LOADING}</p>;
  if (status === "error") return <p className="text-red-500">{ERROR}</p>;

  return (
    <div className="list-container">
      <div className="list-grid">
        {products.length > 0 ? (
          products.map((product) => <NftCard key={product.id} product={product} />)
        ) : (
          <p className="mt-4 text-center">{NO_PRODUCTS}</p>
        )}
      </div>

      {hasNextPage ? (
        <LoadMoreButton
          isLoading={isFetchingNextPage}
          onClick={() => fetchNextPage()}
          aria-label="Carregar mais NFTs"
        />
      ) : (
        <LoadFinished aria-label="Fim do carregamento de NFTs" />
      )}
    </div>
  );
}
