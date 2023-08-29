import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

// CustomPrevArrow component
const CustomPrevArrow = (props) => (
  <div className={props.className} onClick={props.onClick}>
    <span className="arrow left-arrow" />
  </div>
);

// CustomNextArrow component

const CustomNextArrow = (props) => (
  <div className={props.className} onClick={props.onClick}>
    <span className="arrow right-arrow" />
  </div>
);

export default function CategoryPage() {
  const { CategoryName } = useParams();
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    axios
      .get(
<<<<<<< HEAD
        `/api/get-all-categories?CategoryName=${CategoryName}`
=======
        `http://localhost:3000/api/get-all-categories?CategoryName=${CategoryName}`
>>>>>>> origin/master
      )
      .then((json) => {
        setCategoryData(json.data.category); // Rename the state variable
      })
      .catch((error) => {
        console.error("API Error:", error);
      });
  }, [CategoryName]);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div className="container">
      <div className="my-6 text-center" style={{ color: "#000157" }}>
        <h1>{CategoryName}</h1>
      </div>
      <Slider {...sliderSettings} className="product-slider">
        {categoryData.map((val, key) => (
          <div className="product-card-container" key={key}>
            <Card
              className="product-card text-white custom-card"
              style={{ backgroundColor: "white" }}
            >
              <Card.Img variant="top" src={val.CategoryImage} />
              <Card.Body
                className="d-flex flex-column align-items-center justify-content-between h-100"
                style={{ color: "black" }}
              >
                <div className="text-center">
                  <Card.Title>{val.CategoryName}</Card.Title>
                  <Card.Text>{val.description}</Card.Text>
                </div>
                <div>
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
      </Slider>
    </div>
  );
}
