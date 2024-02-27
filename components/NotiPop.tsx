"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { getUserByEmail } from "@/data/user";
import { dummyNotifications } from "@/dummy";
import { Circle, Menu } from "lucide-react";
import { User } from "next-auth";
import Link from "next/link";
import { FaBell } from "react-icons/fa";
import { FaChevronRight, FaCircle } from "react-icons/fa6";
import { ScrollArea } from "./ui/scroll-area";
import { Separator } from "./ui/separator";

interface NotiPopProps {
  // user? : User
  // notis : Notification[]
}

const NotiPop: React.FC<NotiPopProps> = ({}) => {
  //const student = getUserByEmail(user?.email!);
    let hi = true;
  const sendSeen = () =>{
    hi=false;
  }
  const hasUnseen = dummyNotifications.filter((dummy)=> !dummy.seen).length > 0 
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="icon" className="dark:bg-[#282828] relative" onClick={sendSeen}>
        {hasUnseen && (
            <FaCircle className="text-sky-400 ring rounded-full absolute -top-1 -left-1"/>
        ) }
          <FaBell />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 ">
        
        <div className="flex flex-col">
          <ScrollArea className="h-72 w-76 rounded-md border">
            <div className="p-4 text-muted-foreground">
              <h4 className="mb-4 text-sm font-bold leading-none dark:text-white">
                Notifications
              </h4>
              <Separator className="my-2" />
              {dummyNotifications.map((tag) => (
                <div key={tag.body}>
                  <Link
                    href={`posts/${tag.postId}`}
                    key={tag.body}
                    className="text-sm flex justify-between p-2"
                  >
                    {tag.body} <FaChevronRight className="pl-2" />
                  </Link>

                  <Separator className="my-2" />
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default NotiPop;
