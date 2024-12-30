import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Navbar.css'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
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
    );
};

export default Navbar;