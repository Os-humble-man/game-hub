import axios from "axios";
const apiKey = import.meta.env.VITE_RAWG_API_KEY;

console.log(apiKey);

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: apiKey,
  },
});
