import React from "react";
import Link from "next/link";
import { ModeToggle } from "./mode-toggle";


const Header = () => {
  return (
    <header className="flex items-center justify-between m-5">
      <Link href="/" className="font-semibold text-2xl">
        Alvaro Peña
      </Link>
      <div className="relative flex flex-row gap-3 items-center">
        <ModeToggle />
      </div>
    </header>
  );
};

export default Header;
