"use client";

import { getTimeAgo } from "@/lib/utils";
import { Comment, Post, User } from "@prisma/client";
import { useMemo, useState } from "react";
import DeafultPfp from "./DeafultPfp";
import VotingBar from "./VotingBar";

interface CommentCardProps {
  comment: Comment & { children: Comment[]; post: Post; user: User };
}

const CommentCard: React.FC<CommentCardProps> = ({ comment }) => {
  const nestedIndentLevel = comment.parentId ? "ml-8" : ""; // Adjust the indent level as needed
  const createdAt = useMemo(() => {
    if (!comment?.createdAt) {
      return null;
    }
    return getTimeAgo(new Date(comment.createdAt));
  }, [comment.createdAt]);
  return (
    <div>
      <div className={`border-l border-secondary ${nestedIndentLevel} p-4`}>
        {/* Comment content */}
        <div className="flex items-start space-x-3">
          {" "}
          {/* Use items-start to align items at the start (top) */}
          <DeafultPfp size={8} />
          <div className="flex flex-col justify-center">
            <h3 className="text-xs md:text-md font-bold">
              {comment.user?.username}{" "}
              <span className="pl-2 pr-1 text-muted-foreground">· </span>
              <span className="text-xs md:text-md font-thin text-muted-foreground">
                {createdAt}
              </span>
            </h3>
            <p className="pt-1 text-muted-foreground">{comment.text}</p>
            <VotingBar comment={comment} />
          </div>
        </div>

        {/* Additional comment details (likes, dislikes, etc.) could be added here */}

        {/* Render child comments recursively */}
        {comment.children && comment.children.length > 0 && (
          <div className="mt-2">
            {comment.children.map((childComment) => (
              <CommentCard key={childComment.id} comment={childComment} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CommentCard;
