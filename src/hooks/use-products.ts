import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchProducts } from "@/services/products";

export const useProductsInfiniteQuery = (initialPageParam: number = 1) => {
  return useInfiniteQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
    initialPageParam: initialPageParam,
    getNextPageParam: (lastPage) => lastPage.nextPage ?? undefined,
  });
};
