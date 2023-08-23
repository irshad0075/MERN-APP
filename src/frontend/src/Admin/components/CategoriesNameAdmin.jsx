import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// CustomPrevArrow component
const CustomPrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <span className="arrow left-arrow" />
    </div>
  );
};

// CustomNextArrow component
const CustomNextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <span className="arrow right-arrow" />
    </div>
  );
};

export default function CategoriesNameAdmin() {
  const { CategoryName } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/get-all-categories?CategoryName=${CategoryName}`)
      .then((response) => {
        setProducts(response.data.categories || []);
      })
      .catch((error) => console.log(error));
  }, [CategoryName]);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
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
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div className="container">
      <div className="text-center">
        <h2 className="productsHead">Categories</h2>
        <p className="text-secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum delectus
          magnam doloribus voluptatibus possimus corrupti aliquid itaque harum
          debitis ipsa!
        </p>
      </div>
      <div className="my-6 text-center" style={{ color: "#000157" }}>
        <h1>{CategoryName}</h1>
      </div>

      <Slider {...sliderSettings} className="product-slider">
        {products.map((val, key) => (
          <div className="product-card-container" key={key}>
            <Link
              className="text-decoration-none text-white"
              to={`/login`}
            >
              <Card
                className="category-card text-white custom-card "
                style={{
                  background: "linear-gradient(-90deg, #2c8304, #000)",
                  color: "white",
                }}
              >
                <Card.Body
                  className="d-flex flex-column align-items-center justify-content-between h-100"
                >
                  <div className="text-center">
                    <Card.Title>{val.CategoryName}</Card.Title>
                  </div>
                </Card.Body>
              </Card>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
}
