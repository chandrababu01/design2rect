import React from "react";
import Slider from "react-slick";
import client1 from "./assets/our-clients/ourclient-1.png";
import client2 from "./assets/our-clients/logo.png";
import client3 from "./assets/our-clients/ourclient-3.png";
import client4 from "./assets/our-clients/ourclient-4.png";
import client5 from "./assets/our-clients/oruclient-2.png";





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
            {/* <div className="title"></div> */}
            <div className="sub-cotent">
              Design2Client helped us transform our product interface into a
              clean, user-friendly experience that improved engagement and
              conversions.
            </div>
            <div className="py-2 mb-2 d-block text-center">UI/UX / product design</div>
            <div className="our-client-logo">
               <img src={client1} alt="logo" className="logo-img" />
            </div>
          </div>
        </div>
        <div>
          <div className="our-slider-content">
            {/* <div className="title">Banking / Finance</div> */}
            <div className="sub-cotent">
              The team delivered a professional design system aligned with our
              brand guidelines while meeting strict enterprise requirements.
            </div>
            <div className="py-2 mb-2 d-block text-center">Corporate / finance clients</div>
            <div className="our-client-logo">
                 <img src={client2} alt="logo" className="logo-img" />
            </div>
          </div>
        </div>
        <div>
          <div className="our-slider-content">
            {/* <div className="title">Company-Name</div> */}
            <div className="sub-cotent">
              Their design approach and attention to detail helped us build
              credibility and trust with our clients.
            </div>
            <div  className="py-2 mb-2 d-block text-center">Consulting, service companies </div>
            <div className="our-client-logo">
              <img src={client3} alt="logo" className="logo-img" />
            </div>
          </div>
        </div>
        <div>
          <div className="our-slider-content">
            {/* <div className="title">Company-Name</div> */}
            <div className="sub-cotent">
              Their design approach aligned perfectly with our brand standards
              while maintaining enterprise-level clarity.
            </div>
            <div  className="py-2 mb-2 d-block text-center">Enterprise Design </div>
            <div className="our-client-logo">
               <img src={client4} alt="logo" className="logo-img" />
            </div>
          </div>
        </div>
        <div>
          <div className="our-slider-content">
            {/* <div className="title">Company-Name</div> */}
            <div className="sub-cotent">
              A creative team that understands business goals and delivers
              designs that build trust and credibility.
            </div>
            <div  className="py-2 mb-2 d-block text-center">Brand Identity </div>
            <div className="our-client-logo">
               <img src={client5} alt="logo" className="logo-img" />
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}
