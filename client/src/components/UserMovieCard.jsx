import React from "react";

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
    <div>
      <div>
        <h2>{movie.name}</h2>
        <p>{movie.year}</p>
        <p>{movie.genre}</p>
        <p>{movie.director}</p>
      </div>
      <div>
        <button onClick={handleDelete} type="submit">
          Delete
        </button>
      </div>
    </div>
  );
}

export default UserMovieCard;