// import { Box, Card } from "@chakra-ui/react";
import React from "react";

interface Props {
  children: React.ReactNode;
}

export const GameCardContainer = ({ children }: Props) => {
  return (
    // <Box width={"100%"} overflow={"hidden"} borderRadius={10}>
    { children }
    // </Box>
  );
};
