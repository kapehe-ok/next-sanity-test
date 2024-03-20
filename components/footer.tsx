"use client";
import React from "react";
import { GitHubLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import Link from 'next/link'
import { ModeToggle } from "./mode-toggle";

const Footer = () => {
  return (
    <footer className="flex flex-row justify-between py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
      <nav className="flex flex-row gap-3">
        <Button variant="ghost" onClick={() => window.open('https://www.linkedin.com/in/alvropena/')}>
          <LinkedInLogoIcon />
        </Button>
        <Button variant="ghost" onClick={() => window.open('https://github.com/alvropena')}>
          <GitHubLogoIcon />
        </Button>
        <Button variant="ghost" onClick={() => window.open('https://www.x.com/alvropenaa')}>
          <TwitterLogoIcon />
        </Button>
      </nav>
      <div className="flex-1 flex justify-end items-center">
        <Button variant="link" onClick={() => window.open('https://github.com/alvropena/my-website.git')}>
          Source
        </Button>

        <ModeToggle />
      </div>
    </footer>
  );
};

export default Footer;
