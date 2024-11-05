import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area={"nav"} bg={"coral"}>
        Nav
      </GridItem>
      <GridItem
        area={"aside"}
        bg={"gold"}
        display={{ base: "none", lg: "block" }}
      >
        aside
      </GridItem>
      <GridItem area={"main"} bg={"dodgerblue"}>
        Nav
      </GridItem>
    </Grid>
  );
}

export default App;
