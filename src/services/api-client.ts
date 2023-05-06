import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
        params:{
        key:'b87621e8ad734fab8cf07c12f44a1cd2'
    }
})