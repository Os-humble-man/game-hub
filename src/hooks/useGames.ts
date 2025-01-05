import { GameQuery } from "@/pages/Home";
import { useInfiniteQuery } from "@tanstack/react-query";
import { Genre } from "./useGenres";
import { Platform } from "./usePlateforms";
import APIClient, { FetchResponse } from "@/services/api-client";

const apiClient = new APIClient<Game>("/games");

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  genres: Genre[];
}

const useGames = (gameQuery: GameQuery) =>
  useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPages) =>
      lastPage.results.length > 0 ? allPages.length + 1 : undefined,
    initialPageParam: 1, 
  });

export default useGames;
