import React from "react";
import MovieList from "../components/MovieList";

function Home({ addReview, filteredMovies }) {
  return (
    <div className="home-page">
      <div className="text-white pt-5">
        <MovieList addReview={addReview} filteredMovies={filteredMovies} />
      </div>
    </div>
  );
}

export default Home;