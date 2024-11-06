import apiClient from "@/services/api-client";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";


interface Genre{
    id: number;
    name: string;
    // slug: string;
    // games_count: number;
    // image_background: string;
}

interface FetchGenresResponse{
    count:number;
    results: Genre[];

}

const useGenres = () => {
    const [genres, setGenres] = useState<Genre[]>([]);
    const [error, setError] = useState<string | null>(null); 
    const [isLoading,setIsLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();
        setIsLoading(true);
      apiClient
        .get<FetchGenresResponse>('/genres',{signal: controller.signal})
        .then((response) => {
            setGenres(response.data.results);
          setIsLoading(false);
        })
        .catch((err) => {
            if(err instanceof CanceledError) return;
          setError(err.message);
          setIsLoading(false);

        });

        return ()=> controller.abort();
    }, []); 
  
    return { genres, error,isLoading };
  };
  

export default useGenres;