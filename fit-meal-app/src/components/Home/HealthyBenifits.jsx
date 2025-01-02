import React from "react";
import "../styles/HealthyBenifits.css";
import dates from "../HaelthyBenifitsImages/dates.jpg"; // Correctly import the image

const HealthyBenifits = () => {
  const images = [
    { src: dates, title: "Fresh Salad with Vibrant Vegetables" },
    { src: dates, title: "Healthy Dried Fruits and Nuts Mix" },
    { src: dates, title: "Vibrant Leafy Salad with Bell Peppers" },
    { src: dates, title: "Refreshing Splashing Water 4 Liter Per Day" },
    { src: dates, title: "Colorful Salad with Fresh Vegetables" },
    { src: dates, title: "Fresh Salad with Vibrant Vegetables" },
    { src: dates, title: "Healthy Dried Fruits and Nuts Mix" },
    { src: dates, title: "Vibrant Leafy Salad with Bell Peppers" },
    { src: dates, title: "Refreshing Splashing Water 4 Liter Per Day" },
    { src: dates, title: "Colorful Salad with Fresh Vegetables" },
    { src: dates, title: "Fresh Salad with Vibrant Vegetables" },
    { src: dates, title: "Healthy Dried Fruits and Nuts Mix" },
    { src: dates, title: "Vibrant Leafy Salad with Bell Peppers" },
    { src: dates, title: "Refreshing Splashing Water 4 Liter Per Day" },
    { src: dates, title: "Colorful Salad with Fresh Vegetables" },
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
