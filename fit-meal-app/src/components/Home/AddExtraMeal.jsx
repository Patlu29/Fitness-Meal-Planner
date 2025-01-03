import React, { useState } from "react";
import "../styles/AddExtraMeal.css";
import logo from "../images/bowllogodark.jpg";

const AddExtraMeal = ({ onClose, onAddMeal }) => {
  const [mealName, setMealName] = useState("");
  const [mealWeight, setMealWeight] = useState("");
  const [mealCalories, setMealCalories] = useState("");
  const [mealType, setMealType] = useState("");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [error, setError] = useState(""); // State to hold error message

  const handleSave = () => {
    // Check if all fields are filled
    if (!mealName || !mealWeight || !mealCalories || !mealType || !date) {
      setError("All fields are required!"); // Set error message
      return; // Prevent form submission if validation fails
    }

    const newMeal = {
      mealName,
      mealWeight,
      mealCalories,
      mealType,
      date,
    };
    onAddMeal(newMeal); // Pass meal data to the parent component
    setMealName("");
    setMealWeight("");
    setMealCalories("");
    setMealType("");
    setError(""); // Clear error message after successful save
    onClose(); // Close the modal after saving
  };

  return (
    <div className="overlay">
      <div className="modal">
        <div className="input-group">
          <h3 className="ExtraMealTitle">
            <img src={logo} alt="bowllogo" className="logoimg" />
            Add Your Extra Meal
          </h3>
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="mealName">Meal Name</label>
          <input
            type="text"
            id="mealName"
            placeholder="Enter meal name"
            value={mealName}
            onChange={(e) => setMealName(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="mealWeight">Weight (grams/ml)</label>
          <input
            type="text"
            id="mealWeight"
            placeholder="Enter weight or volume"
            value={mealWeight}
            onChange={(e) => setMealWeight(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="mealCalories">Calories</label>
          <input
            type="text"
            id="mealCalories"
            placeholder="Enter calories"
            value={mealCalories}
            onChange={(e) => setMealCalories(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="mealType">Meal Type</label>
          <input
            type="text"
            id="mealType"
            placeholder="Enter meal type"
            value={mealType}
            onChange={(e) => setMealType(e.target.value)}
          />
        </div>

        {/* Display error message if any field is empty */}
        {error && <div className="error-message">{error}</div>}

        <div className="button-group">
          <button className="cancel-button" onClick={onClose}>
            Cancel
          </button>
          <button className="save-button" onClick={handleSave}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddExtraMeal;
