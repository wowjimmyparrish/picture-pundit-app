import { createContext, useState } from "react";

const MovieContext = createContext();

function MovieProvider({ children }) {
  const [movies, setMovies] = useState([]);

  const value = { movies, setMovies };

  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
}

export { MovieContext, MovieProvider };