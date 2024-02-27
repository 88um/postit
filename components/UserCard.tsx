"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getTimeAgo } from "@/lib/utils";

import { User } from "@prisma/client";
import { FaUser } from "react-icons/fa6";
import DeafultPfp from "./DeafultPfp";

interface UserCardProps {
  user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  const points = user.points //calculatePoints(user); 
  const color = points < 0 ? 'text-red-200' : 'text-green-200';
  const sign = points >= 0 ? '+' : '';
  return (
    <div className="p-4 flex flex-col">
      <div className="flex w-full space-x-8 text-muted-foreground">
        <DeafultPfp/>
        <div className="flex flex-col space-y-2 text-xs">
            <h2 ><span className="font-bold">u/{user.username}</span> · Last Seen {getTimeAgo(user.updatedAt)} ago</h2> 
            <p className={color}>{sign}{points} Points</p>
            <p className=" overflow-hidden whitespace-nowrap overflow-ellipsis w-[250px]">
              {user.bio}
            </p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
