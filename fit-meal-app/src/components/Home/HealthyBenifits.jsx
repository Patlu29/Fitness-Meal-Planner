import React from "react";
import "../styles/HealthyBenifits.css";
import dates from "../Home/HaelthyBenifitsImages/dates.jpg"; 
import drynuts from "../Home/HaelthyBenifitsImages/drynuts.jpg";
import egg from '../Home/HaelthyBenifitsImages/Egg White and Veggie Scramble.jpg';
import fruits from '../Home/HaelthyBenifitsImages/fruits.jpg';
import greekyogurt from "../Home/HaelthyBenifitsImages/Greek Yogurt Parfait.jpg";
import grilledchicken from "../Home/HaelthyBenifitsImages/Grilled Chicken Salad.jpg";
import lentilsoup from "../Home/HaelthyBenifitsImages/Lentil Soup with Spinach.jpg";
import oats from "../Home/HaelthyBenifitsImages/Overnight Oats.jpg";
import smoothie from "../Home/HaelthyBenifitsImages/Protein Smoothie.jpg";
import salad from "../Home/HaelthyBenifitsImages/salad.jpg";
import tofu from "../Home/HaelthyBenifitsImages/Spicy Tofu and Veggie Bowl.jpg";
import stuffedpeper from "../Home/HaelthyBenifitsImages/Stuffed Bell Peppers.jpg";
import tunasalad from "../Home/HaelthyBenifitsImages/Tuna Salad with Chickpeas.jpg";
import vegetable from "../Home/HaelthyBenifitsImages/vegetables.jpg";
import water from "../Home/HaelthyBenifitsImages/water.jpg";


const HealthyBenifits = () => {
  const images = [
    { src: dates, title: "High in natural sugars for quick energy, packed with potassium, and great for muscle recovery." },
    { src: drynuts, title: "Rich in healthy fats, protein, and antioxidants; excellent for sustained energy and reducing inflammation." },
    { src: egg, title: " High in protein, low in calories, and loaded with essential vitamins and minerals from vegetables." },
    { src: fruits, title: "Natural source of vitamins, minerals, and fiber; great for hydration and a quick energy boost." },
    { src: greekyogurt, title: "High in protein, contains probiotics for gut health, and packed with antioxidants from the fruits." },
    { src: grilledchicken, title: "Lean protein for muscle repair, low in calories, and full of vitamins and fiber from greens." },
    { src: lentilsoup, title: "Rich in plant-based protein, high in fiber, and a good source of iron and folate." },
    { src: oats, title: "Packed with slow-digesting carbs for energy, high in fiber, and rich in healthy fats (from chia or nuts)." },
    { src: smoothie, title: "Quick source of protein and nutrients, perfect for post-workout recovery and muscle building." },
    { src: salad, title: "Low-calorie meal, high in fiber, vitamins, and hydration, depending on the ingredients." },
    { src: tofu, title: "High in plant-based protein, low in fat, and nutrient-rich with a variety of vegetables." },
    { src: stuffedpeper, title: "Balanced meal with protein, healthy carbs, and vitamins from bell peppers and filling ingredients." },
    { src: tunasalad, title: "High in lean protein, omega-3 fatty acids, and fiber for digestion and heart health." },
    { src: vegetable, title: "Essential for vitamins, minerals, antioxidants, and fiber, promoting overall health and fitness." },
    { src: water, title: "Essential for hydration, boosts metabolism, aids in muscle function, and flushes out toxins." },
  ];

  return (
    <div className="healthy-benifits">
      <h3>Healthy Benefits :</h3>
      <div className="marqueeimg">
        <div className="marquee-track">
          {images.map((image, index) => (
            <div key={index} className="marquee-item">
              <img src={image.src} alt={image.title} />
              <p>{image.title}</p>
            </div>
          ))}
          {/* Duplicate for seamless looping */}
          {images.map((image, index) => (
            <div key={index + images.length} className="marquee-item">
              <img src={image.src} alt={image.title} />
              <p>{image.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HealthyBenifits;
