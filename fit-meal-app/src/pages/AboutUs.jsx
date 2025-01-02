import React from "react";
import "../components/styles/AboutUs.css";

const AboutUs = () => {
  return (
    <section className="about-us-section">
      <h1 className="about-us-heading">About Us</h1>
      <p className="about-us-paragraph">
        At <b>FitMeal Partner</b>, we believe in creating a healthier lifestyle by combining
        personalized fitness and nutrition planning. Our platform is designed to guide you through meal
        planning that aligns with your fitness goals, whether you're looking to lose weight, gain muscle,
        or maintain a balanced diet.
      </p>
      <p className="about-us-paragraph">
        We provide easy-to-use tools to track your calories, customize meal plans, and understand the
        nutritional value of your meals. With a mission to make healthy eating accessible to everyone,
        FitMeal Partner is your trusted companion on the journey to wellness.
      </p>
      <p className="about-us-paragraph">
        Join us to turn your fitness goals into reality, one meal at a time.
      </p>
    </section>
  );
};

export default AboutUs;