// src/components/MovieDetails.js
import React from 'react';

const MovieDetails = ({ movie, onClose }) => {
  if (!movie) return null;

  return (
    <div className="movie-details-overlay">
      <div className="movie-details">
        <button className="btn btn-secondary" onClick={onClose}>Close</button>
        <h2>{movie.Title}</h2>
        <p><strong>Year:</strong> {movie.Year}</p>
        <p><strong>Genre:</strong> {movie.Genre}</p>
        <p><strong>Director:</strong> {movie.Director}</p>
        <p><strong>Actors:</strong> {movie.Actors}</p>
        <p><strong>Plot:</strong> {movie.Plot}</p>
        <img src={movie.Poster} alt={movie.Title} />
      </div>
    </div>
  );
};

export default MovieDetails;
