import { useNavigate } from 'react-router-dom';
import '../assets/styles/Home.css';

const Home = () => {
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

export default Home;
