import { redirect } from "next/navigation";


interface PostsPageProps {

}

const PostsPage: React.FC<PostsPageProps> = ({}) => {
    redirect('/')
};

export default PostsPage;