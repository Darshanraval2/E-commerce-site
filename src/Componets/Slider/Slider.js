import React from "react";
import Slider from "react-slick";
import "./Slider.css"
import sale1 from "../Assest/sale1.jpg";
import sale2 from "../Assest/sale2.jpg";
import sale3 from "../Assest/sale3.jpg";
import sale4 from "../Assest/sale4.png";

function AdaptiveHeight() {
  const settings = {
    className: "",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="slide-item">
          <img src={sale1} alt="Sale 1" />
        </div>
        <div className="slide-item">
          <img src={sale2} alt="Sale 2" />
        </div>
        <div className="slide-item">
          <img src={sale3} alt="Sale 3" />
        </div>
        <div className="slide-item">
          <img src={sale4} alt="Sale 4" />
        </div>
        <div className="slide-item">
          <img src="https://st1.techlusive.in/wp-content/uploads/2023/03/flipkart-electronics-sale.jpg?impolicy=Medium_Widthonly&w=400&h=246" alt="Sale 5" />
        </div>
        <div className="slide-item">
          <img src="https://cdn.grabon.in/gograbon/images/web-images/uploads/1621488513434/today-electronics-offers.jpg" alt="Sale 6" />
        </div>
      </Slider>
    </div>
  );
}

export default AdaptiveHeight;
