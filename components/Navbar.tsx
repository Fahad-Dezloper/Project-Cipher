import { Box, Codesandbox } from "lucide-react";
import React from "react";
import { ModeToggle } from "./ui/theme-button";
import { Separator } from "./ui/separator";

const Navbar = () => {
  return (
    <nav className="flex justify-between font-spaceGrotesk items-center py-4">
      <div className="flex items-center gap-2">
        <Codesandbox className="size-8" />
        <div className="flex flex-col gap-4 font-primary">
          <span className="tracking-tighter text-3xl font-extrabold font-spaceGrotesk flex gap-2 items-center">
            Cipher
          </span>
        </div>
      </div>
      <ModeToggle />
    </nav>
  );
};

export default Navbar;
