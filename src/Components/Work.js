import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Delicious Dishes",
      text: "Explore a variety of mouthwatering dishes made from fresh, locally sourced ingredients. Our chefs craft each dish with passion and creativity.",
    },
    {
      image: ChooseMeals,
      title: "Flexible Ordering",
      text: "Choose how often you'd like to indulge in our culinary delights. Whether it's a one-time treat or a regular dining experience, we've got you covered.",
    },
    {
      image: DeliveryMeals,
      title: "Efficient Deliveries",
      text: "Enjoy fast and reliable deliveries right to your doorstep. We ensure that your food arrives fresh and ready to be savored.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Experience</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
          Discover how easy it is to enjoy our culinary delights. From selecting your meals to getting them delivered, we've simplified the process for you.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
