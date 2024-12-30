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
        <h1>FitMeal Partner</h1>
        <button onClick={() => setMenuOpen(!menuOpen)} className="menu-button">☰</button>
        {menuOpen && (
          <ul className="dropdown-menu"> 
            <li><Link to="/">Home</Link></li>
            <li><Link to="/meal-planner">Meal Planner</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        )}
      </nav>

      {/* Home Section */}
      <div className="home-container">
        <h1>Welcome to FitMeal Partner</h1>
        <p>Track your meals and fitness goals with ease.</p>
        <button onClick={navigateToLogin} className="cta-button">Explore Now</button>
      </div>
    </>
  );
};

export default Home;