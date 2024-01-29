"use client";

import { IoIosSearch } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// import { Switch } from "@/components/ui/switch";
// import { useTheme } from "next-themes";

// type SetThemeFunction = {
//   setTheme: () => void;
// };

export default function NavBar() {
  // const { setTheme } = useTheme();

  return (
    <nav className="w-full h-20 flex items-center justify-between px-6 border-b border-gray-500">
      <Link href={"/"}>
        <h1 className="text-2xl font-bold">Ecomm</h1>
      </Link>

      <div className="flex items-center">
        {/* <Switch onClick={() => setTheme("dark")} /> */}
        <ModeToggle />
        <IoIosSearch className="mx-3" size={24} />
        <DropdownMenu>
          <DropdownMenuTrigger>
            <FiMenu size={24} />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <Link href={"/private/profile"}>
              <DropdownMenuItem>Profile</DropdownMenuItem>
            </Link>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}
