import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Vid1 from "../../assets/images/vid1.mp4";
import imageslide2 from "../../assets/images/2.jpg";
import imageslide3 from "../../assets/images/3.jpg";
// import ReactPlayer from "react-player";
import './adminComp.css'

const VideoCarousel = () => {
  const videoProperties = [
    {
      id: 1,
      title: "Video 1",
      src: Vid1,
      credit: "video by istock",
    },
  ];
  return (
    <div>
      <div className="carousel-container">
        <Carousel>
          {videoProperties.map((videoObj) => (
            <Carousel.Item key={videoObj.id}>
              <ReactPlayer
                className="slide-content"
                url={videoObj.src}
                playing={true} // Autoplay
                loop={true} // Loop the video
                muted={true} // Mute the video (optional)
                width="100%"
                height="100%"
              />
            </Carousel.Item>
          ))}
          <Carousel.Item>
            <img className="slide-content" src={imageslide2} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="slide-content" src={imageslide3} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="container">
        <div className="section-heading text-center sub">
          <h5>Love what you can do.</h5>
          <h3 className="OurFeatures">2024 Impreza</h3>
          <p>
            Equipped with standard Symmetrical AWD
          </p>
        </div>
      </div>
      <div className="YourRide">
        <p >Choose Your Ride</p>
      </div>
    </div>
  );
};

export default VideoCarousel;
