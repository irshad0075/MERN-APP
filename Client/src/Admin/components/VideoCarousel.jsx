import React from "react";
import Carousel from "react-bootstrap/Carousel";
// import Vid1 from "../../assets/images/vid1.mp4";
import imageslide2 from "../../assets/images/2.jpg";
import imageslide3 from "../../assets/images/3.jpg";
// import ReactPlayer from "react-player";
import "./adminComp.css";

const VideoCarousel = () => {

  return (
    <div>
      <div className="carousel-container">
        <Carousel>
          <Carousel.Item>
            <img
              className="slide-content"
              src={imageslide2}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="slide-content"
              src={imageslide3}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="slide-content"
              src={
                "https://www.polestar.com/dato-assets/11286/1607939597-polestar-190919-005557display4.jpg?q=60&dpr=1&w=910"
              }
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="container">
        <div className="section-heading text-center sub">
          <h5>Love what you can do.</h5>
          <h3 className="OurFeatures">2024 Impreza</h3>
          <p>Equipped with standard Symmetrical AWD</p>
        </div>
      </div>
      <div className="YourRide">
        <p>Choose Your Ride</p>
      </div>
    </div>
  );
};

export default VideoCarousel;
