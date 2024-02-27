import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";
import Link from "next/link";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

interface HeaderProps {
  label: string;
  title: string;
};

export const Header = ({
  title,
  label,
}: HeaderProps) => {
  return (
    <div className=" flex flex-col space-y-2">
      <h1 className={cn(
        "text-3xl font-semibold",
        font.className,
      )}>
        {title}
      </h1>
      {title.toLowerCase() != "sign up" ? (
        <p className="text-muted-foreground text-sm">
        {label}
      </p>
      ): (
        <Link href='/policies' className="text-muted-foreground text-sm">
        By continuing, you agree to our <span className=" cursor-pointer text-indigo-300">User Agreement </span> and acknowledge that you understand the <span className="cursor-pointer text-indigo-300">Privacy Policy </span>
      </Link>
      )}
      
    </div>
  );
};
