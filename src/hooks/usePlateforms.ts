import plateforms from "@/data/plateforms";
import APIClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";

const apiClient = new APIClient<Platform>("/platforms/lists/parents")

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => useQuery({
  queryKey:["platforms"],
  queryFn: apiClient.getAll,
  staleTime : 24 * 60 * 60 * 1000,// 24h
  initialData :{count:plateforms.length, results:plateforms}

})
  

export default usePlatforms;
