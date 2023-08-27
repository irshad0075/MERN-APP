import React from "react";
import Slider from "react-slick";
import "../../styles/hero-slider.css";

const HeroSlider = () => {
  const settings = {
    fade: true,
    speed: 2000,
    autoplaySpeed: 3000,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };

  return (
    <div className="hero__slider">
      <Slider {...settings}>
        <div className="slider__item slider__item-01"></div>
        <div className="slider__item slider__item-02"></div>
        <div className="slider__item slider__item-03"></div>
        <div className="slider__item slider__item-04"></div>
      </Slider>
    </div>
  );
};

export default HeroSlider;
