"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import { Menu } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleDocumentClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleDocumentClick);

    return () => {
      document.removeEventListener("mousedown", handleDocumentClick);
    };
  }, []);

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
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden"
        >
          <Menu />
        </button>
        {isMenuOpen && (
          <div
            ref={dropdownRef}
            className="absolute top-full right-0 w-48 bg-white dark:bg-secondary shadow-md rounded-md p-6 mt-2"
          >
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
