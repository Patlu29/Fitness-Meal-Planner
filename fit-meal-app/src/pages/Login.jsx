import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import '../components/styles/Login.css';
import Illustration from '../components/images/icon.jpg';
import Logo from '../components/images/logobowl.jpg';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!email || !password) {
      setError('Please fill in both email and password.');
      return;
    }
  
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
  
    try {
      const loginResponse = await axios.post(
        'http://localhost:5000/users/login',
        { email, password },
        { headers: { 'Content-Type': 'application/json' } }
      );

      const token = loginResponse.data;
      localStorage.setItem('token', JSON.stringify(token));

      // Check if the profile exists by trying to fetch it
      try {
        const profileResponse = await axios.get(`http://localhost:5000/profile/${email}`);
        
        // If profile exists, navigate to Home
        if (profileResponse.status === 200) {
          navigate('/home');
        }
      } catch (err) {
        if (err.response && err.response.status === 404) {
          // If profile doesn't exist (404), navigate to ProfilePage to create a new profile
          navigate('/profile');
        } else {
          // Handle other errors from the profile API
          setError('An error occurred while fetching profile information.');
        }
      }

    } catch (err) {
      setError(err.response?.data?.error || 'An error occurred during login.');
    }
  };

  return (
    <>
      {/* Navbar Section */}
      <nav className="LoginNavbar">
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
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
