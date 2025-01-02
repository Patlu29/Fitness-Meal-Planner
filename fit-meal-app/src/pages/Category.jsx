import React from 'react';
import '../components/styles/Category.css';
import carbs from '../components/CategoryImages/carbs.jpg';
import fats from '../components/CategoryImages/HealthyFat.jpg';
import protin from '../components/CategoryImages/Protin.jpg';
import vegetables from '../components/CategoryImages/veg.jpg';

const Category = () => {
  return (
    <div className="category-container">
      <h1 className="category-title">Food Categories</h1>
      <p className="category-description">
        Explore a variety of food categories tailored to your health and fitness goals.
      </p>
      <div className="category-grid">
        <div className="category-card">
          <img src= {protin} alt="Protein Foods" className="category-image" />
          <h3 className="category-name">High-Protein Foods</h3>
          <p className="category-info">
            Boost muscle repair and growth with lean protein sources like chicken, fish, and tofu.
          </p>
        </div>
        <div className="category-card">
          <img src= {vegetables} alt="Vegetables" className="category-image" />
          <h3 className="category-name">Vegetables</h3>
          <p className="category-info">
            Packed with essential vitamins, minerals, and fiber for optimal health.
          </p>
        </div>
        <div className="category-card">
          <img src= {fats} alt="Healthy Fats" className="category-image" />
          <h3 className="category-name">Healthy Fats</h3>
          <p className="category-info">
            Support brain and heart health with nuts, seeds, and avocados.
          </p>
        </div>
        <div className="category-card">
          <img src= {carbs} alt="Complex Carbs" className="category-image" />
          <h3 className="category-name">Complex Carbohydrates</h3>
          <p className="category-info">
            Energize your workouts with whole grains, quinoa, and sweet potatoes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Category;
