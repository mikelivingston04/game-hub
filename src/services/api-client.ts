import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '53ce7a494c3842818c1d52f3df885a87'
    }
})