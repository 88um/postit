"use client";

import { useCurrentUser } from "@/hooks/use-current-user";
import { Menu, User } from "lucide-react";
import Image from "next/image";
import SidePanel from "./SidePanel";
import { Button } from "./ui/button";
import { FaBell } from "react-icons/fa";
import Link from "next/link";
import  NotiPop  from "./NotiPop";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = ({}) => {
  const user = useCurrentUser();
  return (
    <div className="relative flex pl-10 md:pl-16 w-full items-center justify-between border-b pb-3 mb-6 overflow-hidden rounded-md">
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-sm"
        style={{ backgroundImage: "url(https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)" }}
      />

      <div className="relative z-10 flex-1 flex items-center justify-between p-2 md:p-6">
        <Link href={'/'} className='font-bold text-2xl shadow-2xl'>ISU-Hub </Link>
        <Link href="/">
        <div className=" hidden relative h-32 md:h-36 w-48 md:w-60 ">
          <Image
            src="/logo.png"
            alt="Logo"
            fill
            className="p-3 md:p-0 aspect-square object-cover rounded-md bg-transparent"
          />
        </div>
        </Link>
        
        <div className="flex items-center space-x-2">
          {user && (
             <NotiPop user={user}/>
          )}
           <NotiPop />
          <SidePanel user={user} />
        </div>
      </div>
    </div>
  );
};
export default Navbar;
