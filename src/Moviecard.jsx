import React from 'react';

const MovieCard = ({ movie }) => {
    return (
        <div className="movie-card">
            <img src={movie.posterURL} alt={movie.title} />
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>Rating: {movie.rating}</p>
                <p>{movie.description}</p>
            </div>
        </div>
    );
};

export default MovieCard;