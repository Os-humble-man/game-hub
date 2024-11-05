import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "@/components/NavBar";
import GameGrid from "./components/GameGrid";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>
      <GridItem
        area={"aside"}
        bg={"gold"}
        display={{ base: "none", lg: "block" }}
      >
        aside
      </GridItem>
      <GridItem area={"main"}>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
