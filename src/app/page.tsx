import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { getQueryClient } from "@/utils/get-query-client";
import { fetchProducts } from "@/services/products";
import Header from "@/components/layout/header";
import NftList from "@/components/layout/nft-list";
import Footer from "@/components/layout/footer";

export const revalidate = 60;

export default async function Home() {
  const queryClient = getQueryClient();

  await queryClient.prefetchInfiniteQuery({
    queryKey: ["products"],
    queryFn: ({ pageParam }) => fetchProducts({ pageParam: pageParam as number }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.nextPage,
    pages: 1,
  });

  return (
    <div className="relative pt-24 md:pt-36">
      <Header />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <NftList />
      </HydrationBoundary>
      <Footer />
    </div>
  );
}
