import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../assets/styles/Register.css';
import Illustration1 from '../assets/images/ip(1).jpg';
import Illustration2 from '../assets/images/ip(2).jpg';
import Logo from '../assets/images/logobowl.jpg';

const RegistrationPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic form validation
    if (!username || !email || !password || !confirmPassword) {
      setError("All fields are required.");
      return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Validate email format
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    try {
      await axios.post('http://localhost:5000/api/auth/register', { username, email, password });
      // Redirect or show success message after registration
    } catch (err) {
      setError(err.response.data.message);
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
          <h1>New here? Get ready to shape your future!</h1>
        </div>
      </nav>

      {/* Registration Page Section */}
      <div className="registration-container">
        <div className="illustration1">
          <img src={Illustration1} alt="Running Illustration" />
        </div>
        <div className="registration-form">
          <div className="header-with-logo">
            <img src={Logo} alt="FitMeal Logo" className="logo" />
            <h1 id="header">FitMeal Partner</h1>
          </div>
          <h2 className="registration-heading">Create an Account</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => handleChange(e, setUsername)}
            />
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
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => handleChange(e, setConfirmPassword)}
            />
            <button type="submit">Sign Up</button>
          </form>
          {error && <p className="error">{error}</p>}
          <p>
            Already have an account? <Link to="/Login">Login here</Link>
          </p>
        </div>
        <div className="illustration2">
          <img src={Illustration2} alt="Running Illustration" />
        </div>
      </div>
    </>
  );
};

export default RegistrationPage;
