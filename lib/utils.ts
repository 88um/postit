import { Post, User } from "@prisma/client";
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function sortPostsByCreatedAt(posts: Post[]): Post[] {
  return posts.sort((a, b) => {
    const dateA = new Date(a.createdAt);
    const dateB = new Date(b.createdAt);
    return dateB.getTime() - dateA.getTime(); 
  });
}

export function sortPostsByLikedIds(posts: Post[]): Post[] {
  return posts.sort((a, b) => {
    const totalLikesA = a.likedIds.length - a.dislikedIds.length;
    const totalLikesB = b.likedIds.length - b.dislikedIds.length;
    return totalLikesB - totalLikesA; 
  });
}

export function getTimeAgo(date : Date) {

  const currentDate = new Date();
  const timeDifference = currentDate.getTime() - date.getTime();


  const minute = 60 * 1000;
  const hour = 60 * minute;
  const day = 24 * hour;
  const week = 7 * day;
  const month = 30 * day;
  const year = 365 * day;


  if (timeDifference < minute) {
      return Math.floor(timeDifference / 1000) + 's'; 
  } else if (timeDifference < hour) {
      return Math.floor(timeDifference / minute) + 'm'; 
  } else if (timeDifference < day) {
      return Math.floor(timeDifference / hour) + 'h'; 
  } else if (timeDifference < week) {
      return Math.floor(timeDifference / day) + 'd'; 
  } else if (timeDifference < month) {
      return Math.floor(timeDifference / week) + 'w';
  } else if (timeDifference < year) {
      return Math.floor(timeDifference / month) + 'mo'; 
  } else {
      return Math.floor(timeDifference / year) + 'y'; 
  }
}

export const sortUsersByLikesOnPosts = (users: User[], posts: Post[]): User[] => {
  const userLikesMap: Record<string, number> = {};

  // Initialize userLikesMap with zeros for each user
  users.forEach((user) => (userLikesMap[user.id] = 0));

  // Calculate total likes and dislikes for each user
  posts.forEach((post) => {
    const userId = post.userId;
    const likes = post.likedIds.length;
    const dislikes = post.dislikedIds.length;
    userLikesMap[userId] += likes - dislikes;
  });

  // Sort users based on total likes (likes - dislikes) in descending order
  const sortedUsers = users.sort((a, b) => userLikesMap[b.id] - userLikesMap[a.id]);

  return sortedUsers;
};