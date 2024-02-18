"use client";
import React from "react";
import { GitHubLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";

const Footer = () => {
  return (
    <footer className="flex flex-row items-center justify-between m-5 pb-5">
      <div className="flex flex-row gap-3">
        <a href="https://www.linkedin.com/in/alvropena/" target="_blank" rel="noopener noreferrer">
          <LinkedInLogoIcon />
        </a>
        <a href="https://github.com/alvropena" target="_blank" rel="noopener noreferrer">
          <GitHubLogoIcon />
        </a>
        <a href="https://www.x.com/alvropenaa" target="_blank" rel="noopener noreferrer">
          <TwitterLogoIcon />
        </a>
      </div>
      <a href="mailto:me@alvropena.com" className="text-blue-500 text-sm">
        me@alvropena.com
      </a>
    </footer>
  );
};

export default Footer;
