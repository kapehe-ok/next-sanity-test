"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import { Menu } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden"
        >
          <Menu />
        </button>
        {isMenuOpen && (
          <div className="absolute top-12 right-5 w-48 bg-white shadow-md rounded-md p-6">
            <Link href="/" className="block mb-2 hover:text-blue-500">
              Home
            </Link>
            <Link href="/projects" className="block mb-2 hover:text-blue-500">
              Projects
            </Link>
            <Link href="/essays" className="block hover:text-blue-500">
              Essays
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
