import plateforms from "@/data/plateforms";
import APIClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";

const apiClient = new APIClient<Platform>("/platforms/lists/parents")

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => useQuery({
  queryKey:["platforms"],
  queryFn: apiClient.getAll,
  staleTime : ms('24'),// 24h
  initialData :{count:plateforms.length, results:plateforms}

})
  

export default usePlatforms;
