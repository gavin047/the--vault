import React from 'react';

const MovieList = ({ movies, handleFavouritesClick, favouriteComponent: FavouriteComponent, handleMovieClick }) => {
  return (
    <div className='movie-list'>
      {movies.map((movie, index) => (
        <div key={index} className='movie-item'>
          <img 
            src={movie.Poster} 
            alt={movie.Title} 
            onClick={() => handleMovieClick(movie)}
          />
          <div>
            <h5>{movie.Title}</h5>
            <p>{movie.Year}</p>
            <div>
              <button 
                onClick={() => handleMovieClick(movie)} 
                className='btn btn-info'
              >
                View Details
              </button>
              <FavouriteComponent 
                movie={movie} 
                handleFavouritesClick={handleFavouritesClick}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
