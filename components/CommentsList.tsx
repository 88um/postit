"use client";

import { fetchComments } from "@/actions/fetch-comments";
import { Comment, Post } from "@prisma/client";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import CommentCard from "./CommentCard";
import SkeletonList from "./SkeletonList";
import { Textarea } from "./ui/textarea";

interface CommentsListProps {
  post: Post & { comments: Comment[] };
}

type Filter = "TOP" | "RECENT";
const CommentsList: React.FC<CommentsListProps> = ({ post }) => {
  //Maybe infinite query
  const [sortOption, setSortOption] = useState<Filter>("RECENT");
  const [coData, setCoData] = useState<any>(null);
  const handleSortChange = (event: any) => {
    setSortOption(event.target.value);
  };

  const {
    data,
    status,
    error,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
    isLoading,
  } = useInfiniteQuery({
    queryKey: ["comments", sortOption],
    queryFn: ({ pageParam }) => fetchComments(pageParam, post.id, sortOption),
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

  const content = data?.pages.map((comments: Comment[]) =>
    comments.map((comment: Comment) => (
      <div key={comment.id}>
        <CommentCard comment={comment}  />
      </div>
    ))
  );

  return (
    <div className="overflow-hidden ">
      <div className="mb-2 text-muted-foreground">
        <label className="mr-2 x">Sort by:</label>
        <select
          value={sortOption}
          onChange={handleSortChange}
          className="bg-transparent p-2"
        >
          <option value="RECENT" className="font-semibold">
            Recent
          </option>
          <option value="TOP">Top</option>
        </select>
      </div>
      <div>
        <Textarea placeholder="Add a new comment" ></Textarea>
      </div>
      {isLoading && <SkeletonList />}
      {content}
    </div>
  );
};

export default CommentsList;
