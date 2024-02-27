
interface UserPageProps {
    params :{
        username : string
    }
}

const UserPage: React.FC<UserPageProps> = ({params}) => {
  return (
    <div>
        {params.username}
        
    </div>
  );
};

export default UserPage;