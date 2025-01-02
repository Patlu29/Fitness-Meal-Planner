import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Home.css";
import FitMealLogo from "../images/slideLogo.jpg";
import ProfileLogo from "../images/proileLogo.jpg";
import signoutimg from '../images/signout.png';
import HomeContainer from "./HomeContainer"; 
import AddExtraMeal from "./AddExtraMeal"; 
import CalorieValues from "./CalorieValues";
import HealthyBenifits from "./HealthyBenifits";
import Footer from "./Footer";
import axios from 'axios';

const Home = () => {
  const location = useLocation();
  const [showAddMeal, setShowAddMeal] = useState(false);
  const [profile, setProfile] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('token'));
    const email = token?.user?.email;

    const fetchProfile = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/profile/${email}`);
        setProfile(response.data);
      } catch (err) {
        console.error("Error fetching profile data.", err);
      }
    };

    fetchProfile();
  }, []);

  return (
    <>
      {/* Navbar */}
      <div className="navbar">
        <div className="navbar-left">
          <h1>Your Diet Planner</h1>
        </div>
        <div className="navbar-right">
          <img
            src={ProfileLogo}
            alt="Profile"
            className="profile-logo"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          />
          {isHovered && profile && (
            <div className="profile-details-popup">
              <p><strong>Name:</strong> {profile.name}</p>
              <p><strong>Email:</strong> {profile.email}</p>
              <p><strong>Age:</strong> {profile.age}</p>
              <p><strong>Height:</strong> {profile.height} cm</p>
              <p><strong>Weight:</strong> {profile.weight} kg</p>
              <p><strong>Target:</strong> {profile.target}</p>
            </div>
          )}
        </div>
      </div>

      {/* Sidebar */}
      <div className="sidebar">
        <div className="sidebar-header">
          <img
            src={FitMealLogo}
            alt="FitMeal Partner Logo"
            className="sidebar-logo"
          />
        </div>
        <ul>
          <li>
            <Link to="/home" className={location.pathname === "/" ? "active" : ""}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/About-us" className={location.pathname === "/about-us" ? "active" : ""}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="/category" className={location.pathname === "/category" ? "active" : ""}>
              Category
            </Link>
          </li>
          <li>
            <Link to="/Blogs" className={location.pathname === "/blogs" ? "active" : ""}>
              Blogs
            </Link>
          </li>
          <li>
            <Link to="/user-profile" className={location.pathname === "/user-profile" ? "active" : ""}>
              Your Profile
            </Link>
          </li>
          <li className="sign-out">
            <Link to="/Login" className={location.pathname === "/profile" ? "active" : ""}>
              <img src={signoutimg} alt="signout" className="signoutimg"/>Sign Out
            </Link>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <HomeContainer />
      </div>

      {/* Add Extra Meal Modal */}
      {showAddMeal && (
        <AddExtraMeal onClose={() => setShowAddMeal(false)} />
      )}
      <CalorieValues />
      <HealthyBenifits />
      <Footer />
    </>
  );
};

export default Home;
