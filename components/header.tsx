import React from "react";
import Link from "next/link";
import { ModeToggle } from "./mode-toggle";

const Header = () => {
  return (
    <header className="flex items-center justify-between m-5">
      <Link href="/" className="font-semibold text-2xl">
        Alvaro Peña
      </Link>
      <div className="flex flex-row gap-6 items-center">
        <Link href="/projects">Projects</Link>
        <Link href="/essays">Essays</Link>
        <ModeToggle />
      </div>
    </header>
  );
};

export default Header;
