import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import '../assets/styles/Home.css';

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navigateToLogin = () => {
    navigate('/login');
  };

  const closeMenu = () => {
    setMenuOpen(false);
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
      </nav>

      {/* Sliding Sidebar Menu */}
      <div className={`sidebar ${menuOpen ? 'open' : ''}`}>
        <button onClick={closeMenu} className="close-btn" aria-label="Close menu">
          &times;
        </button>
        <ul>
          {/* Only render "Home" link if not on the home page */}
          {location.pathname !== '/' && (
            <li>
              <Link to="/" onClick={closeMenu}>
                Home
              </Link>
            </li>
          )}
          <li>
            <Link to="/meal-planner" onClick={closeMenu}>
              Meal Planner
            </Link>
          </li>
          <li>
            <Link to="/profile" onClick={closeMenu}>
              Profile
            </Link>
          </li>
          <li>
            <Link to="/login" onClick={closeMenu}>
              Login
            </Link>
          </li>
        </ul>
      </div>

      {/* Overlay to close the menu when clicking outside */}
      {menuOpen && <div className="overlay" onClick={closeMenu}></div>}
    </>
  );
};

export default Home;
