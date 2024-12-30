import React, { useState } from 'react';
import MealCard from '../components/MealCard';

const MealPlanner = () => {
    const [meals, setMeals] = useState([]);
    const [mealName, setMealName] = useState('');
    const [calories, setCalories] = useState('');

    const addMeal = () => {
        if (mealName.trim() === '' || calories.trim() === '') {
            alert('Please enter both meal name and calories.');
            return;
        }
        setMeals([...meals, { mealName, calories }]);
        setMealName('');
        setCalories('');
    };

    const deleteMeal = (index) => {
        const updatedMeals = meals.filter((_, i) => i !== index);
        setMeals(updatedMeals);
    };

    return (
        <div className="meal-planner-container">
            <h1>Meal Planner</h1>
            <div className="input-group">
                <input type="text" placeholder="Meal Name" value={mealName} onChange={(e) => setMealName(e.target.value)} />
                <input type="number" placeholder="Calories" value={calories} onChange={(e) => setCalories(e.target.value)} />
                <button onClick={addMeal} className="add-button">Add Meal</button>
            </div>
            <div className="meal-list">
                {meals.map((meal, index) => (
                    <MealCard 
                        key={index} 
                        meal={meal.mealName} 
                        calories={meal.calories} 
                        onDelete={() => deleteMeal(index)} 
                    />
                ))}
            </div>
        </div>
    );
};

export default MealPlanner;