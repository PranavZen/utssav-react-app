import React, { useState } from "react";
import { Link } from "react-router-dom";
function ProductSummery({
  productName,
  productCat,
  productId,
  productSize,
  price: initialPrice,
  discounted_price: initialDiscountedPrice,
  gross_weight: initialGrossWeight,
  net_weight: initialNetWeight,
  collection_name,
  prod_description,
  carat_price: initialCaratPrice,
  discount,
}) {
  const [price, setPrice] = useState(initialPrice);
  const [discountedPrice, setDiscountedPrice] = useState(
    initialDiscountedPrice
  );
  const [grossWeight, setGrossWeight] = useState(initialGrossWeight);
  const [netWeight, setNetWeight] = useState(initialNetWeight);
  const [caratPrice, setCaratPrice] = useState(initialCaratPrice);

  const removeCommasAndParse = (value) => {
    if (value && typeof value === "string") {
      return parseInt(value.replace(/,/g, ""), 10);
    }
    return 0; // or another default value if needed
  };

  const goldValue = removeCommasAndParse(
    (caratPrice * 0.75 * netWeight).toFixed(0)
  );
  console.log("goldValue " + goldValue)
  const parsedB = removeCommasAndParse(discountedPrice);
  const balance = removeCommasAndParse((parsedB - goldValue).toFixed(0));
  const gstValue = ((parsedB / 103) * 100).toFixed(0);

  const gst = removeCommasAndParse((parsedB - gstValue).toFixed(0));
  const stoneValue = removeCommasAndParse((balance * 0.3 - gst).toFixed(0));
  const descountVal = removeCommasAndParse(discount);

  const makingValue = balance - stoneValue - gst;

  const DisVal = makingValue + descountVal;

  const formattedGoldValue = formatNumber(goldValue);
  const formattedBalance = formatNumber(balance);
  const formattedGst = formatNumber(gst);
  const formattedStoneValue = formatNumber(stoneValue);
  const formattedmakingValue = formatNumber(makingValue);
  const formattedDisValue = formatNumber(DisVal);

  function formatNumber(number) {
    const parts = number.toString().split(".");
    const formattedInteger = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return formattedInteger;
  }
  const toCapitalCase = (str) => {
    if (str && typeof str === "string") {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
    return "";
  };

  return (
    <div
      className="col-lg-7 col-md-12 col-12 right_itemDetailBox px-3"
      id={productId}
    >
      <div className="productDetails_dataWrap">
        <div className="item_Details">
          <h3>{productName}</h3>
          <p>{productCat && toCapitalCase(productCat)}</p>
          <h4>{collection_name && toCapitalCase(collection_name)}</h4>
        </div>
        <form
          method="POST"
          name="checkout_form"
          id="checkout_form"
        >
          <div className="item_selectionOptionsWrap">
            <div className="col-md-12 ">
              <div className="selectionBox">
                <div className="col-lg-3 col-md-4 myWidth">
                  <div className="sizeSelect">
                    <label htmlFor="product_size">Ring Size</label>
                    <select
                      name="product_size"
                      id="product_size"
                    >
                      <option value={productSize}>{productSize}</option>
                    </select>
                    <span>
                      <i className="material-icons">keyboard_arrow_down</i>
                    </span>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 myWidth">
                  <div className="carateSelect">
                    <label htmlFor="caratage">Caratage</label>
                    <select
                      name="caratage"
                      id="caratage"
                    >
                      <option value="3 ">18 k</option>
                    </select>
                    <span>
                      <i className="material-icons">keyboard_arrow_down</i>
                    </span>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 myWidth">
                  <div className="colorSelect">
                    <label htmlFor="" className="colorLabel">
                      Gold Colour
                    </label>
                    <div className="outer_ColorPickerWrap">
                      <div className="colorWrap">
                        <input
                          value="1"
                          className="color_checkbox gold_color "
                          id="1"
                          name="metal"
                          type="checkbox"
                          readOnly
                        />
                        <label htmlFor="1">Gold</label>
                      </div>
                      <div className="colorWrap">
                        <input
                          value="2"
                          className="color_checkbox rosegold_color checked_colors"
                          id="2"
                          name="metal"
                          type="checkbox"
                          checked=""
                          readOnly
                        />
                        <label htmlFor="2">Rose Gold</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h4>
                Gross Weight: <span className="metal_weight">1.63</span>
                gms
              </h4>
            </div>
          </div>
        </form>
        <div className="check_availabilityWrap">
          <div className="avail_wrap">
            <div className="col-12 col-lg-6 col-md-6 pad_right noPad">
              <div className="itemPriceDetailsWrap">
                <h4>
                  <span className="discount_price">{discountedPrice}</span>
                  <span className="actual_price">
                    <del>{price}</del>
                  </span>
                </h4>

                <div className="wrapBox">
                  <div className="check_inputWrap">
                    <input
                      type="number"
                      name=""
                      placeholder="6 digit pincode"
                      id="checkInputID"
                      fdprocessedid="18z8nc"
                    />
                    <button className="check_pinCodBtn">
                      Check
                    </button>
                  </div>
                  <div className="checkMessageWrap">
                    <p className="unserviceable">Please enter Pincode</p>
                  </div>
                  <div className="addToCartBtnWrap" id="add_to_cart_btn">
                    <Link className="addtocartBtn btn addtocartBtnCheck">
                      <span>
                        <img
                          src="https://www.utssavjewels.com/assets/utssav/images/Body/Product-cart/cartsvg.svg"
                          alt="cart icon"
                          width="80%"
                          height="80%"
                        />
                      </span>
                      <h6 id="add_btn">Add To Cart</h6>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="product_accrdianWrap">
            <div className="col-md-11 col-12">
              <div
                className="accordion accordion-flush"
                id="product_accordianID"
              >
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-productDesc">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-proDesc"
                      aria-expanded="false"
                      aria-controls="flush-proDesc"
                    >
                      PRODUCT DETAILS
                    </button>
                  </h2>
                  <div
                    id="flush-proDesc"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-productDesc"
                    data-bs-parent="#product_accordianID"
                  >
                    <div className="accordion-body">
                      <div className="left_decpBox">
                        <div className="desctTextWrap">
                          <div className="descParaWrap">
                            <div
                              dangerouslySetInnerHTML={{
                                __html: prod_description,
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="right_descBox">
                        <div className="item_DescriptionsWrapBox">
                          <div className="metal_detailsWrap">
                            <h3>METAL DETAILS</h3>
                          </div>
                          <ul>
                            <li>
                              <div className="descList">
                                <div className="item_s">
                                  <h4>Metal</h4>
                                </div>
                                <div className="undlinDiv col"></div>
                                <div className="item_s ">
                                  <h4 className="qt_amt">Rose Gold</h4>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="descList">
                                <div className="item_s">
                                  <h4>Purity</h4>
                                </div>
                                <div className="undlinDiv col"></div>
                                <div className="item_s">
                                  <h4 className="qt_amt">18 k</h4>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="descList">
                                <div className="item_s">
                                  <h4>Stone</h4>
                                </div>
                                <div className="undlinDiv col"></div>
                                <div className="item_s">
                                  <h4 className="qt_amt">
                                    AAA+ Cubic Zirconia
                                  </h4>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="descList">
                                <div className="item_s">
                                  <h4>Product Weight</h4>
                                </div>
                                <div className="undlinDiv col"></div>
                                <div className="item_s">
                                  <h4 className="qt_amt">
                                    <span className="metal_weight">
                                      {grossWeight}
                                    </span>
                                    gms
                                  </h4>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="descList">
                                <div className="item_s">
                                  <h4>Gold Weight</h4>
                                </div>
                                <div className="undlinDiv col"></div>
                                <div className="item_s">
                                  <h4 className="qt_amt">
                                    <span className="gold_weight">
                                      {netWeight}
                                    </span>
                                    gms
                                  </h4>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="descList">
                                <div className="item_s">
                                  <h4>Stone Weight</h4>
                                </div>
                                <div className="undlinDiv col"></div>
                                <div className="item_s">
                                  <h4 className="qt_amt">
                                    <span className="stone_weight">
                                      {(grossWeight - netWeight).toFixed(2)}
                                    </span>
                                    gms
                                  </h4>
                                </div>
                              </div>
                            </li>
                          </ul>
                          <div className="closeBtnWrap">
                            <p>
                              close{" "}
                              <span>
                                <img
                                  src="./images/Body/Product-Details/up_icon.png"
                                  alt=""
                                />
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-spo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-speceial-offer"
                      aria-expanded="false"
                      aria-controls="flush-speceial-offer"
                      fdprocessedid="ahrpx"
                    >
                      PRICE BREAKUP
                    </button>
                  </h2>
                  <div
                    id="flush-speceial-offer"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-spo"
                    data-bs-parent="#product_accordianID"
                  >
                    <div className="accordion-body">
                      <div className="offerListWrap">
                        <ul className="offerList">
                          <li>
                            <h6>Gold Value</h6>
                            <p className="gold_value">₹{formattedGoldValue}</p>
                          </li>
                          <li>
                            <h6>Stone Value</h6>
                            <p className="stone_value">
                              ₹{formattedStoneValue}
                            </p>
                          </li>
                          <li>
                            <h6>Making Value</h6>
                            <p className="making_value">
                              ₹{formattedmakingValue}&nbsp;&nbsp;&nbsp;
                              <del>₹{formattedDisValue}</del>
                            </p>
                          </li>
                          <li>
                            <h6>GST</h6>
                            <p className="gst">₹{gst}</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-tremsS">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-tersmsS"
                      aria-expanded="true"
                      aria-controls="flush-tersmsS"
                      fdprocessedid="4mohzl"
                    >
                      SHIPPING AND RETURN POLICY
                    </button>
                  </h2>
                  <div
                    id="flush-tersmsS"
                    className="accordion-collapse collapse show"
                    aria-labelledby="flush-tremsS"
                    data-bs-parent="#product_accordianID"
                  >
                    <div className="accordion-body">
                      <div className="termsParaBox">
                        <ul className="termsLists">
                          <li className="termsPara">
                            Free Shipping throughout India{" "}
                          </li>
                          <li className="termsPara">14 day return policy</li>
                          <li className="termsPara">Free Return Shipping</li>
                          <li className="termsPara">
                            100% refund&nbsp;on&nbsp;all&nbsp;returns
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductSummery;
