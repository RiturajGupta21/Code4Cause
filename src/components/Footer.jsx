import React from "react";

import SocialIcons from "./SocialIcons";
import { Icons } from "../constants";

const Footer = () => {
  return (
    <footer className="text-white bg-primary">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center pt-2 text-gray-400 text-sm pb-8">
        <span>© {new Date().getFullYear()}. All rights reserved.</span>
        <span>Code For Cause with ❤️ by Codex</span>
        <SocialIcons Icons={Icons} />
      </div>
    </footer>
  );
};

export default Footer;


 