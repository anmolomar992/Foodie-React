import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          Discover the Art of Food at Our Restaurant
        </h1>
        <p className="primary-text">
          Our restaurant is more than just a place to eat; it's a culinary experience. We pride ourselves on offering a diverse menu of high-quality dishes that cater to all tastes.
        </p>
        <p className="primary-text">
          From our expertly crafted appetizers to our mouth-watering main courses and delectable desserts, every dish is prepared with passion and precision to ensure a memorable dining experience for our guests.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
