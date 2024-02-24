"use client"
import React from "react";
import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";


const Header = () => {


  return (
    <header className="flex items-center justify-between m-5">
      <Link href="/" className="font-semibold text-xl">
        Alvaro Peña
      </Link>

      <div className="relative flex flex-row gap-3 items-center">
        <ModeToggle />
        <Button variant="ghost" onClick={() => window.open('https://acornfall.beehiiv.com/subscribe', '_blank', 'noopener,noreferrer')}>
          Newsletter
        </Button>
      </div>
    </header>
  );
};

export default Header;
