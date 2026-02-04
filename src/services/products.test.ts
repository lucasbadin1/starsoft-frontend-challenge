import { fetchProducts } from "./products";

global.fetch = jest.fn();

describe("Service: Products", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  const mockApiResponse = {
    data: [
      {
        id: 1,
        name: "Etherium NFT",
        description: "Cool NFT",
        image: "url.jpg",
        price: "10.50",
        createdAt: "2023-01-01",
      },
    ],
    meta: {
      total: 10,
    },
  };

  test("Deve buscar produtos e adaptar os dados corretamente", async () => {
    (global.fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: async () => mockApiResponse,
    });

    const result = await fetchProducts({ pageParam: 1 });

    expect(global.fetch).toHaveBeenCalledWith(expect.stringContaining("page=1"));
    expect(global.fetch).toHaveBeenCalledWith(expect.stringContaining("rows=8"));

    expect(result.products[0].id).toBe("1");
    expect(result.products[0].price).toBe(10.5);
    expect(result.products).toHaveLength(1);
  });

  test("Deve lançar erro quando a API falhar", async () => {
    (global.fetch as jest.Mock).mockResolvedValue({
      ok: false,
      status: 500,
      text: async () => "Internal Server Error",
    });

    await expect(fetchProducts({ pageParam: 1 })).rejects.toThrow("API Error: 500");
  });
});
