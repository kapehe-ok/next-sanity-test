import { Github, Linkedin, Twitter } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-row items-center justify-between m-5 pb-5">
      <div className="flex flex-row gap-3">
        <a href="https://www.linkedin.com/in/alvropena/">
          <Linkedin />
        </a>
        <a href="https://github.com/alvropena">
          <Github />
        </a>
        <a href="https://www.x.com/alvropenaa">
          <Twitter />
        </a>
      </div>
      <p className="text-blue-500">me@alvropena.com</p>
    </footer>
  );
};

export default Footer;
