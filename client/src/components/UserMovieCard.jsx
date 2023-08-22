import React from "react";
import Button from 'react-bootstrap/Button'

function UserMovieCard({ movie, deleteMovie }) {
  const requestOptions = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ movie }),
  };

  function handleDelete() {
    fetch(`/movies/${movie.id}`, requestOptions).then((response) => {
      if (response.ok) {
        deleteMovie(movie);
      }
    });
  }

  return (
    <div className="card mt-3 w-25 mt-5">
      <div className="card-body">
        <h2 className="card-title">{movie.name}</h2>
        <p className="card-text">Year: {movie.year}</p>
        <p className="card-text">Genre: {movie.genre}</p>
        <p className="card-text">Director: {movie.director}</p>
        <Button onClick={handleDelete} variant="outline-dark">Delete</Button>{' '}
      </div>
    </div>
  );
}

export default UserMovieCard;
