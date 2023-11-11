// import React from 'react';
import './App.css';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <div className="movie-details">
        <h3>{movie.title}</h3>
        <p>{movie.genre_ids.join(', ')}</p>
        <p>{movie.release_date}</p>
      </div>
    </div>
  );
};

export default MovieCard;
