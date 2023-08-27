import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

const CustomPrevArrow = (props) => (
  <div className={props.className} onClick={props.onClick}>
    <span className="arrow left-arrow" />
  </div>
);

const CustomNextArrow = (props) => (
  <div className={props.className} onClick={props.onClick}>
    <span className="arrow right-arrow" />
  </div>
);

export default function BrandsGuest() {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/get-all-brand")
      .then((response) => {
        setBrands(response.data.category || []);
      })
      .catch((error) => console.log(error));
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container my-5">
      <Slider {...sliderSettings}>
        {brands.map((val, key) => (
          <div key={key} className="slick-slide">
            <Card className="darazi-card h-100">
              <Card.Img
                src={val.BrandImage}
                className="card-img-top"
                style={{ height: "200px" }}
              />
              <div className="daraz-card-content">
                <h5 className="daraz-card-title">
                  {val.BrandName.toUpperCase()}
                </h5>
              </div>
            </Card>
          </div>
        ))}
      </Slider>
    </div>
  );
}
