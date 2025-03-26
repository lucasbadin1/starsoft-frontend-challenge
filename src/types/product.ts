export type Product = {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
};

export type FetchResponse = {
  products: Product[];
  nextPage?: number;
};

export type NftCardProps = {
  product: Product;
};