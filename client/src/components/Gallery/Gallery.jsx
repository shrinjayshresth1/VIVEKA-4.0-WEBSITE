import React, { useEffect, useState } from "react";
import "./gallery.css";

import image1 from "../../assets/Images/1.jpg";
import image2 from "../../assets/Images/2.jpg";
import image3 from "../../assets/Images/3.jpg";
import image4 from "../../assets/Images/4.jpg";
import image5 from "../../assets/Images/5.jpg";
import image6 from "../../assets/Images/6.jpg";
import image7 from "../../assets/Images/7.jpg";


const Gallery = () => {
  const images = [image1, image2, image3, image4, image5,image6,image7];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleIndicatorClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="gallery-section">
      <h2 className="gallery-label">Gallery</h2>
      <div className="slider-container">
        <div className="slider" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {images.map((image, index) => (
            <img key={index} className="slide" src={image} alt={`Slide ${index + 1}`} />
          ))}
        </div>
      </div>

      <div className="controls">
        <button className="control-prev" onClick={handlePrev}>{"<"}</button>
        <button className="control-next" onClick={handleNext}>{">"}</button>
      </div>

      <div className="indicators">
        {images.map((_, index) => (
          <span
            key={index}
            className={`indicator ${currentIndex === index ? "active" : ""}`}
            onClick={() => handleIndicatorClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
