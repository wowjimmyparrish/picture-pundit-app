import React from "react";
import Search from "./Search";

function MovieFilter({ setSearch }) {
  return (
    <>
      <Search setSearch={setSearch} />
    </>
  );
}
export default MovieFilter;