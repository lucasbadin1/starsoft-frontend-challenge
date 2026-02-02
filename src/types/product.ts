// O que vem EXATAMENTE da API
export interface ProductAPI {
  id: number;
  name: string;
  description: string;
  image: string;
  price: string; 
  createdAt: string;
}
export interface Product {
  id: number; 
  name: string;
  description: string;
  image: string;
  price: number; 
}
export interface FetchResponse {
  products: Product[];
  nextPage?: number;
  total: number;
}