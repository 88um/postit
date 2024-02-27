"use client";

import { Post, User, Comment, Flair } from "@prisma/client";
import { useMemo, useRef } from "react";
import { formatDistanceToNowStrict } from "date-fns";
import { TiPin } from "react-icons/ti";
import { FaLink } from "react-icons/fa6";
import { PiArrowFatDownLight, PiArrowFatUpLight } from "react-icons/pi";
import { PiArrowFatUpFill } from "react-icons/pi";

import Link from "next/link";
import { cn, getTimeAgo } from "@/lib/utils";
import { Badge } from "./ui/badge";
import { userAgent } from "next/server";

type PostWithUser = Post & { user: User; comments: Comment[]; flair: Flair;};
const flair = { name: "General", color: "bg-red-500" };

const flairMap = {
  "All": "bg-white",
  "GENERAL": "bg-red-500",
  "NEWS": "bg-blue-500",
  "DISCUSSION": "bg-green-500",
  "QUESTION": "bg-yellow-500",
  "ANNOUNCEMENT": "bg-purple-500",
  "EVENT": "bg-pink-500",
  "TECH": "bg-indigo-500",
  "ENTERTAINMENT": "bg-teal-500",
  "SPORTS": "bg-gray-500",
  "ART": "bg-blue-700",
  "FOOD": "bg-green-700",
};

interface PostCardProps {
  post: PostWithUser;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const pRef = useRef<HTMLParagraphElement>(null);
  const createdAt = useMemo(() => {
    if (!post?.createdAt) {
      return null;
    }
    return getTimeAgo(new Date(post.createdAt));
  }, [post.createdAt]);

  const color = flairMap[post.flair.name.toUpperCase()]
  return (
    <div className="flex flex-col gap-1 border p-3 w-full bg-white rounded-lg box-shadow dark:text-white dark:bg-[#282828]  dark:border-none mb-3">
      <div className="flex w-full items-center space-x-1 justify-between">
        <div className="flex  items-center space-x-2 overflow-hidden whitespace-normal overflow-ellipsis w-[400px] md:w-[600px]">
          <Link href={`/users/${post.user.username}`}>
            u/{post.user.username}
          </Link>
          <p>·</p>
          <div className="flex space-x-1">
            {post.user.role.toLowerCase() !== "user" && (
              <Badge className={cn("uppercase", "bg-[#F994AB]")}>
                {post.user.role}
              </Badge>
            )}
            <Badge className={cn("uppercase text-xs", color)}>
              {post.flair.name}
            </Badge>
          </div>
          <p>·</p>
          <p>{createdAt}</p>
        </div>
        {post.isPinned && (
          <div className="text-sm md:text-2xl">
            <TiPin />
          </div>
        )}
      </div>
      <div className="flex flex-col gap-1 py-1 dark:text-white">
        <Link href={`/posts/${post.id}`}>
        <h1 className="text-lg font-medium pb-1">{post.title}</h1>
        <div
          className="relative text-sm max-h-40 w-full overflow-clip"
          ref={pRef}
        >
          <p className="whitespace-pre-wrap  overflow-ellipsis">{post.text}</p>
          {pRef.current?.clientHeight === 160 ? (
            // blur bottom if content is too long
            <div className="absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t dark:from-[#282828] to-transparent"></div>
          ) : null}
        </div>
        </Link>
      </div>
      <div className=" z-20 border-red-500">
        <div className="flex items-center gap-3 mt-2 text-sm">
          <button className="text-2xl">
            <div className={"dark:text-white"}>
              <PiArrowFatUpLight />
            </div>
          </button>
          <div className="w-3 text-center dark:text-white">
            {post.likedIds.length}
          </div>
          <button className="text-2xl">
            <div className="dark:text-white">
              <PiArrowFatDownLight />
            </div>
          </button>
          <div>
            {post.comments.length}{" "}
            {post.comments.length == 1 ? "comment" : "comments"}
          </div>
          <div className="text-xl hover:cursor-pointer" onClick={() => {navigator.clipboard.writeText(`${window.location.href}posts/${post.id}`); alert('URL copied to clipboard!');}}>
            <FaLink />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
