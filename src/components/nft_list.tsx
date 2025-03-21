"use client";

import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import NftCard from "./nft_card";

type Product = {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
};

const fetchProducts = async (page: number) => {
  const res = await fetch(
    `https://starsoft-challenge-7dfd4a56a575.herokuapp.com/v1/products?page=${page}&limit=6`
  );
  if (!res.ok) throw new Error("Erro ao buscar os produtos");

  const data = await res.json();
  console.log("🚀 Dados recebidos da API:", data); // Debug

  return data.data;
};

export default function NftList() {
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState<Product[]>([]);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["products", page],
    queryFn: () => fetchProducts(page),
    placeholderData: (previousData) => previousData ?? []
  });

  useEffect(() => {
    if (data) {
      setProducts((prev) => [...prev, ...data]);
    }
  }, [data]);

  if (isError) return <p>Erro: {error.message}</p>;

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 bg-night mt-[12rem] mx-[8.5rem]">
        {products.length > 0 ? (
          products.map((product) => (
            <NftCard key={product.id} product={product} />
          ))
        ) : (
          <p className="text-center mt-4">Nenhum produto encontrado</p>
        )}
      </div>

      {data?.length === 0 ? (
        <p className="text-center mt-4 font-bold text-gray-500">
          Você já viu tudo
        </p>
      ) : (
        <button
          onClick={() => setPage((prev) => prev + 1)}
          className="mt-4 p-2 bg-orange-500 text-white rounded"
          disabled={isLoading}
        >
          {isLoading ? "Carregando..." : "Ver mais"}
        </button>
      )}
    </div>
  );
}
