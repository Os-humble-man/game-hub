import { GameQuery } from "@/pages/Home";
import apiClient, { FetchResponse } from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import { Genre } from "./useGenres";
import { Platform } from "./usePlateforms";



export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  genres: Genre[];
}


const useGames = (gameQuery:GameQuery) => useQuery<FetchResponse<Game>, Error>({
  queryKey:['games',gameQuery],
  queryFn: () =>
    apiClient.get<FetchResponse<Game>>('/games',{
    params:{
        genres: gameQuery.genre?.id,
        parent_platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
    }
  }).then(res => res.data),
})

export default useGames;
