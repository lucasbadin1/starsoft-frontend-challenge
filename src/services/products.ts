import { Product, FetchResponse, ProductAPI } from "@/types/product";

const mapProductApiToModel = (apiData: ProductAPI): Product => {
  return {
    id: apiData.id,
    name: apiData.name,
    description: apiData.description,
    image: apiData.image,
    price: parseFloat(apiData.price),
  };
};

export const fetchProducts = async ({
  pageParam = 1,
}: {
  pageParam?: number;
}): Promise<FetchResponse> => {
  const baseUrl = "https://api-challenge.starsoft.games/api/v1/products";
  const url = new URL(baseUrl);

  url.searchParams.set("page", pageParam.toString());
  url.searchParams.set("rows", "6"); 
  url.searchParams.set("sortBy", "id");
  url.searchParams.set("orderBy", "ASC");

  try {
    const res = await fetch(url.toString(), { cache: "no-store" });

    if (!res.ok) {
        const errorBody = await res.text(); 
        console.error("ERRO HTTP:", res.status, errorBody);
        throw new Error(`API Error: ${res.status}`);
    }

    const data = await res.json();
    console.log(`Resposta API (Pag ${pageParam}):`, data);

    const list = data.data || data.items || data.products || (Array.isArray(data) ? data : []);

    const apiProducts: ProductAPI[] = list;
    const cleanProducts = apiProducts.map(mapProductApiToModel);

    const hasNextPage = cleanProducts.length === 6;

    return {
      products: cleanProducts,
      nextPage: hasNextPage ? pageParam + 1 : undefined,
    };

  } catch (error) {
    console.error("Erro na requisição:", error);
    throw error;
  }
};