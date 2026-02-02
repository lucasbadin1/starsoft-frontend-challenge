import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchProducts } from "@/services/products";
import { FetchResponse } from "@/types/product";

export const useProductsInfiniteQuery = () => {
  return useInfiniteQuery<FetchResponse, Error>({
    queryKey: ["products"],
    queryFn: ({ pageParam }) => fetchProducts({ pageParam: pageParam as number }),
    initialPageParam: 6,
    getNextPageParam: (lastPage) => lastPage.nextPage,
    
    staleTime: 1000 * 60 * 5, // Cache de 5 min
  });
};