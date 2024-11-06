import apiClient from "@/services/api-client";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";


export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
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
    const [isLoading,setIsLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();
        setIsLoading(true);
      apiClient
        .get<GameGrid>('/games',{signal: controller.signal})
        .then((response) => {
          setGames(response.data.results);
          setIsLoading(false);
        })
        .catch((err) => {
            if(err instanceof CanceledError) return;
          setError(err.message);
          setIsLoading(false);

        });

        return ()=> controller.abort();
    }, []); 
  
    return { games, error,isLoading };
  };
  

export default useGames;