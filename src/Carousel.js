import React from 'react';
import {Carousel} from "react-bootstrap";
import "./Carousel.css";
import image1 from "./asset/images/image1.jpg";
import image2 from "./asset/images/image2.jpg";
import image3 from "./asset/images/image3.jpg";
import image4 from "./asset/images/image4.jpg";


function carousel() {
  return <div>
      <Carousel controls={false} fade={true} pause={false}>
  <Carousel.Item interval={2000}>
    <img
      className="carousel__image"
      src={image1}
      alt="First slide"
    />

  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img
      className="carousel__image"
      src={image2}
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img
      className="carousel__image"
      src={image3}
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img
      className="carousel__image"
      src={image4}
      alt="Fourth slide"
    />
  </Carousel.Item>
</Carousel>
  </div>;
}

export default carousel;



