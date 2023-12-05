import React, { useEffect, useState } from "react";
import { logo, mobileLiginImg } from "..";
import { Link } from "react-router-dom";
import MobileProductSlider from "./MobileProductSlider";
function Navbar() {
  const [scroll, setScroll] = useState(false);
  const [show, setShow] = useState(false);
  const [showSerach, setShowSerach] = useState(false);
  const showSearchBox = () => {
    setShowSerach(true);
  };
  const closeSearchBox = () => {
    setShowSerach(false);
  };
  const showModal = () => {
    setShow(true);
  };
  const closeModal = () => {
    setShow(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        id="header_section"
        className={scroll ? "px-0 pt-0 bgBlur" : "px-0 pt-0 "}
      >
        <div className="container-fluid">
          <div
            className={
              showSerach
                ? "row hideSerchBox showSerchBoxDiv"
                : "row hideSerchBox"
            }
          >
            <div className="col-md-11 mobile_serchBoxWrapHeader">
              <div className="centerBox">
                <form className="form form--label-right">
                  <input
                    type="text"
                    id="qry"
                    name="qry"
                    className="form-control search_text"
                    placeholder="Let us know what you are looking for"
                    fdprocessedid="ehxfaf"
                  />
                  <button
                    className="btn"
                    id="search_btn"
                    fdprocessedid="8j1soa"
                  >
                    <img
                      src="https://www.utssavjewels.com/assets/utssav/images/header/metro-search-ico.png"
                      alt=""
                    />
                  </button>
                </form>
                <div className="closeBtnSerchBox" id="SerchBoxClose">
                  <span onClick={closeSearchBox}>
                    <i className="fa fa-close"></i>
                  </span>
                </div>
              </div>
            </div>
            <div className="searchResultBox">
              <div className="col-md-4 leftSerchSide">
                <h3>RECENT SEARCH</h3>
              </div>
              <div className="col-md-8 rightSerchSide">
                <h3>TOP PRODUCTS</h3>
                <a href="https://utssavjewels.com/productDetails/rings/The-Viola-Ring-mt-692">
                  <div className="srchProductRow">
                    <div className="col-md-9 col-9">
                      <p>The Viola Ring</p>
                      <span>₹ 12640</span>
                    </div>
                    <div className="col-md-2 col-3">
                      <img
                        src="https://root.utssavjewels.com/admin/template/assets/images/products/LRG527-R-1.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                </a>
                <a href="https://utssavjewels.com/productDetails/chain-set/The-Fish-Heart-Chain-set-mt-702">
                  <div className="srchProductRow">
                    <div className="col-md-9 col-9">
                      <p>The Fish Heart Chain set</p>
                      <span>₹ 39920</span>
                    </div>
                    <div className="col-md-2 col-3">
                      <img
                        src="https://root.utssavjewels.com/admin/template/assets/images/products/CST423R-4.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                </a>
                <a href="https://utssavjewels.com/productDetails/chains/18inch-Chain-mt-709">
                  <div className="srchProductRow">
                    <div className="col-md-9 col-9">
                      <p>18inch Chain</p>
                      <span>₹ 24000</span>
                    </div>
                    <div className="col-md-2 col-3">
                      <img
                        src="https://root.utssavjewels.com/admin/template/assets/images/products/Chain-R-1.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="header_wrapper">
            <div className="col-3 mob_toggle">
              <button
                className="navbar-toggler"
                type="button"
                onClick={showModal}
              >
                <span className="navbar-toggler-icon"></span>
                <span className="navbar-toggler-icon"></span>
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
            <div className="col col-md-2 logoWrap">
              <Link to="/">
                <img
                  src={logo}
                  alt="Utsaav Logo"
                  className={`${
                    scroll ? "mainlogo  smallLogo" : "mainlogo largeLogo"
                  }`}
                />
              </Link>
            </div>
            <div className="col-md-8 headerSearchBoxWrapper">
              <nav className="navbar navbar-expand-sm mainHeaderLinksWrap">
                <div className="px-0 toggleBtn">
                  <div className="collapse navbar-collapse" id="">
                    <ul className="navbar-nav">
                      <li className="nav-item">
                        <Link
                          className="nav-link active"
                          to="https://utssavjewels.com/pc/Best-Seller"
                          id="cat-tab-2"
                          data-toggle="pill"
                          role="tab"
                          aria-controls="Cars"
                          aria-selected="false"
                        >
                          Best seller
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link active"
                          to="https://utssavjewels.com/pc/New-Arrival"
                          id="cat-tab-3"
                          data-toggle="pill"
                          role="tab"
                          aria-controls="Cars"
                          aria-selected="false"
                        >
                          New arrival
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link active"
                          to="https://utssavjewels.com/pc/Chain-Set"
                          id="cat-tab-11"
                          data-toggle="pill"
                          role="tab"
                          aria-controls="Cars"
                          aria-selected="false"
                        >
                          Chain set
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link active"
                          to="https://utssavjewels.com/pc/Rings"
                          id="cat-tab-1"
                          data-toggle="pill"
                          role="tab"
                          aria-controls="Cars"
                          aria-selected="false"
                        >
                          Rings
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link active"
                          to="https://utssavjewels.com/pc/Earrings"
                          id="cat-tab-4"
                          data-toggle="pill"
                          role="tab"
                          aria-controls="Cars"
                          aria-selected="false"
                        >
                          Earrings
                        </Link>
                        <ul className="navbar-nav innerNavDrop">
                          <li className="nav-item">
                            <Link
                              className="nav-link active"
                              to="https://www.utssavjewels.com/pc/Studs"
                              id="cat-tab-12"
                            >
                              Studs
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              className="nav-link active"
                              to="https://www.utssavjewels.com/pc/Jhumkas"
                              id="cat-tab-13"
                            >
                              Jhumkas
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              className="nav-link active"
                              to="https://www.utssavjewels.com/pc/Hangings"
                              id="cat-tab-14"
                            >
                              Hangings
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link active"
                          to="https://utssavjewels.com/pc/Bracelet"
                          id="cat-tab-5"
                          data-toggle="pill"
                          role="tab"
                          aria-controls="Cars"
                          aria-selected="false"
                        >
                          Bracelet
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link active"
                          to="https://utssavjewels.com/pc/Pendant"
                          id="cat-tab-6"
                          data-toggle="pill"
                          role="tab"
                          aria-controls="Cars"
                          aria-selected="false"
                        >
                          Pendant
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link active"
                          to="https://utssavjewels.com/pc/Chains"
                          id="cat-tab-7"
                          data-toggle="pill"
                          role="tab"
                          aria-controls="Cars"
                          aria-selected="false"
                        >
                          Chains
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div
                    className={show ? " left fade show" : " left "}
                    id="mobileToggle"
                  >
                    <div className="modal-dialog modal-fullscreen mobileTogglePopup">
                      <div className="modal-content">
                        <div className="modal-header">
                          <button
                            type="button"
                            className="btn-close"
                            id="PopupCloseBTN"
                            onClick={closeModal}
                          ></button>
                        </div>
                        <div className="modal-body">
                          <div className="menuLoginBTN">
                            <Link to="https://www.utssavjewels.com/login">
                              <span>
                                <img
                                  src="https://www.utssavjewels.com/assets/utssav/images/header/Mobile_navbar/user.png"
                                  alt=""
                                />
                              </span>
                              Login/Signup
                            </Link>
                          </div>
                          <ul className="navbar-nav mobNavDrop">
                            <li className="nav-item dropdown">
                              <Link className="nav-link" to="" id="cat-tab-2">
                                <span>
                                  <img src={mobileLiginImg} alt="" />
                                </span>
                                Best seller
                              </Link>
                            </li>
                            <li className="nav-item dropdown">
                              <Link
                                className="nav-link"
                                to="https://www.utssavjewels.com/pc/new arrival"
                                id="cat-tab-3"
                              >
                                <span>
                                  <img
                                    src="https://root.utssavjewels.com/admin/template/assets/images/product_category/D2D-PC-28132209193214.png"
                                    alt=""
                                  />
                                </span>
                                New arrival
                              </Link>
                            </li>
                            <li className="nav-item dropdown">
                              <Link
                                className="nav-link"
                                to="https://www.utssavjewels.com/pc/chain set"
                                id="cat-tab-11"
                              >
                                <span>
                                  <img
                                    src="https://root.utssavjewels.com/admin/template/assets/images/product_category/D2D-PC-97382303101034.png"
                                    alt=""
                                  />
                                </span>
                                Chain set
                              </Link>
                            </li>
                            <li className="nav-item dropdown">
                              <Link
                                className="nav-link"
                                to="https://www.utssavjewels.com/pc/rings"
                                id="cat-tab-1"
                              >
                                <span>
                                  <img
                                    src="https://root.utssavjewels.com/admin/template/assets/images/product_category/D2D-PC-18642209192708.png"
                                    alt=""
                                  />
                                </span>
                                Rings
                              </Link>
                            </li>
                            <li className="nav-item dropdown">
                              <Link
                                className="nav-link dropdown-toggle"
                                id="cat-tab-4"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <span>
                                  <img
                                    src="https://root.utssavjewels.com/admin/template/assets/images/product_category/D2D-PC-96592209192834.png"
                                    alt=""
                                  />
                                </span>
                                Earrings
                              </Link>
                              <ul
                                className="dropdown-menu mobDropMenus"
                                aria-labelledby="cat-tab-4"
                              >
                                <li>
                                  <Link
                                    className="dropdown-item"
                                    to="https://www.utssavjewels.com/pc/Studs"
                                    id="cat-tab-12"
                                  >
                                    Studs
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    className="dropdown-item"
                                    to="https://www.utssavjewels.com/pc/Jhumkas"
                                    id="cat-tab-13"
                                  >
                                    Jhumkas
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    className="dropdown-item"
                                    to="https://www.utssavjewels.com/pc/Hangings"
                                    id="cat-tab-14"
                                  >
                                    Hangings
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li className="nav-item dropdown">
                              <Link
                                className="nav-link"
                                to="https://www.utssavjewels.com/pc/bracelet"
                                id="cat-tab-5"
                              >
                                <span>
                                  <img
                                    src="https://root.utssavjewels.com/admin/template/assets/images/product_category/D2D-PC-11822209192919.png"
                                    alt=""
                                  />
                                </span>
                                Bracelet
                              </Link>
                            </li>
                            <li className="nav-item dropdown">
                              <Link
                                className="nav-link"
                                to="https://www.utssavjewels.com/pc/pendant"
                                id="cat-tab-6"
                              >
                                <span>
                                  <img
                                    src="https://root.utssavjewels.com/admin/template/assets/images/product_category/D2D-PC-26032209192952.png"
                                    alt=""
                                  />
                                </span>
                                Pendant
                              </Link>
                            </li>
                            <li className="nav-item dropdown">
                              <Link
                                className="nav-link"
                                to="https://www.utssavjewels.com/pc/chains"
                                id="cat-tab-7"
                              >
                                <span>
                                  <img
                                    src="https://root.utssavjewels.com/admin/template/assets/images/product_category/D2D-PC-98802302172523.jpg"
                                    alt=""
                                  />
                                </span>
                                Chains
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
            </div>

            <div className="col col-md-2 userActivityBoxWrapper">
              <span onClick={showSearchBox}>
                <svg
                  id="search_ico_btn"
                  xmlns="http://www.w3.org/2000/svg"
                  width="6.792in"
                  height="6.792in"
                  version="1.1"
                  viewBox="0 0 6792 6792"
                >
                  <g id="Layer_x0020_1">
                    <metadata id="CorelCorpID_0Corel-Layer" />
                    <path
                      className="fil0"
                      d="M4811.69 4367.43c4.78,5.18 9.76,10.27 13.73,14.52 20.18,21.62 40.74,42.93 61.32,64.17 67.61,69.8 135.98,138.92 204.37,207.95 199.46,201.31 400.05,401.53 600.74,601.61 187.14,186.57 374.51,372.91 561.94,559.18 108.8,108.12 217.87,216.02 326.33,324.48 42.98,42.97 88.16,80.72 127.59,127.7 46.55,55.45 82.01,119.25 82.01,193.43 0,117.5 -47.67,234.95 -152.57,296.02 -43.2,25.15 -91.67,37.57 -141.59,37.57 -192.31,0 -244.63,-93.66 -367.13,-216.17 -108.18,-108.17 -215.81,-216.94 -323.66,-325.45 -185.42,-186.54 -370.91,-373.02 -556.63,-559.27 -199.43,-200 -398.99,-399.92 -599.61,-598.72 -68.78,-68.16 -137.66,-136.29 -207.19,-203.69 -21.15,-20.5 -42.37,-40.99 -63.9,-61.11 -4.24,-3.96 -9.29,-8.91 -14.43,-13.66 -41.48,24.71 -77.93,55.64 -116.55,84.87 -316.08,239.3 -801.82,418.18 -1194.14,469.62 -558.49,73.22 -1071.17,-15.49 -1573.81,-266.4 -53.31,-26.61 -104.07,-53.96 -155.25,-84.5 -157.78,-94.16 -304.25,-198.67 -439.29,-323.56 -156.33,-144.58 -290.27,-309.23 -418.02,-479.04 -86.78,-115.35 -157.01,-253.66 -215.74,-385.32 -82.16,-184.17 -155.32,-370.28 -197.8,-567.99 -47.13,-219.39 -54.46,-443.58 -54.46,-667.22 0,-479.24 211.71,-1077.84 498.19,-1458.91 45.47,-60.49 87.01,-125.19 137.4,-181.71 77.28,-86.67 154.53,-175.5 245.57,-248.18 28.8,-22.99 51.64,-52.38 80.01,-76.42 436.33,-369.67 1018.04,-592.48 1588.02,-628.89l1 -0.06 327.8 0 1.02 0.07c115.89,7.57 231.26,23.32 344.77,47.97 90.43,19.64 181.05,44.26 269.5,71.4 91.59,28.1 189.46,60.75 275.67,102.61 49.67,24.12 100.06,46.36 149.67,70.3 56.2,27.12 110.85,60.5 164.36,92.51 276.26,165.28 491.03,358.76 699.67,602.55l0.71 0.83 152.52 205.53 0.64 1.02c65.92,104.74 131.67,210.76 185.69,322.25 48.5,100.11 87.47,204.54 125.13,309.11 91.13,253.05 135.74,534.81 143.62,803.12 8.08,275.24 -21.73,569.34 -110.57,830.98 -46.29,136.32 -95.15,271.94 -156.17,402.47 -64.96,138.94 -142.31,267.2 -230.81,392.35 -26.53,37.52 -56.02,70.98 -79.67,110.09zm-3190.67 95.08l161.65 86.11c59.75,28.48 113.3,59.07 176.81,79.94 27.91,9.17 55.18,19.49 82.72,29.63 34.05,12.54 67.28,23.17 102.57,31.86 107.07,26.37 215.84,51.99 325.84,62.29 108.94,10.2 222.38,7.68 331.8,7.68 404.32,0 930.61,-221.18 1230.7,-488.05l123.22 -112.33c82.65,-82.72 157.37,-176.37 224.13,-272.26 67.45,-96.89 129.3,-199.79 181.51,-305.7 197.52,-400.67 226.67,-804.26 165.69,-1241.7 -15.24,-109.33 -41.57,-211.63 -80.39,-314.89 -31.7,-84.31 -69.81,-166.26 -107.63,-247.96 -257.08,-555.35 -815.59,-972.61 -1409.9,-1100.56 -143.65,-30.93 -298.47,-46.54 -445.61,-46.54 -204.44,0 -418.13,40 -613.02,100.37 -245.44,76.04 -523.51,205.41 -709.13,386.71 -42.26,41.27 -89.4,76.33 -131.13,118.06 -382.19,382.2 -605.14,912.24 -605.14,1453.28 0,49.97 2.08,100.02 5.67,149.85 7.28,101.2 20.4,207.08 43.2,306.03 61.25,265.86 154.12,479.16 303.26,707.5 156.45,239.52 397.64,464.31 643.19,610.68z"
                    />
                  </g>
                </svg>
              </span>
              <span>
                <svg
                  id="Component_39_2"
                  data-name="Component 39 – 2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    id="Path_265"
                    data-name="Path 265"
                    d="M19.4,3A6.961,6.961,0,0,0,14,5.734,6.961,6.961,0,0,0,8.6,3C4.9,3,2,6.165,2,10.193c0,4.944,4.08,8.972,10.26,15.093L14,27l1.74-1.726C21.92,19.166,26,15.137,26,10.193,26,6.165,23.1,3,19.4,3ZM14.12,23.338l-.12.131-.12-.131C8.168,17.7,4.4,13.973,4.4,10.193A4.3,4.3,0,0,1,8.6,5.616,4.7,4.7,0,0,1,12.884,8.7h2.244A4.675,4.675,0,0,1,19.4,5.616a4.3,4.3,0,0,1,4.2,4.578C23.6,13.973,19.832,17.7,14.12,23.338Z"
                    transform="translate(-2 -3)"
                    fill="#5d5d5d"
                  />
                </svg>
              </span>
              <span id="userDropdown">
                <svg
                  id="Component_40_2"
                  data-name="Component 40 – 2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    id="Path_381"
                    data-name="Path 381"
                    d="M16,6.85A3.15,3.15,0,1,1,12.85,10,3.15,3.15,0,0,1,16,6.85m0,13.5c4.455,0,9.15,2.19,9.15,3.15v1.65H6.85V23.5c0-.96,4.7-3.15,9.15-3.15M16,4a6,6,0,1,0,6,6A6,6,0,0,0,16,4Zm0,13.5c-4.005,0-12,2.01-12,6V28H28V23.5C28,19.51,20,17.5,16,17.5Z"
                    transform="translate(-4 -4)"
                    fill="#5d5d5d"
                  />
                </svg>

                <div className="userDropDownBox">
                  <ul>
                    <li className="active">
                      <Link to="#">SignIn</Link>
                    </li>
                    <li>
                      <Link to="#">SignUp</Link>
                    </li>
                    <li>
                      <Link to="./my-order-history.html">My Order</Link>
                    </li>
                    <li>
                      <Link to="#">Logout</Link>
                    </li>
                  </ul>
                </div>
              </span>
              <span className="cartIcoBox">
                <span className="countCart">2</span>

                <svg
                  id="Outline"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <g id="Group_103" data-name="Group 103">
                    <path
                      id="Path_2479"
                      data-name="Path 2479"
                      d="M18.454,15.933a2.371,2.371,0,0,0,2.1-1.3l4.294-8.221A1.262,1.262,0,0,0,23.8,4.533H6.05L4.923,2H1V4.533H3.4l4.318,9.614L6.1,17.238A2.539,2.539,0,0,0,8.2,21H22.592V18.467H8.2l1.32-2.533ZM7.19,7.067H21.764L18.454,13.4H10.033Z"
                      transform="translate(-1 -2)"
                      fill="rgba(0,0,0,0.57)"
                    />
                    <path
                      id="Path_2480"
                      data-name="Path 2480"
                      d="M7,18a2,2,0,1,0,2,2A2,2,0,0,0,7,18Z"
                      transform="translate(0 2)"
                      fill="rgba(0,0,0,0.57)"
                    />
                    <path
                      id="Path_2481"
                      data-name="Path 2481"
                      d="M17,18a2,2,0,1,0,2,2A2,2,0,0,0,17,18Z"
                      transform="translate(2.993 2)"
                      fill="rgba(0,0,0,0.57)"
                    />
                  </g>
                </svg>
              </span>
            </div>
          </div>
        </div>
      </header>
      <MobileProductSlider />
    </>
  );
}

export default Navbar;
