import useGames, { Platform } from "@/hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { Genre } from "@/hooks/useGenres";

interface Props {
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;
}

export default function GameGrid({ selectedGenre, selectedPlatform }: Props) {
  const { error, data, isLoading } = useGames(selectedGenre, selectedPlatform);
  const skeletons = Array(24).fill(0);

  return (
    <div className="w-full ">
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {error && (
          <p className="col-span-full text-center text-red-500">{error}</p>
        )}

        {isLoading &&
          skeletons.map((_, index) => <GameCardSkeleton key={index} />)}

        {data && data.length > 0 ? (
          data.map((game) => <GameCard game={game} key={game.id} />)
        ) : (
          <>
            {!isLoading && error === null && (
              <p className="col-span-full text-center text-gray-500">
                No games found in this genre
              </p>
            )}
          </>
        )}
      </div>
    </div>
  );
}
