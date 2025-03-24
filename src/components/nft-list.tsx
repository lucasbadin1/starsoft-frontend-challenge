"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import NftCard from "@/components/nft-card";
import LoadMoreButton from "@/components/Button/load-more";
import LoadFinished from "@/components/Button/load-finished";

type Product = {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
};

type FetchResponse = {
  products: Product[];
  nextPage?: number;
};

const fetchProducts = async ({ pageParam = 1 }): Promise<FetchResponse> => {
  const res = await fetch(
    `https://starsoft-challenge-7dfd4a56a575.herokuapp.com/v1/products?page=${pageParam}&limit=6`
  );

  if (!res.ok) throw new Error("Erro ao buscar os produtos");

  const data = await res.json();

  return {
    products: data.data,
    nextPage: data.data.length > 0 ? pageParam + 1 : undefined,
  };
};

export default function NftList({
  initialProducts,
}: {
  initialProducts: Product[];
}) {
  const { data, isFetchingNextPage, fetchNextPage, hasNextPage, status } =
    useInfiniteQuery({
      queryKey: ["products"],
      queryFn: fetchProducts,
      initialPageParam: 1,
      getNextPageParam: (lastPage) => lastPage.nextPage ?? undefined,
    });

  const products =
    data?.pages.flatMap((page) => page.products) ?? initialProducts;

  if (status === "pending") return <p>Carregando NFTs...</p>;
  if (status === "error")
    return (
      <p className="text-red-500">Erro ao carregar NFTs. Tente novamente.</p>
    );

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 bg-night mt-35 mx-34">
        {products.length > 0 ? (
          products.map((product) => (
            <NftCard key={product.id} product={product} />
          ))
        ) : (
          <p className="text-center mt-4">Nenhum produto encontrado</p>
        )}
      </div>

      {hasNextPage ? (
        <LoadMoreButton
          isLoading={isFetchingNextPage}
          onClick={() => fetchNextPage()}
        />
      ) : (
        <LoadFinished />
      )}
    </div>
  );
}
