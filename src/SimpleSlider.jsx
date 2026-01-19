import React from "react";
import Slider from "react-slick";

export function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    swipeToSlide: true,
    centerPadding: "60px",
    arrows: false,
    prevArrow: false,
    className: "center",
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container my-4">
      <Slider {...settings}>
        <div>
          <div className="our-slider-content">
            <div className="title">Company-Name</div>
            <div className="sub-cotent">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </div>
            <div className="our-client-logo">
              <img
                src="../src/assets/our-clients/ourclient-1.png"
                alt="logo"
                className="logo-img"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="our-slider-content">
            <div className="title">Company-Name</div>
            <div className="sub-cotent">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </div>
            <div className="our-client-logo">
              <img
                src="../src/assets/our-clients/oruclient-2.png"
                alt="logo"
                className="logo-img"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="our-slider-content">
            <div className="title">Company-Name</div>
            <div className="sub-cotent">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </div>
            <div className="our-client-logo">
              <img
                src="../src/assets/our-clients/ourclient-3.png"
                alt="logo"
                className="logo-img"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="our-slider-content">
            <div className="title">Company-Name</div>
            <div className="sub-cotent">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </div>
            <div className="our-client-logo">
              <img
                src="../src/assets/our-clients/ourclient-4.png"
                alt="logo"
                className="logo-img"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="our-slider-content">
            <div className="title">Company-Name</div>
            <div className="sub-cotent">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </div>
            <div className="our-client-logo">
              <img
                src="../src/assets/our-clients/ourclient-5.jpg"
                alt="logo"
                className="logo-img"
              />
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}
