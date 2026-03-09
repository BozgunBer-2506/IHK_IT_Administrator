import React, { useEffect, useState} from "react";
import {getMovies} from "../services/api";

function MovieList() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        loadMovies();
    }, []);

    const loadMovies = async () => {
        const response = await getMovies();
        setMovies(response.data)
    };

    return (
      <div>

        <h2>Filmliste</h2>

        {movies.map((movie) => (
          <div key={movie.id}>
            <h3>{movie.title}</h3>
            <p>Regisseur: {movie.regisseur}</p>
            <p>Jahr: {movie.erscheinungsjahr}</p>
            <p>Kategorie: {movie.kategorie}</p>
          </div>
        ))}

        </div>
    );
}

export default MovieList;
