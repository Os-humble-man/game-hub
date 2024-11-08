import useGames from "@/hooks/useGames";
// import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { GameCardContainer } from "./GameCardContainer";
import { Genre } from "@/hooks/useGenres";
// import filteredGamesByGenre from "../services/filter-games";

interface Props {
  selectedGenre: Genre | null;
}

export default function GameGrid({ selectedGenre }: Props) {
  const { error, data, isLoading } = useGames(selectedGenre);
  const skeletons = Array(12).fill(0);
  // const filteredGame = selectedGenre
  //   ? filteredGamesByGenre(data, selectedGenre.id)
  //   : data;

  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 :grid-cols-5">
      {error && <p>{error}</p>}
      {isLoading &&
        skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}

      {data && data.length > 0 ? (
        data.map((game) => <GameCard game={game} key={game.id} />)
      ) : (
        <>{!isLoading && <p>No games found in this genre</p>}</>
      )}
    </div>
  );
}
