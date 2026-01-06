import React, { useContext } from "react";
import Carousel from "react-bootstrap/Carousel";
import { BannerContext } from "../Adminpanel/Banner/BannerContext";
import "../banner/Slider.css";

function Slider() {
  const { banners } = useContext(BannerContext);
  const enabledBanners = banners.filter((b) => b.enabled);

  return (
    <Carousel
      className="car slider-carousel px-1"
      controls={true}
      indicators={true}
      fade={true}
    >
      {enabledBanners.map((banner) => (
        <Carousel.Item
          key={banner.id}
          interval={2000}
          className="carousel-div w-100"
        >
          <img
            className="d-block w-100 slider-img carousel-1"
            src={banner.image}
            alt={banner.name}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Slider;