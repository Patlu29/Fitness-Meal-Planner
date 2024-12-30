import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../assets/styles/Home.css';

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate('/login');
  };

  return (
    <>
      {/* Navbar Section */}
      <nav className="navbar">
        <div className="navbar-content">
          <h1>FitMeal Partner</h1>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="menu-button"
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>
        <ul className={`dropdown-menu ${menuOpen ? 'show' : ''}`}>
          <li>
            <Link to="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/meal-planner" onClick={() => setMenuOpen(false)}>
              Meal Planner
            </Link>
          </li>
          <li>
            <Link to="/profile" onClick={() => setMenuOpen(false)}>
              Profile
            </Link>
          </li>
          <li>
            <Link to="/login" onClick={() => setMenuOpen(false)}>
              Login
            </Link>
          </li>
        </ul>
      </nav>

      {/* Home Section */}
      <div className="home-container">
        <h1>Welcome to FitMeal Partner</h1>
        <p>Track your meals and fitness goals with ease.</p>
        <button onClick={navigateToLogin} className="cta-button">
          Explore Now
        </button>
      </div>
    </>
  );
};

export default Home;
