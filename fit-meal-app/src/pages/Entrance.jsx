import { useNavigate } from 'react-router-dom';
import '../components/styles/Entrance.css';

const Entrance = () => {
  const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate('/login');
  };

  return (
    <>
      {/* Navbar Section */}
      <nav className="Entrancenavbar">
        <div className="navbar-content">
          <h1>FitMeal Partner</h1>
        </div>
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

export default Entrance;
