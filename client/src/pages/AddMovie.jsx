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
    console.log("name", name);
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
        console.log("new movie", newMovie);
        
      });
      history.push("/");
   
  }

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <h2>Name</h2>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <h2>Genre</h2>
        <input
          type="text"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
        <h2>Year</h2>
        <input
          type="text"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
        <h2>Director</h2>
        <input
          type="text"
          value={director}
          onChange={(e) => setDirector(e.target.value)}
        />
        <h2>Image</h2>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImageFile(e.target.files[0])}
        />
        <button type="submit">Add Movie</button>
      </form>
    </>
  );
}

export default AddMovie;