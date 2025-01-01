import React from "react";
import "../styles/Content.css";
import fireImage from '../images/fire.png'; // Import the image

const Chart = ({ todayTarget, dailyGoal }) => {
  // Safeguard: Ensure dailyGoal is not zero to avoid division by zero
  const progress = dailyGoal > 0 ? Math.min((todayTarget / dailyGoal) * 100, 100) : 0;

  // Convert progress to the rotation degree for the gauge needle
  const rotation = (progress / 100) * 180 - 90; // Map progress to -90° to 90° for the needle

  return (
    <div className="second">
      <h3 className="fireCalorie">
        <img src={fireImage} alt="fire" className="fireimg" /> Calories
      </h3>
      <div className="gauge-container">
        <svg viewBox="0 0 100 50" className="gauge">
          {/* Background Arc (white section) */}
          <path
            d="M10 50 A40 40 0 0 1 90 50"
            fill="none"
            stroke="#ffffff" // White for the remaining area
            strokeWidth="10"
          />
          {/* Progress Arc (dark calorie section) */}
          <path
            d="M10 50 A40 40 0 0 1 90 50"
            fill="none"
            stroke="#4caf50" // Dark green for calorie progress
            strokeWidth="10"
            strokeDasharray={`${progress * 1.25} ${125 - progress * 1.25}`} // Adjust dasharray for progress
            strokeDashoffset="0"
          />
          {/* Needle */}
          <line
            x1="50"
            y1="50"
            x2="50"
            y2="20"
            stroke="#000"
            strokeWidth="1.5"
            transform={`rotate(${rotation}, 50, 50)`}
          />
          {/* Needle Center */}
          <circle cx="50" cy="50" r="2" fill="#000" />
          {/* Measured Value */}
          <text
            x="50"
            y="45"
            textAnchor="middle"
            fontSize="8"
            fill="#000"
          >
            {`${progress.toFixed(1)}%`}
          </text>
        </svg>
        <p className="gauge-text">Today</p>
      </div>
    </div>
  );
};

export default Chart;
