import React from "react";
import UserMovieCard from "../components/UserMovieCard";
function MyMovies({ userMovies, deleteMovie }) {
  const userMovieArray = userMovies.map((movie) => {
    return (
      <UserMovieCard key={movie.id} movie={movie} deleteMovie={deleteMovie} />
    );
  });
  return (
    <div>
      
        <ul>{userMovieArray}</ul>
      
    </div>
  );
}

export default MyMovies;