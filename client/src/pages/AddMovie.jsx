import React, { useState} from "react";
import { useHistory } from "react-router-dom";


function AddMovie({  addMovie }) {
  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [year, setYear] = useState("");
  const [director, setDirector] = useState("");
  const [imageFile, setImageFile] = useState(null);
 
  const history = useHistory();

  function handleFormSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("genre", genre);
    formData.append("year", year);
    formData.append("director", director);
    formData.append("image_file", imageFile);
    

    fetch("/movies", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((newMovie) => {
        if (newMovie.status === "error") {
          console.log("There is an error")   
        }
        else {
          addMovie(newMovie)
        }
      });
      history.push("/");
   
  }

  return (
    <div className="w-25 position-absolute top-50 start-50 translate-middle">
    <form >
      <input
        className="input form-control"
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="input form-control"
        type="text"
        placeholder="Genre"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
      />
      <input
        className="input form-control"
        type="text"
        placeholder="Year"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />
      <input
        className="input form-control"
        type="text"
        placeholder="Director"
        value={director}
        onChange={(e) => setDirector(e.target.value)}
      />
      <div className="mb-2 pt-2">
      <input
        className="form-control"
        type="file"
        accept="image/*"
        onChange={(e) => setImageFile(e.target.files[0])}
      />
      </div>
      <button
        className="ms-2 "
        type="submit"
        disabled={!name || !genre || !year || !director || !imageFile}
        onClick={handleFormSubmit}
      >
        Add Movie
      </button>
    </form>
  </div>
);
}

export default AddMovie;