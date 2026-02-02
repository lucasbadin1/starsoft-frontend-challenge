import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchProducts } from "@/services/products";
import { FetchResponse } from "@/types/product";

export const useProductsInfiniteQuery = () => {
  return useInfiniteQuery<FetchResponse, Error>({
    queryKey: ["products"],
    queryFn: ({ pageParam }) => fetchProducts({ pageParam: pageParam as number }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.nextPage,
    
    staleTime: 0, // Cache de 5 min
  });
};