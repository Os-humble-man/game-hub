import apiClient from "@/services/api-client";
import { Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

interface Game {
  id: number;
  name: string;
}

interface GameGrid {
  count: number;
  next: string;
  previous: string;
  results: Game[];
}

export default function GameGrid() {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState([]);

  useEffect(() => {
    apiClient
      .get<GameGrid>("/games")
      .then((response) => {
        setGames(response.data.results);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

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
