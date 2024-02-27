
import PostsList from "@/components/PostsList";
import Leaderboard from "@/components/Leaderboard";
import {
  useInfiniteQuery,
  QueryClient,
  HydrationBoundary,
  dehydrate,
} from "@tanstack/react-query";



type Filters = {
  search: string;
};

interface Params {
  searchParams: Filters;
}

export default async function Home({ searchParams }: Params) {
  const searchTerm = searchParams.search || "";
  const queryClient = new QueryClient();
  return (
    <div className="lg:container lg:mx-auto min-h-full">
      <div className="flex">
        <HydrationBoundary state={dehydrate(queryClient)}>
          <PostsList />
          <Leaderboard />
        </HydrationBoundary>
      </div>
    </div>
  );
}
