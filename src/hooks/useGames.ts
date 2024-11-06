import apiClient from "@/services/api-client";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";

export interface Game {
    id: number;
    name: string;
    background_image: string;
  }
  
  interface GameGrid {
    count: number;
    next: string;
    previous: string;
    results: Game[];
  }
  const useGames = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState<string | null>(null); 
    useEffect(() => {

        const controller = new AbortController();
      apiClient
        .get<GameGrid>('/games',{signal: controller.signal})
        .then((response) => {
          setGames(response.data.results);
        })
        .catch((err) => {
            if(err instanceof CanceledError) return;
          setError(err.message);
        });

        return ()=> controller.abort();
    }, []); 
  
    return { games, error };
  };
  

export default useGames;