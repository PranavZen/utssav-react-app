import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const SyncSlider = ({imgArr}) => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [slider1Index, setSlider1Index] = useState(0);

  const settings1 = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 2000,
    afterChange: (current) => setSlider1Index(current),
  };

  const settings2 = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 2000,
    beforeChange: (current, next) => {
      if (slider1Index !== current) {
        setSlider1Index(current);
        nav1.slickGoTo(current);
      }
    },
    onClick: (index) => {
      nav1.slickGoTo(index);
    },
  };
  const PrevArrow = (props) => (
    <button
      {...props}
      className={`slick-arrow slick-prev ${
        props.currentSlide === 0 ? "slick-disabled" : ""
      }`}
    >
      <span className="material-symbols-outlined">keyboard_arrow_left</span>
    </button>
  );

  const NextArrow = (props) => (
    <button
      {...props}
      className={`slick-arrow slick-next ${
        props.currentSlide === props.slideCount - props.slidesToShow
          ? "slick-disabled"
          : ""
      }`}
    >
      <span className="material-symbols-outlined">keyboard_arrow_right</span>
    </button>
  );
  return (
    <div
      className="col-lg-5 col-md-10 col-12 left_itemDetailBox px-3"
      id="image_div"
    >
      <Slider {...settings1} asNavFor={nav2} ref={(slider) => setNav1(slider)}>
        <div className=" item three_desc ">
          <div className="desc_bg">
            <span className="pricingTagSpan prodetailsTag black">
              BESTSELLER
            </span>
            <div className="px-0">
              <div className="case_study_img zoom">
                <Link to="" className="mobileIMG_Fancy">
                  <img className="feature-image media" src={imgArr} alt="" />
                  <div className="productView-iconZoom">
                    <svg
                      className="icon icon-zoom-1"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      focusable="false"
                      role="presentation"
                      viewBox="0 0 448 512"
                    >
                      <path d="M416 176V86.63L246.6 256L416 425.4V336c0-8.844 7.156-16 16-16s16 7.156 16 16v128c0 8.844-7.156 16-16 16h-128c-8.844 0-16-7.156-16-16s7.156-16 16-16h89.38L224 278.6L54.63 448H144C152.8 448 160 455.2 160 464S152.8 480 144 480h-128C7.156 480 0 472.8 0 464v-128C0 327.2 7.156 320 16 320S32 327.2 32 336v89.38L201.4 256L32 86.63V176C32 184.8 24.84 192 16 192S0 184.8 0 176v-128C0 39.16 7.156 32 16 32h128C152.8 32 160 39.16 160 48S152.8 64 144 64H54.63L224 233.4L393.4 64H304C295.2 64 288 56.84 288 48S295.2 32 304 32h128C440.8 32 448 39.16 448 48v128C448 184.8 440.8 192 432 192S416 184.8 416 176z"></path>
                    </svg>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Slider>

      <div className="col-md-10 smallImgBox">
        <Slider
          {...settings2}
          asNavFor={nav1}
          ref={(slider) => setNav2(slider)}
          prevArrow={<PrevArrow />}
          nextArrow={<NextArrow />}
        >
          <div onClick={() => nav1.slickGoTo(0)}>
            <div className="small_width_height">
              <div className="small_desc_bg  " id="btn_hover1">
                <div className="btn_hover">
                  <img src={imgArr} alt="" />
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default SyncSlider;
