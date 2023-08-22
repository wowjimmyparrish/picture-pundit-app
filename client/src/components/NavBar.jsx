import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../context/User";
import MovieFilter from "./MovieFilter";
import Button from 'react-bootstrap/Button'
function NavBar({ setSearch }) {
  const { user, setUser } = useContext(UserContext);

  function handleLogout() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
    <div className="nav-bar">
      <h2 className="ps-2 pt-2 text-white">Welcome, {user.username}!</h2>
      <div className="d-flex justify-content-end">
        <NavLink className="pe-5 fs-4 link-offset-3-hover text-white" to="/">
          Home
        </NavLink>
        <NavLink
          className="pe-5 fs-4 link-offset-3-hover text-white"
          to="/mymovies"
        >
          My Movies
        </NavLink>
        <NavLink
          className="pe-5 fs-4 link-offset-3-hover text-white"
          to="/addmovie"
        >
          Add Movie
        </NavLink>
        <div className="d-flex justify-content-end h-25 d-inline-block">
          <div className="pe-2 ps-2 ">
            <MovieFilter setSearch={setSearch} />
          </div>
          <Button className="me-2" variant="outline-light" onClick={handleLogout}>Logout</Button>{' '}
        </div>
      </div>
    </div>
  );
}

export default NavBar;