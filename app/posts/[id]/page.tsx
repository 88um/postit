import { dummyPostArray } from "@/dummy";
import { X } from "lucide-react";
import { MdReportGmailerrorred } from "react-icons/md";
import { redirect } from "next/dist/server/api-utils";
import PostView from "@/components/PostView";

interface PostPageProps {
  params: {
    id: string;
  };
}

const PostPage: React.FC<PostPageProps> = ({ params }) => {
  const id = params?.id;
  const post = dummyPostArray.find((p) => p.id === id);
  if (!post) {
    return (
      <div className="flex flex-col text-white text-center items-center h-screen gap-4">
        <MdReportGmailerrorred className="text-red-500 text-4xl" />
        <p>Sorry post not found!</p>
        <a href="/" className="underline text-xs text-muted-foreground">
          Go back to posts --&gt;
        </a>
      </div>
    );
  }
  return (
  <div className="lg:container lg:mx-auto max-w-7xl h-screen">
    <PostView post={post}/>
  </div>
  );
};

export default PostPage;
