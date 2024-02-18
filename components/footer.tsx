import { Github, Linkedin, Twitter, Youtube } from "lucide-react";
import React from "react";
import { GitHubLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";

const Footer = () => {
  return (
    <footer className="flex flex-row items-center justify-between m-5 pb-5">
      <div className="flex flex-row gap-3">
        <a href="https://www.linkedin.com/in/alvropena/">
          <LinkedInLogoIcon />
        </a>
        <a href="https://github.com/alvropena">
          <GitHubLogoIcon />
        </a>
        <a href="https://www.x.com/alvropenaa">
          <TwitterLogoIcon />
        </a>
      </div>
      <p className="text-blue-500 text-sm">me@alvropena.com</p>
    </footer>
  );
};

export default Footer;
