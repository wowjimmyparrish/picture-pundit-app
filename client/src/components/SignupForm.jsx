import React, { useState, useContext } from "react";
import { UserContext } from "../context/User";
import Button from "react-bootstrap/esm/Button";
function SignupForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState([]);
  const { setUser } = useContext(UserContext);

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        password_confirmation: passwordConfirmation,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then(setUser);
      } else {
        r.json().then((errorData) => setErrors(errorData.errors));
      }
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h5 className="text-white" htmlFor="username">
        Username:{" "}
      </h5>
      <input
        type="text"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <div className="pt-2 text-white">
        <h5 htmlFor="password">Password:</h5>
      </div>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className="pt-2 text-white">
        <h5 htmlFor="password_confirmation">Confirm Password:</h5>
      </div>
      <input
        type="password"
        id="password_confirmation"
        value={passwordConfirmation}
        onChange={(e) => setPasswordConfirmation(e.target.value)}
      />
      <div className="pt-2">
        <Button type="submit" variant="outline-light">Submit</Button>
      </div>
      {errors.length > 0 && (
        <ul style={{ color: "white" }}>
          {errors.map((error) => (
            <p key={error}>{error}</p>
          ))}
        </ul>
      )}
    </form>
  );
}

export default SignupForm;