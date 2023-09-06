import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import { Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


const Header = () => {
  return (
    <header className="flex items-center justify-between m-5">
      <Link href="/" className="font-semibold text-2xl">
        Alvaro Peña
      </Link>
      <div className="relative flex flex-row gap-3 items-center">
        <Link href="/projects" className="hidden md:block">
          Projects
        </Link>
        <Link href="/essays" className="hidden md:block">
          Essays
        </Link>
        <ModeToggle />
        <div className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Menu />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <Link href={"/"}>
                <DropdownMenuItem>
                  Home
                </DropdownMenuItem>
              </Link>
              <Link href={"/projects"}>
                <DropdownMenuItem>
                  Projects
                </DropdownMenuItem>
              </Link>
              <Link href={"/essays"}>
                <DropdownMenuItem>
                  Essays
                </DropdownMenuItem>
              </Link>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Header;
