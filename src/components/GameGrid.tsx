import useGames from "@/hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { GameQuery } from "@/pages/Home";

interface Props {
  gameQuery: GameQuery;
}

export default function GameGrid({ gameQuery }: Props) {
  const { error, data, isLoading } = useGames(gameQuery);
  const skeletons = Array(24).fill(0);

  if (error)
    return <p className="col-span-full text-center text-red-500">{error}</p>;

  return (
    <div className="w-full ">
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
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
