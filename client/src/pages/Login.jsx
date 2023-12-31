import { useState } from "react";
import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";
import Button from 'react-bootstrap/Button'
function Login({ setUserMovies }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="login-page">
      <div className="text-center pt-5 text-white ">
        <h1>PICTURE PUNDIT</h1>
      </div>
      {showLogin ? (
        <div className="pt-5">
          <div className="text-center">
            <LoginForm setUserMovies={setUserMovies} />
          </div>
          <div className="text-center mt-4 text-white">
            <p>
              Don't have an account?
              </p>
              <div className="pt-2">
                <Button variant="outline-light" onClick={() => setShowLogin(false)}>Sign Up</Button>{' '}
              </div>
            
          </div>
        </div>
      ) : (
        <div className="text-center pt-5">
          <SignupForm />
          <div className="mt-4 text-white">
            <p>
              Already have an account?
              <div className="pt-2">
              <Button variant="outline-light" onClick={() => setShowLogin(true)}>Log In</Button>{' '}
              </div>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;