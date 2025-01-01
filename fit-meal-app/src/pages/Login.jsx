import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../components/styles/Login.css';
import Illustration from '../components/images/icon.jpg';
import Logo from '../components/images/logobowl.jpg';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic form validation
    if (!email || !password) {
      setError('Please fill in both email and password.');
      return;
    }

    // Validate email format
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      localStorage.setItem('token', response.data.token);

      // Redirect to Home page after successful login
      navigate('/home');
    } catch (err) {
      setError(err.response?.data?.message || 'An error occurred. Please try again.');
    }
  };

  const handleChange = (e, setter) => {
    setter(e.target.value);
    setError(''); // Clear the error when the user starts typing
  };

  return (
    <>
      {/* Navbar Section */}
      <nav className="navbar">
        <div className="navbar-content">
          <h1>I think I know who you are... Let's get you logged in!</h1>
        </div>
      </nav>

      {/* Login Page Section */}
      <div className="login-container">
        <div className="illustration">
          <img src={Illustration} alt="Running Illustration" />
        </div>
        <div className="login-form">
          <div className="header-with-logo">
            <img src={Logo} alt="FitMeal Logo" className="logo" />
            <h1 id="header">FitMeal Partner</h1>
          </div>
          <h2 className="login-heading">Login</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => handleChange(e, setEmail)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => handleChange(e, setPassword)}
            />
            <button type="submit">Login</button>
          </form>
          {error && <p className="error">{error}</p>}
          <p>
            Don’t have an account? <Link to="/register">Register</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
