import React from 'react';

const Home = () => {
    return (
        <div className="home-container">
            <h1>Welcome to FitMeal Partner</h1>
            <p>Track your meals and fitness goals with ease.</p>
            <button onClick={() => alert('Explore the Meal Planner!')} className="cta-button">Explore Now</button>
        </div>
    );
};

export default Home;