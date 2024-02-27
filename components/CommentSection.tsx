'use client';

import { Comment } from "@prisma/client";
import CommentsList from "./CommentsList";

interface CommentSectionProps {
    comments : Comment[]
}

const CommentSection: React.FC<CommentSectionProps> = ({comments}) => {
  return (
    <div>
      <CommentsList comments={comments}/>
    </div>
  );
};

export default CommentSection;