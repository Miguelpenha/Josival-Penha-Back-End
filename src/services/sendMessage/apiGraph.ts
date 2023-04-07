import axios from 'axios'

const apiGraph = axios.create({
    baseURL: process.env.API_URL_GRAPH,
    headers: {
        authorization: `Bearer ${process.env.ACCESS_TOKEN_API_GRAPH}`
    }
})

export default apiGraph