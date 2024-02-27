'use server';

import { dummyPostArray } from "@/dummy";
import { sortPostsByCreatedAt, sortPostsByLikedIds } from "@/lib/utils";

type Filter = "TOP" | "RECENT"

export async function fetchPosts(
    page: number,
    filter: Filter = "RECENT",
    flair: string = "",
    search: string = ""
  ) {
    console.log(page);
    
    const startIndex = (page - 1) * 5;
    const endIndex = page * 5;
  
    const sortedPosts =
      filter === "RECENT"
        ? sortPostsByCreatedAt(dummyPostArray)
        : sortPostsByLikedIds(dummyPostArray);
    
    
    let filteredPosts = sortedPosts;
  
    if (flair !== "" && flair !== "All") {
      filteredPosts = sortedPosts.filter(
        (post) => post.flair.name.toLowerCase() === flair.toLowerCase()
      );
    }
  
    // Apply search filtering if needed
    if (search !== "") {
      filteredPosts = filteredPosts.filter((post) =>
        post.title.toLowerCase().includes(search.toLowerCase())
      );
    }
    console.log(Math.min(endIndex, filteredPosts.length));
    const slicedArray = filteredPosts.slice(
      startIndex,
      Math.min(endIndex, filteredPosts.length)
    );
    
    console.log(slicedArray.length)
    return slicedArray;
  }
  