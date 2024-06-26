import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="Food Banner" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Delicious Food Delivered Hot & Fresh
          </h1>
          <p className="primary-text">
            Our chefs do all the prep work, like peeling, chopping & marinating,
            so you can enjoy fresh and healthy meals at home.
          </p>
          <button className="secondary-button">
            Order Now <FiArrowRight />
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="Delicious Food" />
        </div>
      </div>
    </div>
  );
};

export default Home;
