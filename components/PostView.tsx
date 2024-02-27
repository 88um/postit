import { flairMap, lorem } from "@/dummy";
import { cn, getTimeAgo } from "@/lib/utils";
import { Post, User, Flair, Comment } from "@prisma/client";
import { Badge } from "lucide-react";
import { useMemo } from "react";
import { BsPinAngleFill } from "react-icons/bs";
import { FaEllipsis } from "react-icons/fa6";
import CommentsList from "./CommentsList";
import DeafultPfp from "./DeafultPfp";
import VotingBar from "./VotingBar";

interface PostViewProps {
  post: Post & { user: User; flair: Flair; comments: Comment[] };
}

const PostView: React.FC<PostViewProps> = ({ post }) => {
  const color = flairMap[post.flair.name.toUpperCase()] ?? "bg-red-500";

  const createdAt = useMemo(() => {
    if (!post?.createdAt) {
      return null;
    }
    return getTimeAgo(new Date(post.createdAt));
  }, [post.createdAt]);
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <DeafultPfp />
          <div className=" flex flex-col ">
            <h3 className="text-xs md:text-md font-bold">
              u/{post.user.username} ·{" "}
              <span className="text-xs md:text-md font-thin text-muted-foreground">
                {createdAt}
              </span>
            </h3>
            <p className="text-xs md:text-md font-thin text-muted-foreground ">
              ISU{" "}
              {post.user.student_role.toLowerCase().charAt(0).toUpperCase() +
                post.user.student_role.toLowerCase().slice(1)}
            </p>
          </div>
        </div>

        <div className="flex items-center text-xs md:text-lg space-x-4 pb-2">
          {post.isPinned ||
            (true && <BsPinAngleFill className="text-[#0B8A00]" />)}
          <FaEllipsis />
        </div>
      </div>

      <div className="flex flex-col pt-2 space-y-2">
        <h1>{post.title}</h1>
        <div className="flex space-x-1">
          {post.user.role.toLowerCase() !== "user" && (
            <div
              className={cn(
                "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 uppercase",
                "bg-[#F994AB]"
              )}
            >
              {post.user.role}
            </div>
          )}

          <div
            className={cn(
              "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
              color
            )}
          >
            {post.flair.name}
          </div>
        </div>
        <div className="text-md md:text-normal dark:text-neutral-400 font-light ">
          {post.text}
          {lorem}
        </div>
        <VotingBar post={post} />
        <CommentsList post={post}/>
      </div>
    </div>
  );
};

export default PostView;
