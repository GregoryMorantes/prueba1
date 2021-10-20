import axios from "axios";

const Api = {
     getUser: async (str) => {       
        return await axios.get(`https://api.github.com/search/users?q=${str}&sort=created&order=asc`);
    }
}
 
export default Api;