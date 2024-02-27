"use client";

import { useCurrentUser } from "@/hooks/use-current-user";
import { Post, Comment, User } from "@prisma/client";
import { GoReply, GoShare } from "react-icons/go";
import { VscComment } from "react-icons/vsc";
import { FaLink } from "react-icons/fa6";
import { PiArrowFatDownLight, PiArrowFatUpLight } from "react-icons/pi";
import { IoEllipsisHorizontal } from "react-icons/io5";
import { useState } from "react";
import { Textarea } from "./ui/textarea";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

interface VotingBarProps {
  comment?: Comment & { user: User };
  post?: Post & { comments: Comment[] };
}

const VotingBar: React.FC<VotingBarProps> = ({ post, comment }) => {
  const currentUser = useCurrentUser();
  const [isReplyOpen, setIsReplyOpen] = useState(false);
  const content = post || comment;

  const handleReplyClick = () => {
    setIsReplyOpen(!isReplyOpen);
  }

  if (!content) {
    return null;
  }
  return (
    <div className=" z-20">
      {post ? (
        <div className="flex items-center gap-3 mt-2 text-sm">
          <div className="bg-secondary rounded-full flex items-center gap-3 p-1 text-sm  ">
            <button className="text-2xl">
              <div className={""}>
                <PiArrowFatUpLight />
              </div>
            </button>
            <div className="w-3 text-center ">{content.likedIds.length}</div>
            <button className="text-2xl">
              <div className="">
                <PiArrowFatDownLight />
              </div>
            </button>
          </div>

          <div className="bg-secondary rounded-full flex items-center gap-2 p-1 px-4 text-sm  ">
            <VscComment className="text-2xl" />
            {post && post.comments.length}
            {comment && "Reply"}
          </div>
          <div className="flex bg-secondary rounded-full gap-2  p-1 px-4  items-center">
            <GoShare className="text-2xl " />
            <p>Share</p>
          </div>
        </div>
      ) : (
        <div className="flex w-full items-center  pt-2">
          <div className="flex items-center gap-2 text-sm">
            <div className="bg-secondary px-2 rounded-full flex items-center gap-3 py-1 text-md  ">
              <button className="">
                <div className={""}>
                  <PiArrowFatUpLight />
                </div>
              </button>
              <div className="w-3 text-center ">{content.likedIds.length}</div>
              <button className="">
                <div className="">
                  <PiArrowFatDownLight />
                </div>
              </button>
            </div>

            <div className={cn(isReplyOpen && "bg-secondary p-2 "," rounded-full pl-2 flex items-center text-md space-x-1 ")}>
              <GoReply className="" onClick={handleReplyClick}/>
            </div>
            <div className="flex rounded-full pl-2 items-center">
              <IoEllipsisHorizontal className=" " />
            </div>
          </div>
        </div>
      )}
      {
        isReplyOpen && (
          <div className="pt-3 space-y-2">
              <Textarea placeholder="Type your reply here." />
              <div className="flex items-center justify-between">
                <Button variant='destructive' size='sm' className="text-xs " onClick={() => setIsReplyOpen(false)}>Cancel</Button>
                <Button variant='ghost' size='sm' className="text-xs ">Add</Button>
              </div>
          </div>
        )
      }
    </div>
  );
};

export default VotingBar;
