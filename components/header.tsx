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
        <div className="flex-1 bg-slate-400">
          <h1 className="text-6xl font-bold tracking-tighter sm:text-5xl text-center">
            <Link href={'/'}>Alvaro Peña</Link>
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
