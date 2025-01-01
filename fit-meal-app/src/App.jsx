import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../src/pages/Login';
import Register from '../src/pages/Register';
import Entrance from '../src/pages/Entrance';
import MealPlanner from '../src/pages/MealPlanner';
import Profile from '../src/pages/Profile';
//import Home from '../src/components/Home/Home'; // Import Home component

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Entrance />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/meal-planner" element={<MealPlanner />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </Router>
    );
};

export default App;
