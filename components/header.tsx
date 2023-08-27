import React from "react";
import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import { Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="flex items-center justify-between m-5">
      <Link href="/" className="font-semibold text-2xl">
        Alvaro Peña
      </Link>
      <div className="flex flex-row gap-3 items-center">
        <Link href="/projects" className="hidden md:block">
          Projects
        </Link>
        <Link href="/essays" className="hidden md:block">
          Essays
        </Link>
        <ModeToggle />
        <Menu className="md:hidden"/>
      </div>
    </header>
  );
};

export default Header;
