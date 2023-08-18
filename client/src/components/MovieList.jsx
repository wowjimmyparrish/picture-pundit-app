import React from "react";
import MovieCard from "./MovieCard";

function MovieList({ addReview, filteredMovies }) {
  console.log(filteredMovies);
  const movieArray = filteredMovies.map((movie) => {
    return <MovieCard key={movie.id} movie={movie} addReview={addReview} />;
  });

  if (movieArray.length === 0) {
    return (
      <div>
        <h2>Movie not found</h2>
      </div>
    );
  }

  return (
    <div>
      
        <ul>
          <div>{movieArray}</div>
        </ul>
      
    </div>
  );
}

export default MovieList;