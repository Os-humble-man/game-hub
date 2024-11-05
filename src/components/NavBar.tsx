import { HStack, Image } from "@chakra-ui/react";
import logo from "@/assets/logo.webp";
import React from "react";
import ColorModeSwitch from "./ColorModeSwitch";

export default function NavBar() {
  return (
    <HStack justifyContent="space-between" width="100%" padding="20px">
      <Image src={logo} boxSize={"60px"} />
      <ColorModeSwitch />
    </HStack>
  );
}
