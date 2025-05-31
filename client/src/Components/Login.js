// src/Login.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook for navigation
import "./login.css"; // Import CSS file
import axios from "axios"; // Import axios for HTTP requests

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState(""); // To handle error messages

  // Create a navigate instance
  const navigate = useNavigate();

  // Handle form submission
  const handleLogin = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!email || !password) {
      setError("Email and Password are required.");
      return;
    }

    try {
      // Send login request to the server
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/TastyThreads/login`,
        {
          email,
          password,
        }
      );

      // On success, store token and navigate to home page
      console.log("Response:", response.data); // Debug log for successful responses
      localStorage.setItem("token", response.data.token); // Store token for authentication
      localStorage.setItem("userId", response.data.userId); // Store user ID

      // Navigate to the home page after successful login
      navigate("/");
    } catch (error) {
      console.error("Login error:", error.response?.data || error.message); // Debug log for errors
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="loginpage">
      <div className="border">
        <h2 className="text-primary text-center headerlog">Login Form</h2>

        {/* Display error message if login fails */}
        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleLogin}>
          {" "}
          {/* Use form submission for better UX */}
          <div>
            <input
              type="email"
              className="formcontrol"
              placeholder="Email*"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <input
              type="password"
              className="formcontrol"
              placeholder="Password*"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="remember-section">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <label className="remember">Remember Me</label>
          </div>
          <div className="forgot">
            Lost Your Password?{" "}
            <button
              className="forgot-link"
              onClick={() => {
                /* Implement your password reset functionality */
              }}
            >
              Click Here!
            </button>
          </div>
          <div>
            <button type="submit" className="button1">
              Login
            </button>
          </div>
        </form>

        <div>
          <button
            className="button1"
            onClick={() => {
              navigate("/signup"); // Navigate to the signup page when clicked
            }}
          >
            Signup
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
