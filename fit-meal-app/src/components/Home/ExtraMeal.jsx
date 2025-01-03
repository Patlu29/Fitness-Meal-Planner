import React, { useState } from "react";
import AddExtraMeal from "./AddExtraMeal";
import "../styles/Content.css";

const ExtraMeal = () => {
  const [meals, setMeals] = useState([]);
  const [isAddMealOpen, setIsAddMealOpen] = useState(false);

  const handleAddMeal = (meal) => {
    setMeals((prevMeals) => [...prevMeals, meal]);
  };

  return (
    <div className="app-container">
      <button onClick={() => setIsAddMealOpen(true)} className="addbutton">
        ✎Add Extra Meal
      </button>
      {isAddMealOpen && (
        <AddExtraMeal
          onClose={() => setIsAddMealOpen(false)}
          onAddMeal={handleAddMeal}
        />
      )}

      <div className="extra-meals-container">
        <h3>Today Extra Meal</h3>
        <h4>{new Date().toLocaleDateString("en-GB")}</h4>
        <div className="meals-grid">
          {meals.length === 0 ? (
            <p>No extra meals added yet.</p>
          ) : (
            meals.map((meal, index) => (
              <div key={index} className="meal-card">
                <h4>{meal.mealType}: </h4>
                <p>{meal.mealName}</p>
                <p>{meal.mealWeight} grams/ml</p>
                <p>{meal.mealCalories} calories</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ExtraMeal;
