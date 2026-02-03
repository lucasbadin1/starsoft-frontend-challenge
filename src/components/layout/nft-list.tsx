"use client";

import { useProductsInfiniteQuery } from "@/hooks/use-products";
import { LOADING, ERROR, NO_PRODUCTS } from "@/constants/messages";
import NftCard from "@/components/card/nft-card";
import LoadMoreButton from "@/components/ui/button/load-more";
import LoadFinished from "@/components/ui/button/load-finished";

export default function NftList() {
  const { data, isFetchingNextPage, fetchNextPage, status, isError } = useProductsInfiniteQuery();

  const products = data?.pages.flatMap((page) => page.products) ?? [];
  const totalItems = data?.pages[0]?.total || 32;

  const currentCount = products.length;
  const hasMoreToLoad = currentCount < totalItems;

  if (status === "pending" && !data) return <p className="py-10 text-center">{LOADING}</p>;
  if (isError) return <p className="py-10 text-center text-red-500">{ERROR}</p>;

  return (
    <div className="list-container">
      <div className="list-grid">
        {products.length > 0 ? (
          products.map((product) => <NftCard key={product.id} product={product} />)
        ) : (
          <p className="col-span-full mt-4 w-full text-center">{NO_PRODUCTS}</p>
        )}
      </div>

      <div className="mt-12 flex justify-center">
        {hasMoreToLoad ? (
          <LoadMoreButton
            isLoading={isFetchingNextPage}
            onClick={() => fetchNextPage()}
            aria-label="Carregar mais NFTs"
            currentCount={currentCount}
            totalCount={totalItems}
          />
        ) : (
          <LoadFinished aria-label="Fim do carregamento de NFTs" />
        )}
      </div>
    </div>
  );
}
