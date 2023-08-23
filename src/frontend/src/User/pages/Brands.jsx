import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/Productslider.css";
import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
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
  };

  return (
    <Helmet title="Brands">
      <CommonSection title="Brands" />
      <div className="container my-5">
        <Slider {...sliderSettings}>
          {brands.map((val, key) => (
            <div key={key} className="slick-slide">
              {/* <Link className="text-decoration-none" to={`/products`}> */}
              <Link className="text-decoration-none" to={`/products`}>
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
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </Helmet>
  );
}
