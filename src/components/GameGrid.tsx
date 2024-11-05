import useGames from "@/hooks/useGames";
import { Text } from "@chakra-ui/react";

export default function GameGrid() {
  const { error, games } = useGames();

  return (
    <>
      {error && <Text paddingX={9}>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
}
