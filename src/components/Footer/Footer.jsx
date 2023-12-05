import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer id="footer_section">
        <div className="container-fluid foo_container">
          <div className="foo_wrap">
            <div className="col-6 col-md-4 col-lg-2 px-3 mb-5">
              <div className="footer_sectionTitle">
                <h3>Utssav</h3>
              </div>
              <ul className="foo_list">
                <li className="foo_link">
                  <Link to="">About Us</Link>
                </li>
                <li className="foo_link">
                  <Link to="">Why Us</Link>
                </li>
                <li className="foo_link">
                  <Link to="">Jewellery Guide</Link>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md-4 col-lg-2 px-3 mb-5">
              <div className="footer_sectionTitle">
                <h3>Category</h3>
              </div>
              <ul className="foo_list">
                <li className="foo_link">
                  <Link
                    className="nav-link"
                    to=""
                    id="cat-tab-2"
                    data-toggle="pill"
                    role="tab"
                    aria-controls="Cars"
                    aria-selected="false"
                  >
                    Best seller
                  </Link>
                </li>
                <li className="foo_link">
                  <Link
                    className="nav-link"
                    to=""
                    id="cat-tab-3"
                    data-toggle="pill"
                    role="tab"
                    aria-controls="Cars"
                    aria-selected="false"
                  >
                    New arrival
                  </Link>
                </li>
                <li className="foo_link">
                  <Link
                    className="nav-link"
                    to=""
                    id="cat-tab-11"
                    data-toggle="pill"
                    role="tab"
                    aria-controls="Cars"
                    aria-selected="false"
                  >
                    Chain set
                  </Link>
                </li>
                <li className="foo_link">
                  <Link
                    className="nav-link"
                    to=""
                    id="cat-tab-1"
                    data-toggle="pill"
                    role="tab"
                    aria-controls="Cars"
                    aria-selected="false"
                  >
                    Rings
                  </Link>
                </li>
                <li className="foo_link">
                  <Link
                    className="nav-link"
                    to=""
                    id="cat-tab-4"
                    data-toggle="pill"
                    role="tab"
                    aria-controls="Cars"
                    aria-selected="false"
                  >
                    Earrings
                  </Link>
                </li>
                <li className="foo_link">
                  <Link
                    className="nav-link"
                    to=""
                    id="cat-tab-5"
                    data-toggle="pill"
                    role="tab"
                    aria-controls="Cars"
                    aria-selected="false"
                  >
                    Bracelet
                  </Link>
                </li>
                <li className="foo_link">
                  <Link
                    className="nav-link"
                    to=""
                    id="cat-tab-6"
                    data-toggle="pill"
                    role="tab"
                    aria-controls="Cars"
                    aria-selected="false"
                  >
                    Pendant
                  </Link>
                </li>
                <li className="foo_link">
                  <Link
                    className="nav-link"
                    to=""
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
            <div className="col-6 col-md-4 col-lg-2 px-3 mb-5">
              <div className="footer_sectionTitle">
                <h3>MY ACCOUNT</h3>
              </div>
              <ul className="foo_list">
                <li className="foo_link">
                  <Link to="">Login</Link>
                </li>
                <li className="foo_link">
                  <Link to="">My Cart</Link>
                </li>
                <li className="foo_link">
                  <Link to="">Wishlist</Link>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md-4 col-lg-2 px-3 mb-5">
              <div className="footer_sectionTitle">
                <h3>Policies</h3>
              </div>
              <ul className="foo_list">
                <li className="foo_link">
                  <Link to="">Privacy Policy</Link>
                </li>
                <li className="foo_link">
                  <Link to="">Terms Of Use</Link>
                </li>
                <li className="foo_link">
                  <Link to="">Return Policy</Link>
                </li>
                <li className="foo_link">
                  <Link to="">FAQ`s</Link>
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-6 col-lg-4 px-3 mb-5">
              <div className="footer_sectionTitle contactSecFoo">
                <h3>contact us</h3>
              </div>
              <ul className="foo_list_ico">
                <li>
                  <Link to="tel:+917045778992">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="23.238"
                        height="23.238"
                        viewBox="0 0 23.238 23.238"
                      >
                        <path
                          id="call"
                          d="M20.876,25.487a9.777,9.777,0,0,1-4.566-1.556,29.679,29.679,0,0,1-7.17-5.362A27.224,27.224,0,0,1,3.756,11.4c-1.911-3.475-1.586-5.3-1.221-6.076a4.852,4.852,0,0,1,1.9-2.04A9.147,9.147,0,0,1,5.922,2.5l.143-.063a1.388,1.388,0,0,1,1.138-.1,3.333,3.333,0,0,1,1.082.83,17.969,17.969,0,0,1,2.706,4.016,4,4,0,0,1,.53,1.645,2.6,2.6,0,0,1-.661,1.546c-.068.093-.136.181-.2.268-.395.519-.481.668-.424.936a9.837,9.837,0,0,0,2.4,3.553,9.439,9.439,0,0,0,3.513,2.338c.279.06.432-.03.967-.44.077-.058.156-.12.238-.18a2.614,2.614,0,0,1,1.57-.7h0a3.762,3.762,0,0,1,1.653.58,19.8,19.8,0,0,1,4,2.686,3.346,3.346,0,0,1,.833,1.079,1.4,1.4,0,0,1-.1,1.141c-.019.043-.041.09-.063.142a9.153,9.153,0,0,1-.793,1.483,4.848,4.848,0,0,1-2.043,1.9,3.5,3.5,0,0,1-1.534.336Z"
                          transform="translate(-2.257 -2.25)"
                          fill="#070707"
                        ></path>
                      </svg>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="https://wa.me/+917045778992">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="23.238"
                        height="23.238"
                        viewBox="0 0 23.238 23.238"
                      >
                        <path
                          id="whatsapp"
                          d="M14.9,13.375a6.935,6.935,0,0,1,1.475.66,6.563,6.563,0,0,1,1.354.8.632.632,0,0,1,.03.225A3.141,3.141,0,0,1,17.5,16.2a2.024,2.024,0,0,1-1.074.983,3.6,3.6,0,0,1-1.543.4,8.219,8.219,0,0,1-2.874-.931A8.627,8.627,0,0,1,9.44,14.876,19.825,19.825,0,0,1,7.2,12.1,5.224,5.224,0,0,1,6.127,9.186v-.12a3.309,3.309,0,0,1,1.12-2.372,1.149,1.149,0,0,1,.787-.33,2.409,2.409,0,0,1,.272.023,2.451,2.451,0,0,0,.287.023.626.626,0,0,1,.4.1,1.081,1.081,0,0,1,.235.413q.121.3.5,1.321a8.871,8.871,0,0,1,.379,1.126,1.522,1.522,0,0,1-.522.863q-.522.548-.522.7a.426.426,0,0,0,.075.225,6.772,6.772,0,0,0,1.543,2.057,9.66,9.66,0,0,0,2.284,1.516.674.674,0,0,0,.333.105q.227,0,.817-.728t.787-.728Zm-3.071,7.956a9.31,9.31,0,0,0,3.684-.751,9.32,9.32,0,0,0,5.06-5.021,9.211,9.211,0,0,0,0-7.311,9.488,9.488,0,0,0-2.027-3.01,9.6,9.6,0,0,0-3.033-2.012,9.416,9.416,0,0,0-7.368,0A9.6,9.6,0,0,0,5.113,5.239a9.488,9.488,0,0,0-2.027,3.01,9.273,9.273,0,0,0,1.059,9.18l-1.195,3.5,3.661-1.156a9.354,9.354,0,0,0,5.219,1.561Zm0-20.746a11.159,11.159,0,0,1,4.425.9A11.519,11.519,0,0,1,19.894,3.9a11.444,11.444,0,0,1,2.436,3.61,11.073,11.073,0,0,1,0,8.781,11.414,11.414,0,0,1-2.436,3.61,11.54,11.54,0,0,1-3.638,2.417,11.153,11.153,0,0,1-4.425.9,11.3,11.3,0,0,1-5.522-1.411L0,23.823l2.057-6.079a11.176,11.176,0,0,1-.726-10.23A11.419,11.419,0,0,1,3.767,3.9,11.545,11.545,0,0,1,7.406,1.486a11.14,11.14,0,0,1,4.425-.9Z"
                          transform="translate(0 -0.585)"
                          fill="#070707"
                        ></path>
                      </svg>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="tel:+917045778992">
                    <span>
                      <svg
                        id="Group_1183"
                        data-name="Group 1183"
                        xmlns="http://www.w3.org/2000/svg"
                        width="23.238"
                        height="23.238"
                        viewBox="0 0 23.238 23.238"
                      >
                        <path
                          id="Path_84"
                          data-name="Path 84"
                          d="M14.619,3C8.212,3,3,7.17,3,12.3c0,3.379,2.2,6.407,5.809,8.056v5.886l6.2-4.652c6.224-.167,11.224-4.271,11.224-9.29C26.238,7.17,21.025,3,14.619,3Zm0,16.266h-.387l-3.1,2.324V18.782l-.745-.287c-3.122-1.2-5.064-3.579-5.064-6.2,0-3.844,4.17-6.971,9.3-6.971s9.3,3.127,9.3,6.971S19.744,19.266,14.619,19.266Z"
                          transform="translate(-3 -3)"
                          fill="#070707"
                        ></path>
                      </svg>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="mailto:support@utssavjewels.com">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="29.279"
                        height="20.914"
                        viewBox="0 0 29.279 20.914"
                      >
                        <path
                          id="email"
                          d="M29.438,6.75H4.341A2.091,2.091,0,0,0,2.25,8.841V25.572a2.091,2.091,0,0,0,2.091,2.091h25.1a2.091,2.091,0,0,0,2.091-2.091V8.841A2.091,2.091,0,0,0,29.438,6.75Zm-2.3,2.091L16.89,15.931,6.642,8.841ZM4.341,25.572V9.793l11.952,8.272a1.046,1.046,0,0,0,1.192,0L29.438,9.793V25.572Z"
                          transform="translate(-2.25 -6.75)"
                          fill="#070707"
                        ></path>
                      </svg>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="https://www.instagram.com/utssavjewels/?igshid=YmMyMTA2M2Y%3D">
                    <i className="fa fa-instagram"></i>
                  </Link>
                </li>
                <li>
                  <Link to="https://m.facebook.com/people/Utssav-CZ-Gold-Jewels-Ltd/100054645181553/">
                    <i className="fa fa-facebook-square"></i>
                  </Link>
                </li>
              </ul>
              <div className="subscriptionBox">
                <h6>
                  Enter your email to get amazing offers&nbsp;from&nbsp;us
                </h6>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Enter Your Email"
                    fdprocessedid="a7t8pn"
                  />
                  <button
                    className="btn subscriptionBtn"
                    fdprocessedid="vcg60j"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
              <div className="pay_methodImgWrap">
                <h6>WE ACCEPT</h6>
                <ul className="payment-getway list-unstyled mb-0">
                  <li className="">
                    <img
                      src="https://www.utssavjewels.com/assets/utssav/images/Footer/visa.webp"
                      alt="visa"
                    />
                  </li>
                  <li className="">
                    <img
                      src=" https://www.utssavjewels.com/assets/utssav/images/Footer/amex.webp"
                      alt="amex"
                    />
                  </li>
                  <li className="">
                    <img
                      src="https://www.utssavjewels.com/assets/utssav/images/Footer/discover.webp"
                      alt="discover"
                    />
                  </li>
                  <li className="">
                    <img
                      src="https://www.utssavjewels.com/assets/utssav/images/Footer/jcb.webp"
                      alt="jcb"
                    />
                  </li>
                  <li className="">
                    <img
                      src="https://www.utssavjewels.com/assets/utssav/images/Footer/maestro.webp"
                      alt="maestro"
                    />
                  </li>
                  <li className="">
                    <img
                      src="https://www.utssavjewels.com/assets/utssav/images/Footer/mastercard.webp"
                      alt="mastercard"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="copyRightBox">
          <h4>
            Copyright © 2023 Utssav CZ Gold Jewels Ltd. All Rights Reserved
          </h4>
        </div>
      </footer>
      



      <section id="mob_footer">
        <div className="container px-0">
          <div className="subscriptionBox">
            <h6>Enter your email to get amazing offers&nbsp;from&nbsp;us</h6>
            <div className="form-group">
              <input type="text" placeholder="Enter Your Email" />
              <button className="btn subscriptionBtn">Subscribe</button>
            </div>
          </div>
          <div className="footer_menus_dropdown">
            <div className="accordion accordion-flush" id="footer_accordion">
              <div className="accordion-item">
                <h2 className="accordion-header" id="footer_six">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-footer_six"
                    aria-expanded="false"
                    aria-controls="flush-footer_six"
                  >
                    UTSSAV
                  </button>
                </h2>
                <div
                  id="flush-footer_six"
                  className="accordion-collapse collapse"
                  aria-labelledby="footer_six"
                  data-bs-parent="#footer_accordion"
                >
                  <div className="accordion-body">
                    <ul className="foo_list">
                      <li className="foo_link">
                        <a href="https://www.utssavjewels.com/about_us">
                          About Us
                        </a>
                      </li>
                      <li className="foo_link">
                        <a href="https://www.utssavjewels.com/why_us">Why Us</a>
                      </li>
                      <li className="foo_link">
                        <a href="https://www.utssavjewels.com/jewellery-guide">
                          Jewellery Guide
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="footer_three">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-footer_three"
                    aria-expanded="false"
                    aria-controls="flush-footer_three"
                  >
                    CATEGORY
                  </button>
                </h2>
                <div
                  id="flush-footer_three"
                  className="accordion-collapse collapse"
                  aria-labelledby="footer_three"
                  data-bs-parent="#footer_accordion"
                >
                  <div className="accordion-body">
                    <ul className="foo_list">
                      <li className="foo_link">
                        <a
                          className="nav-link"
                          href="https://www.utssavjewels.com/pc/best seller"
                          id="cat-tab-2"
                          data-toggle="pill"
                          role="tab"
                          aria-controls="Cars"
                          aria-selected="false"
                        >
                          Best seller
                        </a>
                      </li>
                      <li className="foo_link">
                        <a
                          className="nav-link"
                          href="https://www.utssavjewels.com/pc/new arrival"
                          id="cat-tab-3"
                          data-toggle="pill"
                          role="tab"
                          aria-controls="Cars"
                          aria-selected="false"
                        >
                          New arrival
                        </a>
                      </li>
                      <li className="foo_link">
                        <a
                          className="nav-link"
                          href="https://www.utssavjewels.com/pc/chain set"
                          id="cat-tab-11"
                          data-toggle="pill"
                          role="tab"
                          aria-controls="Cars"
                          aria-selected="false"
                        >
                          Chain set
                        </a>
                      </li>
                      <li className="foo_link">
                        <a
                          className="nav-link"
                          href="https://www.utssavjewels.com/pc/rings"
                          id="cat-tab-1"
                          data-toggle="pill"
                          role="tab"
                          aria-controls="Cars"
                          aria-selected="false"
                        >
                          Rings
                        </a>
                      </li>
                      <li className="foo_link">
                        <a
                          className="nav-link"
                          href="https://www.utssavjewels.com/pc/earrings"
                          id="cat-tab-4"
                          data-toggle="pill"
                          role="tab"
                          aria-controls="Cars"
                          aria-selected="false"
                        >
                          Earrings
                        </a>
                      </li>
                      <li className="foo_link">
                        <a
                          className="nav-link"
                          href="https://www.utssavjewels.com/pc/bracelet"
                          id="cat-tab-5"
                          data-toggle="pill"
                          role="tab"
                          aria-controls="Cars"
                          aria-selected="false"
                        >
                          Bracelet
                        </a>
                      </li>
                      <li className="foo_link">
                        <a
                          className="nav-link"
                          href="https://www.utssavjewels.com/pc/pendant"
                          id="cat-tab-6"
                          data-toggle="pill"
                          role="tab"
                          aria-controls="Cars"
                          aria-selected="false"
                        >
                          Pendant
                        </a>
                      </li>
                      <li className="foo_link">
                        <a
                          className="nav-link"
                          href="https://www.utssavjewels.com/pc/chains"
                          id="cat-tab-7"
                          data-toggle="pill"
                          role="tab"
                          aria-controls="Cars"
                          aria-selected="false"
                        >
                          Chains
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="footer_seven">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-footer_seven"
                    aria-expanded="false"
                    aria-controls="flush-footer_seven"
                  >
                    MY ACCOUNT
                  </button>
                </h2>
                <div
                  id="flush-footer_seven"
                  className="accordion-collapse collapse"
                  aria-labelledby="footer_seven"
                  data-bs-parent="#footer_accordion"
                >
                  <div className="accordion-body">
                    <ul className="foo_list">
                      <li className="foo_link">
                        <a href="https://www.utssavjewels.com/login">Login</a>
                      </li>
                      <li className="foo_link">
                        <a href="https://www.utssavjewels.com/basket">
                          My Cart
                        </a>
                      </li>
                      <li className="foo_link">
                        <a href="https://www.utssavjewels.com/get_wish_list">
                          Wishlist
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="footer_two">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-footer_two"
                    aria-expanded="false"
                    aria-controls="flush-footer_two"
                  >
                    POLICIES
                  </button>
                </h2>
                <div
                  id="flush-footer_two"
                  className="accordion-collapse collapse"
                  aria-labelledby="footer_two"
                  data-bs-parent="#footer_accordion"
                >
                  <div className="accordion-body">
                    <ul className="foo_list">
                      <li className="foo_link">
                        <a href="https://www.utssavjewels.com/privacy_policy">
                          Privacy Policy
                        </a>
                      </li>
                      <li className="foo_link">
                        <a href="https://www.utssavjewels.com/terms">
                          Terms Of Use
                        </a>
                      </li>
                      <li className="foo_link">
                        <a href="https://www.utssavjewels.com/return_policy">
                          Return Policy
                        </a>
                      </li>
                      <li className="foo_link">
                        <a href="https://www.utssavjewels.com/faq">FAQ`s</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="footer_one">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-footer_one"
                    aria-expanded="false"
                    aria-controls="flush-footer_one"
                  >
                    CONTACT US
                  </button>
                </h2>
                <div
                  id="flush-footer_one"
                  className="accordion-collapse collapse"
                  aria-labelledby="footer_one"
                  data-bs-parent="#footer_accordion"
                >
                  <div className="accordion-body">
                    <ul className="foo_list_ico">
                      <li>
                        <a href="tel:+917045778992">
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="23.238"
                              height="23.238"
                              viewBox="0 0 23.238 23.238"
                            >
                              <path
                                id="call"
                                d="M20.876,25.487a9.777,9.777,0,0,1-4.566-1.556,29.679,29.679,0,0,1-7.17-5.362A27.224,27.224,0,0,1,3.756,11.4c-1.911-3.475-1.586-5.3-1.221-6.076a4.852,4.852,0,0,1,1.9-2.04A9.147,9.147,0,0,1,5.922,2.5l.143-.063a1.388,1.388,0,0,1,1.138-.1,3.333,3.333,0,0,1,1.082.83,17.969,17.969,0,0,1,2.706,4.016,4,4,0,0,1,.53,1.645,2.6,2.6,0,0,1-.661,1.546c-.068.093-.136.181-.2.268-.395.519-.481.668-.424.936a9.837,9.837,0,0,0,2.4,3.553,9.439,9.439,0,0,0,3.513,2.338c.279.06.432-.03.967-.44.077-.058.156-.12.238-.18a2.614,2.614,0,0,1,1.57-.7h0a3.762,3.762,0,0,1,1.653.58,19.8,19.8,0,0,1,4,2.686,3.346,3.346,0,0,1,.833,1.079,1.4,1.4,0,0,1-.1,1.141c-.019.043-.041.09-.063.142a9.153,9.153,0,0,1-.793,1.483,4.848,4.848,0,0,1-2.043,1.9,3.5,3.5,0,0,1-1.534.336Z"
                                transform="translate(-2.257 -2.25)"
                                fill="#070707"
                              ></path>
                            </svg>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="https://wa.me/+917045778992">
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="23.238"
                              height="23.238"
                              viewBox="0 0 23.238 23.238"
                            >
                              <path
                                id="whatsapp"
                                d="M14.9,13.375a6.935,6.935,0,0,1,1.475.66,6.563,6.563,0,0,1,1.354.8.632.632,0,0,1,.03.225A3.141,3.141,0,0,1,17.5,16.2a2.024,2.024,0,0,1-1.074.983,3.6,3.6,0,0,1-1.543.4,8.219,8.219,0,0,1-2.874-.931A8.627,8.627,0,0,1,9.44,14.876,19.825,19.825,0,0,1,7.2,12.1,5.224,5.224,0,0,1,6.127,9.186v-.12a3.309,3.309,0,0,1,1.12-2.372,1.149,1.149,0,0,1,.787-.33,2.409,2.409,0,0,1,.272.023,2.451,2.451,0,0,0,.287.023.626.626,0,0,1,.4.1,1.081,1.081,0,0,1,.235.413q.121.3.5,1.321a8.871,8.871,0,0,1,.379,1.126,1.522,1.522,0,0,1-.522.863q-.522.548-.522.7a.426.426,0,0,0,.075.225,6.772,6.772,0,0,0,1.543,2.057,9.66,9.66,0,0,0,2.284,1.516.674.674,0,0,0,.333.105q.227,0,.817-.728t.787-.728Zm-3.071,7.956a9.31,9.31,0,0,0,3.684-.751,9.32,9.32,0,0,0,5.06-5.021,9.211,9.211,0,0,0,0-7.311,9.488,9.488,0,0,0-2.027-3.01,9.6,9.6,0,0,0-3.033-2.012,9.416,9.416,0,0,0-7.368,0A9.6,9.6,0,0,0,5.113,5.239a9.488,9.488,0,0,0-2.027,3.01,9.273,9.273,0,0,0,1.059,9.18l-1.195,3.5,3.661-1.156a9.354,9.354,0,0,0,5.219,1.561Zm0-20.746a11.159,11.159,0,0,1,4.425.9A11.519,11.519,0,0,1,19.894,3.9a11.444,11.444,0,0,1,2.436,3.61,11.073,11.073,0,0,1,0,8.781,11.414,11.414,0,0,1-2.436,3.61,11.54,11.54,0,0,1-3.638,2.417,11.153,11.153,0,0,1-4.425.9,11.3,11.3,0,0,1-5.522-1.411L0,23.823l2.057-6.079a11.176,11.176,0,0,1-.726-10.23A11.419,11.419,0,0,1,3.767,3.9,11.545,11.545,0,0,1,7.406,1.486a11.14,11.14,0,0,1,4.425-.9Z"
                                transform="translate(0 -0.585)"
                                fill="#070707"
                              ></path>
                            </svg>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="tel:+917045778992">
                          <span>
                            <svg
                              id="Group_1183"
                              data-name="Group 1183"
                              xmlns="http://www.w3.org/2000/svg"
                              width="23.238"
                              height="23.238"
                              viewBox="0 0 23.238 23.238"
                            >
                              <path
                                id="Path_84"
                                data-name="Path 84"
                                d="M14.619,3C8.212,3,3,7.17,3,12.3c0,3.379,2.2,6.407,5.809,8.056v5.886l6.2-4.652c6.224-.167,11.224-4.271,11.224-9.29C26.238,7.17,21.025,3,14.619,3Zm0,16.266h-.387l-3.1,2.324V18.782l-.745-.287c-3.122-1.2-5.064-3.579-5.064-6.2,0-3.844,4.17-6.971,9.3-6.971s9.3,3.127,9.3,6.971S19.744,19.266,14.619,19.266Z"
                                transform="translate(-3 -3)"
                                fill="#070707"
                              ></path>
                            </svg>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="mailto:support@utssavjewels.com">
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="29.279"
                              height="20.914"
                              viewBox="0 0 29.279 20.914"
                            >
                              <path
                                id="email"
                                d="M29.438,6.75H4.341A2.091,2.091,0,0,0,2.25,8.841V25.572a2.091,2.091,0,0,0,2.091,2.091h25.1a2.091,2.091,0,0,0,2.091-2.091V8.841A2.091,2.091,0,0,0,29.438,6.75Zm-2.3,2.091L16.89,15.931,6.642,8.841ZM4.341,25.572V9.793l11.952,8.272a1.046,1.046,0,0,0,1.192,0L29.438,9.793V25.572Z"
                                transform="translate(-2.25 -6.75)"
                                fill="#070707"
                              ></path>
                            </svg>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/utssavjewels/?igshid=YmMyMTA2M2Y%3D">
                          <i className="fa fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://m.facebook.com/people/Utssav-CZ-Gold-Jewels-Ltd/100054645181553/">
                          <i className="fa fa-facebook-square"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pay_methodImgWrap">
            <h6>WE ACCEPT</h6>
            <ul className="payment-getway list-unstyled mb-0">
              <li className="">
                <img
                  src="https://www.utssavjewels.com/assets/utssav/images/Footer/visa.webp"
                  alt="visa"
                />
              </li>
              <li className="">
                <img
                  src=" https://www.utssavjewels.com/assets/utssav/images/Footer/amex.webp"
                  alt="amex"
                />
              </li>
              <li className="">
                <img
                  src="https://www.utssavjewels.com/assets/utssav/images/Footer/discover.webp"
                  alt="discover"
                />
              </li>
              <li className="">
                <img
                  src="https://www.utssavjewels.com/assets/utssav/images/Footer/jcb.webp"
                  alt="jcb"
                />
              </li>
              <li className="">
                <img
                  src="https://www.utssavjewels.com/assets/utssav/images/Footer/maestro.webp"
                  alt="maestro"
                />
              </li>
              <li className="">
                <img
                  src="https://www.utssavjewels.com/assets/utssav/images/Footer/mastercard.webp"
                  alt="mastercard"
                />
              </li>
            </ul>
          </div>
          <div className="copyRightBox">
            <h4>
              Copyright © 2023 Utssav CZ Gold Jewels Ltd. All Rights Reserved
            </h4>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
