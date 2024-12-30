import React from 'react';

const MealCard = ({ meal, calories, onDelete }) => {
    return (
        <div className="meal-card">
            <h3>{meal}</h3>
            <p>{calories} calories</p>
            <button onClick={onDelete} className="delete-button">Delete</button>
        </div>
    );
};

export default MealCard;