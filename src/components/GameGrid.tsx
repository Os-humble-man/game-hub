import useGames from "@/hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { GameCardContainer } from "./GameCardContainer";
import { Genre } from "@/hooks/useGenres";
import filteredGamesByGenre from "@/services/filter-games";

interface Props {
  selectedGenre: Genre | null;
}

export default function GameGrid({ selectedGenre }: Props) {
  const { error, data, isLoading } = useGames(selectedGenre);
  const skeletons = [1, 2, 3, 4, 5, 6];
  const filteredGame = selectedGenre
    ? filteredGamesByGenre(data, selectedGenre.id)
    : data;

  return (
    <>
      {error && <Text padding={5}>{error}</Text>}
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3, xl: 5 }}
        padding={10}
        gap={3}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {filteredGame && filteredGame.length > 0 ? (
          filteredGame.map((game) => (
            <GameCardContainer key={game.id}>
              <GameCard game={game} />
            </GameCardContainer>
          ))
        ) : (
          <>{!isLoading && <Text>No games found in this genre</Text>}</>
        )}
      </SimpleGrid>
    </>
  );
}
