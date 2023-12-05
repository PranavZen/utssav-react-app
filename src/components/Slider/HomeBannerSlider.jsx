import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function HomeBannerSlider() {
  var settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    speed: 500,
    adaptiveHeight: false,
    infinite: true,
    useTransform: true,
    cssEase: "cubic-bezier(0.77, 0, 0.18, 1)",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
    <Slider {...settings} className="homeBannerSlider">
      <div className="item">
        <div className="bgImg">
          <img
            src="https://root.utssavjewels.com/admin/template/assets/images/banner/D2D_banner_46280"
            alt=""
          />
        </div>
      </div>
      <div className="item">
        <div className="bgImg">
          <img
            src="https://root.utssavjewels.com/admin/template/assets/images/banner/D2D_banner_81740"
            alt=""
          />
        </div>
      </div>
    </Slider>
    <Slider {...settings} className="homeMobIle_BannerSlider">
      <div className="item">
        <div className="bgImg">
          <img
            src="https://root.utssavjewels.com/admin/template/assets/images/banner/D2D_banner_39340"
            alt=""
          />
        </div>
      </div>
      <div className="item">
        <div className="bgImg">
          <img
            src="https://root.utssavjewels.com/admin/template/assets/images/banner/D2D_banner_52500"
            alt=""
          />
        </div>
      </div>
    </Slider>
    </>
  );
}

export default HomeBannerSlider;
