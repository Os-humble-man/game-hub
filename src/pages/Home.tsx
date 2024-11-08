import GameGrid from "@/components/GameGrid";
import NavBar from "@/components/NavBar";
import React from "react";

export default function Home() {
  return (
    <div className="w-full h-full ">
      <NavBar />
      <div className="h-full space-y-8 p-8">
        <GameGrid selectedGenre={null} />
      </div>
    </div>
  );
}
