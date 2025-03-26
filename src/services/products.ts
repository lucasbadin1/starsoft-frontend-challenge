import { FetchResponse } from "@/types/product";
import { ERROR_SEARCH } from "@/constants/messages";

export const fetchProducts = async ({
  pageParam = 1,
}: {
  pageParam?: number;
}): Promise<FetchResponse> => {
  const res = await fetch(
    `https://starsoft-challenge-7dfd4a56a575.herokuapp.com/v1/products?page=${pageParam}&limit=6`,
  );

  if (!res.ok) throw new Error(ERROR_SEARCH);

  const data = await res.json();

  return {
    products: data.data,
    nextPage: data.data.length > 0 ? pageParam + 1 : undefined,
  };
};
