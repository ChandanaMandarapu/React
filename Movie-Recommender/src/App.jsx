import { useState, useEffect } from 'react';
import MovieList from './MovieList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [recommendation, setRecommendation] = useState(null);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=YOUR_TMDB_API_KEY&language=en-US&page=1');
      const data = await response.json();
  
      if (data.results && data.results.length > 0) {
        setMovies(data.results);
        generateRecommendation(data.results);
      } else {
        console.error('No movies found in the API response.');
      }
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };
  

  const generateRecommendation = (moviesList) => {
    if (moviesList && moviesList.length > 0) {
      const randomIndex = Math.floor(Math.random() * moviesList.length);
      setRecommendation(moviesList[randomIndex]);
    }
  };
  

  const handleSearch = async (criteria) => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=YOUR_TMDB_API_KEY&language=en-US&query=${criteria}&page=1&include_adult=false`);
      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      console.error('Error searching movies:', error);
    }
  };

  return (
    <div className="App">
      <h1>Movie Recommendation App</h1>
      <MovieList movies={movies} />
      {recommendation && (
        <div className="recommendation">
          <h2>Recommended Movie</h2>
          <p>{recommendation.title}</p>
        </div>
      )}
      <input
        type="text"
        placeholder="Search movies..."
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
}

export default App;
