import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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

export default function BrandsAdmin() {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    axios
<<<<<<< HEAD
      .get(`/api/get-all-brand`)
=======
      .get("http://localhost:3000/api/get-all-brand")
>>>>>>> origin/master
      .then(response => {
        setBrands(response.data.brands || []);
      })
      .catch(error => console.log(error));
  }, []);

  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Number of cards shown in a slide
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
    <div className="container my-5">
      {/* <div className="text-center">
        <h2 className="productsHead">Brands</h2>
        
      </div> */}
      <Slider {...sliderSettings}>
        {brands.map((val, key) => (
          <div className="col-lg-3 col-md-4 col-sm-6 my-3" key={key}>
            <div className="darazi-card">
              <Link className="text-decoration-none" to={`/login`}>
                <Card>
                  <Card.Img src={val.BrandImage} className="card-img-top" />
                  <div className="daraz-card-content">
                    <h5 className="daraz-card-title">
                      {val.BrandName.toUpperCase()}
                    </h5>
                  </div>
                </Card>
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}