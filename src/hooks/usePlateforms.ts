import plateforms from "@/data/plateforms";
import apiClient, { FetchResponse } from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => useQuery({
  queryKey:["platforms"],
  queryFn: () => 
    apiClient.get<FetchResponse<Platform>>("/platforms/lists/parents").then(res => res.data),
  staleTime : 24 * 60 * 60 * 1000,// 24h
  initialData :{count:plateforms.length, results:plateforms}

})
  

export default usePlatforms;
