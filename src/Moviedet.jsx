import React from 'react';
import { useParams } from 'react-router-dom';

const MovieDetails = ({ movies }) => {
    const { id } = useParams();
    const movie = movies.find(m => m.id === parseInt(id));

    if (!movie) {
        return (
            <div className="movie-details">
                <h2>Movie not found!</h2>
                <button onClick={() => history.back()}>
                    Go Back
                </button>
            </div>
        );
    }

    return (
        <div className="movie-details">
            <main className="app-main">
                <div className="movie-info">
                    <div className="movie-poster">
                        <img src={movie.posterURL} alt={movie.title} />
                        <p className="rating">Rating: {movie.rating}/10</p>
                    </div>

                    <div className="movie-content">
                        <h2>Description</h2>
                        <p>{movie.description}</p>

                        <h2>Trailer</h2>
                        {movie.trailerLink ? (
                            <div className="trailer">
                                <iframe
                                    width="100%"
                                    height="315"
                                    src={movie.trailerLink}
                                    title="Movie Trailer"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        ) : (
                            <p>No trailer available</p>
                        )}
                    </div>
                </div>
            </main>

            <footer className="app-footer">
                <button onClick={() => history.back()}>
                    Back to Movies
                </button>
            </footer>
        </div>
    );
};

export default MovieDetails;