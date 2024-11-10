import GameGrid from "@/components/GameGrid";
import GenreList from "@/components/GenreList";
import NavBar from "@/components/NavBar";
import PlatformSelector from "@/components/PlatformSelector";
import { Platform } from "@/hooks/useGames";
import { Genre } from "@/hooks/useGenres";
import { useState } from "react";

export default function Home() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <div className="h-full px-8 space-x-3 flex flex-1 overflow-hidden">
        <GenreList
          selectedGenre={selectedGenre}
          onSelecteGenre={(genre) => {
            setSelectedGenre(genre);
          }}
        />
        <div className="w-full">
          <div className=" w-full py-4">
            <PlatformSelector
              onSelectedPlatform={(platform) => setSelectedPlatform(platform)}
            />
          </div>
          <GameGrid
            selectedGenre={selectedGenre}
            selectedPlatform={selectedPlatform}
          />
        </div>
      </div>
    </div>
  );
}
