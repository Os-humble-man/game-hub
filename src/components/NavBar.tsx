import logo from "@/assets/logo.webp";
import React from "react";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchBar from "./SearchBar";

export default function NavBar() {
  return (
    <div className="flex items-center justify-between p-4 md:p-8 bg-white dark:bg-neutral-950">
      <div className="flex-shrink-0">
        <img src={logo} alt="Logo" className="h-12 w-auto md:h-16" />
      </div>

      <div className="hidden md:flex flex-1 mx-4">
        <SearchBar />
      </div>

      <div className="flex items-center space-x-2">
        <ColorModeSwitch />
      </div>
    </div>
  );
}
