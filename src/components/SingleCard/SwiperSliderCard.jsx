import React, { useEffect, useState } from "react";
import { Navigation, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import Apis from '../../assets/data.json';
// console.log(Api);
function SwiperSliderCard() {
  const [slidesPerView, setSlidesPerView] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 576) {
        setSlidesPerView(2);
      } else if (window.innerWidth < 992) {
        setSlidesPerView(3);
      } else {
        setSlidesPerView(4);
      }
    };
    handleResize();

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <Swiper
      modules={[Navigation, FreeMode]}
      spaceBetween={30}
      slidesPerView={slidesPerView}
      freeMode={true}
      navigation
      className="productCard_Wrap"
    >
      {Apis.map((item, index) => (
        <SwiperSlide className="item Deskcard_slideProduct" key={index}>
          <div className="deskCardBox">
            <div className="card_mainWrap">
              <div className="card_outerBox">
                <div className="likeBtnWrap">
                  {/* <span className="pricingTagSpan black">New Arrival</span> */}
                </div>
                <div className="proImg_mobileCardImg main_image_div">
                  <Link to="" className="main_image">
                    <img
                      className="image_file"
                      src={
                        item.productCategories &&
                        item.productCategories[index] &&
                        item.productCategories[index].Products &&
                        item.productCategories[index].Products[index] &&
                        item.productCategories[index].Products[index]
                          .option_value_image
                      }
                      alt="kasbnc"
                    />
                  </Link>

                  <div className="imgOverlayColorsWrap">
                    <a
                      href="https://utssavjewels.com/productDetails/Chains/18inch-Chain-mt-708"
                      data-id="691"
                      className="imge_color_circle"
                    >
                      <div className="imgOverlayColorCircle">
                        <img
                          src="https://utssavjewels.com/assets/utssav/images/Body/Product-Details/gold_img.webp"
                          alt="Silver"
                        />
                      </div>
                    </a>
                    <a
                      href="https://utssavjewels.com/productDetails/Chains/18inch-Chain-mt-709"
                      data-id="692"
                      className="imge_color_circle"
                    >
                      <div className="imgOverlayColorCircle">
                        <img
                          src="https://utssavjewels.com/assets/utssav/images/Body/Product-Details/gold_rose_img.webp"
                          alt="Silver"
                        />
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <div className="product_details_wrap">
                <div className="productNameWrap">
                  <h4>{
                        item.productCategories &&
                        item.productCategories[index] &&
                        item.productCategories[index].Products &&
                        item.productCategories[index].Products[index] &&
                        item.productCategories[index].Products[index]
                          .product_name
                      }</h4>
                  <h6>Heart Collection</h6>
                </div>
                <div className="productPriceWrap">
                  <h4>
                    ₹ 14523{" "}
                    <span>
                      <del>₹ 22252</del>
                    </span>
                  </h4>
                </div>
                <div className="addHoverBtn">
                  <div className="add_cartBtnWrap">
                    <Link to="">
                      <div
                        className="addCartBtnBox productImgWrapper"
                        data-id="357"
                      >
                        <span className="cartImgWrap">
                          <img
                            src="https://www.utssavjewels.com/assets/utssav/images/Body/Product-cart/cartsvg.svg"
                            alt="cart icon"
                            width="80%"
                            height="80%"
                          />
                        </span>
                        <h6>Choose</h6>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default SwiperSliderCard;
