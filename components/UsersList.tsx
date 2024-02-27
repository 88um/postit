"use client";

import { User } from "@prisma/client";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { CiSearch } from "react-icons/ci";
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
import { revalidatePath } from "next/cache";
import { useInView } from "react-intersection-observer";
import SkeletonList from "./SkeletonList";
import { fetchUsers } from "@/actions/fetch-users";
import UserCard from "./UserCard";
import { ArrowRight, ChevronRight } from "lucide-react";
type PostFilter = "RECENT" | "TOP";

interface UsersListProps {}

const UsersList: React.FC<UsersListProps> = ({}) => {
  const [filter, setFilter] = useState<PostFilter>("RECENT");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [flair, setFlair] = useState<string>("");

  const {
    data,
    status,
    error,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
    isLoading,
  } = useInfiniteQuery({
    queryKey: ["users", filter, searchTerm, flair],
    queryFn: ({ pageParam }) =>
      fetchUsers(pageParam, filter, flair, searchTerm),
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
  }, [inView]);

  const content = data?.pages.map((users: User[]) =>
    users.map((user: User) => (
      <div
        className="hover:cursor-pointer flex justify-between pr-5 items-center m-2  rounded-xl bg-[#2c2c2c]"
        onClick={() => router.push(`users/${user.username}`)}
      >
        <UserCard user={user} key={user.username} />
        <ChevronRight />
      </div>
    ))
  );

  const router = useRouter();

  const debounce = <T extends any[]>(
    func: (...args: T) => void,
    delay: number
  ) => {
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
    <div className="flex flex-col w-full h-full lg:px-20">
      <div className="flex flex-col space-y-3 mb-5">
        <div className="flex w-full md:justify-center   ">
          <div className="flex w-11/12 md:w-2/5 px-2 items-center bg-white dark:bg-[#282828] rounded-lg">
            <CiSearch className="text-xl" />
            <input
              placeholder="Search"
              className="p-2 bg-transparent outline-none w-full"
              onChange={(e) => handleSearchChange(e.target.value)}
              onKeyPress={handleKeyPress}
            />
          </div>
        </div>
        <div className="flex items-center px-2">
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
      </div>
      {isLoading && <SkeletonList />}
      {data ? (
        <div className="">
          <div>
            <>{content}</>
          </div>
        </div>
      ) : (
        <div className="pt-6 text-muted-foreground text-center p-6">
          <p>No users found. Create a new account through the menu!</p>
        </div>
      )}
      <div className="flex justify-center items-center p-4" ref={ref}>
        {isFetchingNextPage && (
          <div className="h-8 w-8 inline-block rounded-full border-4 border-r-black dark:border-r-white border-solid animate-spin"></div>
        )}
      </div>
      {!hasNextPage && !isLoading && (
        <div className="hidden text-center text-muted-foreground ">End of users</div>
      )}
    </div>
  );
};

export default UsersList;
