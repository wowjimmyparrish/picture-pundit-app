import { useState, useEffect, useContext } from "react";
import { Route, Switch } from "react-router-dom";
import { UserContext } from "./context/User";
import { MovieContext } from "./context/Movie";
import AddMovie from "./pages/AddMovie";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NavBar from "./components/NavBar";
import MyMovies from "./pages/MyMovies";
function App() {
  const { user, setUser } = useContext(UserContext);
  const { movies, setMovies } = useContext(MovieContext);
  const [userMovies, setUserMovies] = useState([]);
  const [search, setSearch] = useState("");

  // fetching user data
  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => {
          setUser(user);
          setUserMovies(user.created_movies);
        });
      }
    });
  }, [setUser]);

  // fetching all movies
  useEffect(() => {
    fetch("/movies")
      .then((r) => r.json())
      .then((data) => setMovies(data));
  }, [setMovies]);

  function deleteMovie(deletedMovie) {
    const updatedMovies = movies.filter(
      (movie) => movie.id !== deletedMovie.id
    );
    setMovies(updatedMovies);

    const updatedUserMovies = userMovies.filter(
      (movie) => movie.id !== deletedMovie.id
    );
    setUserMovies(updatedUserMovies);
  }

  function addMovie(newMovie){
    setMovies([...movies, newMovie]);
    setUserMovies([...userMovies, newMovie]);
  }

  const filteredMovies = movies.filter((movie) =>
  movie.name.toLowerCase().includes(search.toLowerCase())
  );


  function addReview(newReview) {
    setMovies((prevMovies) => {
      return prevMovies.map((movie) => {
        if (movie.id === newReview.movie_id) {
          return { ...movie, reviews: [...movie.reviews, newReview] };
        }
        return movie;
      });
    });
  }

  if (!user) return <Login setUserMovies={setUserMovies} />;

  return (
    <div>
      <NavBar setSearch={setSearch} />
      <main>
        <Switch>
          <Route exact path="/">
            <Home addReview={addReview} filteredMovies={filteredMovies} />
          </Route>
          <Route path="/addmovie">
            <AddMovie  addMovie={addMovie} />
          </Route>
          <Route path="/mymovies">
            <MyMovies userMovies={userMovies} deleteMovie={deleteMovie} />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;


