import axios from "axios";



 export default   axios.create({
    baseURL:"https://api.rawg.io/api",
    params: {
        key: "6858ec9a53cf4783a44dfa0c9af75fd7"
    }
})