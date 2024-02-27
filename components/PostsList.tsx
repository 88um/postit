"use client";


import { Comment, Post, User } from "@prisma/client";
import { useEffect, useState } from "react";
import PostCard from "./PostCard";
import { Button } from "./ui/button";
import { CiSearch } from "react-icons/ci";
import { FaTag } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import { useInfiniteQuery } from "@tanstack/react-query";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { flairs } from "@/data";
import { fetchPosts } from "@/actions/fetch-posts";
import { revalidatePath } from "next/cache";
import { useInView } from "react-intersection-observer";
import SkeletonList from "./SkeletonList";
type PostFilter = "RECENT" | "TOP";
type PostWithUser = Post & { user: User; comments: Comment[] };

interface PostsListProps {
  //posts: PostWithUser[];
}

const PostsList: React.FC<PostsListProps> = ({}) => {
  const [filter, setFilter] = useState<PostFilter>("RECENT");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [flair, setFlair] = useState<string>("");
  //const [posts, setPosts] = useState<Post[]>([]);

  const {
    data,
    status,
    error,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
    isLoading,
  } = useInfiniteQuery({
    queryKey: ["posts", filter, searchTerm, flair],
    queryFn: ({ pageParam }) =>
      fetchPosts(pageParam, filter, flair, searchTerm),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages, lastPageParam) => {
      return lastPage.length !== 0 ? allPages.length + 1 : undefined;
    },
  });

  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage]);

  const content = data?.pages.map((posts: Post[]) =>
    posts.map((post: Post) => (
      <div className=""  key={post.id}>
        <PostCard post={post} />
      </div>
    ))
  );

  const router = useRouter();

  const debounce = <T extends any[]>(func: (...args: T) => void, delay: number) => {
    let timer: NodeJS.Timeout;
    return function (...args: T) {
      clearTimeout(timer);
      timer = setTimeout(() => func(...args), delay);
    };
  };
  
  const handleSearchChange = debounce((value) => {
    setSearchTerm(value);
    // Your logic here
  }, 600);
  const updateSearchParams = (search: string) => {
    const searchParams = new URLSearchParams(window.location.search);
    if (search) {
      searchParams.set("search", search);
      const newPathname = `${
        window.location.pathname
      }?${searchParams.toString()}`;
      router.push(newPathname);
      revalidatePath(newPathname);
    }
  };
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      if (searchTerm.trim() === "") {
        router.push("/");
        return;
      }

      updateSearchParams(searchTerm.toLowerCase());
    }
  };
  
  return (
    <div className="flex flex-col w-full h-full ">
      <div className="flex w-full px-2 items-center  bg-white dark:bg-[#282828] md:w-2/5 rounded-lg">
        <CiSearch className="text-xl" />
        <input
          placeholder="Search"
          className="p-2 bg-transparent outline-none w-full"
          onChange={(e) => handleSearchChange(e.target.value)}
          onKeyPress={handleKeyPress}
        />
      </div>

      <div className="flex w-full items-center space-x-3 py-3">
        <div className="z-50">
          <Select value={flair} onValueChange={(e) => setFlair(e)}>
            <SelectTrigger className="w-[180px] bg-white dark:bg-[#282828]">
              <div className="flex items-center gap-2">
                <FaTag />
                <SelectValue placeholder="Flair" />
              </div>
            </SelectTrigger>
            <SelectContent>
              {flairs.map((flair) => (
                <SelectItem key={flair.name} value={flair.name}>
                  {flair.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <Button
          onClick={() => setFilter("RECENT")}
          className={
            filter === "RECENT"
              ? "text-black bg-white dark:text-white dark:bg-[#282828]"
              : " text-black dark:text-white bg-transparent"
          }
        >
          Recent
        </Button>
        <Button
          onClick={() => setFilter("TOP")}
          className={
            filter === "TOP"
              ? "text-black bg-white dark:text-white dark:bg-[#282828]"
              : "text-black dark:text-white bg-transparent"
          }
        >
          Top
        </Button>
      </div>
        {isLoading && (
          <SkeletonList/>
        )}
      {content?.length > 0 ? (
        <>{content}</>
      ) : (
        <div className="pt-6 text-muted-foreground text-center p-6">
          <p>No posts found. Create a new one through the menu!</p>
        </div>
      )}
      <div className="flex justify-center items-center p-4" ref={ref}>
        {isFetchingNextPage && (
          <div className="h-8 w-8 inline-block rounded-full border-4 border-r-black dark:border-r-white border-solid animate-spin"></div>
        )}
      </div>
      {!hasNextPage && !isLoading && (
        <div className="text-center text-muted-foreground ">
          End of posts
        </div>
      )}
    </div>
  );
};

export default PostsList;
