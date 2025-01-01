import React from "react";
import Apple from "../images/apple.jpg";
import Bread from "../images/bread.jpg";
import Milk from "../images/milk.jpg";
import Nuts from "../images/nuts.jpg";
import Yogurt from "../images/yogurt.jpg";
import Salad from "../images/salad.jpg";
import Soup from "../images/soup.jpg";
import "../styles/CalorieValues.css"; // Import the CSS file for styling

const foodItems = [
  { img: Milk, description: "1 Glass Milk", calories: 100 },
  { img: Bread, description: "2 Slices of Bread", calories: 160 },
  { img: Apple, description: "1 Apple", calories: 95 },
  { img: Yogurt, description: "1 Cup of Yogurt", calories: 100 },
  { img: Salad, description: "1 Bowl of Salad", calories: 150 },
  { img: Soup, description: "1 Bowl of Soup", calories: 120 },
  { img: Nuts, description: "1 Handful of Nuts", calories: 150 },
];

const CalorieValues = () => {
  return (
    <div className="calorie-values-container">
      {foodItems.map((item, index) => (
        <div key={index} className="food-item">
          <img src={item.img} alt={item.description} className="food-img" />
          <p className="food-description">{item.description} <br />{item.calories} calories</p>
        </div>
      ))}
    </div>
  );
};

export default CalorieValues;
