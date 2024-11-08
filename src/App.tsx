// import { Grid, GridItem } from "@chakra-ui/react";
// import NavBar from "@/components/NavBar";
// import GameGrid from "./components/GameGrid";
// import GenreList from "./components/GenreList";
import { Button } from "./components/ui/button";
import { ThemeProvider } from "@/components/theme-provider";

import React, { useState } from "react";
// import { Genre } from "./hooks/useGenres";
import "./App.css";
import NavBar from "@/components/NavBar";
import Home from "./pages/Home";

function App() {
  // const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Home />
    </ThemeProvider>
  );
}

export default App;
