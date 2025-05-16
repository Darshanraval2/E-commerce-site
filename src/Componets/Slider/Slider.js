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
    slidesToShow: 2,
    slidesToScroll: 2,
    adaptiveHeight: true
    

  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <h3> <img src={sale1} alt="" /> </h3>
        </div>
        <div>
          <h3><img src={sale2} alt="" /></h3>
        </div>
        <div>
          <h3><img src={sale3} alt="" /></h3>
        </div>
        <div>
          <h3><img src={sale4} alt="" /></h3>
        </div>
        <div>
          <h3><img src="https://st1.techlusive.in/wp-content/uploads/2023/03/flipkart-electronics-sale.jpg?impolicy=Medium_Widthonly&w=400&h=246" alt="" /></h3>
        </div>
        <div>
          <h3><img src="https://cdn.grabon.in/gograbon/images/web-images/uploads/1621488513434/today-electronics-offers.jpg" alt="" srcset="" /></h3>
        </div>
      </Slider>
    </div>
  );
}

export default AdaptiveHeight;
