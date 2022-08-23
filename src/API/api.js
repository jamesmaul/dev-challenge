import axios from 'axios';

//Base da URL: https://api.themoviedb.org/3/
//
//URL DA API: /movie/now_playing?api_key=7d4cefdba1d08bf59e2b24510f19eb18&language=pt-BR

const api = axios.create({
    baseURL: "http://localhost:3001",
});

export default api;