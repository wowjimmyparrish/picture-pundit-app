import React, { useState, useContext } from "react";
import { UserContext } from "../context/User";
import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";
function LoginForm({ setUserMovies }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const { setUser } = useContext(UserContext);

  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          setUser(user);
          setUserMovies(user.created_movies);
          history.push("/");
        });
      } else {
        r.json().then((errorData) => setErrors(errorData.error));
      }
    });
  }
  return (
    <form onSubmit={handleSubmit}>
      <h5 className="text-white">Username</h5>
      <input
        type="text"
        id="username"
        autoComplete="off"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <div className="pt-2 text-white">
        <h5>Password</h5>
      </div>
      <input
        type="password"
        id="password"
        autoComplete="current-password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className="pt-2">
        <Button type="submit" variant="outline-light">Login</Button>
      </div>
      <p style={{ color: "white" }}>{errors}</p>
    </form>
  );
}

export default LoginForm;