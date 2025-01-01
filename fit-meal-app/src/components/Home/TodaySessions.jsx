import React, { useState, useEffect } from "react";
import Apple from "../images/apple.jpg";
import Bread from "../images/bread.jpg";
import Milk from "../images/milk.jpg";
import Nuts from "../images/nuts.jpg";
import Yogurt from "../images/yogurt.jpg";
import Salad from "../images/salad.jpg";
import Soup from "../images/soup.jpg";
import Chart from "./Chart"; // Import Chart component
import "../styles/Content.css";

// Function to format the date to YYYY-MM-DD
const formatDate = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is 0-indexed, so add 1
  const day = String(date.getDate()).padStart(2, '0'); // Ensure two digits for the day
  return `${year}-${month}-${day}`;
};

const TodaySession = () => {
  const [selectedDate, setSelectedDate] = useState(formatDate(new Date())); // Set today's date
  const [selectedMeal, setSelectedMeal] = useState("Breakfast"); // Default to Breakfast
  const [dailyMeals, setDailyMeals] = useState({}); // Store randomly selected meals for the day
  const dailyCalorieTarget = 1500; // Set a good daily calorie target

  const mealPool = {
    Breakfast: [
      { img: Milk, description: "1 Glass Milk", calories: 100 },
      { img: Bread, description: "2 Slices of Bread", calories: 160 },
      { img: Apple, description: "1 Apple", calories: 95 },
      { img: Yogurt, description: "1 Cup of Yogurt", calories: 100 },
    ],
    Lunch: [
      { img: Salad, description: "1 Bowl of Salad", calories: 150 },
      { img: Soup, description: "1 Bowl of Soup", calories: 120 },
      { img: Bread, description: "1 Slice of Bread", calories: 80 },
      { img: Apple, description: "1 Apple", calories: 95 },
    ],
    Dinner: [
      { img: Salad, description: "1 Bowl of Salad", calories: 150 },
      { img: Bread, description: "1 Slice of Bread", calories: 80 },
      { img: Milk, description: "1 Glass Milk", calories: 100 },
      { img: Yogurt, description: "1 Cup of Yogurt", calories: 100 },
    ],
    Snacks: [
      { img: Nuts, description: "1 Handful of Nuts", calories: 150 },
      { img: Apple, description: "1 Small Apple", calories: 70 },
      { img: Yogurt, description: "1 Cup of Yogurt", calories: 100 },
    ],
  };

  const getRandomMeals = () => {
    const meals = {};
    Object.keys(mealPool).forEach((mealType) => {
      // Randomly select 2-3 items for each meal
      const randomSelection = mealPool[mealType]
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);
      meals[mealType] = randomSelection;
    });
    return meals;
  };

  useEffect(() => {
    setDailyMeals(getRandomMeals());
  }, []);

  // Calculate total calories for the day
  const totalCaloriesForDay = Object.values(dailyMeals)
    .flat()
    .reduce((sum, item) => sum + item.calories, 0);

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
    setDailyMeals(getRandomMeals()); // Generate new meals when the date changes
  };

  const handleMealChange = (meal) => {
    setSelectedMeal(meal);
  };

  return (
    <>
      <div className="first">
        <div className="recommand">
          <h5>Diet Chart Recommended</h5>
        </div>
        <div className="food">
          {dailyMeals[selectedMeal]?.map((item, index) => (
            <div key={index}>
              <img src={item.img} alt={item.description} />
              <p>{item.description}</p>
            </div>
          ))}
        </div>
        <div className="target">
          <h6>Today target: {totalCaloriesForDay} calories</h6>
          <h6>Your Customize: {dailyCalorieTarget} calories</h6>
        </div>

        <div className="session">
          <label htmlFor="date-picker">
            <span role="img" aria-label="calendar">
              Pick date: <br />
            </span>
            <input
              type="date"
              id="date-picker"
              className="date-picker"
              value={selectedDate}
              onChange={handleDateChange}
              min={selectedDate} // Set today as the minimum date
            />
          </label>
          <br />
          <button onClick={() => handleMealChange("Breakfast")} className="sessionbutton">Breakfast</button>
          <br />
          <button onClick={() => handleMealChange("Lunch")} className="sessionbutton">Lunch</button>
          <br />
          <button onClick={() => handleMealChange("Dinner")} className="sessionbutton">Dinner</button>
          <br />
          <button onClick={() => handleMealChange("Snacks")} className="sessionbutton">Snacks</button>
        </div>
      </div>
      {/* Add Chart Component */}
      <Chart todayTarget={totalCaloriesForDay} dailyGoal={dailyCalorieTarget} />
    </>
  );
};

export default TodaySession;
