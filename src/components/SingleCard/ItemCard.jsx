import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode } from "swiper/modules";
import { Link } from "react-router-dom";
import axios from "axios";

function ItemCard() {
  const [jsonData, setJsonData] = useState(null);
  const [slidesPerView, setSlidesPerView] = useState(4);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "https://root.utssavjewels.com/app/consumer/services_v1/product_categories_banner",
          {
            city_id: 69,
            token: 3,
            next_id: 0,
          }
        );

        setJsonData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();

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

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  if (!jsonData) {
    // You can render a loading state here if needed
    return null;
  }
  return (
    <div className="category-container">
      {jsonData.productCategories.map((product, productIndex) => (
        <div className="cat_section" key={productIndex}>
          {product.Products && product.Products.length > 0 && (
            <>
              <div className="cat_sectionTitle">
                <h3>{product.name}</h3>
              </div>
              <div
                className="product_Card_Section homeSliderProduct d-none d-md-block"
                id="deskViewCardSection"
              >
                <Swiper
                  modules={[Navigation, FreeMode]}
                  spaceBetween={30}
                  slidesPerView={slidesPerView}
                  freeMode={true}
                  navigation
                  className="productCard_Wrap"
                >
                  {product.Products.map((product, productIndex) => (
                    <SwiperSlide
                      className="item Deskcard_slideProduct"
                      key={productIndex}
                    >
                      <div className="deskCardBox">
                        <div className="card_mainWrap">
                          <div className="card_outerBox">
                            <div className="likeBtnWrap">
                              {/* <span className="pricingTagSpan black">New Arrival</span> */}
                            </div>
                            <div className="proImg_mobileCardImg main_image_div">
                              <Link
                                to={`/productDetails/${product.category_name}/${product.proName}`}
                                className="main_image"
                              >
                                <img
                                  className="image_file"
                                  src={product.option_value_image}
                                  alt={product.product_name}
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
                              <h4>{product.product_name}</h4>
                              <h6>{product.collection_name}</h6>
                            </div>
                            <div className="productPriceWrap">
                              <h4>
                                ₹ {product.price}{" "}
                                <span>
                                  <del>₹ {product.discounted_price}</del>
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
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default ItemCard;
