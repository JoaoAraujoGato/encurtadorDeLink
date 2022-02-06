import axios from "axios";

export const key = "46619c3b5de21d2280d388605c0d09ef097e2efa";

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4',
    headers:{
        'Authorization': `Bearer ${key}`
    }
})

export default api;