"use client"
import React from "react";
import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="px-4 lg:px-6 py-4 lg:py-8">
      <div className="mx-auto max-w-4xl flex items-center justify-between">
        {/* Alvaro Peña on the left */}
        <div className="flex-1">
          <h1 className="text-xl font-bold tracking-tighter sm:text-3xl text-left">
            <Link href={'/'}>Alvaro Peña</Link>
          </h1>
        </div>

        {/* Navigation Links in the center, flex-grow allows the nav to take up max available space */}
        <nav className="flex-grow flex justify-center gap-2 sm:gap-4 lg:gap-6">
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">About</Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">Projects</Link>
          <Link href="https://alvropena.beehiiv.com/subscribe" className="text-sm font-medium hover:underline underline-offset-4">Newsletter</Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">Contact</Link>
        </nav>

        {/* ModeToggle on the right, flex-end aligns it to the right */}
        <div className="flex-1 flex justify-end items-center">
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
