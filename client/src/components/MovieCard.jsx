import React from "react";
import Review from "./Review";
import AddReview from "./AddReview";

function MovieCard({ movie, addReview }) {
  return (
    <div>
      <div>
        <div className="d-flex justify-content-start">
          <h1>{movie.name}</h1>
        </div>
        <div className="d-flex flex-row">
          <h4 className="pe-5">Genre: {movie.genre}</h4>
          <h4 className="pe-5">Year: {movie.year}</h4>
          <h4>Director: {movie.director}</h4>
        </div>
        <div className=" text-center">
          <img src={movie.image_file} alt=""></img>
        </div>
      </div>
      <div className="pt-5">
        <Review reviews={movie.reviews} />
      </div>
      <div className="pt-2">
        <AddReview addReview={addReview} movie={movie} />
      </div>
    </div>
  );
}

export default MovieCard;