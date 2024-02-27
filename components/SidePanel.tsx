"use client";

import { User } from "next-auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TbUsersPlus } from "react-icons/tb";
import { Label } from "@/components/ui/label";
import { IoIosLogIn, IoIosLogOut } from "react-icons/io";
import { FaSquareInstagram, FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoDiscord } from "react-icons/io5";
import { logout } from "@/actions/logout";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { FaPlus } from "react-icons/fa";
import { BsMegaphone } from "react-icons/bs";
import { PiUsers } from "react-icons/pi";
import { FaChevronRight } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import Link from "next/link";

interface SidePanelProps {
  user?: User;
}

const SidePanel: React.FC<SidePanelProps> = ({ user }) => {
  const router = useRouter();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="dark:bg-[#282828]" size="icon">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Main Menu</SheetTitle>
          <SheetDescription>
            For more information/help with features or bug reports please send
            us a message!
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-col py-6 space-y-4 ">
          <div className="flex hover:cursor-pointer items-center justify-center bg-white/10 rounded-xl p-1 ">
            <SheetClose className="flex items-center gap-6">
              <PiUsers />
              <Button
                className="hover:bg-transparent"
                variant={"ghost"}
                size="sm"
                onClick={() => router.push("/users")}
              >
                Users List{" "}
              </Button>
              <FaChevronRight />
            </SheetClose>
          </div>

          <div className="flex hover:cursor-pointer items-center justify-center bg-white/10 rounded-xl p-1 ">
            <SheetClose className="flex items-center gap-6">
              <FaGear />
              <Button
                className="hover:bg-transparent"
                variant={"ghost"}
                size="sm"
                onClick={() => router.push("/settings")}
              >
                Settings
              </Button>
              <FaChevronRight />
            </SheetClose>
          </div>

          <div className="flex hover:cursor-pointer items-center justify-center bg-white/10 rounded-xl p-1 ">
            <SheetClose className="flex items-center gap-6">
              <BsMegaphone />
              <Button
                className="hover:bg-transparent"
                variant={"ghost"}
                size="sm"
                onClick={() => router.push("/contact")}
              >
                Contact Us
              </Button>
              <FaChevronRight />
            </SheetClose>
          </div>

          {user ? (
            <div className="flex items-center justify-center bg-white/10 rounded-xl p-1 ">
              <SheetClose className="flex items-center gap-6 text-red-500">
                <IoIosLogOut />
                <Button
                  className="hover:bg-transparent"
                  variant="ghost"
                  size="sm"
                  onClick={() => logout()}
                >
                  Log out
                </Button>
                <FaChevronRight />
              </SheetClose>
            </div>
          ): (
            <div className="flex items-center justify-center bg-white/10 rounded-xl p-1 ">
              <SheetClose className="flex items-center gap-6 ">
              <TbUsersPlus />
                <Button
                  className="hover:bg-transparent"
                  variant="ghost"
                  size="sm"
                  onClick={() => router.push("/auth/login")}
                >
                  Log in
                </Button>
                <FaChevronRight />
              </SheetClose>
            </div>
          )}
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <div className="flex flex-col justify-between w-full ">
              <Button
                className=" w-full"
                type="submit"
                onClick={() => router.push("/posts/create")}
              >
                <div className="flex items-center space-x-3">
                  <Plus />
                  <p>Create Post</p>
                </div>
              </Button>
              <div className="text-xs text-muted-foreground py-6 underline flex text-center justify-center">
                <Link href="/policies">
                  Privacy Policy &amp; Terms of Service
                </Link>
              </div>
              <div className="flex items-center space-x-2 justify-center w-full text-2xl ">
                <FaSquareXTwitter />
                <IoLogoDiscord />
                <FaSquareInstagram />
              </div>
            </div>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default SidePanel;
