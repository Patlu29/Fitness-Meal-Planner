import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./components/Home/Home";
import Entrance from "./pages/Entrance";
import ProfilePage from "./pages/ProfilePage"; // Import the ProfilePage component
import UserProfile from "./pages/UserProfile"; // Import the UserProfile component
import AboutUs from "./pages/AboutUs";
import Blogs from "./pages/Blogs";
import Category from "./pages/Category";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Entrance />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<ProfilePage />} /> 
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/category" element={<Category />} />
      </Routes>
    </Router>
  );
};

export default App;
