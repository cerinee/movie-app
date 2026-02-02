import React, { useState } from 'react';
import MovieList from './MovieList';
import Filter from './filter';
import './App.css';

const App = () => {
  const initialMovies = [
    {
      id: 1,
      title: 'Inception',
      description: 'A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg',
      rating: 8.8
    },
    {
      id: 2,
      title: 'The Shawshank Redemption',
      description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
      rating: 9.3
    },
    {
      id: 3,
      title: 'The Dark Knight',
      description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg',
      rating: 9.0
    }
  ];

  const [movies, setMovies] = useState(initialMovies);
  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState(0);
  const [showAddForm, setShowAddForm] = useState(false);
  
  const [newMovie, setNewMovie] = useState({
    title: '',
    description: '',
    posterURL: '',
    rating: 0
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
    
    setMovies([...movies, movieToAdd]);
    setNewMovie({
      title: '',
      description: '',
      posterURL: '',
      rating: 0
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

  const toggleAddForm = () => {
    setShowAddForm(!showAddForm);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>My Movie Collection</h1>
      </header>
      
      <main className="app-main">
        <Filter
          titleFilter={titleFilter}
          ratingFilter={ratingFilter}
          onTitleChange={setTitleFilter}
          onRatingChange={setRatingFilter}
        />
        
        <div className="add-movie-button-container">
          <button onClick={toggleAddForm}>
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
                type="number"
                name="rating"
                placeholder="Rating"
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
      </main>
      
      <footer className="app-footer">
        <p>Total Movies: {movies.length}</p>
      </footer>
    </div>
  );
};

export default App;