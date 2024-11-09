import GameGrid from "@/components/GameGrid";
import GenreList from "@/components/GenreList";
import NavBar from "@/components/NavBar";
import { Genre } from "@/hooks/useGenres";
import { useState } from "react";

export default function Home() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <div className="h-full px-8 space-x-3 flex flex-1 overflow-hidden">
        <GenreList
          selectedGenre={null}
          onSelecteGenre={(genre) => {
            setSelectedGenre(genre);
          }}
        />
        <GameGrid selectedGenre={selectedGenre} />
      </div>
    </div>
  );
}
