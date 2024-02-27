'use server';

import { dummyUsers, dummyPostArray } from "@/dummy";
import { sortPostsByCreatedAt, sortPostsByLikedIds, sortUsersByLikesOnPosts } from "@/lib/utils";
import { User } from "@prisma/client";

type Filter = "TOP" | "RECENT"

interface UserPlus {
    id: string;
    name: string;
    email: string;
    username: string;
    points : number;
    bio: string;
    role: string;
    createdAt: Date;
    updatedAt: Date;

  }

export async function fetchUsers(
    page: number,
    filter: Filter = "RECENT",
    search: string = ""
  ) {
    console.log(page);
    
    const startIndex = (page - 1) * 5;
    const endIndex = page * 5;
  
    const sortedPosts =
      filter === "RECENT"
        ? dummyUsers.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
        : dummyUsers.sort((a, b) => b.points - a.points);
    
    
    let filteredPosts : User[] = sortedPosts;
  
    // Apply search filtering if needed
    if (search !== "") {
      filteredPosts = filteredPosts.filter((user) =>
        user.username?.toLowerCase().includes(search.toLowerCase())
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
  