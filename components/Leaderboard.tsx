"use client";

import { dummyUsers, dummyUsers2 } from "@/dummy";
import { ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";
import { BsTrophyFill } from "react-icons/bs";
import { CiMedal } from "react-icons/ci";
import { FaMedal, FaStar } from "react-icons/fa6";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";
import UserCard from "./UserCard";

interface LeaderboardProps {}

const Leaderboard: React.FC<LeaderboardProps> = ({}) => {
    const router = useRouter();
    const top10 = dummyUsers.sort((a, b) => b.points - a.points).slice(0, 10);
  return (
    <div className="hidden lg:flex ml-8 w-2/6 h-full">
      <aside className="hidden md:flex md:flex-col border rounded-md w-full">
        <div className="flex bg-red-900 py-2 px-6 border-b-4 border-white/10 text-white items-center justify-between">
          <FaMedal />

          <h2>Points Leaderboard</h2>
          <ChevronDown className="h-4 ml-2" />
        </div>
        <ScrollArea className="p-2 h-[400px] w-full rounded-md border ">
            {
                top10.map((dummy)=> (
                    <div key={dummy.id} className="border border-blue-900/10">
                        <UserCard user={dummy}/>
                    </div>
                ))
            }
        </ScrollArea>
        
        <Button className="dark:bg-[#282828] dark:text-white p-3" onClick={() => router.push('/users')}>
            More Users --&gt;
        </Button>
       
      </aside>
    </div>
  );
};

export default Leaderboard;
