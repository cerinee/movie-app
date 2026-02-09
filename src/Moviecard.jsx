import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
    return (
        <div className="movie-card">
            <img src={movie.posterURL} alt={movie.title} />
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>⭐ {movie.rating}/10</p>
                <p className="description">
                    {movie.description.substring(0, 100)}...
                </p>
                <Link to={`/movie/${movie.id}`} className="view-details">
                    <button className="view-details-button">View Details</button>
                </Link>
            </div>
        </div>
    );
};

export default MovieCard;