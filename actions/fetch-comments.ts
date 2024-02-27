"use server";
import { dummyPostArray } from "@/dummy";
import { sortPostsByCreatedAt, sortPostsByLikedIds } from "@/lib/utils";

type Filter = "TOP" | "RECENT";
export async function fetchComments(
  page: number,
  postId: string,
  filter: Filter = "TOP"
) {
  const post = dummyPostArray.find((post) => post.id === postId);

  let comments = post.comments;
  const startIndex = (page - 1) * 5;
  const endIndex = page * 5;

  comments =
    filter === "RECENT"
      ? sortPostsByCreatedAt(comments)
      : sortPostsByLikedIds(comments);

  const slicedArray = comments.slice(
    startIndex,
    Math.min(endIndex, comments.length)
  );
  return slicedArray;
}
