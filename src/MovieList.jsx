import React from 'react';
import MovieCard from './Moviecard';

const MovieList = ({ movies }) => {
    return (
        <div className="movie-list">
            <div className="movies-container">
                {movies.map(movie => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
};

export default MovieList;