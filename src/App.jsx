import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import Moviedet from './Moviedet';
import './App.css';

const App = () => {
  const initialMovies = [
    {
      id: 1,
      title: 'Inception',
      description: 'A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg',
      rating: 8.8,
      trailerLink: 'https://www.youtube.com/embed/YoHD9XEInc0'
    },
    {
      id: 2,
      title: 'The Shawshank Redemption',
      description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
      rating: 9.3,
      trailerLink: 'https://www.youtube.com/embed/6hB3S9bIaco'
    },
    {
      id: 3,
      title: 'The Dark Knight',
      description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg',
      rating: 9.0,
      trailerLink: 'https://www.youtube.com/embed/EXeTwQWrcwY'
    }
  ];

  const [movies, setMovies] = useState(initialMovies);

  const addNewMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={
            <Homepage 
              movies={movies} 
              addNewMovie={addNewMovie} 
            />
          } />
          
          <Route path="/movie/:id" element={
            <Moviedet movies={movies} />
          } />
        </Routes>
      </div>
    </Router>
  );
};

export default App;