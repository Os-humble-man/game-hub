import useGames from "@/hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { Genre } from "@/hooks/useGenres";
import filteredGamesByGenre from "../services/filter-games";
import FilterByPlateForm from "./FilterByPlateForm";

interface Props {
  selectedGenre: Genre | null;
}

export default function GameGrid({ selectedGenre }: Props) {
  const { error, data, isLoading } = useGames(selectedGenre);
  const skeletons = Array(12).fill(0);
  const filteredGame = selectedGenre
    ? filteredGamesByGenre(data, selectedGenre.id)
    : data;

  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
      <div className="col-span-full w-full py-2">
          <FilterByPlateForm/>
      </div>
      {error && <p>{error}</p>}
      {isLoading &&
        skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}

      {filteredGame && filteredGame.length > 0 ? (
        filteredGame.map((game) => <GameCard game={game} key={game.id} />)
      ) : (
        <>{!isLoading && <p>No games found in this genre</p>}</>
      )}
    </div>
  );
}
