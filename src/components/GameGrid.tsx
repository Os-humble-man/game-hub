import useGames from "@/hooks/useGames";
import { GameQuery } from "@/pages/Home";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import Loader from "./Loader";

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

  const fetchedGamesCount =
    data?.pages.reduce((acc, page) => acc + page.results.length, 0) || 0;

  return (
    <InfiniteScroll
      dataLength={fetchedGamesCount}
      hasMore={!!hasNextPage}
      next={() => fetchNextPage()}
      loader={
        <div className="flex justify-center items-center my-4">
          <Loader />
        </div>
      }
      style={{ overflow: "visible" }}
    >
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
    </InfiniteScroll>
  );
}
