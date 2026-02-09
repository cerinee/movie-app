import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies }) => {
    if (movies.length === 0) {
        return (
            <div className="movie-list-empty">
                <h2>No movies found</h2>
                <p>Try adjusting your filters or add a new movie!</p>
            </div>
        );
    }

    return (
        <div className="movie-list">
            <h2 className="list-title">Featured Movies ({movies.length})</h2>
            <div className="movies-container">
                {movies.map(movie => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
};

export default MovieList;