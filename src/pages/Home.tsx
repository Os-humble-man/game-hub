import GameGrid from "@/components/GameGrid";
import GenreList from "@/components/GenreList";
import NavBar from "@/components/NavBar";
import PlatformSelector from "@/components/PlatformSelector";
import SortSelector from "@/components/SortSelector";
import { Platform } from "@/hooks/useGames";
import { Genre } from "@/hooks/useGenres";
import { useState } from "react";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
}

export default function Home() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <div className="h-full px-8 space-x-3 flex flex-1 overflow-hidden">
        <GenreList
          selectedGenre={gameQuery.genre}
          onSelecteGenre={(genre) => {
            setGameQuery({ ...gameQuery, genre });
          }}
        />
        <div className="w-full">
          <div className=" w-full py-6 flex items-center gap-2">
            <PlatformSelector
              onSelectedPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
            />
            <SortSelector
              sortOrder={gameQuery.sortOrder}
              onSelectSortOrder={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
            />
          </div>
          <GameGrid gameQuery={gameQuery} />
        </div>
      </div>
    </div>
  );
}
