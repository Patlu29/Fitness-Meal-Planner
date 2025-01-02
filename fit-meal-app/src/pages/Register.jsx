import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../components/styles/Register.css';
import Illustration1 from '../components/images/ip(1).jpg';
import Illustration2 from '../components/images/ip(2).jpg';
import Logo from '../components/images/logobowl.jpg';

const RegistrationPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !email || !password || !confirmPassword) {
      setError("All fields are required.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    try {
      await axios.post('http://localhost:5000/users', { username, email, password });
      setSuccess("Registration successful!");
      setError('');
      setTimeout(() => {
        navigate('/login'); // Redirect to Login page after 2 seconds
      }, 2000);
    } catch (err) {
      setError(err.response?.data?.error || 'An error occurred.');
      setSuccess('');
    }
  };

  return (
    <>
      {/* Navbar Section */}
      <nav className="RegisterNavbar">
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
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button type="submit">Sign Up</button>
          </form>
          {error && <p className="error">{error}</p>}
          {success && <p className="success">{success}</p>}
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
