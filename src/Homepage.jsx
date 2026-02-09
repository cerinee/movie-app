import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Filter from './Filter';
import MovieList from './MovieList';

const Homepage = ({ movies, addNewMovie }) => {
    const [titleFilter, setTitleFilter] = useState('');
    const [ratingFilter, setRatingFilter] = useState(0);
    const [showAddForm, setShowAddForm] = useState(false);

    const [newMovie, setNewMovie] = useState({
        title: '',
        description: '',
        posterURL: '',
        rating: 0,
        trailerLink: ''
    });

    const filteredMovies = movies.filter(movie => {
        const matchesTitle = movie.title.toLowerCase().includes(titleFilter.toLowerCase());
        const matchesRating = movie.rating >= ratingFilter;
        return matchesTitle && matchesRating;
    });

    const handleAddMovie = (e) => {
        e.preventDefault();
        if (!newMovie.title || !newMovie.description) return;

        const movieToAdd = {
            ...newMovie,
            id: movies.length + 1,
            rating: parseFloat(newMovie.rating) || 0
        };

        addNewMovie(movieToAdd);
        setNewMovie({
            title: '',
            description: '',
            posterURL: '',
            rating: 0,
            trailerLink: ''
        });
        setShowAddForm(false);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewMovie({
            ...newMovie,
            [name]: value
        });
    };

    return (
        <>
            <header className="app-header">
                    <h1>Land Of Movies</h1>
            </header>

            <main className="app-main">
                <Filter
                    titleFilter={titleFilter}
                    ratingFilter={ratingFilter}
                    onTitleChange={setTitleFilter}
                    onRatingChange={setRatingFilter}
                />

                <div className="add-movie-button-container">
                    <button onClick={() => setShowAddForm(!showAddForm)}>
                        {showAddForm ? 'Hide Form' : 'Add New Movie'}
                    </button>
                </div>

                {showAddForm && (
                    <div className="add-movie-form">
                        <h2>Add a New Movie</h2>
                        <form onSubmit={handleAddMovie}>
                            <input
                                type="text"
                                name="title"
                                placeholder="Movie Title"
                                value={newMovie.title}
                                onChange={handleInputChange}
                                required
                            />
                            <input
                                type="text"
                                name="posterURL"
                                placeholder="Poster URL"
                                value={newMovie.posterURL}
                                onChange={handleInputChange}
                            />
                            <textarea
                                name="description"
                                placeholder="Movie Description"
                                value={newMovie.description}
                                onChange={handleInputChange}
                                required
                            />
                            <input
                                type="text"
                                name="trailerLink"
                                placeholder="YouTube Trailer Link"
                                value={newMovie.trailerLink}
                                onChange={handleInputChange}
                            />
                            <input
                                type="number"
                                name="rating"
                                placeholder="Rating (0-10)"
                                min="0"
                                max="10"
                                step="0.1"
                                value={newMovie.rating}
                                onChange={handleInputChange}
                            />
                            <button type="submit">Add Movie</button>
                        </form>
                    </div>
                )}

                <MovieList movies={filteredMovies} />

                <footer className="app-footer">
                    <p>Total Movies: {movies.length} | Showing: {filteredMovies.length}</p>
                </footer>
            </main>
        </>
    );
};

export default Homepage;