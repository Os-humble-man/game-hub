import useGames from "@/hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { GameQuery } from "@/pages/Home";
import { Button } from "./ui/button";
import React from "react";

interface Props {
  gameQuery: GameQuery;
}

export default function GameGrid({ gameQuery }: Props) {
  const {
    error,
    data,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGames(gameQuery);
  const skeletons = Array(24).fill(0);

  if (error)
    return (
      <p className="col-span-full text-center text-red-500">{error.message}</p>
    );

  return (
    <div className="w-full ">
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {isLoading &&
          skeletons.map((_, index) => <GameCardSkeleton key={index} />)}

        {data && data?.pages.length > 0 ? (
          data?.pages.map((page, index) => (
            <React.Fragment key={index}>
              {page.results.map((game) => (
                <GameCard game={game} key={game.id} />
              ))}
            </React.Fragment>
          ))
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

      <div className="w-full py-3">
        {hasNextPage && (
          <Button onClick={() => fetchNextPage()}>
            {isFetchingNextPage ? "Loading..." : "Load More"}
          </Button>
        )}
      </div>
    </div>
  );
}
