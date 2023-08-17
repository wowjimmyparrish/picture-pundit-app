import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { UserProvider } from "./context/User";
import { MovieProvider } from "./context/Movie";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MovieProvider>
      <UserProvider>
        <Router>
          <App />
        </Router>
      </UserProvider>
    </MovieProvider>
  </React.StrictMode>
);