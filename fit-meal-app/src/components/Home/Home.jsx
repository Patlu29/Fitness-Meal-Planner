import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Home.css";
import FitMealLogo from "../images/slideLogo.jpg"; // Adjust the path to your image file
import ProfileLogo from "../images/proileLogo.jpg";
import signoutimg from '../images/signout.png' // Replace with the path to your profile logo
import HomeContainer from "./HomeContainer"; // Import the App component
import AddExtraMeal from "./AddExtraMeal"; // Import the AddExtraMeal component
import CalorieValues from "./CalorieValues";

const Home = () => {
  const location = useLocation();
  const [showAddMeal, setShowAddMeal] = useState(false); // State to show/hide the AddExtraMeal modal

  return (
    <>
      {/* Navbar */}
      <div className="navbar">
        <div className="navbar-left">
          <h1>Your Diet Planner</h1>
        </div>
        <div className="navbar-right">
          <img src={ProfileLogo} alt="Profile" className="profile-logo" />
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
            <Link to="/" className={location.pathname === "/" ? "active" : ""}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about-us"
              className={location.pathname === "/about-us" ? "active" : ""}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/category"
              className={location.pathname === "/category" ? "active" : ""}
            >
              Category
            </Link>
          </li>
          <li>
            <Link
              to="/blogs"
              className={location.pathname === "/blogs" ? "active" : ""}
            >
              Blogs
            </Link>
          </li>
          <li>
            <Link
              to="/user-profile"
              className={location.pathname === "/user-profile" ? "active" : ""}
            >
              View Profile
            </Link>
          </li>
          <li className="sign-out">
            <Link
              to="/Login"
              className={location.pathname === "/profile" ? "active" : ""} 
            >
              <img src={signoutimg} alt="signout"  className="signoutimg"/>Sign Out
            </Link>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <HomeContainer /> {/* Embedding the App component here */}
      </div>

      {/* Add Extra Meal Modal */}
      {showAddMeal && (
        <AddExtraMeal
          onClose={() => setShowAddMeal(false)} // Pass a callback to close the modal
        />
      )}
      <CalorieValues />
    </>
  );
};

export default Home;
