import useGames from "@/hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { Genre } from "@/hooks/useGenres";
import PlatformSelector from "./PlatformSelector";

interface Props {
  selectedGenre: Genre | null;
}

export default function GameGrid({ selectedGenre }: Props) {
  const { error, data, isLoading } = useGames(selectedGenre);
  const skeletons = Array(24).fill(0);
  const selectedGenreId = selectedGenre ? selectedGenre.id : null;

  const filteredGame =
    selectedGenre !== null && selectedGenreId
      ? data?.filter((game) =>
          game.genres.some((genre) => genre.id === selectedGenreId)
        )
      : data;

  console.log(filteredGame);

  return (
    <div className="w-full ">
      <div className="col-span-full w-full py-4">
        <PlatformSelector />
      </div>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {error && (
          <p className="col-span-full text-center text-red-500">{error}</p>
        )}

        {isLoading &&
          skeletons.map((_, index) => <GameCardSkeleton key={index} />)}

        {filteredGame && filteredGame.length > 0 ? (
          filteredGame.map((game) => <GameCard game={game} key={game.id} />)
        ) : (
          <>
            {!isLoading && (
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
