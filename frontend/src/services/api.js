import axios from "axios";

const API = axios.create({
    baseURL: "http://127.0.0.1:8000"
});

export const getMovies = () => API.get("/filme");

export const addMovie = (movie) =>
    API.post("/filme", movie);

export const deleteMovie = (id) =>
    API.delete(`/filme/${id}`);

export const rateMovies = (id, rating) =>
    API.post(`/filme/${id}/bewertung`, rating);

export const getStats = () =>
    API.get("/statistik");