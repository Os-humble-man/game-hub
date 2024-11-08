// import { HStack, Image } from "@chakra-ui/react";
import logo from "@/assets/logo.webp";
import { Switch } from "@/components/ui/switch";
import React from "react";
import ColorModeSwitch from "./ColorModeSwitch";

export default function NavBar() {
  return (
    <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <img src={logo} alt="Logo" className="h-16 w-auto" />
        </div>
        <div className="flex items-center space-x-2">
          <ColorModeSwitch />
        </div>
      </div>
    </div>
  );
}
