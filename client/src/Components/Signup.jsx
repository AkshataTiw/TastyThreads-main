import React, { useState } from 'react';
import './Signup.css';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'; // For making API calls

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '', // Add phone here
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState(null); // To handle errors
  const [success, setSuccess] = useState(null); // To show success messages
  const navigate = useNavigate(); // For navigation after signup

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload

    try {
      // Send a POST request to your backend
    const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/TastyThreads/SignUp`, formData);


      setSuccess(response.data.msg); // Display success message
      setError(null); // Clear any previous errors
      setTimeout(() => {
        navigate('/login'); // Redirect to login page after success
      }, 2000); // Delay for 2 seconds
    } catch (err) {
      // Handle errors
      setError(err.response?.data?.msg || 'Something went wrong.');
      setSuccess(null); // Clear any previous success messages
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <h2>Create an Account</h2>
        <p>Sign up with your email and password or continue with Google.</p>

        {/* Error or Success Messages */}
        {error && <p className="error-text">{error}</p>}
        {success && <p className="success-text">{success}</p>}

        {/* Email and Password Form */}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Full Name"
            className="form-input"
            value={formData.username}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="form-input"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            className="form-input"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="form-input"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            className="form-input"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          <button type="submit" className="btn-submit">Sign Up</button>
        </form>

        <div className="divider">or</div>

        {/* Social Media Login Button */}
        <div className="social-login">
          <button className="btn-social google">
            <i className="fab fa-google"></i> Continue with Google
          </button>
        </div>

        <p className="footer-text">
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
