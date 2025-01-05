import axios, { AxiosRequestConfig } from "axios";
const apiKey = import.meta.env.VITE_RAWG_API_KEY;

export interface FetchResponse<T> {
  count: number;
  results: T[];
  next?:string | null;
  previous?:string | null
}


const axiosInstance =  axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: apiKey,
  },
});


class APIClient<T>{
  endpoint:string
  constructor(endpoint:string){
    this.endpoint = endpoint;
  }

  getAll = (config:AxiosRequestConfig)=>{
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint,config)
      .then((res)=>res.data)
  }
}

export default APIClient